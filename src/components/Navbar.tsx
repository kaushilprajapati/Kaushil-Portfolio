import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const links = [
  { href: '#work', label: 'Work' },
  { href: '#about', label: 'About' },
  { href: '#stack', label: 'Stack' },
  { href: '#process', label: 'Process' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'border-b border-[var(--color-line)] bg-[color-mix(in_srgb,var(--color-ink)_78%,transparent)] backdrop-blur-xl'
          : 'border-b border-transparent'
      }`}
    >
      <nav className="container-x flex h-16 items-center justify-between md:h-[4.5rem]">
        <a href="#top" className="group flex items-center gap-2.5">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-[var(--color-gold-bright)] to-[var(--color-gold-deep)] font-[family-name:var(--font-display)] text-sm font-bold text-[#1a1204]">
            K
          </span>
          <span className="font-[family-name:var(--font-display)] text-sm font-semibold tracking-tight text-[var(--color-snow)]">
            Kaushil<span className="text-[var(--color-gold)]">.</span>
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative text-sm text-[var(--color-fog)] transition-colors hover:text-[var(--color-snow)]"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-full border border-[var(--color-line-2)] px-4 py-2 text-sm font-medium text-[var(--color-snow)] transition-all hover:border-[var(--color-gold)] hover:text-[var(--color-gold)] sm:inline-block"
          >
            Let's talk
          </a>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-9 w-9 place-items-center rounded-lg border border-[var(--color-line-2)] text-[var(--color-snow)] md:hidden"
          >
            <div className="space-y-1.5">
              <span className={`block h-0.5 w-4 bg-current transition-transform ${open ? 'translate-y-2 rotate-45' : ''}`} />
              <span className={`block h-0.5 w-4 bg-current transition-opacity ${open ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 w-4 bg-current transition-transform ${open ? '-translate-y-2 -rotate-45' : ''}`} />
            </div>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-[var(--color-line)] bg-[var(--color-ink)] md:hidden"
          >
            <div className="container-x flex flex-col gap-1 py-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-base text-[var(--color-mist)] transition-colors hover:bg-[var(--color-surface)]"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
