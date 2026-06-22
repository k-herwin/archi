import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const nav = [
  { label: 'Fonctionnalités', href: '#features' },
  { label: 'Portail client', href: '#client-portal' },
  { label: 'Tarifs', href: '#pricing' },
  { label: 'Témoignages', href: '#testimonials' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-zinc-100' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 bg-zinc-900 rounded flex items-center justify-center">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M2 15L9 3L16 15" stroke="#C85A28" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4.5 11H13.5" stroke="#C85A28" strokeWidth="1.4" strokeLinecap="round"/>
              </svg>
            </div>
            <span className="text-lg font-semibold tracking-tight text-zinc-900">Archifollow</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a href="#" className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors">
              Connexion
            </a>
            <a
              href="#contact"
              className="inline-flex items-center px-4 py-2 bg-zinc-900 text-white text-sm font-medium rounded-lg hover:bg-accent-600 transition-colors"
            >
              Demander une démo
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 text-zinc-600"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-zinc-100 px-6 py-4 space-y-4">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block text-sm font-medium text-zinc-600 hover:text-zinc-900"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="block w-full text-center px-4 py-2.5 bg-zinc-900 text-white text-sm font-medium rounded-lg"
            onClick={() => setOpen(false)}
          >
            Demander une démo
          </a>
        </div>
      )}
    </header>
  )
}
