import { motion } from 'framer-motion'
import { CalendarDays, MapPin, Clock } from 'lucide-react'

const events = [
  {
    title: 'Weekend Robotics Bootcamp',
    date: 'Sat, Dec 7',
    time: '10:00 AM – 2:00 PM',
    location: 'InnoTwist Lab',
    tag: 'Kids 8–14',
    highlight: true,
    description: 'Hands-on building and programming of autonomous bots using sensors and block-based coding.'
  },
  {
    title: 'Frontend in a Day: React Sprint',
    date: 'Sun, Dec 15',
    time: '9:30 AM – 5:30 PM',
    location: 'Innovation Hub',
    tag: 'Teens & Adults',
    highlight: false,
    description: 'A fast-paced workshop building a modern web app with React, Tailwind, and APIs.'
  },
  {
    title: 'Tech Meetup: AI for Beginners',
    date: 'Fri, Dec 20',
    time: '6:00 PM – 8:00 PM',
    location: 'Downtown Space',
    tag: 'Open to all',
    highlight: false,
    description: 'Demystifying AI with fun demos and career insights. Snacks and networking included!'
  }
]

export default function Events() {
  return (
    <section id="events" className="relative py-16 md:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.12),transparent_60%)]"></div>
      <div className="relative max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8 md:mb-12">
          <div>
            <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-white">Upcoming Events</h2>
            <p className="mt-2 text-white/70">Workshops, bootcamps, and meetups to spark ideas and build skills.</p>
          </div>
          <a href="#contact" className="hidden md:inline-flex text-sm text-white/90 hover:text-white border border-white/20 hover:border-white/40 rounded-lg px-4 py-2 transition-colors">Host an event</a>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {events.map((e, idx) => (
            <motion.div
              key={e.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.05 * idx }}
              className={`relative overflow-hidden rounded-2xl border ${e.highlight ? 'border-indigo-400/30 bg-gradient-to-br from-indigo-500/15 via-blue-500/10 to-violet-500/15' : 'border-white/10 bg-white/5'} backdrop-blur-xl p-6`}
            >
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold px-2 py-1 rounded-full bg-white/10 text-white">{e.tag}</span>
              </div>
              <h3 className="mt-3 text-lg md:text-xl font-bold text-white">{e.title}</h3>
              <p className="mt-2 text-white/70 text-sm">{e.description}</p>

              <div className="mt-4 space-y-2 text-white/80 text-sm">
                <div className="flex items-center gap-2"><CalendarDays className="w-4 h-4"/> {e.date}</div>
                <div className="flex items-center gap-2"><Clock className="w-4 h-4"/> {e.time}</div>
                <div className="flex items-center gap-2"><MapPin className="w-4 h-4"/> {e.location}</div>
              </div>

              <div className="mt-5">
                <a href="#contact" className="inline-flex text-sm font-semibold text-white bg-gradient-to-r from-indigo-500 via-blue-500 to-violet-500 px-4 py-2 rounded-lg shadow hover:shadow-indigo-500/25 transition-shadow">Reserve spot</a>
              </div>

              <div className="pointer-events-none absolute -bottom-16 -right-16 w-56 h-56 rounded-full bg-gradient-to-tr from-indigo-500/25 via-blue-500/25 to-violet-500/25 blur-3xl"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
