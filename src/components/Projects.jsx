import { ArrowUpRight, Sparkles } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { projects } from '../data/resume'

export default function Projects() {
  return (
    <section id="projects" className="py-28 bg-white/[0.02] border-y border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          eyebrow="Projects"
          title="Things I've Built"
          description="A mix of full-stack applications and frontend-focused sites across React, Spring Boot, Shopify, and WordPress."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => {
            const CardTag = project.link ? 'a' : 'div'
            const linkProps = project.link
              ? { href: project.link, target: '_blank', rel: 'noreferrer' }
              : {}

            return (
              <Reveal key={project.title} delay={i * 0.08}>
                <CardTag
                  {...linkProps}
                  className="group glass-card rounded-2xl p-6 h-full flex flex-col hover:-translate-y-1.5 hover:border-brand-400/40 transition-all"
                >
                  <div className="flex items-start justify-between">
                    <span className="grid place-items-center h-11 w-11 rounded-xl bg-gradient-to-br from-brand-500/20 to-accent-500/20 text-brand-300">
                      {project.featured ? (
                        <Sparkles size={19} />
                      ) : (
                        <span className="font-display font-bold">
                          {project.title[0]}
                        </span>
                      )}
                    </span>
                    <span className="flex items-center gap-2">
                      {project.link && (
                        <span className="flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-1 text-[11px] font-medium text-emerald-400">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          Live
                        </span>
                      )}
                      <ArrowUpRight
                        size={18}
                        className="text-slate-600 group-hover:text-brand-400 group-hover:rotate-45 transition-all"
                      />
                    </span>
                  </div>

                  <h3 className="mt-5 font-semibold text-white text-lg">
                    {project.title}
                  </h3>

                  <ul className="mt-3 space-y-2 flex-1">
                    {project.points.map((point) => (
                      <li key={point} className="text-sm text-slate-400 leading-relaxed">
                        • {point}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-slate-300"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </CardTag>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
