import { Mail, Phone, Send } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { profile } from '../data/resume'

const mailtoHref = `mailto:${profile.email}?subject=${encodeURIComponent(
  "Let's connect — opportunity for you",
)}&body=${encodeURIComponent('Hi Sanika,\n\n')}`

const links = [
  { icon: Mail, label: 'Email', value: profile.email, href: mailtoHref },
  { icon: Phone, label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s+/g, '')}` },
  { icon: FaLinkedin, label: 'LinkedIn', value: 'sanikadabade', href: profile.linkedin },
  { icon: FaGithub, label: 'GitHub', value: 'ssd2004s', href: profile.github },
]

export default function Contact() {
  return (
    <section id="contact" className="py-28">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeading
          eyebrow="Contact"
          title="Let's Build Something Together"
          description="I'm actively looking for entry-level opportunities. Reach out and let's talk about how I can contribute to your team."
        />

        <Reveal>
          <div className="glass-card rounded-3xl p-8 sm:p-10">
            <div className="grid sm:grid-cols-2 gap-4">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target={l.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 hover:border-brand-400/40 hover:bg-white/[0.06] transition-all"
                >
                  <span className="grid place-items-center h-11 w-11 shrink-0 rounded-xl bg-gradient-to-br from-brand-500/20 to-accent-500/20 text-brand-300">
                    <l.icon size={19} />
                  </span>
                  <span className="min-w-0">
                    <p className="text-xs text-slate-500">{l.label}</p>
                    <p className="text-sm font-medium text-white truncate">{l.value}</p>
                  </span>
                </a>
              ))}
            </div>

            <a
              href={mailtoHref}
              className="mt-8 flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-500 to-accent-500 px-7 py-3.5 font-semibold text-white shadow-lg shadow-brand-500/25 hover:scale-[1.02] hover:shadow-brand-500/40 transition-all"
            >
              <Send size={18} />
              Send me an email
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
