import { motion } from 'framer-motion'
import { ArrowDown, Mail } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { profile } from '../data/resume'

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-brand-500/30 blur-3xl animate-blob" />
        <div className="absolute top-1/3 -right-24 h-96 w-96 rounded-full bg-accent-500/20 blur-3xl animate-blob [animation-delay:4s]" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-brand-400/10 blur-3xl animate-blob [animation-delay:8s]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 w-full grid md:grid-cols-[1.2fr_0.8fr] items-center gap-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="inline-flex items-center gap-2 rounded-full glass-card px-4 py-1.5 text-sm text-brand-300 mb-6">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Open to entry-level opportunities
          </p>

          <h1 className="font-display text-4xl sm:text-6xl font-bold leading-[1.05] text-white">
            Hi, I'm <span className="gradient-text">{profile.name.split(' ')[0]}</span>
            <br />
            {profile.title}
          </h1>

          <p className="mt-6 max-w-xl text-lg text-slate-400 leading-relaxed">
            Building RESTful web applications with{' '}
            <span className="text-slate-200 font-medium">Spring Boot</span>,{' '}
            <span className="text-slate-200 font-medium">React.js</span>, and SQL —
            with a side of Shopify &amp; WordPress frontend craft.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center rounded-full bg-gradient-to-r from-brand-500 to-accent-500 px-7 py-3 font-semibold text-white shadow-lg shadow-brand-500/25 hover:scale-105 hover:shadow-brand-500/40 transition-all"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-full border border-white/15 px-7 py-3 font-semibold text-slate-200 hover:bg-white/5 hover:border-white/30 transition-all"
            >
              Get In Touch
            </a>
          </div>

          <div className="mt-10 flex items-center gap-5">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <FaGithub size={22} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={22} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="text-slate-400 hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail size={22} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto"
        >
          <div className="relative h-64 w-64 sm:h-80 sm:w-80 animate-float">
            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-brand-500 to-accent-500 opacity-20 blur-2xl" />
            <div className="relative h-full w-full rounded-[2.5rem] glass-card flex items-center justify-center">
              <span className="font-display text-7xl sm:text-8xl font-bold gradient-text">
                SD
              </span>
            </div>
            <div className="absolute -bottom-4 -left-4 glass-card rounded-2xl px-4 py-3 text-left shadow-xl">
              <p className="text-xs text-slate-400">Currently</p>
              <p className="text-sm font-semibold text-white">Full Stack Dev</p>
            </div>
            <div className="absolute -top-4 -right-4 glass-card rounded-2xl px-4 py-3 text-left shadow-xl">
              <p className="text-xs text-slate-400">Based in</p>
              <p className="text-sm font-semibold text-white">Pune, IN</p>
            </div>
          </div>
        </motion.div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 hover:text-white transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown size={22} />
      </a>
    </section>
  )
}
