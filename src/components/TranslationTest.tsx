import { useState } from 'react';
import { useAutoTranslate } from '@/hooks/use-auto-translate';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, CheckCircle2, XCircle } from 'lucide-react';

/**
 * Translation Test Component
 * Use this to verify your DeepL API connection is working
 * 
 * You can add this to any page temporarily to test:
 * <TranslationTest />
 */
export function TranslationTest() {
  const { language } = useLanguage();
  const { translate, translateBatch, isTranslating, error } = useAutoTranslate();
  const [text, setText] = useState('Hello, welcome to Quantavus!');
  const [translated, setTranslated] = useState<string>('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleTranslate = async () => {
    setStatus('idle');
    setTranslated('');
    
    try {
      const result = await translate(text);
      setTranslated(result);
      setStatus('success');
    } catch (err) {
      setStatus('error');
      console.error('Translation failed:', err);
    }
  };

  const handleBatchTranslate = async () => {
    setStatus('idle');
    setTranslated('');
    
    const texts = [
      'Capital Advisory',
      'Investment Structuring',
      'Project Finance',
    ];
    
    try {
      const results = await translateBatch(texts);
      setTranslated(results.join('\n'));
      setStatus('success');
    } catch (err) {
      setStatus('error');
      console.error('Batch translation failed:', err);
    }
  };

  return (
    <Card className="max-w-2xl mx-auto mt-8">
      <CardHeader>
        <CardTitle>DeepL Translation Test</CardTitle>
        <CardDescription>
          Test your DeepL API connection. Current language: <strong>{language}</strong>
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="test-text">Text to Translate</Label>
          <Textarea
            id="test-text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text to translate..."
            rows={3}
          />
        </div>

        <div className="flex gap-2">
          <Button 
            onClick={handleTranslate} 
            disabled={isTranslating || !text.trim()}
            className="flex-1"
          >
            {isTranslating ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Translating...
              </>
            ) : (
              'Translate'
            )}
          </Button>
          
          <Button 
            onClick={handleBatchTranslate} 
            disabled={isTranslating}
            variant="outline"
          >
            Test Batch
          </Button>
        </div>

        {error && (
          <div className="p-3 bg-destructive/10 border border-destructive/20 rounded-md flex items-start gap-2">
            <XCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <p className="font-medium text-destructive">Translation Error</p>
              <p className="text-sm text-destructive/80 mt-1">{error.message}</p>
              <p className="text-xs text-muted-foreground mt-2">
                Check your API key in .env file and ensure VITE_DEEPL_API_KEY is set correctly.
              </p>
            </div>
          </div>
        )}

        {status === 'success' && translated && (
          <div className="p-3 bg-success/10 border border-success/20 rounded-md">
            <div className="flex items-start gap-2 mb-2">
              <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
              <p className="font-medium text-success">Translation Successful!</p>
            </div>
            <div className="mt-2 p-3 bg-background rounded border">
              <p className="text-sm font-medium mb-1">Translated ({language}):</p>
              <p className="text-foreground whitespace-pre-wrap">{translated}</p>
            </div>
          </div>
        )}

        <div className="pt-4 border-t">
          <p className="text-xs text-muted-foreground">
            <strong>API Status:</strong> {error ? '❌ Error' : isTranslating ? '⏳ Processing...' : '✅ Ready'}
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            <strong>Provider:</strong> DeepL | <strong>Target Language:</strong> {language}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
