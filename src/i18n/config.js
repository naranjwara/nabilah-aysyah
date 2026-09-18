export const LOCALES = ['en', 'id'];

export const DEFAULT_LOCALE = 'en';

// Bumped only if the shape of the stored value ever changes.
export const STORAGE_KEY = 'nabilah-portfolio.locale';

export const LOCALE_META = {
  en: { short: 'EN', label: 'English' },
  id: { short: 'ID', label: 'Bahasa Indonesia' }
};

export function normalizeLocale(value) {
  if (typeof value !== 'string') return null;
  const base = value.toLowerCase().split('-')[0];
  return LOCALES.includes(base) ? base : null;
}
