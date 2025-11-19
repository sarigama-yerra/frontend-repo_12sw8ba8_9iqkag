import { motion } from 'framer-motion'
import { BookOpenCheck, Wand2, Crown, Stars } from 'lucide-react'

const courses = [
  {
    icon: Wand2,
    title: 'Runes of the Web',
    audience: 'Adepts & Sages',
    description: 'From sigils of HTML/CSS to React enchantments. Scribe a living codex powered by APIs.',
    levels: ['Novice', 'Adept', 'Archmage'],
    cta: 'View the codex'
  },
  {
    icon: BookOpenCheck,
    title: 'Clockwork & Familiars',
    audience: 'Younglings 7–15',
    description: 'Design, assemble, and charm mechanical companions with sensors, gears, and logic.',
    levels: ['Explorer (7–9)', 'Maker (10–12)', 'Inventor (13–15)'],
    cta: 'Join a guild'
  },
  {
    icon: Crown,
    title: 'Private Mentorship',
    audience: 'All ranks',
    description: 'One-on-one tutelage tailored to your quest: gamecraft, alchemy of AI, or artisanal hardware.',
    levels: ['Personalized questline'],
    cta: 'Book a council'
  }
]

export default function Courses() {
  return (
    <section id="courses" className="relative py-16 md:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(147,112,219,0.12),transparent_60%)]"/>
      <div className="relative max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8 md:mb-12">
          <div>
            <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-amber-100">Academy Tomes</h2>
            <p className="mt-2 text-amber-100/70">Choose your discipline and ascend through the ranks.</p>
          </div>
          <a href="#contact" className="hidden md:inline-flex text-sm text-amber-100/90 hover:text-amber-100 border border-amber-50/20 hover:border-amber-50/40 rounded-lg px-4 py-2 transition-colors">Request a syllabus</a>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {courses.map((c, idx) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.05 * idx }}
              className="relative overflow-hidden rounded-2xl border border-amber-50/10 bg-[#110f1a]/60 backdrop-blur-xl p-6"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl grid place-items-center bg-amber-300 text-[#0b0a12] shadow ring-1 ring-amber-200/50">
                  <c.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-amber-100">{c.title}</h3>
                  <p className="text-xs text-amber-100/70">{c.audience}</p>
                </div>
              </div>

              <p className="mt-3 text-amber-100/80 text-sm">{c.description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {c.levels.map((level) => (
                  <span key={level} className="text-xs px-2 py-1 rounded-full bg-amber-50/10 text-amber-100">{level}</span>
                ))}
              </div>

              <div className="mt-5 flex items-center justify-between">
                <a href="#contact" className="inline-flex text-sm font-semibold text-[#0b0a12] bg-amber-300 px-4 py-2 rounded-lg shadow hover:shadow-amber-400/25 transition-shadow">{c.cta}</a>
                <Stars className="w-4 h-4 text-amber-200" />
              </div>

              <div className="pointer-events-none absolute -bottom-16 -left-16 w-56 h-56 rounded-full bg-gradient-to-tr from-amber-300/25 via-violet-500/15 to-indigo-500/15 blur-3xl"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
