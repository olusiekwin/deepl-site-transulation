import 'dotenv/config';
import express from 'express';
import cors from 'cors';

const app = express();

// Allow JSON bodies
app.use(express.json());

// Allow CORS from your Vite dev server (8080) in development
app.use(
  cors({
    origin: 'http://localhost:8080',
  })
);

// Prefer a dedicated server-side key, but fall back to the Vite one if needed
const DEEPL_API_KEY = process.env.DEEPL_API_KEY || process.env.VITE_DEEPL_API_KEY;

if (!DEEPL_API_KEY) {
  console.warn(
    '[Quantavus] DeepL proxy: no DEEPL_API_KEY or VITE_DEEPL_API_KEY set in environment. ' +
      'Translations will not work until this is configured.'
  );
}

/**
 * POST /api/translate
 * Body:
 *  - { text, sourceLanguage, targetLanguage }  OR
 *  - { texts: string[], sourceLanguage, targetLanguage }
 *
 * Response:
 *  - { translatedText: string } OR { translatedTexts: string[] }
 */
app.post('/api/translate', async (req, res) => {
  try {
    const { text, texts, sourceLanguage = 'en', targetLanguage } = req.body || {};

    if (!DEEPL_API_KEY) {
      return res.status(500).json({ error: 'DEEPL_API_KEY not set on server' });
    }

    if (!text && !Array.isArray(texts)) {
      return res.status(400).json({ error: 'Missing "text" or "texts" in request body' });
    }

    const isBatch = Array.isArray(texts);
    const payloadTexts = isBatch ? texts : [text];

    const isPaidAccount = DEEPL_API_KEY.includes(':fx');
    const apiEndpoint = isPaidAccount
      ? 'https://api.deepl.com/v2/translate'
      : 'https://api-free.deepl.com/v2/translate';

    const params = new URLSearchParams();
    payloadTexts.forEach((t) => params.append('text', t));
    params.append('source_lang', sourceLanguage.toUpperCase());
    params.append('target_lang', targetLanguage.toUpperCase());

    const response = await fetch(apiEndpoint, {
      method: 'POST',
      headers: {
        Authorization: `DeepL-Auth-Key ${DEEPL_API_KEY}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: params,
    });

    if (!response.ok) {
      const errorBody = await response.text();
      console.error('[Quantavus] DeepL API error:', response.status, errorBody);
      return res.status(response.status).json({ error: errorBody });
    }

    const data = await response.json();
    const translated = (data.translations || []).map((t) => t.text);

    if (isBatch) {
      return res.json({ translatedTexts: translated });
    }

    return res.json({ translatedText: translated[0] || text });
  } catch (error) {
    console.error('[Quantavus] DeepL proxy error:', error);
    return res.status(500).json({ error: 'DeepL proxy error' });
  }
});

const PORT = process.env.TRANSLATION_PROXY_PORT || 4000;

app.listen(PORT, () => {
  console.log(
    `[Quantavus] DeepL proxy listening on http://localhost:${PORT}/api/translate`
  );
});

