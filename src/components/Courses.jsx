import { motion } from 'framer-motion'
import { Cpu, Code2, Bot, Stars } from 'lucide-react'

const courses = [
  {
    icon: Code2,
    title: 'Web Development Track',
    audience: 'Teens & Adults',
    description: 'From HTML/CSS fundamentals to React and APIs. Build a portfolio-ready project with modern tooling.',
    levels: ['Beginner', 'Intermediate', 'Advanced'],
    cta: 'View syllabus'
  },
  {
    icon: Bot,
    title: 'Robotics for Kids',
    audience: 'Ages 7–15',
    description: 'Design, build, and program robots using sensors, motors, and logic. Playful, hands-on learning.',
    levels: ['Explorer (7–9)', 'Maker (10–12)', 'Inventor (13–15)'],
    cta: 'Join a cohort'
  },
  {
    icon: Cpu,
    title: 'Private Tech Lessons',
    audience: 'All ages',
    description: '1:1 coaching tailored to your goals: coding, AI, game dev, hardware, or career prep. Flexible scheduling.',
    levels: ['Personalized'],
    cta: 'Book a session'
  }
]

export default function Courses() {
  return (
    <section id="courses" className="relative py-16 md:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(139,92,246,0.12),transparent_60%)]"></div>
      <div className="relative max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8 md:mb-12">
          <div>
            <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-white">Courses & Programs</h2>
            <p className="mt-2 text-white/70">Choose a path that fits your curiosity. Learn by building real projects.</p>
          </div>
          <a href="#contact" className="hidden md:inline-flex text-sm text-white/90 hover:text-white border border-white/20 hover:border-white/40 rounded-lg px-4 py-2 transition-colors">Get counseling</a>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {courses.map((c, idx) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.05 * idx }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl grid place-items-center bg-gradient-to-br from-indigo-500 via-blue-500 to-violet-500 text-white shadow">
                  <c.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-white">{c.title}</h3>
                  <p className="text-xs text-white/70">{c.audience}</p>
                </div>
              </div>

              <p className="mt-3 text-white/75 text-sm">{c.description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {c.levels.map((level) => (
                  <span key={level} className="text-xs px-2 py-1 rounded-full bg-white/10 text-white">{level}</span>
                ))}
              </div>

              <div className="mt-5 flex items-center justify-between">
                <a href="#contact" className="inline-flex text-sm font-semibold text-white bg-gradient-to-r from-indigo-500 via-blue-500 to-violet-500 px-4 py-2 rounded-lg shadow hover:shadow-indigo-500/25 transition-shadow">{c.cta}</a>
                <Stars className="w-4 h-4 text-indigo-300" />
              </div>

              <div className="pointer-events-none absolute -bottom-16 -left-16 w-56 h-56 rounded-full bg-gradient-to-tr from-indigo-500/25 via-blue-500/25 to-violet-500/25 blur-3xl"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
