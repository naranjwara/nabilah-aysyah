'use client';

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { DEFAULT_LOCALE, LOCALES, STORAGE_KEY, normalizeLocale } from './config';
import { dictionaries } from './dictionaries';

const LanguageContext = createContext(null);

/**
 * Holds the active locale for the landing page.
 *
 * The site is a static export, so there is no server-side locale negotiation:
 * the first paint always uses DEFAULT_LOCALE (keeping markup and hydration in
 * agreement) and the stored or browser preference is applied in an effect.
 */
export function LanguageProvider({ children }) {
  const [locale, setLocale] = useState(DEFAULT_LOCALE);

  useEffect(() => {
    let stored = null;
    try {
      stored = normalizeLocale(window.localStorage.getItem(STORAGE_KEY));
    } catch {
      // Private mode or blocked storage: fall back to the browser language.
    }

    const preferred = stored || normalizeLocale(navigator.language);
    if (preferred && preferred !== DEFAULT_LOCALE) setLocale(preferred);
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const changeLocale = useCallback((next) => {
    const normalized = normalizeLocale(next);
    if (!normalized) return;

    setLocale(normalized);
    try {
      window.localStorage.setItem(STORAGE_KEY, normalized);
    } catch {
      // Preference simply does not persist; the toggle still works this visit.
    }
  }, []);

  const value = useMemo(
    () => ({ locale, locales: LOCALES, setLocale: changeLocale, t: dictionaries[locale] }),
    [locale, changeLocale]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useI18n() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useI18n must be used inside <LanguageProvider>');
  return context;
}
