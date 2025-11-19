import { useState } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'

function NavLink({ href, children }) {
  return (
    <a
      href={href}
      className="text-sm md:text-base text-white/80 hover:text-white transition-colors px-3 py-2 rounded-md hover:bg-white/10"
    >
      {children}
    </a>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-gradient-to-b from-slate-900/80 to-slate-900/20 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#top" className="flex items-center gap-2 group">
            <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 via-blue-500 to-violet-500 grid place-items-center shadow-[0_0_25px_rgba(59,130,246,0.45)]">
              <Sparkles className="w-5 h-5 text-white group-hover:rotate-12 transition-transform" />
            </div>
            <span className="text-white font-bold tracking-tight text-lg md:text-xl">InnoTwist</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            <NavLink href="#events">Events</NavLink>
            <NavLink href="#courses">Courses</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <a href="#courses" className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-gradient-to-r from-indigo-500 via-blue-500 to-violet-500 px-4 py-2 rounded-lg shadow hover:shadow-indigo-500/25 transition-shadow">
              Enroll Now
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg text-white/90 hover:text-white hover:bg-white/10"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden pb-4 animate-in">
            <nav className="flex flex-col gap-1 bg-white/5 rounded-xl p-2 border border-white/10">
              <NavLink href="#events">Events</NavLink>
              <NavLink href="#courses">Courses</NavLink>
              <NavLink href="#contact">Contact</NavLink>
              <a href="#courses" className="mt-1 text-center text-white font-semibold bg-gradient-to-r from-indigo-500 via-blue-500 to-violet-500 px-4 py-2 rounded-lg">Enroll Now</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
