import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { Icon } from './Icons'
import { process, whyMe } from '../data/site'

export default function Process() {
  return (
    <section id="process" className="scroll-mt-24 border-t border-[var(--color-line)] bg-[var(--color-ink-2)] py-20 md:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="How I Work"
          title={
            <>
              A transparent <span className="text-gradient-gold">way of working.</span>
            </>
          }
          intro="A collaborative workflow that keeps you informed at every step — no surprises, ever."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {process.map((p, i) => (
            <Reveal key={p.n} delay={(i % 3) * 0.07}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] p-6">
                <span className="pointer-events-none absolute -right-2 -top-4 font-[family-name:var(--font-display)] text-7xl font-bold text-[var(--color-line)] transition-colors group-hover:text-[var(--color-line-2)]">
                  {p.n}
                </span>
                <h4 className="relative font-[family-name:var(--font-display)] text-lg font-semibold text-[var(--color-snow)]">
                  {p.title}
                </h4>
                <p className="relative mt-2 text-sm leading-relaxed text-[var(--color-fog)]">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Why me */}
        <div className="mt-24">
          <SectionHeading
            eyebrow="Why Work With Me"
            title={
              <>
                Partners, <span className="italic font-[family-name:var(--font-serif)] font-normal">not just vendors.</span>
              </>
            }
          />
          <div className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {whyMe.map((w, i) => (
              <Reveal key={w.title} delay={(i % 3) * 0.06}>
                <div className="flex gap-4">
                  <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full border border-[var(--color-gold)]/40 bg-[var(--color-gold)]/10 text-[var(--color-gold)]">
                    <Icon.check className="h-3.5 w-3.5" />
                  </span>
                  <div>
                    <h4 className="font-[family-name:var(--font-display)] text-base font-semibold text-[var(--color-snow)]">
                      {w.title}
                    </h4>
                    <p className="mt-1 text-sm leading-relaxed text-[var(--color-fog)]">{w.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
