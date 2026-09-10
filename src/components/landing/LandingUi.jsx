export function Arrow() {
  return <span aria-hidden="true" className="text-[18px] leading-none">↗</span>;
}

const PILL_TONES = {
  blue: 'border-[#9fc8e8] bg-[#e8f4ff]',
  green: 'border-[#a9cf87] bg-[#eafade]'
};

export function Pill({ children, tone = 'blue' }) {
  return <span className={`inline-flex w-max items-center rounded-full border px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[.09em] ${PILL_TONES[tone] || PILL_TONES.blue}`}>{children}</span>;
}

export function PrimaryButton({ children, href = '#contact' }) {
  return <a className="inline-flex items-center gap-3 rounded-full bg-[#1a1c1b] px-[22px] py-3.5 text-[13px] font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_25px_rgba(26,28,27,.14)]" href={href}>{children}</a>;
}

export function OutlineButton({ children, href = '#contact' }) {
  return <a className="inline-flex items-center rounded-full border border-[#1a1c1b] px-[22px] py-[13px] text-[13px] font-semibold transition duration-300 hover:bg-[#1a1c1b] hover:text-white" href={href}>{children}</a>;
}

export function Container({ children, className = '' }) {
  return <div className={`mx-auto w-[calc(100%-36px)] max-w-[1240px] min-[901px]:w-[calc(100%-80px)] ${className}`}>{children}</div>;
}

export function SectionHeading({ label, tone = 'blue', title, children }) {
  return <div className="flex flex-col gap-5 min-[901px]:flex-row min-[901px]:items-end min-[901px]:justify-between min-[901px]:gap-8"><div><Pill tone={tone}>{label}</Pill><h2 className="mt-[18px] font-display text-[clamp(36px,4vw,56px)] leading-[1.04] tracking-[-.04em]">{title}</h2></div><p className="m-0 max-w-[360px] text-base leading-[1.6] text-[#626766]">{children}</p></div>;
}
