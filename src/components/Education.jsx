import { Award, GraduationCap, Languages as LanguagesIcon } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { education, training, languages } from '../data/resume'

export default function Education() {
  return (
    <section id="education" className="py-28">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          eyebrow="Education & Training"
          title="Academic Background"
        />

        <div className="grid lg:grid-cols-3 gap-6">
          <Reveal className="lg:col-span-2">
            <div className="glass-card rounded-2xl p-7 h-full">
              <div className="flex items-center gap-3 mb-6">
                <span className="grid place-items-center h-10 w-10 rounded-xl bg-gradient-to-br from-brand-500/20 to-accent-500/20 text-brand-300">
                  <GraduationCap size={20} />
                </span>
                <h3 className="font-semibold text-white">Education</h3>
              </div>

              <div className="space-y-6">
                {education.map((ed) => (
                  <div
                    key={ed.school}
                    className="flex flex-wrap items-start justify-between gap-2 border-b border-white/5 pb-5 last:border-0 last:pb-0"
                  >
                    <div>
                      <p className="font-medium text-white">{ed.school}</p>
                      <p className="text-sm text-slate-400">{ed.degree}</p>
                      <p className="text-xs text-slate-500 mt-1">{ed.location}</p>
                    </div>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-400 whitespace-nowrap">
                      {ed.period}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="glass-card rounded-2xl p-7 h-full">
              <div className="flex items-center gap-3 mb-6">
                <span className="grid place-items-center h-10 w-10 rounded-xl bg-gradient-to-br from-brand-500/20 to-accent-500/20 text-brand-300">
                  <LanguagesIcon size={20} />
                </span>
                <h3 className="font-semibold text-white">Languages</h3>
              </div>
              <div className="space-y-4">
                {languages.map((lang) => (
                  <div key={lang.name} className="flex items-center justify-between">
                    <span className="text-sm text-slate-300">{lang.name}</span>
                    <span className="text-xs text-brand-300 bg-brand-500/10 rounded-full px-3 py-1">
                      {lang.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="mt-6">
          <div className="glass-card rounded-2xl p-7">
            <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
              <div className="flex items-center gap-3">
                <span className="grid place-items-center h-10 w-10 rounded-xl bg-gradient-to-br from-brand-500/20 to-accent-500/20 text-brand-300">
                  <Award size={20} />
                </span>
                <div>
                  <h3 className="font-semibold text-white">{training.title}</h3>
                  <p className="text-sm text-brand-300">
                    {training.provider} · {training.location}
                  </p>
                </div>
              </div>
              <span className="rounded-full bg-emerald-500/10 text-emerald-400 px-3 py-1 text-xs font-medium">
                {training.status}
              </span>
            </div>
            <ul className="grid sm:grid-cols-3 gap-3">
              {training.points.map((p) => (
                <li key={p} className="text-sm text-slate-400 leading-relaxed">
                  • {p}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
