import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import type { Project } from '../data/projects'
import { Icon } from './Icons'

type Props = { project: Project | null; onClose: () => void }

export default function ProjectModal({ project, onClose }: Props) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    if (project) {
      document.addEventListener('keydown', onKey)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [project, onClose])

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[100] overflow-y-auto overscroll-contain bg-[var(--color-ink)]/85 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
        >
          <div className="flex min-h-full items-start justify-center p-4 sm:p-6 md:p-10">
            <motion.article
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, y: 30, scale: 0.985 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.985 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-4xl overflow-hidden rounded-3xl border border-[var(--color-line-2)] bg-[var(--color-ink-2)] shadow-2xl"
            >
              {/* header cover */}
              <div className="relative">
                <div className="aspect-[16/8] w-full overflow-hidden">
                  <img src={project.cover} alt={project.name} className="h-full w-full object-cover object-top" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-ink-2)] via-[var(--color-ink-2)]/30 to-transparent" />
                <button
                  aria-label="Close"
                  onClick={onClose}
                  className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full border border-[var(--color-line-2)] bg-[var(--color-ink)]/70 text-[var(--color-snow)] backdrop-blur transition-colors hover:border-[var(--color-gold)] hover:text-[var(--color-gold)]"
                >
                  <Icon.close className="h-5 w-5" />
                </button>

                <div className="absolute bottom-0 left-0 w-full p-6 sm:p-8">
                  <div className="mb-3 flex flex-wrap items-center gap-2">
                    <span
                      className="rounded-full border px-2.5 py-1 text-[0.68rem] font-semibold uppercase tracking-wider"
                      style={{ color: project.accent, borderColor: `${project.accent}55`, background: `${project.accent}14` }}
                    >
                      {project.badge}
                    </span>
                    <span className="text-xs text-[var(--color-fog)]">{project.category}</span>
                  </div>
                  <h3 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-[var(--color-snow)] sm:text-4xl">
                    {project.name}
                  </h3>
                </div>
              </div>

              <div className="p-6 sm:p-8">
                {/* meta */}
                <div className="mb-8 grid grid-cols-2 gap-x-6 gap-y-4 border-b border-[var(--color-line)] pb-8 sm:grid-cols-3">
                  <Meta label="Region" value={project.region} />
                  <Meta label="Industry" value={project.industry} />
                  <div>
                    <div className="text-[0.68rem] font-semibold uppercase tracking-wider text-[var(--color-fog)]">Live</div>
                    <a
                      href={`https://${project.live}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 inline-flex items-center gap-1 text-sm font-medium text-[var(--color-gold)] hover:underline"
                    >
                      {project.live}
                      <Icon.arrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>

                <p className="text-lg leading-relaxed text-[var(--color-mist)]">{project.tagline}</p>

                <div className="mt-8 grid gap-8 sm:grid-cols-2">
                  <div>
                    <h4 className="eyebrow mb-3">The Challenge</h4>
                    <p className="text-sm leading-relaxed text-[var(--color-fog)]">{project.challenge}</p>
                  </div>
                  <div>
                    <h4 className="eyebrow mb-3">My Solution</h4>
                    <p className="text-sm leading-relaxed text-[var(--color-fog)]">{project.solution}</p>
                  </div>
                </div>

                {/* highlights */}
                <div className="mt-8">
                  <h4 className="eyebrow mb-4">Highlights</h4>
                  <ul className="grid gap-2.5 sm:grid-cols-2">
                    {project.highlights.map((h) => (
                      <li key={h} className="flex gap-2.5 text-sm text-[var(--color-mist)]">
                        <span className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full" style={{ background: `${project.accent}22`, color: project.accent }}>
                          <Icon.check className="h-3 w-3" />
                        </span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* stack */}
                <div className="mt-8 flex flex-wrap gap-2">
                  {project.stack.map((s) => (
                    <span key={s} className="rounded-full border border-[var(--color-line-2)] bg-[var(--color-surface)] px-3 py-1 text-xs text-[var(--color-mist)]">
                      {s}
                    </span>
                  ))}
                </div>

                {/* gallery */}
                <div className="mt-10">
                  <h4 className="eyebrow mb-4">Screens</h4>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {project.shots.map((shot) => (
                      <figure key={shot.src} className="overflow-hidden rounded-xl border border-[var(--color-line)] bg-[var(--color-surface)]">
                        <img src={shot.src} alt={shot.caption} loading="lazy" className="w-full object-cover object-top" />
                        <figcaption className="px-3 py-2.5 text-xs text-[var(--color-fog)]">{shot.caption}</figcaption>
                      </figure>
                    ))}
                  </div>
                </div>

                <div className="mt-10 flex flex-wrap gap-3">
                  <a
                    href={`https://${project.live}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--color-gold-bright)] to-[var(--color-gold-deep)] px-5 py-2.5 text-sm font-semibold text-[#1a1204] transition-transform hover:-translate-y-0.5"
                  >
                    Visit live site
                    <Icon.arrowUpRight className="h-4 w-4" />
                  </a>
                  <button
                    onClick={onClose}
                    className="inline-flex items-center gap-2 rounded-full border border-[var(--color-line-2)] px-5 py-2.5 text-sm font-semibold text-[var(--color-snow)] transition-colors hover:border-[var(--color-gold)]"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.article>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-[0.68rem] font-semibold uppercase tracking-wider text-[var(--color-fog)]">{label}</div>
      <div className="mt-1 text-sm font-medium text-[var(--color-mist)]">{value}</div>
    </div>
  )
}
