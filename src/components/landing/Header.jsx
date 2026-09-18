'use client';

import { useEffect, useState } from "react";
import HeaderNav from "./HeaderNav";
import LanguageSwitcher from "./LanguageSwitcher";
import { Arrow } from "./LandingUi";
import { useI18n } from '@/i18n/LanguageProvider';

// [dictionary key, section anchor] — mirrors HeaderNav plus the contact section.
const mobileLinks = [
  ['about', '#about'],
  ['work', '#work'],
  ['development', '#development'],
  ['qa', '#quality-assurance'],
  ['experience', '#experience'],
  ['contact', '#contact']
];

export default function Header() {
  const { t } = useI18n();
  const [menuOpen, setMenuOpen] = useState(false);

  // Keeps the page behind the overlay from scrolling, and lets Escape close it.
  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [menuOpen]);

  // Closing the overlay unmounts the link before the browser gets to perform
  // the anchor's default jump, so the scroll is driven here instead. The
  // scroll lock is lifted synchronously for the same reason.
  const closeAndNavigate = (event, href) => {
    event.preventDefault();
    document.body.style.overflow = '';
    setMenuOpen(false);

    // No behavior override: the smooth/reduced-motion choice stays with the
    // scroll-behavior rules in globals.css, matching a plain anchor jump.
    document.querySelector(href)?.scrollIntoView();
    window.history.replaceState(null, '', href);
  };

  return (
    <>
        <header data-layer="Header" className="HeaderMobile w-full h-16 max-h-16 left-0 top-0 fixed z-50 md:hidden inline-flex justify-center items-center">
            <button
                type="button"
                data-layer="Container"
                onClick={() => setMenuOpen(true)}
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
                className="Container cursor-pointer size- px-4 py-3 bg-stone-50/70 rounded-[32px] backdrop-blur-[2px] inline-flex justify-center items-center gap-2 overflow-hidden"
            >
                <div data-svg-wrapper data-layer="akar-icons:sort" className="AkarIconsSort">
                    <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1H19M4 7H16M7 13H13" stroke="black" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </div>
                <div data-layer="Menu" className="Menu text-center justify-start text-black text-xl font-bold font-['Syne'] leading-4">Menu</div>
            </button>
        </header>
        <div
            id="mobile-menu"
            data-layer="Header"
            aria-hidden={!menuOpen}
            className={`Header w-full h-dvh left-0 top-0 fixed z-50 md:hidden py-6 bg-zinc-900/75 backdrop-blur-[6.50px] inline-flex justify-center items-start overflow-hidden transition-[opacity,visibility] duration-300 ease-out ${menuOpen ? 'visible opacity-100' : 'invisible opacity-0 pointer-events-none'}`}
        >
            <nav data-layer="Frame 67" aria-label={t.nav.ariaLabel} className={`Frame67 size- inline-flex flex-col justify-center items-center gap-7 overflow-hidden transition-transform duration-300 ease-out ${menuOpen ? 'translate-y-0' : '-translate-y-3'}`}>
                <button
                    type="button"
                    data-layer="Frame 69"
                    onClick={() => setMenuOpen(false)}
                    className="Frame69 self-stretch cursor-pointer inline-flex justify-center items-center gap-2"
                >
                    <div data-svg-wrapper data-layer="ci:close-md" className="CiCloseMd">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.5 13.5L7.5 7.5M7.5 7.5L1.5 1.5M7.5 7.5L13.5 1.5M7.5 7.5L1.5 13.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                    <div data-layer="Close" className="Close text-center justify-center text-white text-xl font-bold font-['Syne']">{t.nav.close}</div>
                </button>
                {mobileLinks.map(([key, href]) => (
                    <a
                        key={href}
                        data-layer="Frame 70"
                        href={href}
                        onClick={(event) => closeAndNavigate(event, href)}
                        className="Frame70 self-stretch px-2 flex flex-col justify-start items-center gap-[3px] overflow-hidden"
                    >
                        <div data-layer="Text" className="Text text-center justify-center text-white text-xl font-bold font-['Syne']">{t.nav[key]}</div>
                        <div data-layer="Rectangle 10" className="Rectangle10 w-16 h-[3px] bg-white rounded-[99px]" />
                    </a>
                ))}
            </nav>
        </div>
        <header data-layer="Header" className="Header w-full h-16 lg:min-h-20 4k:min-h-24 sm:w-full left-0 top-0 fixed z-50 bg-stone-50/75 shadow-[0px_1px_8px_0px_rgba(0,0,0,0.04)] backdrop-blur-[5px] hidden md:inline-flex flex-col justify-center items-center">
            <div data-layer="Container" className="Container w-full h-full p-3.5 sm:px-5 lg:px-10 gap-3 inline-flex justify-between items-center">
                <div data-layer="Container" className="Container size- flex justify-start items-center gap-2">
                    <div data-svg-wrapper data-layer="Background" className="Background">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="12" height="12" rx="6" fill="black"/>
                        </svg>
                    </div>
                    <div data-layer="Text" className="Text justify-center whitespace-nowrap text-zinc-900 text-xl 4k:text-3xl 4k font-semibold font-['Syne'] uppercase leading-6">NABILAH A.</div>
                </div>
                <HeaderNav />
                <div data-layer="Container" className="Container flex justify-start items-center gap-2 sm:gap-4 4k:gap-8">
                    <LanguageSwitcher />
                    <a data-layer="Link" href="#contact" className="Link shrink-0 px-3 py-2 sm:px-6 sm:py-3 bg-black rounded-full flex justify-start items-center gap-2">
                        <div data-layer="Container" className="Container size- inline-flex flex-col justify-start items-start">
                            <div data-layer="Text" className="Text justify-center whitespace-nowrap text-white text-sm sm:text-base 4k:text-xl font-normal font-['Space_Grotesk'] leading-6">{t.header.cta}</div>
                        </div>
                        <div data-svg-wrapper data-layer="Container" className="Container">
                            <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.933333 8.66667L0 7.73333L6.4 1.33333H0.666667V0H8.66667V8H7.33333V2.26667L0.933333 8.66667V8.66667" fill="white"/>
                            </svg>
                        </div>
                    </a>
                    {/* <div data-layer="Background" className="Background size-8 bg-black rounded-full flex justify-center items-center">
                        <div data-svg-wrapper data-layer="Container" className="Container">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 6C5.175 6 4.46875 5.70625 3.88125 5.11875C3.29375 4.53125 3 3.825 3 3C3 2.175 3.29375 1.46875 3.88125 0.88125C4.46875 0.29375 5.175 0 6 0C6.825 0 7.53125 0.29375 8.11875 0.88125C8.70625 1.46875 9 2.175 9 3C9 3.825 8.70625 4.53125 8.11875 5.11875C7.53125 5.70625 6.825 6 6 6V6M0 12V9.9C0 9.475 0.109375 9.08437 0.328125 8.72812C0.546875 8.37187 0.8375 8.1 1.2 7.9125C1.975 7.525 2.7625 7.23438 3.5625 7.04063C4.3625 6.84688 5.175 6.75 6 6.75C6.825 6.75 7.6375 6.84688 8.4375 7.04063C9.2375 7.23438 10.025 7.525 10.8 7.9125C11.1625 8.1 11.4531 8.37187 11.6719 8.72812C11.8906 9.08437 12 9.475 12 9.9V12H0V12M1.5 10.5H10.5V9.9C10.5 9.7625 10.4656 9.6375 10.3969 9.525C10.3281 9.4125 10.2375 9.325 10.125 9.2625C9.45 8.925 8.76875 8.67188 8.08125 8.50313C7.39375 8.33438 6.7 8.25 6 8.25C5.3 8.25 4.60625 8.33438 3.91875 8.50313C3.23125 8.67188 2.55 8.925 1.875 9.2625C1.7625 9.325 1.67187 9.4125 1.60312 9.525C1.53437 9.6375 1.5 9.7625 1.5 9.9V10.5V10.5M6 4.5C6.4125 4.5 6.76562 4.35312 7.05937 4.05937C7.35312 3.76562 7.5 3.4125 7.5 3C7.5 2.5875 7.35312 2.23437 7.05937 1.94062C6.76562 1.64687 6.4125 1.5 6 1.5C5.5875 1.5 5.23438 1.64687 4.94063 1.94062C4.64688 2.23437 4.5 2.5875 4.5 3C4.5 3.4125 4.64688 3.76562 4.94063 4.05937C5.23438 4.35312 5.5875 4.5 6 4.5V4.5M6 3V3V3V3V3V3V3V3V3V3M6 10.5V10.5V10.5V10.5V10.5V10.5V10.5V10.5V10.5V10.5V10.5V10.5V10.5" fill="white"/>
                            </svg>
                        </div>
                    </div> */}
                </div>
            </div>
        </header>
    </>
  );
}
