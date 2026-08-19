import Reveal from './Reveal'

type Props = {
  eyebrow: string
  title: React.ReactNode
  intro?: string
  align?: 'left' | 'center'
}

export default function SectionHeading({ eyebrow, title, intro, align = 'left' }: Props) {
  return (
    <Reveal>
      <div className={align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
        <span className="eyebrow">{eyebrow}</span>
        <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-bold leading-[1.1] tracking-tight text-[var(--color-snow)] sm:text-4xl md:text-[2.9rem]">
          {title}
        </h2>
        {intro && <p className="mt-4 text-base leading-relaxed text-[var(--color-fog)]">{intro}</p>}
      </div>
    </Reveal>
  )
}
