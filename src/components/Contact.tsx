import Reveal from './Reveal'
import { Icon } from './Icons'
import { CONTACT } from '../data/site'

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 py-20 md:py-28">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-[var(--color-line-2)] bg-[var(--color-surface)] px-6 py-16 text-center sm:px-12 md:py-24">
            {/* glow */}
            <div aria-hidden className="pointer-events-none absolute inset-0">
              <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-[var(--color-gold)] opacity-[0.12] blur-[100px]" />
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage:
                    'linear-gradient(var(--color-line) 1px, transparent 1px), linear-gradient(90deg, var(--color-line) 1px, transparent 1px)',
                  backgroundSize: '48px 48px',
                  maskImage: 'radial-gradient(ellipse 60% 60% at 50% 40%, #000, transparent 75%)',
                  WebkitMaskImage: 'radial-gradient(ellipse 60% 60% at 50% 40%, #000, transparent 75%)',
                }}
              />
            </div>

            <div className="relative">
              <span className="eyebrow">Get In Touch</span>
              <h2 className="mx-auto mt-5 max-w-2xl font-[family-name:var(--font-display)] text-4xl font-bold leading-[1.05] tracking-tight text-[var(--color-snow)] sm:text-5xl md:text-6xl">
                Let's build something
                <br />
                <span className="text-gradient-gold">exceptional.</span>
              </h2>
              <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-[var(--color-fog)]">
                Ready to turn your idea into production-grade software? I'd love to hear about it. Available for
                freelance &amp; contract work, worldwide.
              </p>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--color-gold-bright)] to-[var(--color-gold-deep)] px-6 py-3.5 text-sm font-semibold text-[#1a1204] transition-transform hover:-translate-y-0.5"
                >
                  <Icon.mail className="h-4 w-4" />
                  {CONTACT.email}
                </a>
                <a
                  href={CONTACT.upwork}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--color-line-2)] px-6 py-3.5 text-sm font-semibold text-[var(--color-snow)] transition-colors hover:border-[var(--color-gold)] hover:text-[var(--color-gold)]"
                >
                  Invite me on Upwork
                  <Icon.arrowUpRight className="h-4 w-4" />
                </a>
              </div>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-[var(--color-fog)]">
                <span className="inline-flex items-center gap-2">
                  <Icon.pin className="h-4 w-4 text-[var(--color-gold)]" />
                  {CONTACT.location}
                </span>
                <span className="inline-flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                  </span>
                  Currently available
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
