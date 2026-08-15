import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { en } from './translations/en';
import { ar } from './translations/ar';

const STORAGE_KEY = 'cht_lang';
const TRANSLATIONS = { en, ar };

let bootstrapRtlLinkPromise = null;

function ensureBootstrapRtlLink() {
  if (bootstrapRtlLinkPromise) return bootstrapRtlLinkPromise;

  bootstrapRtlLinkPromise = import('bootstrap/dist/css/bootstrap.rtl.min.css?url').then(
    mod => {
      let link = document.getElementById('bootstrap-rtl-css');
      if (!link) {
        link = document.createElement('link');
        link.id = 'bootstrap-rtl-css';
        link.rel = 'stylesheet';
        link.href = mod.default;
        link.disabled = true;
        document.head.appendChild(link);
      }
      return link;
    }
  );

  return bootstrapRtlLinkPromise;
}

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    if (typeof window === 'undefined') return 'en';
    return localStorage.getItem(STORAGE_KEY) === 'ar' ? 'ar' : 'en';
  });

  const dir = language === 'ar' ? 'rtl' : 'ltr';

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = dir;
    localStorage.setItem(STORAGE_KEY, language);

    if (dir === 'rtl') {
      ensureBootstrapRtlLink().then(link => {
        link.disabled = false;
      });
    } else {
      const link = document.getElementById('bootstrap-rtl-css');
      if (link) link.disabled = true;
    }
  }, [language, dir]);

  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'en' ? 'ar' : 'en'));
  };

  const value = useMemo(
    () => ({
      language,
      dir,
      t: TRANSLATIONS[language],
      toggleLanguage,
    }),
    [language, dir]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components -- hook is tightly coupled to this provider's context instance
export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return ctx;
}
