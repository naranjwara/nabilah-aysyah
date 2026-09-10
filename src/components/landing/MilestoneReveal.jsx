'use client';

import { useEffect } from 'react';

const HIDDEN = ['opacity-0', 'translate-y-6'];
const SHOWN = ['opacity-100', 'translate-y-0'];
const TRANSITION = ['transition-all', 'duration-700', 'ease-out'];

/**
 * Reveals each career milestone as it scrolls into view, staggered by position.
 *
 * Targets existing nodes via [data-milestone] instead of wrapping them, so the
 * timeline's flex layout and the absolutely positioned connector line are
 * untouched. Kept as a leaf Client Component so Career itself stays a Server
 * Component.
 */
export default function MilestoneReveal() {
  useEffect(() => {
    const milestones = document.querySelectorAll('[data-milestone]');
    if (!milestones.length) return undefined;

    // Respect users who asked for less motion: show everything immediately.
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return undefined;

    const observer = new IntersectionObserver(
      (entries, self) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const delay = Number(entry.target.dataset.milestone) || 0;
          entry.target.style.transitionDelay = `${Math.min(delay, 3) * 120}ms`;
          entry.target.classList.remove(...HIDDEN);
          entry.target.classList.add(...SHOWN);
          self.unobserve(entry.target);
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' }
    );

    milestones.forEach((milestone) => {
      milestone.classList.add(...HIDDEN, ...TRANSITION);
      observer.observe(milestone);
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
