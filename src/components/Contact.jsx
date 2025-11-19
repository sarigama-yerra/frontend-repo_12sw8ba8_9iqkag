import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="relative py-16 md:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.12),transparent_60%)]"></div>
      <div className="relative max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6"
          >
            <h3 className="text-xl md:text-2xl font-bold text-white">Get in touch</h3>
            <p className="mt-2 text-white/70">Have questions, want a syllabus, or ready to enroll? Send us a message.</p>

            <form className="mt-6 grid gap-4">
              <input placeholder="Your name" className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/10 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-indigo-400" />
              <input placeholder="Email or phone" className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/10 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-indigo-400" />
              <select className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-indigo-400">
                <option className="text-slate-900">Web Development</option>
                <option className="text-slate-900">Robotics for Kids</option>
                <option className="text-slate-900">Private Lessons</option>
                <option className="text-slate-900">General</option>
              </select>
              <textarea rows={4} placeholder="Tell us what you're excited to build" className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/10 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-indigo-400" />
              <button type="button" className="inline-flex justify-center px-5 py-3 rounded-xl text-white font-semibold bg-gradient-to-r from-indigo-500 via-blue-500 to-violet-500 shadow hover:shadow-indigo-500/30 transition-shadow">Send</button>
            </form>
          </motion.div>

          <div className="flex flex-col justify-center">
            <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-white">Learn by making. Learn by playing.</h2>
            <p className="mt-3 text-white/75">Our spaces are designed for creativity with maker tools, robotics kits, and collaborative challenges. Join a community that celebrates curiosity.</p>
            <div className="mt-6 grid grid-cols-3 gap-3">
              {['Friendly mentors', 'Small groups', 'Project-based'].map((b) => (
                <div key={b} className="text-center bg-white/5 border border-white/10 rounded-xl py-3 text-white/80 text-sm">{b}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
