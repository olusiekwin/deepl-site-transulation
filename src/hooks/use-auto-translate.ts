import { useState, useCallback } from 'react';
import { translationService } from '@/lib/translation-service';
import { useLanguage } from '@/contexts/LanguageContext';

/**
 * Hook for auto-translating text on demand
 * Useful for translating user-generated content or missing translations
 * 
 * @example
 * const { translate, isTranslating } = useAutoTranslate();
 * const translated = await translate("Hello World");
 */
export function useAutoTranslate() {
  const { language } = useLanguage();
  const [isTranslating, setIsTranslating] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const translate = useCallback(
    async (text: string, sourceLanguage?: string) => {
      if (!text) return text;
      
      setIsTranslating(true);
      setError(null);

      try {
        const translated = await translationService.translate({
          text,
          sourceLanguage: sourceLanguage || 'en',
          targetLanguage: language,
        });
        return translated;
      } catch (err) {
        const error = err instanceof Error ? err : new Error('Translation failed');
        setError(error);
        console.error('Translation error:', error);
        // Return original text on error
        return text;
      } finally {
        setIsTranslating(false);
      }
    },
    [language]
  );

  const translateBatch = useCallback(
    async (texts: string[], sourceLanguage?: string) => {
      if (!texts.length) return texts;
      
      setIsTranslating(true);
      setError(null);

      try {
        const translated = await translationService.translateBatch(
          texts,
          sourceLanguage || 'en',
          language
        );
        return translated;
      } catch (err) {
        const error = err instanceof Error ? err : new Error('Translation failed');
        setError(error);
        console.error('Batch translation error:', error);
        // Return original texts on error
        return texts;
      } finally {
        setIsTranslating(false);
      }
    },
    [language]
  );

  return {
    translate,
    translateBatch,
    isTranslating,
    error,
  };
}
