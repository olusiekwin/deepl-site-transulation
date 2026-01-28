# DeepL Translation Test Guide

Your DeepL API key is connected! Here's how to test it:

## Quick Test

1. **Add the test component to any page** (temporarily):

```tsx
// In any page file (e.g., src/pages/HomePage.tsx)
import { TranslationTest } from '@/components/TranslationTest';

// Add this inside your component's return:
<TranslationTest />
```

2. **Or create a test page** at `/us/test-translation`:

```tsx
// src/pages/TranslationTestPage.tsx
import { TranslationTest } from '@/components/TranslationTest';

export default function TranslationTestPage() {
  return (
    <div className="section-padding">
      <TranslationTest />
    </div>
  );
}
```

Then add the route in `src/App.tsx`:
```tsx
<Route path="test-translation" element={<TranslationTestPage />} />
```

## What to Test

1. **Single Translation**: Enter text and click "Translate"
2. **Batch Translation**: Click "Test Batch" to translate multiple texts at once
3. **Language Switching**: Change the country/language and test again

## Expected Results

✅ **Success**: You'll see the translated text in the target language
❌ **Error**: Check:
   - API key is correct in `.env`
   - Restart dev server after adding API key
   - API key has available quota (free tier: 500K chars/month)

## Using in Your App

Once verified, use the translation service anywhere:

```tsx
import { useAutoTranslate } from '@/hooks/use-auto-translate';

function MyComponent() {
  const { translate, isTranslating } = useAutoTranslate();
  
  const handleTranslate = async () => {
    const result = await translate("Hello World");
    console.log(result); // Translated text
  };
}
```

## Next Steps

- ✅ API key connected
- ✅ Translation service ready
- 🧪 Test the connection
- 🚀 Start using in your components!
