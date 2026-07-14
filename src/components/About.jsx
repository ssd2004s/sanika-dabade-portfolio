import { Code2, GraduationCap, Layers, MapPin } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { profile } from '../data/resume'

const stats = [
  { icon: Layers, label: 'Focus', value: 'Full Stack (Java + React)' },
  { icon: Code2, label: 'Also skilled in', value: 'Shopify & WordPress' },
  { icon: GraduationCap, label: 'Education', value: 'BCA, CGPA 8.36' },
  { icon: MapPin, label: 'Location', value: profile.location },
]

export default function About() {
  return (
    <section id="about" className="py-28">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          eyebrow="About Me"
          title="Turning ideas into working software"
          description={profile.summary}
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className="glass-card rounded-2xl p-6 h-full hover:border-brand-400/40 hover:bg-white/[0.07] transition-all">
                <s.icon className="text-brand-400" size={26} />
                <p className="mt-4 text-xs uppercase tracking-wider text-slate-500">
                  {s.label}
                </p>
                <p className="mt-1 font-semibold text-white">{s.value}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
