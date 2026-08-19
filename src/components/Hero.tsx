import { useState } from 'react'
import { motion } from 'framer-motion'
import { Icon } from './Icons'
import { img } from '../data/projects'
import { CONTACT } from '../data/site'

const ease = [0.16, 1, 0.3, 1] as const

function ProfilePhoto() {
  const [ok, setOk] = useState(true)
  return (
    <div className="relative">
      <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-[var(--color-gold)]/30 via-transparent to-[var(--color-ember)]/20 blur-2xl" />
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.75rem] border border-[var(--color-line-2)] bg-[var(--color-surface)]">
        {ok ? (
          <img
            src={img('profile.png')}
            alt="Kaushil Prajapati"
            onError={() => setOk(false)}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-[var(--color-surface-2)] to-[var(--color-ink)]">
            <span className="font-[family-name:var(--font-display)] text-6xl font-bold text-gradient-gold">KP</span>
            <span className="px-6 text-center text-xs text-[var(--color-fog)]">
              Add your photo at <code className="text-[var(--color-gold)]">public/profile.png</code>
            </span>
          </div>
        )}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--color-ink)]/60 via-transparent to-transparent" />
      </div>

      <div className="card-glass absolute -bottom-5 -left-5 flex items-center gap-2.5 rounded-2xl px-4 py-3 shadow-2xl">
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
        </span>
        <span className="text-xs font-medium text-[var(--color-mist)]">Available for freelance</span>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      {/* ambient background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[38rem] w-[38rem] -translate-x-1/2 rounded-full bg-[var(--color-gold)] opacity-[0.08] blur-[120px] animate-float-slow" />
        <div className="absolute right-[-8rem] top-40 h-[26rem] w-[26rem] rounded-full bg-[var(--color-ember)] opacity-[0.07] blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage:
              'linear-gradient(var(--color-line) 1px, transparent 1px), linear-gradient(90deg, var(--color-line) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
            maskImage: 'radial-gradient(ellipse 70% 55% at 50% 30%, #000 0%, transparent 78%)',
            WebkitMaskImage: 'radial-gradient(ellipse 70% 55% at 50% 30%, #000 0%, transparent 78%)',
          }}
        />
      </div>

      <div className="container-x grid items-center gap-14 lg:grid-cols-[1.35fr_1fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--color-line-2)] bg-[var(--color-surface)]/60 px-3.5 py-1.5"
          >
            <Icon.spark className="h-3.5 w-3.5 text-[var(--color-gold)]" />
            <span className="text-xs font-medium text-[var(--color-mist)]">
              Web & Custom Software Development · Portfolio 2026
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.06 }}
            className="font-[family-name:var(--font-display)] text-[2.7rem] font-bold leading-[1.02] tracking-tight text-[var(--color-snow)] sm:text-6xl lg:text-[4.4rem]"
          >
            Building software
            <br />
            that <span className="text-gradient-gold">scales</span> with
            <br />
            your <span className="italic font-[family-name:var(--font-serif)] font-normal">ambition.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.16 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-[var(--color-fog)] sm:text-lg"
          >
            I'm <span className="text-[var(--color-mist)]">{CONTACT.name}</span> — a full-stack web &amp; mobile
            app developer shipping production-grade apps, SaaS products and digital platforms for clients across
            India, Australia and the Philippines.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.26 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--color-gold-bright)] to-[var(--color-gold-deep)] px-6 py-3 text-sm font-semibold text-[#1a1204] transition-transform hover:-translate-y-0.5"
            >
              View selected work
              <Icon.arrow className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-[var(--color-line-2)] px-6 py-3 text-sm font-semibold text-[var(--color-snow)] transition-colors hover:border-[var(--color-gold)] hover:text-[var(--color-gold)]"
            >
              <Icon.mail className="h-4 w-4" />
              Get in touch
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mt-11 flex flex-wrap gap-x-8 gap-y-4"
          >
            {[
              ['9', 'Production builds'],
              ['3', 'Countries served'],
              ['9', 'Industries'],
            ].map(([v, l]) => (
              <div key={l}>
                <div className="font-[family-name:var(--font-display)] text-2xl font-bold text-[var(--color-snow)]">
                  {v}
                </div>
                <div className="text-xs text-[var(--color-fog)]">{l}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.2 }}
          className="mx-auto w-full max-w-sm lg:max-w-none"
        >
          <ProfilePhoto />
        </motion.div>
      </div>
    </section>
  )
}
