import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[80vh] md:min-h-[90vh] overflow-hidden">
      {/* Gradient aura background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-slate-900 to-slate-950"></div>
      <div className="absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.35),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(59,130,246,0.35),transparent_40%),radial-gradient(circle_at_50%_80%,rgba(139,92,246,0.35),transparent_40%)]"></div>

      {/* 3D Spline scene */}
      <div className="relative z-10 h-[55vh] md:h-[65vh] lg:h-[70vh]">
        <Spline scene="https://prod.spline.design/OG17yM2eUIs8MUmA/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Content overlay */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 md:px-6 lg:px-8 -mt-16 md:-mt-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-10 shadow-2xl"
        >
          <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-center">
            <div>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Ignite curiosity with code, robots, and creativity.
              </h1>
              <p className="mt-4 md:mt-6 text-base md:text-lg text-white/80">
                InnoTwist is a tech education center offering web dev courses, robotics programs for kids, and personalized private lessons that make technology fun and accessible for everyone.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#courses" className="inline-flex items-center justify-center px-5 py-3 rounded-xl text-white font-semibold bg-gradient-to-r from-indigo-500 via-blue-500 to-violet-500 shadow hover:shadow-indigo-500/30 transition-shadow">
                  Explore Courses
                </a>
                <a href="#events" className="inline-flex items-center justify-center px-5 py-3 rounded-xl text-white/90 hover:text-white border border-white/20 hover:border-white/40 transition-colors">
                  Upcoming Events
                </a>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3 text-center">
              {[
                { label: 'Web Dev', value: 'Beginner → Advanced' },
                { label: 'Robotics', value: 'Ages 7–15' },
                { label: '1:1 Lessons', value: 'Custom Roadmaps' },
              ].map((item) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="bg-white/5 rounded-2xl border border-white/10 p-4 md:p-6"
                >
                  <p className="text-xs md:text-sm text-white/60">{item.label}</p>
                  <p className="mt-1 text-sm md:text-base font-semibold text-white">{item.value}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
