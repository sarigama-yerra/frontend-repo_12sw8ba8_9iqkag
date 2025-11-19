import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="relative py-16 md:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(251,191,36,0.10),transparent_60%)]"/>
      <div className="relative max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="bg-[#120f1a]/60 backdrop-blur-xl border border-amber-50/10 rounded-2xl p-6"
          >
            <h3 className="text-xl md:text-2xl font-bold text-amber-100">Send a Raven</h3>
            <p className="mt-2 text-amber-100/80">Seek counsel, request a tome, or pledge your banner to a guild.</p>

            <form className="mt-6 grid gap-4">
              <input placeholder="Your name" className="w-full px-4 py-3 rounded-lg bg-amber-50/10 border border-amber-50/10 text-amber-100 placeholder:text-amber-100/50 focus:outline-none focus:ring-2 focus:ring-amber-300" />
              <input placeholder="Email or raven perch" className="w-full px-4 py-3 rounded-lg bg-amber-50/10 border border-amber-50/10 text-amber-100 placeholder:text-amber-100/50 focus:outline-none focus:ring-2 focus:ring-amber-300" />
              <select className="w-full px-4 py-3 rounded-lg bg-amber-50/10 border border-amber-50/10 text-amber-100 focus:outline-none focus:ring-2 focus:ring-amber-300">
                <option className="text-slate-900">Runes of the Web</option>
                <option className="text-slate-900">Clockwork & Familiars</option>
                <option className="text-slate-900">Private Mentorship</option>
                <option className="text-slate-900">General Counsel</option>
              </select>
              <textarea rows={4} placeholder="Speak your quest..." className="w-full px-4 py-3 rounded-lg bg-amber-50/10 border border-amber-50/10 text-amber-100 placeholder:text-amber-100/50 focus:outline-none focus:ring-2 focus:ring-amber-300" />
              <button type="button" className="inline-flex justify-center px-5 py-3 rounded-xl text-[#0b0a12] font-semibold bg-amber-300 shadow hover:shadow-amber-400/30 transition-shadow">Send</button>
            </form>
          </motion.div>

          <div className="flex flex-col justify-center">
            <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-amber-100">Craft, Quest, Belong.</h2>
            <p className="mt-3 text-amber-100/80">Our halls brim with maker tools, arcane scrolls, and merry company. Step into a world where learning feels like adventure.</p>
            <div className="mt-6 grid grid-cols-3 gap-3">
              {['Friendly mentors', 'Small circles', 'Project relics'].map((b) => (
                <div key={b} className="text-center bg-amber-50/10 border border-amber-50/10 rounded-xl py-3 text-amber-100/90 text-sm">{b}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
