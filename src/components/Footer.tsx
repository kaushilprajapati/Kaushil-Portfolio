import { CONTACT } from '../data/site'

const socials = [
  { label: 'Email', href: `mailto:${CONTACT.email}` },
  { label: 'Upwork', href: CONTACT.upwork },
  { label: 'LinkedIn', href: CONTACT.linkedin },
  { label: 'GitHub', href: CONTACT.github },
]

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-line)] bg-[var(--color-ink-2)] py-12">
      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <a href="#top" className="flex items-center gap-2.5">
              <span className="font-[family-name:var(--font-display)] text-base font-semibold text-[var(--color-snow)]">
                {CONTACT.name}
              </span>
            </a>
            <p className="mt-3 max-w-xs text-sm text-[var(--color-fog)]">
              Full-Stack Web &amp; Mobile App Developer. Modern software, built right.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="text-sm text-[var(--color-fog)] transition-colors hover:text-[var(--color-gold)]"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-2 border-t border-[var(--color-line)] pt-6 text-xs text-[var(--color-fog)] sm:flex-row sm:items-center">
          <span>© {new Date().getFullYear()} {CONTACT.name}. All rights reserved.</span>
          <span>Modern software. Built right.</span>
        </div>
      </div>
    </footer>
  )
}
