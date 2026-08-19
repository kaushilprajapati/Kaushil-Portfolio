import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { Icon, type IconName } from './Icons'
import { stats, services } from '../data/site'

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 border-t border-[var(--color-line)] bg-[var(--color-ink-2)] py-20 md:py-28">
      <div className="container-x">
        {/* Bio */}
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <SectionHeading
            eyebrow="About Me"
            title={
              <>
                Innovative software,
                <br /> delivered with <span className="italic font-[family-name:var(--font-serif)] font-normal">craft.</span>
              </>
            }
          />
          <Reveal delay={0.1}>
            <div className="space-y-4 text-base leading-relaxed text-[var(--color-fog)]">
              <p>
                I'm a full-service web and custom software developer creating production-grade digital products for
                businesses around the world. From neighbourhood storefronts to enterprise HR platforms, I partner with
                clients to design, engineer and ship software that is fast, secure and beautiful.
              </p>
              <p>
                As an internationally educated developer, I bring global standards and craftsmanship to every
                engagement — whether the client is across the street in Vadodara or across the ocean in Sydney or
                Manila. I don't just write code; I solve business problems and stay for the long term.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Stat band */}
        <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-[var(--color-line)] bg-[var(--color-line)] lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.06}>
              <div className="h-full bg-[var(--color-ink-2)] p-6">
                <div className="font-[family-name:var(--font-display)] text-4xl font-bold text-gradient-gold">
                  {s.value}
                </div>
                <div className="mt-2 text-sm leading-snug text-[var(--color-fog)]">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Services */}
        <div className="mt-20">
          <Reveal>
            <span className="eyebrow">What I Do</span>
            <h3 className="mt-3 font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-[var(--color-snow)] sm:text-3xl">
              End-to-end product development.
            </h3>
          </Reveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => {
              const IconEl = Icon[s.icon as IconName]
              return (
                <Reveal key={s.title} delay={(i % 3) * 0.08}>
                  <div className="group h-full rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-gold)]/40">
                    <div className="grid h-11 w-11 place-items-center rounded-xl border border-[var(--color-line-2)] bg-[var(--color-ink-2)] text-[var(--color-gold)] transition-colors group-hover:border-[var(--color-gold)]/50">
                      <div className="h-5 w-5">
                        <IconEl />
                      </div>
                    </div>
                    <h4 className="mt-5 font-[family-name:var(--font-display)] text-lg font-semibold text-[var(--color-snow)]">
                      {s.title}
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--color-fog)]">{s.body}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
