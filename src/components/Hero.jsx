import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[80vh] md:min-h-[90vh] overflow-hidden">
      {/* Night sky gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f0c1b] via-[#0b0a12] to-[#0a0a0f]"/>
      {/* Aurora + rune circles */}
      <div className="absolute inset-0 opacity-70 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.25),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(147,112,219,0.25),transparent_40%),radial-gradient(circle_at_50%_80%,rgba(59,130,246,0.25),transparent_40%)]"/>
      <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] rounded-full border border-amber-50/10"/>

      {/* 3D Spline scene (still fits the vibe as a magical construct) */}
      <div className="relative z-10 h-[55vh] md:h-[65vh] lg:h-[70vh]">
        <Spline scene="https://prod.spline.design/OG17yM2eUIs8MUmA/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 md:px-6 lg:px-8 -mt-16 md:-mt-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="bg-[#110f1a]/60 backdrop-blur-xl border border-amber-50/10 rounded-3xl p-6 md:p-10 shadow-2xl"
        >
          <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-center">
            <div>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-amber-100 leading-tight">
                Enlist in the Guild of Makers.
              </h1>
              <p className="mt-4 md:mt-6 text-base md:text-lg text-amber-100/80">
                Forge your skills in the Academy, take on quests, and craft artifacts with code and gears.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#courses" className="inline-flex items-center justify-center px-5 py-3 rounded-xl text-[#0b0a12] font-semibold bg-amber-300 shadow hover:shadow-amber-400/30 transition-shadow">
                  View Tomes
                </a>
                <a href="#events" className="inline-flex items-center justify-center px-5 py-3 rounded-xl text-amber-100/90 hover:text-amber-100 border border-amber-50/20 hover:border-amber-50/40 transition-colors">
                  Join a Quest
                </a>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3 text-center">
              {[
                { label: 'Guild Ranks', value: 'Novice → Archmage' },
                { label: 'Workshops', value: 'Tavern to Tower' },
                { label: 'Artifacts', value: 'Projects & Portfolios' },
              ].map((item) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="bg-[#140f1f]/70 rounded-2xl border border-amber-50/10 p-4 md:p-6"
                >
                  <p className="text-xs md:text-sm text-amber-100/70">{item.label}</p>
                  <p className="mt-1 text-sm md:text-base font-semibold text-amber-100">{item.value}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
