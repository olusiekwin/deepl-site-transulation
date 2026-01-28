/**
 * Translation Service
 * Supports multiple translation providers (DeepL, Google Translate, AWS Translate)
 * 
 * To use DeepL:
 * 1. Sign up at https://www.deepl.com/pro-api
 * 2. Get your API key
 * 3. Set VITE_DEEPL_API_KEY in your .env file
 * 
 * To use Google Translate:
 * 1. Enable Cloud Translation API in Google Cloud Console
 * 2. Set VITE_GOOGLE_TRANSLATE_API_KEY in your .env file
 */

type TranslationProvider = 'deepl' | 'google' | 'aws' | 'none';

interface TranslationOptions {
  provider?: TranslationProvider;
  sourceLanguage?: string;
  targetLanguage: string;
  text: string;
}

class TranslationService {
  private provider: TranslationProvider;
  private deeplApiKey: string | null;
  private googleApiKey: string | null;
  private warnedAboutBrowserDeepL: boolean;
  private proxyUrl: string | null;

  constructor() {
    this.provider = (import.meta.env.VITE_TRANSLATION_PROVIDER as TranslationProvider) || 'none';
    this.deeplApiKey = import.meta.env.VITE_DEEPL_API_KEY || null;
    this.googleApiKey = import.meta.env.VITE_GOOGLE_TRANSLATE_API_KEY || null;
    this.warnedAboutBrowserDeepL = false;
    this.proxyUrl = import.meta.env.VITE_TRANSLATION_PROXY_URL || '/api/translate';
  }

  /**
   * Translate text using the configured provider
   */
  async translate(options: TranslationOptions): Promise<string> {
    const { text, targetLanguage, sourceLanguage = 'en' } = options;
    
    // If source and target are the same, return original text
    if (sourceLanguage === targetLanguage) {
      return text;
    }

    // Use specified provider or auto-detect
    const provider = options.provider || this.provider;

    switch (provider) {
      case 'deepl':
        // In the browser, call a backend proxy instead of DeepL directly (CORS-safe).
        if (typeof window !== 'undefined') {
          if (!this.proxyUrl) {
            if (!this.warnedAboutBrowserDeepL) {
              console.warn(
                '[Quantavus] DeepL cannot be called directly from the browser due to CORS. ' +
                'Set VITE_TRANSLATION_PROXY_URL to a backend proxy endpoint that calls DeepL.'
              );
              this.warnedAboutBrowserDeepL = true;
            }
            return text;
          }
          return this.translateViaProxy(text, sourceLanguage, targetLanguage);
        }
        // On the server, we can call DeepL directly.
        return this.translateWithDeepL(text, sourceLanguage, targetLanguage);
      case 'google':
        return this.translateWithGoogle(text, sourceLanguage, targetLanguage);
      case 'aws':
        return this.translateWithAWS(text, sourceLanguage, targetLanguage);
      default:
        console.warn('No translation provider configured. Returning original text.');
        return text;
    }
  }

  /**
   * DeepL Translation
   * High-quality translations, especially for European languages
   */
  private async translateWithDeepL(
    text: string,
    sourceLang: string,
    targetLang: string
  ): Promise<string> {
    if (!this.deeplApiKey) {
      throw new Error('DeepL API key not configured. Set VITE_DEEPL_API_KEY in your .env file.');
    }

    try {
      // Map language codes to DeepL format
      const deeplSourceLang = this.mapToDeepLLang(sourceLang);
      const deeplTargetLang = this.mapToDeepLLang(targetLang);

      // Determine API endpoint: free tier uses api-free, paid uses api
      // DeepL API keys for free tier typically don't contain ':fx', paid keys do
      const isPaidAccount = this.deeplApiKey.includes(':fx');
      const apiEndpoint = isPaidAccount 
        ? 'https://api.deepl.com/v2/translate'
        : 'https://api-free.deepl.com/v2/translate';

      const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: {
          'Authorization': `DeepL-Auth-Key ${this.deeplApiKey}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          text: text,
          source_lang: deeplSourceLang,
          target_lang: deeplTargetLang,
        }),
      });

      if (!response.ok) {
        throw new Error(`DeepL API error: ${response.statusText}`);
      }

      const data = await response.json();
      return data.translations[0]?.text || text;
    } catch (error) {
      console.error('DeepL translation error:', error);
      throw error;
    }
  }

  /**
   * Google Translate API
   * Broad language support
   */
  private async translateWithGoogle(
    text: string,
    sourceLang: string,
    targetLang: string
  ): Promise<string> {
    if (!this.googleApiKey) {
      throw new Error('Google Translate API key not configured. Set VITE_GOOGLE_TRANSLATE_API_KEY in your .env file.');
    }

    try {
      const response = await fetch(
        `https://translation.googleapis.com/language/translate/v2?key=${this.googleApiKey}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            q: text,
            source: sourceLang,
            target: targetLang,
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`Google Translate API error: ${response.statusText}`);
      }

      const data = await response.json();
      return data.data.translations[0]?.translatedText || text;
    } catch (error) {
      console.error('Google Translate error:', error);
      throw error;
    }
  }

  /**
   * AWS Translate
   * Enterprise-grade translation service
   */
  private async translateWithAWS(
    text: string,
    sourceLang: string,
    targetLang: string
  ): Promise<string> {
    // AWS Translate requires server-side implementation due to AWS SDK
    // This would typically be done via a backend API endpoint
    throw new Error('AWS Translate requires server-side implementation. Please use a backend API endpoint.');
  }

  /**
   * Map language codes to DeepL format
   */
  private mapToDeepLLang(lang: string): string {
    const langMap: Record<string, string> = {
      en: 'EN',
      fr: 'FR',
      de: 'DE',
      es: 'ES',
      pt: 'PT',
      ar: 'AR',
      it: 'IT',
      ja: 'JA',
      zh: 'ZH',
      ru: 'RU',
    };
    return langMap[lang.toLowerCase()] || lang.toUpperCase();
  }

  /**
   * Call backend proxy for translation (CORS-safe for browser)
   * Expects a JSON API like:
   * POST /api/translate { text, sourceLanguage, targetLanguage } -> { translatedText }
   */
  private async translateViaProxy(
    text: string,
    sourceLang: string,
    targetLang: string
  ): Promise<string> {
    if (!this.proxyUrl) return text;

    try {
      const response = await fetch(this.proxyUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          text,
          sourceLanguage: sourceLang,
          targetLanguage: targetLang,
        }),
      });

      if (!response.ok) {
        console.warn('[Quantavus] Translation proxy error:', response.status, response.statusText);
        return text;
      }

      const data = await response.json();
      return (data.translatedText as string) || text;
    } catch (error) {
      console.warn('[Quantavus] Translation proxy request failed:', error);
      return text;
    }
  }

  /**
   * Batch translate multiple texts
   */
  async translateBatch(
    texts: string[],
    sourceLang: string,
    targetLang: string
  ): Promise<string[]> {
    // For browser + DeepL, prefer proxy for batch as well (if available)
    if (this.provider === 'deepl' && typeof window !== 'undefined' && this.proxyUrl) {
      try {
        const response = await fetch(this.proxyUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            texts,
            sourceLanguage: sourceLang,
            targetLanguage: targetLang,
          }),
        });

        if (!response.ok) {
          console.warn('[Quantavus] Translation proxy batch error:', response.status, response.statusText);
          // Fallback to individual translations via proxy
          return Promise.all(
            texts.map((text) => this.translate({ text, sourceLanguage: sourceLang, targetLanguage: targetLang }))
          );
        }

        const data = await response.json();
        if (Array.isArray(data.translatedTexts)) {
          return data.translatedTexts as string[];
        }
        if (typeof data.translatedText === 'string') {
          // If API returns a single string, split by newline as a fallback
          return (data.translatedText as string).split('\n');
        }
      } catch (error) {
        console.warn('[Quantavus] Translation proxy batch request failed:', error);
        // Fallback to individual translations via proxy
        return Promise.all(
          texts.map((text) => this.translate({ text, sourceLanguage: sourceLang, targetLanguage: targetLang }))
        );
      }
    }

    // Original DeepL server-side or other providers: translate individually
    return Promise.all(
      texts.map((text) => this.translate({ text, sourceLanguage: sourceLang, targetLanguage: targetLang }))
    );
  }
}

export const translationService = new TranslationService();
