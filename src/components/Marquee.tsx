const clients = [
  'Fire Horse Consulting',
  'Quick Fix Foods',
  'TruEarth BioProducts',
  'Loopi',
  'MDK Cricket Academy',
  'Oz Cargo Carriers',
  'Xcelcore Securities',
  'Fit Fam World',
]

export default function Marquee() {
  const row = [...clients, ...clients]
  return (
    <div className="relative overflow-hidden border-y border-[var(--color-line)] bg-[var(--color-ink-2)] py-5">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[var(--color-ink-2)] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[var(--color-ink-2)] to-transparent" />
      <div className="flex w-max animate-marquee items-center gap-10 whitespace-nowrap">
        {row.map((c, i) => (
          <div key={i} className="flex items-center gap-10">
            <span className="font-[family-name:var(--font-display)] text-sm font-medium tracking-wide text-[var(--color-fog)]">
              {c}
            </span>
            <span className="text-[var(--color-gold)]/50">✦</span>
          </div>
        ))}
      </div>
    </div>
  )
}
