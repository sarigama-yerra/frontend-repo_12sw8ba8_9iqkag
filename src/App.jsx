import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Events from './components/Events'
import Courses from './components/Courses'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-[#0b0a12] text-white relative">
      {/* Medieval starfield + vignette */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(147,112,219,0.12),transparent_60%),radial-gradient(ellipse_at_bottom,rgba(59,130,246,0.10),transparent_60%)]"/>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(0,0,0,0.6),transparent_35%)]"/>
        <div className="absolute inset-0 opacity-[0.035] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:36px_36px]"/>
      </div>

      <Navbar />
      <main>
        <Hero />
        <Events />
        <Courses />
        <Contact />

        <footer className="relative py-10 border-t border-white/10 mt-8">
          <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/70 text-sm">© {new Date().getFullYear()} InnoTwist Guild. All rights reserved.</p>
            <div className="flex items-center gap-3 text-sm">
              <a href="#events" className="text-white/70 hover:text-white">Quests</a>
              <span className="text-white/20">•</span>
              <a href="#courses" className="text-white/70 hover:text-white">Academy</a>
              <span className="text-white/20">•</span>
              <a href="#contact" className="text-white/70 hover:text-white">Send a Raven</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
