import { motion } from 'framer-motion'
import { CalendarDays, MapPin, Clock, ScrollText, Shield } from 'lucide-react'

const events = [
  {
    title: 'Forge & Gears Workshop',
    date: 'Sat, Dec 7',
    time: '10:00 – 14:00',
    location: 'Guild Hall',
    tag: 'Novices 8–14',
    highlight: true,
    description: 'Hammer logic and assemble clockwork familiars. Basic runes and circuits included.'
  },
  {
    title: 'React of the Realm: One-Day Quest',
    date: 'Sun, Dec 15',
    time: '09:30 – 17:30',
    location: 'Arcane Tower',
    tag: 'Adept & Above',
    highlight: false,
    description: 'Conjure interfaces, bind Tailwind sigils, and bargain with APIs to build a living grimoire.'
  },
  {
    title: 'Fireside Council: AI for Adventurers',
    date: 'Fri, Dec 20',
    time: '18:00 – 20:00',
    location: 'Tavern Commons',
    tag: 'Open Council',
    highlight: false,
    description: 'Stories, demos, and counsel on familiars of prediction. Mead provided.'
  }
]

export default function Events() {
  return (
    <section id="events" className="relative py-16 md:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(251,191,36,0.10),transparent_60%)]"/>
      <div className="relative max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8 md:mb-12">
          <div>
            <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-amber-100">Guild Quests</h2>
            <p className="mt-2 text-amber-100/70">Workshops, expeditions, and councils for every rank.</p>
          </div>
          <a href="#contact" className="hidden md:inline-flex text-sm text-amber-100/90 hover:text-amber-100 border border-amber-50/20 hover:border-amber-50/40 rounded-lg px-4 py-2 transition-colors">Propose a quest</a>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {events.map((e, idx) => (
            <motion.div
              key={e.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.05 * idx }}
              className={`relative overflow-hidden rounded-2xl border ${e.highlight ? 'border-amber-300/30 bg-gradient-to-br from-amber-300/10 via-violet-500/10 to-indigo-500/10' : 'border-amber-50/10 bg-[#120f1a]/60'} backdrop-blur-xl p-6`}
            >
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold px-2 py-1 rounded-full bg-amber-50/10 text-amber-100">{e.tag}</span>
                {e.highlight ? <Shield className="w-4 h-4 text-amber-300"/> : <ScrollText className="w-4 h-4 text-amber-200"/>}
              </div>
              <h3 className="mt-3 text-lg md:text-xl font-bold text-amber-100">{e.title}</h3>
              <p className="mt-2 text-amber-100/80 text-sm">{e.description}</p>

              <div className="mt-4 space-y-2 text-amber-100/90 text-sm">
                <div className="flex items-center gap-2"><CalendarDays className="w-4 h-4"/> {e.date}</div>
                <div className="flex items-center gap-2"><Clock className="w-4 h-4"/> {e.time}</div>
                <div className="flex items-center gap-2"><MapPin className="w-4 h-4"/> {e.location}</div>
              </div>

              <div className="mt-5">
                <a href="#contact" className="inline-flex text-sm font-semibold text-[#0b0a12] bg-amber-300 px-4 py-2 rounded-lg shadow hover:shadow-amber-400/25 transition-shadow">Reserve seat at the table</a>
              </div>

              <div className="pointer-events-none absolute -bottom-16 -right-16 w-56 h-56 rounded-full bg-gradient-to-tr from-amber-300/25 via-violet-500/20 to-indigo-500/20 blur-3xl"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
