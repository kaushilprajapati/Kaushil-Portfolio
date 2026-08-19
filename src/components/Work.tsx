import { useState } from 'react'
import { motion } from 'framer-motion'
import { projects, type Project } from '../data/projects'
import SectionHeading from './SectionHeading'
import ProjectModal from './ProjectModal'
import { Icon } from './Icons'

function Card({ project, onOpen, i }: { project: Project; onOpen: () => void; i: number }) {
  return (
    <motion.button
      onClick={onOpen}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: (i % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] text-left transition-colors duration-300 hover:border-[var(--color-line-2)]"
    >
      <div className="relative aspect-[16/11] overflow-hidden">
        <img
          src={project.cover}
          alt={project.name}
          loading="lazy"
          className="h-full w-full object-cover object-top transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-surface)] via-transparent to-transparent opacity-90" />
        <span
          className="absolute left-4 top-4 rounded-full border px-2.5 py-1 text-[0.62rem] font-semibold uppercase tracking-wider backdrop-blur"
          style={{ color: project.accent, borderColor: `${project.accent}55`, background: '#0a0a0baa' }}
        >
          {project.badge}
        </span>
        <span className="absolute right-4 top-4 font-[family-name:var(--font-display)] text-sm font-medium text-[var(--color-fog)]">
          {project.index}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold tracking-tight text-[var(--color-snow)]">
          {project.name}
        </h3>
        <p className="mt-1 text-xs text-[var(--color-fog)]">{project.category}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.stack.slice(0, 3).map((s) => (
            <span key={s} className="rounded-md border border-[var(--color-line)] bg-[var(--color-ink-2)] px-2 py-0.5 text-[0.68rem] text-[var(--color-mist)]">
              {s}
            </span>
          ))}
        </div>

        <div className="mt-5 flex items-center justify-between border-t border-[var(--color-line)] pt-4">
          <span className="flex items-center gap-1.5 text-xs text-[var(--color-fog)]">
            <Icon.pin className="h-3.5 w-3.5" />
            {project.region}
          </span>
          <span className="flex items-center gap-1.5 text-xs font-medium text-[var(--color-gold)] transition-transform group-hover:translate-x-0.5">
            Case study
            <Icon.arrow className="h-3.5 w-3.5" />
          </span>
        </div>
      </div>
    </motion.button>
  )
}

export default function Work() {
  const [active, setActive] = useState<Project | null>(null)

  return (
    <section id="work" className="scroll-mt-24 py-20 md:py-28">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Featured Work"
            title={
              <>
                Selected builds, shipped
                <br className="hidden sm:block" /> to <span className="text-gradient-gold">production.</span>
              </>
            }
          />
          <p className="max-w-xs text-sm leading-relaxed text-[var(--color-fog)]">
            Nine flagship projects across HR tech, food, sustainability, SaaS, sports, logistics, finance and
            fitness — each live, each solving a real business problem.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Card key={p.slug} project={p} i={i} onOpen={() => setActive(p)} />
          ))}
        </div>
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  )
}
