import Reveal from './Reveal'

export default function SectionHeading({ eyebrow, title, description }) {
  return (
    <Reveal className="text-center max-w-2xl mx-auto mb-14">
      <p className="text-sm font-semibold uppercase tracking-widest text-brand-400 mb-3">
        {eyebrow}
      </p>
      <h2 className="section-heading">{title}</h2>
      {description && (
        <p className="mt-4 text-slate-400 leading-relaxed">{description}</p>
      )}
    </Reveal>
  )
}
