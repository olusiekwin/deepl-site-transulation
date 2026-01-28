# Translation Service Setup Guide

This application supports third-party translation services for automatic translation of content.

## Supported Providers

### 1. DeepL (Recommended)
- **Quality**: Excellent, especially for European languages
- **Free Tier**: 500,000 characters/month
- **Pricing**: Free tier available, then $4.99/month for 1M characters
- **Setup**: https://www.deepl.com/pro-api

### 2. Google Translate
- **Quality**: Good, supports 100+ languages
- **Free Tier**: $200 credit/month (first 3 months)
- **Pricing**: $20 per 1M characters
- **Setup**: https://cloud.google.com/translate/docs/setup

### 3. AWS Translate
- **Quality**: Good, enterprise-grade
- **Free Tier**: 2M characters/month for first 12 months
- **Pricing**: $15 per 1M characters
- **Setup**: Requires server-side implementation

## Quick Start with DeepL

1. **Sign up for DeepL API**
   - Go to https://www.deepl.com/pro-api
   - Create a free account
   - Get your API key from the dashboard

2. **Configure Environment Variables**
   ```bash
   # Create .env file in project root
   VITE_TRANSLATION_PROVIDER=deepl
   VITE_DEEPL_API_KEY=your_api_key_here
   ```

3. **Use in Code**
   ```typescript
   import { useAutoTranslate } from '@/hooks/use-auto-translate';
   
   function MyComponent() {
     const { translate, isTranslating } = useAutoTranslate();
     
     const handleTranslate = async () => {
       const translated = await translate("Hello World");
       console.log(translated);
     };
   }
   ```

## Usage Examples

### Auto-translate missing translations
```typescript
import { useAutoTranslate } from '@/hooks/use-auto-translate';
import { useLanguage } from '@/contexts/LanguageContext';

function MyComponent() {
  const { t } = useLanguage();
  const { translate } = useAutoTranslate();
  const [translatedText, setTranslatedText] = useState('');

  useEffect(() => {
    // Auto-translate if translation is missing
    const originalText = t('some.key');
    if (originalText === 'some.key') {
      translate('Fallback English text').then(setTranslatedText);
    }
  }, []);
}
```

### Translate user-generated content
```typescript
import { useAutoTranslate } from '@/hooks/use-auto-translate';

function UserContent({ content }: { content: string }) {
  const { translate, isTranslating } = useAutoTranslate();
  const [translated, setTranslated] = useState(content);

  const handleTranslate = async () => {
    const result = await translate(content);
    setTranslated(result);
  };

  return (
    <div>
      <p>{translated}</p>
      <button onClick={handleTranslate} disabled={isTranslating}>
        {isTranslating ? 'Translating...' : 'Translate'}
      </button>
    </div>
  );
}
```

## Important Notes

1. **API Keys**: Never commit API keys to git. Use `.env` files (already in `.gitignore`)

2. **Rate Limits**: Be aware of API rate limits, especially on free tiers

3. **Costs**: Monitor usage to avoid unexpected charges

4. **Quality**: Machine translation may need human review for professional content

5. **Caching**: Consider caching translations to reduce API calls

## Alternative: Translation Management Platforms

For professional translation workflows, consider:
- **Crowdin**: https://crowdin.com
- **Lokalise**: https://lokalise.com
- **Phrase**: https://phrase.com

These platforms provide:
- Professional translator workflows
- Translation memory
- Over-the-air updates
- Team collaboration
- Quality assurance tools
