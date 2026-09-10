'use client';

import { useEffect } from 'react';

const HIDDEN_CLASSES = ['opacity-0', 'translate-y-8', 'transition', 'duration-700'];
const VISIBLE_CLASSES = ['opacity-100', 'translate-y-0'];

/**
 * Reveals each top-level section as it scrolls into view.
 *
 * Rendered as a leaf Client Component so the surrounding page and every
 * section stay Server Components: their markup is streamed as HTML instead of
 * being shipped to the browser as hydratable JavaScript.
 */
export default function ScrollReveal() {
  useEffect(() => {
    const targets = document.querySelectorAll('main > section, footer');
    if (!targets.length) return undefined;

    const observer = new IntersectionObserver(
      (entries, self) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add(...VISIBLE_CLASSES);
          self.unobserve(entry.target);
        });
      },
      { threshold: 0.12 }
    );

    targets.forEach((target) => {
      target.classList.add(...HIDDEN_CLASSES);
      observer.observe(target);
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
