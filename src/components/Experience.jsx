import { Briefcase, CheckCircle2, MapPin } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { experience } from '../data/resume'

export default function Experience() {
  return (
    <section id="experience" className="py-28">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've Worked"
          description="Hands-on internship experience across theme development and frontend engineering."
        />

        <div className="relative border-l border-white/10 pl-8 space-y-10">
          {experience.map((job, i) => (
            <Reveal key={job.role} delay={i * 0.1} className="relative">
              <span className="absolute -left-[41px] top-1 grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-brand-500 to-accent-500 shadow-lg shadow-brand-500/30">
                <Briefcase size={15} className="text-white" />
              </span>

              <div className="glass-card rounded-2xl p-7">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold text-white">{job.role}</h3>
                    <p className="text-brand-300 font-medium">{job.company}</p>
                  </div>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-400 whitespace-nowrap">
                    {job.period}
                  </span>
                </div>

                <p className="mt-2 flex items-center gap-1.5 text-sm text-slate-500">
                  <MapPin size={14} /> {job.location}
                </p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {job.stack.split(', ').map((s) => (
                    <span
                      key={s}
                      className="rounded-full bg-brand-500/10 text-brand-300 px-3 py-1 text-xs"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <ul className="mt-5 space-y-2.5">
                  {job.points.map((point) => (
                    <li key={point} className="flex items-start gap-2.5 text-sm text-slate-400">
                      <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-accent-400" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
