import { createContext, useContext, useState, useEffect, ReactNode, useMemo } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { translationService } from "@/lib/translation-service";

export type Language = "en" | "fr" | "ar" | "pt" | "es" | "de";
export type Country = "us" | "uk" | "fr" | "de";

export interface LanguageContextType {
  language: Language;
  country: Country;
  setLanguage: (lang: Language) => void;
  setCountry: (country: Country) => void;
  t: (key: string) => string;
  dir: "ltr" | "rtl";
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = "preferred_language";
const COUNTRY_STORAGE_KEY = "preferred_country";

// Country to language mapping
const countryToLanguage: Record<Country, Language> = {
  us: "en",
  uk: "en",
  fr: "fr",
  de: "de",
};

export const languages: { code: Language; name: string; nativeName: string }[] = [
  { code: "en", name: "English", nativeName: "English" },
  { code: "fr", name: "French", nativeName: "Français" },
  { code: "de", name: "German", nativeName: "Deutsch" },
  { code: "ar", name: "Arabic", nativeName: "العربية" },
  { code: "pt", name: "Portuguese", nativeName: "Português" },
  { code: "es", name: "Spanish", nativeName: "Español" },
];

export const countries: { code: Country; name: string; language: Language }[] = [
  { code: "us", name: "United States", language: "en" },
  { code: "uk", name: "United Kingdom", language: "en" },
  { code: "fr", name: "France", language: "fr" },
  { code: "de", name: "Germany", language: "de" },
];

// Translation cache
const translationCache: Record<Language, Record<string, unknown>> = {
  en: {},
  fr: {},
  de: {},
  ar: {},
  pt: {},
  es: {},
};

// Auto-translation cache (stores DeepL translations to avoid repeated API calls)
const autoTranslationCache: Map<string, string> = new Map();

// Check if auto-translation is enabled
const isAutoTranslateEnabled = () => {
  return import.meta.env.VITE_TRANSLATION_PROVIDER !== 'none' && 
         (import.meta.env.VITE_DEEPL_API_KEY || import.meta.env.VITE_GOOGLE_TRANSLATE_API_KEY);
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const navigate = useNavigate();
  const location = useLocation();

  // Detect country from URL
  const detectCountry = (): Country => {
    const pathCountry = location.pathname.split("/")[1] as Country;
    if (countries.some((c) => c.code === pathCountry)) {
      return pathCountry;
    }
    const stored = localStorage.getItem(COUNTRY_STORAGE_KEY) as Country;
    if (stored && countries.some((c) => c.code === stored)) {
      return stored;
    }
    return "us"; // Default to US
  };

  // Detect language from country or URL
  const detectLanguage = (country: Country): Language => {
    // First check if country code maps to a language
    if (countryToLanguage[country]) {
      return countryToLanguage[country];
    }
    // Fallback to URL language code
    const pathLang = location.pathname.split("/")[1] as Language;
    if (languages.some((l) => l.code === pathLang)) {
      return pathLang;
    }
    const stored = localStorage.getItem(STORAGE_KEY) as Language;
    if (stored && languages.some((l) => l.code === stored)) {
      return stored;
    }
    const browserLang = navigator.language.split("-")[0] as Language;
    if (languages.some((l) => l.code === browserLang)) {
      return browserLang;
    }
    return "en";
  };

  const [country, setCountryState] = useState<Country>(detectCountry);
  const [language, setLanguageState] = useState<Language>(() => detectLanguage(detectCountry()));
  const [translations, setTranslations] = useState<Record<string, unknown>>({});

  const isRTL = language === "ar";
  const dir = isRTL ? "rtl" : "ltr";

  // Load translations
  useEffect(() => {
    const loadTranslations = async () => {
      if (Object.keys(translationCache[language]).length > 0) {
        setTranslations(translationCache[language]);
        return;
      }
      try {
        const module = await import(`../i18n/${language}.json`);
        translationCache[language] = module.default;
        setTranslations(module.default);
      } catch (error) {
        console.error(`Failed to load translations for ${language}`, error);
        // Load English as source only; keep current language translations empty
        // so auto-translation can populate them.
        if (!translationCache.en || Object.keys(translationCache.en).length === 0) {
          try {
            const enModule = await import("../i18n/en.json");
            translationCache.en = enModule.default;
          } catch (enError) {
            console.error("Failed to load fallback English translations", enError);
          }
        }
        // Start with an empty translation object; t() will still fall back to English
        // via translationCache.en while auto-translation fills this object.
        setTranslations({});
      }
    };
    loadTranslations();
  }, [language]);

  // Update language when country changes
  useEffect(() => {
    const newLang = countryToLanguage[country] || language;
    if (newLang !== language) {
      setLanguageState(newLang);
    }
  }, [country]);

  // Update document direction and lang
  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = dir;
    localStorage.setItem(STORAGE_KEY, language);
    localStorage.setItem(COUNTRY_STORAGE_KEY, country);
  }, [language, dir, country]);

  const setCountry = (newCountry: Country) => {
    const currentPath = location.pathname;
    const pathParts = currentPath.split("/");
    const currentCountry = pathParts[1];

    // Check if current path starts with a country code
    if (countries.some((c) => c.code === currentCountry)) {
      pathParts[1] = newCountry;
    } else {
      pathParts.splice(1, 0, newCountry);
    }

    const newPath = pathParts.join("/") || `/${newCountry}`;
    setCountryState(newCountry);
    const newLang = countryToLanguage[newCountry];
    if (newLang) {
      setLanguageState(newLang);
    }
    navigate(newPath);
  };

  const setLanguage = (newLang: Language) => {
    setLanguageState(newLang);
    localStorage.setItem(STORAGE_KEY, newLang);
  };

  // Auto-translate missing translations in the background
  useEffect(() => {
    if (!isAutoTranslateEnabled() || language === "en") return;

    const autoTranslateMissing = async () => {
      // Load English translations as source
      if (!translationCache.en || Object.keys(translationCache.en).length === 0) {
        try {
          const enModule = await import("../i18n/en.json");
          translationCache.en = enModule.default;
        } catch {
          return;
        }
      }

      const enTranslations = translationCache.en as Record<string, unknown>;
      const currentTranslations = translations as Record<string, unknown>;
      const updatedTranslations = JSON.parse(JSON.stringify(currentTranslations)); // Deep clone

      // Helper to get nested value
      const getNestedValue = (obj: Record<string, unknown>, path: string[]): unknown => {
        let value: unknown = obj;
        for (const key of path) {
          if (value && typeof value === "object" && key in (value as Record<string, unknown>)) {
            value = (value as Record<string, unknown>)[key];
          } else {
            return undefined;
          }
        }
        return value;
      };

      // Helper to set nested value
      const setNestedValue = (obj: Record<string, unknown>, path: string[], value: unknown) => {
        let target = obj;
        for (let i = 0; i < path.length - 1; i++) {
          const key = path[i];
          if (!target[key] || typeof target[key] !== "object") {
            target[key] = {};
          }
          target = target[key] as Record<string, unknown>;
        }
        target[path[path.length - 1]] = value;
      };

      // Find and translate missing keys
      const findAndTranslate = async (enObj: Record<string, unknown>, path: string[] = []) => {
        for (const key in enObj) {
          const currentPath = [...path, key];
          const enValue = enObj[key];
          const currentValue = getNestedValue(currentTranslations, currentPath);

          if (typeof enValue === "string") {
            // Check if translation is missing
            if (!currentValue || currentValue === currentPath.join(".")) {
              const cacheKey = `${language}:${enValue}`;
              
              if (autoTranslationCache.has(cacheKey)) {
                // Use cached translation
                setNestedValue(updatedTranslations, currentPath, autoTranslationCache.get(cacheKey));
              } else {
                // Translate it
                try {
                  const translated = await translationService.translate({
                    text: enValue,
                    sourceLanguage: "en",
                    targetLanguage: language,
                  });
                  autoTranslationCache.set(cacheKey, translated);
                  setNestedValue(updatedTranslations, currentPath, translated);
                } catch (error) {
                  console.warn(`Auto-translation failed for "${currentPath.join(".")}":`, error);
                }
              }
            }
          } else if (typeof enValue === "object" && enValue !== null) {
            await findAndTranslate(enValue as Record<string, unknown>, currentPath);
          }
        }
      };

      await findAndTranslate(enTranslations);
      
      // Update translations if any were added
      if (JSON.stringify(updatedTranslations) !== JSON.stringify(currentTranslations)) {
        setTranslations(updatedTranslations);
      }
    };

    // Debounce to avoid too many API calls
    const timeoutId = setTimeout(() => {
      autoTranslateMissing();
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [language, translations]);

  const t = (key: string): string => {
    const keys = key.split(".");
    let value: unknown = translations;

    for (const k of keys) {
      if (value && typeof value === "object" && k in (value as Record<string, unknown>)) {
        value = (value as Record<string, unknown>)[k];
      } else {
        // If translation missing and auto-translate enabled, return English fallback
        if (isAutoTranslateEnabled() && language !== "en") {
          const enKeys = key.split(".");
          let enValue: unknown = translationCache.en || {};
          
          for (const k of enKeys) {
            if (enValue && typeof enValue === "object" && k in (enValue as Record<string, unknown>)) {
              enValue = (enValue as Record<string, unknown>)[k];
            } else {
              return key;
            }
          }
          
          return typeof enValue === "string" ? enValue : key;
        }
        
        return key; // Return key if translation not found
      }
    }

    return typeof value === "string" ? value : key;
  };

  return (
    <LanguageContext.Provider value={{ language, country, setLanguage, setCountry, t, dir, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
