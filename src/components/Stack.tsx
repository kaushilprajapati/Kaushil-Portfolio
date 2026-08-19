import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { techStack, philosophy } from '../data/site'

export default function Stack() {
  return (
    <section id="stack" className="scroll-mt-24 py-20 md:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Technology Stack"
          title={
            <>
              The right tool <span className="text-gradient-gold">for the job.</span>
            </>
          }
          intro="Proven, modern and built to last — from pixel to production."
        />

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {techStack.map((t, i) => (
            <Reveal key={t.group} delay={(i % 3) * 0.06}>
              <div className="h-full rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] p-5">
                <div className="text-[0.68rem] font-semibold uppercase tracking-wider text-[var(--color-gold)]">
                  {t.group}
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {t.items.map((it) => (
                    <span
                      key={it}
                      className="rounded-lg border border-[var(--color-line)] bg-[var(--color-ink-2)] px-2.5 py-1 text-sm text-[var(--color-mist)]"
                    >
                      {it}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Design philosophy */}
        <div className="mt-24">
          <SectionHeading
            eyebrow="Design Philosophy"
            title={
              <>
                Software is judged in the <span className="italic font-[family-name:var(--font-serif)] font-normal">first five seconds.</span>
              </>
            }
            intro="I design to win that moment — and keep it. Every interface I ship is built on a few non-negotiable principles."
          />

          <div className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {philosophy.map((p, i) => (
              <Reveal key={p.n} delay={(i % 3) * 0.07}>
                <div className="group border-t border-[var(--color-line)] pt-5">
                  <div className="font-[family-name:var(--font-display)] text-sm font-semibold text-[var(--color-gold)]">
                    {p.n}
                  </div>
                  <h4 className="mt-2 font-[family-name:var(--font-display)] text-lg font-semibold text-[var(--color-snow)]">
                    {p.title}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--color-fog)]">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
