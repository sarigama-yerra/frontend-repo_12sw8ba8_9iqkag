import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Events from './components/Events'
import Courses from './components/Courses'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Background subtle grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:36px_36px]"></div>

      <Navbar />
      <main>
        <Hero />
        <Events />
        <Courses />
        <Contact />

        <footer className="relative py-10 border-t border-white/10 mt-8">
          <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/70 text-sm">© {new Date().getFullYear()} InnoTwist. All rights reserved.</p>
            <div className="flex items-center gap-3 text-sm">
              <a href="#events" className="text-white/70 hover:text-white">Events</a>
              <span className="text-white/20">•</span>
              <a href="#courses" className="text-white/70 hover:text-white">Courses</a>
              <span className="text-white/20">•</span>
              <a href="#contact" className="text-white/70 hover:text-white">Contact</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
