import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { translations, type Lang, type Translations } from '../i18n/translations';

interface LanguageContextValue {
  lang: Lang;
  toggleLang: () => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    const stored = localStorage.getItem('lang');
    return stored === 'sv' ? 'sv' : 'en';
  });

  useEffect(() => {
    localStorage.setItem('lang', lang);
  }, [lang]);

  const toggleLang = () => setLang((l) => (l === 'en' ? 'sv' : 'en'));

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useT(): Translations {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useT must be used within LanguageProvider');
  return ctx.t;
}

export function useLang(): { lang: Lang; toggleLang: () => void } {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLang must be used within LanguageProvider');
  return { lang: ctx.lang, toggleLang: ctx.toggleLang };
}
