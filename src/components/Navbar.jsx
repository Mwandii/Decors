import { useState, useEffect } from 'react'
import { NAV_LINKS } from '../data/siteData'

export default function Navbar() {
  const [scrolled,     setScrolled]     = useState(false)
  const [menuOpen,     setMenuOpen]      = useState(false)
  const [activeSection, setActiveSection] = useState('')

  /* ── Scroll detection ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* ── Lock body scroll when mobile menu is open ── */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  /* ── Active section highlight ── */
  useEffect(() => {
    const ids = NAV_LINKS.map(l => l.href.replace('#', ''))
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    ids.forEach(id => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const handleNavClick = (href) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-dark/95 backdrop-blur-md py-4 shadow-2xl'
            : 'py-6'
        }`}
        style={!scrolled ? {
          background: 'linear-gradient(to bottom, rgba(26,22,18,0.65), transparent)'
        } : undefined}
      >
        <div className="max-w-325 mx-auto px-6 lg:px-16 flex items-center justify-between">

          {/* Logo */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
            className="font-display text-2xl tracking-[4px] uppercase text-white no-underline"
          >
            Grakens <span className="text-gold-light">Events</span>
          </a>

          {/* Desktop links */}
          <ul className="hidden lg:flex gap-10 list-none items-center">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={label}>
                <button
                  onClick={() => handleNavClick(href)}
                  className={`text-[11px] tracking-[2.5px] uppercase font-normal transition-colors duration-300 cursor-pointer bg-transparent border-none
                    ${activeSection === href.replace('#', '')
                      ? 'text-gold-light'
                      : 'text-white/75 hover:text-white'
                    }`}
                >
                  {label}
                </button>
              </li>
            ))}
            <li>
              <button
                onClick={() => handleNavClick('#contact')}
                className="border border-gold text-gold text-[11px] tracking-[2px] uppercase px-6 py-2.5 hover:bg-gold hover:text-dark transition-all duration-300 cursor-pointer bg-transparent font-normal"
              >
                Get a Quote
              </button>
            </li>
          </ul>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(prev => !prev)}
            aria-label="Toggle menu"
            className="lg:hidden flex flex-col gap-1.5 p-2 cursor-pointer bg-transparent border-none"
          >
            <span className={`block w-6 h-px bg-white transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-1.75' : ''}`} />
            <span className={`block w-6 h-px bg-white transition-all duration-300 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
            <span className={`block w-6 h-px bg-white transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-1.75' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 bg-dark flex flex-col items-center justify-center gap-10 transition-all duration-500 lg:hidden ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Decorative gold line */}
        <div className="w-px h-16 bg-gold/40 mb-4" />

        {NAV_LINKS.map(({ label, href }, i) => (
          <button
            key={label}
            onClick={() => handleNavClick(href)}
            className="font-display text-4xl font-light text-white/80 hover:text-gold-light transition-colors duration-300 cursor-pointer bg-transparent border-none"
            style={{ transitionDelay: menuOpen ? `${i * 60}ms` : '0ms' }}
          >
            {label}
          </button>
        ))}

        <button
          onClick={() => handleNavClick('#contact')}
          className="mt-6 border border-gold text-gold text-[11px] tracking-[3px] uppercase px-10 py-3 hover:bg-gold hover:text-dark transition-all duration-300 cursor-pointer bg-transparent font-normal"
        >
          Get a Quote
        </button>

        <div className="w-px h-16 bg-gold/40 mt-4" />
      </div>
    </>
  )
}