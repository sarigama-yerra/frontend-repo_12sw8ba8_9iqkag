import { useState } from 'react'
import { Menu, X, Castle, Swords } from 'lucide-react'

function NavLink({ href, children }) {
  return (
    <a
      href={href}
      className="text-sm md:text-base text-amber-100/90 hover:text-amber-100 transition-colors px-3 py-2 rounded-md hover:bg-amber-50/10"
    >
      {children}
    </a>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-gradient-to-b from-[#120f1a]/80 to-[#120f1a]/30 border-b border-amber-50/10 shadow-[inset_0_-1px_0_rgba(251,191,36,0.10)]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#top" className="flex items-center gap-2 group">
            <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-violet-600 via-indigo-600 to-blue-600 grid place-items-center shadow-[0_0_25px_rgba(147,112,219,0.45)] ring-1 ring-amber-100/10">
              <Castle className="w-5 h-5 text-amber-100 group-hover:scale-110 transition-transform" />
            </div>
            <span className="text-amber-100 font-bold tracking-tight text-lg md:text-xl">InnoTwist Guild</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            <NavLink href="#events">Quests</NavLink>
            <NavLink href="#courses">Academy</NavLink>
            <NavLink href="#contact">Send a Raven</NavLink>
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <a href="#courses" className="inline-flex items-center gap-2 text-sm font-semibold text-[#0b0a12] bg-amber-300 px-4 py-2 rounded-lg shadow hover:shadow-amber-400/25 transition-shadow">
              <Swords className="w-4 h-4" /> Begin Quest
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg text-amber-100/90 hover:text-amber-100 hover:bg-amber-50/10"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden pb-4 animate-in">
            <nav className="flex flex-col gap-1 bg-white/5 rounded-xl p-2 border border-amber-50/10">
              <NavLink href="#events">Quests</NavLink>
              <NavLink href="#courses">Academy</NavLink>
              <NavLink href="#contact">Send a Raven</NavLink>
              <a href="#courses" className="mt-1 text-center text-[#0b0a12] font-semibold bg-amber-300 px-4 py-2 rounded-lg">Begin Quest</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
