'use client';

import { LOCALE_META } from '@/i18n/config';
import { useI18n } from '@/i18n/LanguageProvider';

const ACTIVE = 'px-2 sm:px-2.5 py-1 rounded-full bg-black text-white text-xs font-semibold font-[\'Space_Grotesk\'] leading-4 transition-colors';
const INACTIVE = 'px-2 sm:px-2.5 py-1 rounded-full text-zinc-700 text-xs font-medium font-[\'Space_Grotesk\'] leading-4 transition-colors hover:text-zinc-900';

/**
 * Segmented EN / ID toggle. Rendered as a radio group rather than a select so
 * both options stay visible in the header at every breakpoint.
 */
export default function LanguageSwitcher({ className = '' }) {
  const { locale, locales, setLocale, t } = useI18n();

  return (
    <div
      data-layer="Language Switcher"
      role="radiogroup"
      aria-label={t.language.ariaLabel}
      className={`LanguageSwitcher shrink-0 p-0.5 4k:px-3 bg-white/70 rounded-full outline outline-1 outline-offset-[-1px] outline-black/10 inline-flex items-center gap-0.5 ${className}`}
    >
      {locales.map((code) => {
        const isActive = code === locale;
        return (
          <button
            key={code}
            type="button"
            role="radio"
            aria-checked={isActive}
            aria-label={LOCALE_META[code].label}
            title={LOCALE_META[code].label}
            onClick={() => setLocale(code)}
            className={`4k:text-xl ${isActive ? ACTIVE : INACTIVE}`}
          >
            {LOCALE_META[code].short}
          </button>
        );
      })}
    </div>
  );
}
