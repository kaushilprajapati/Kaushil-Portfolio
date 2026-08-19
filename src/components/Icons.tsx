type P = { className?: string }
const base = 'w-full h-full'
const common = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

export const Icon = {
  code: (p: P) => (
    <svg viewBox="0 0 24 24" className={p.className ?? base} {...common}>
      <path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 5l-4 14" />
    </svg>
  ),
  cloud: (p: P) => (
    <svg viewBox="0 0 24 24" className={p.className ?? base} {...common}>
      <path d="M7 18a4 4 0 0 1-.5-7.97A5.5 5.5 0 0 1 17 9.5a3.5 3.5 0 0 1 .5 6.98" />
      <path d="M12 13v6M9.5 15.5 12 13l2.5 2.5" />
    </svg>
  ),
  mobile: (p: P) => (
    <svg viewBox="0 0 24 24" className={p.className ?? base} {...common}>
      <rect x="7" y="3" width="10" height="18" rx="2.5" />
      <path d="M11 18h2" />
    </svg>
  ),
  gear: (p: P) => (
    <svg viewBox="0 0 24 24" className={p.className ?? base} {...common}>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 3v2M12 19v2M5 5l1.5 1.5M17.5 17.5 19 19M3 12h2M19 12h2M5 19l1.5-1.5M17.5 6.5 19 5" />
    </svg>
  ),
  pen: (p: P) => (
    <svg viewBox="0 0 24 24" className={p.className ?? base} {...common}>
      <path d="M4 20h4L19 9a2.1 2.1 0 0 0-3-3L5 17v3Z" />
      <path d="M14 7l3 3" />
    </svg>
  ),
  swap: (p: P) => (
    <svg viewBox="0 0 24 24" className={p.className ?? base} {...common}>
      <path d="M4 8h13l-3-3M20 16H7l3 3" />
    </svg>
  ),
  arrow: (p: P) => (
    <svg viewBox="0 0 24 24" className={p.className ?? base} {...common}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  ),
  arrowUpRight: (p: P) => (
    <svg viewBox="0 0 24 24" className={p.className ?? base} {...common}>
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  ),
  check: (p: P) => (
    <svg viewBox="0 0 24 24" className={p.className ?? base} {...common}>
      <path d="m4 12 5 5L20 6" />
    </svg>
  ),
  close: (p: P) => (
    <svg viewBox="0 0 24 24" className={p.className ?? base} {...common}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  ),
  mail: (p: P) => (
    <svg viewBox="0 0 24 24" className={p.className ?? base} {...common}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  ),
  pin: (p: P) => (
    <svg viewBox="0 0 24 24" className={p.className ?? base} {...common}>
      <path d="M12 21s-6-5.3-6-10a6 6 0 0 1 12 0c0 4.7-6 10-6 10Z" />
      <circle cx="12" cy="11" r="2.2" />
    </svg>
  ),
  spark: (p: P) => (
    <svg viewBox="0 0 24 24" className={p.className ?? base} {...common}>
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18" />
    </svg>
  ),
}

export type IconName = keyof typeof Icon
