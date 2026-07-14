import { Database, Globe, Layers, Server, Wrench } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { skills } from '../data/resume'

const icons = {
  Frontend: Globe,
  Backend: Server,
  Database: Database,
  Tools: Wrench,
  'Languages/Tech': Layers,
}

export default function Skills() {
  return (
    <section id="skills" className="py-28 bg-white/[0.02] border-y border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          eyebrow="Skills"
          title="My Technical Toolbox"
          description="Technologies and tools I use to design, build, and ship full-stack applications."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((group, i) => {
            const Icon = icons[group.category] ?? Layers
            return (
              <Reveal key={group.category} delay={i * 0.08}>
                <div className="glass-card rounded-2xl p-6 h-full hover:-translate-y-1 hover:border-brand-400/40 transition-all">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="grid place-items-center h-10 w-10 rounded-xl bg-gradient-to-br from-brand-500/20 to-accent-500/20 text-brand-300">
                      <Icon size={20} />
                    </span>
                    <h3 className="font-semibold text-white">{group.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
