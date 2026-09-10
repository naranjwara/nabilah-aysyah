'use client';

import { useEffect, useState } from 'react';

const links = [
  ['About', '#about'],
  ['Work', '#work'],
  ['Development', '#development'],
  ['QA', '#quality-assurance'],
  ['Experience', '#experience']
];

// Matches the sections' scroll-mt-24 (96px), which clears the 80px fixed header.
const OFFSET = 96;

const ACTIVE_LINK = "Link size- px-4 py-2 bg-black rounded-full inline-flex flex-col justify-start items-start";
const LINK = "Link size- inline-flex flex-col justify-start items-start";
const ACTIVE_TEXT = "Text justify-center text-white text-base font-semibold font-['Space_Grotesk'] leading-6";
const TEXT = "Text justify-center text-zinc-700 text-sm font-normal font-['Space_Grotesk'] leading-5";

/**
 * Highlights the nav item for the section currently under the header.
 *
 * A scroll listener is used rather than IntersectionObserver because these
 * sections are far taller than the viewport: several would report as
 * "intersecting" at once, and picking a winner among them is less predictable
 * than testing which section has crossed the header line.
 */
export default function HeaderNav() {
  const [active, setActive] = useState(links[0][1]);

  useEffect(() => {
    // Reads a handful of rects and lets React bail out when the value is
    // unchanged. Deliberately synchronous: a requestAnimationFrame throttle
    // would stall the indicator wherever rAF is suspended.
    const update = () => {
      // Last section whose top has passed the header line wins; while still in
      // the hero nothing has passed, so the first link stays highlighted.
      let current = links[0][1];
      for (const [, href] of links) {
        const section = document.querySelector(href);
        if (section && section.getBoundingClientRect().top <= OFFSET + 1) current = href;
      }
      setActive(current);
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);

    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  return (
    <nav data-layer="Nav" className="Nav size- max-md:hidden flex justify-start items-center gap-4 lg:gap-8 min-w-0" aria-label="Main">
      {links.map(([label, href]) => {
        const isActive = href === active;
        return (
          <a
            data-layer="Link"
            key={href}
            href={href}
            aria-current={isActive ? 'true' : undefined}
            className={isActive ? ACTIVE_LINK : LINK}
          >
            <div data-layer="Text" className={isActive ? ACTIVE_TEXT : TEXT}>{label}</div>
          </a>
        );
      })}
    </nav>
  );
}
