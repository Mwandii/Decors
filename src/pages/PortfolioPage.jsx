/* ─────────────────────────────────────────────────────
   PortfolioPage.jsx  — /portfolio route
   Full gallery, filters, shareable modal URLs via
   useSearchParams from react-router-dom.
───────────────────────────────────────────────────── */
import { useEffect, useState } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import PortfolioCard  from '../components/PortfolioCard'
import PortfolioModal from '../components/PortfolioModal'
import FadeIn         from '../animations/FadeIn'
import { PORTFOLIO_ITEMS } from '../data/siteData'

const CATEGORIES = ['All', 'Wedding', 'Corporate', 'Graduation', 'Birthday', 'Outdoor']

export default function PortfolioPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [activeFilter, setActiveFilter] = useState('All')
  const navigate = useNavigate()

  /* ── Derive selected item from URL ?event=id ── */
  const eventId    = searchParams.get('event')
  const selectedItem = eventId
    ? PORTFOLIO_ITEMS.find(i => String(i.id) === String(eventId)) ?? null
    : null

  /* ── Open modal → write to URL ── */
  const handleSelect = (item) => {
    setSearchParams({ event: item.id })
  }

  /* ── Close modal → clear URL param ── */
  const handleClose = () => {
    setSearchParams({})
  }

  /* ── Scroll to top on mount ── */
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  /* ── Lock body scroll when modal open ── */
  useEffect(() => {
    document.body.style.overflow = selectedItem ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [selectedItem])

  const filtered = activeFilter === 'All'
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter(i => i.category === activeFilter)

  return (
    <>
      {/* ── Page hero ── */}
      <div
        className="relative flex items-end px-6 lg:px-16 pb-16 pt-36 overflow-hidden"
        style={{ minHeight: '360px' }}
      >
        {/* Background */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to bottom, rgba(26,22,18,0.75) 0%, rgba(26,22,18,0.55) 100%),
              url('https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1800&q=80')
            `,
            backgroundSize:     'cover',
            backgroundPosition: 'center 30%',
          }}
        />

        {/* Gold top line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-gold/50 to-transparent" />

        <div className="relative max-w-300 mx-auto w-full">
          {/* Back button */}
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-white/50 text-[11px] tracking-[2px] uppercase mb-8 cursor-pointer bg-transparent border-none hover:text-gold transition-colors duration-300 group"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300">
              <polyline points="15 18 9 12 15 6" />
            </svg>
            Back to Home
          </button>

          <p className="text-[10px] tracking-[5px] uppercase text-gold mb-4 font-medium">
            Our Work
          </p>
          <h1
            className="font-display font-light text-white leading-[1.05]"
            style={{ fontSize: 'clamp(40px, 6vw, 80px)' }}
          >
            The Full <em className="italic text-gold-light">Gallery</em>
          </h1>
          <p className="text-white/50 text-[15px] mt-4 max-w-lg leading-relaxed">
            Every event we've decorated — each one built around a unique vision, a specific space, and a client who trusted us with their moment.
          </p>

          {/* Total count */}
          <div className="flex items-center gap-3 mt-8">
            <div className="w-8 h-px bg-gold" />
            <span className="text-[12px] tracking-[3px] uppercase text-white/40">
              {PORTFOLIO_ITEMS.length} events
            </span>
          </div>
        </div>
      </div>

      {/* ── Main content ── */}
      <div className="bg-cream min-h-screen">
        <div className="max-w-350 mx-auto px-6 lg:px-16 py-16">

          {/* ── Filters ── */}
          <FadeIn>
            <div className="flex flex-wrap gap-2.5 mb-12">
              {CATEGORIES.map(cat => {
                const count = cat === 'All'
                  ? PORTFOLIO_ITEMS.length
                  : PORTFOLIO_ITEMS.filter(i => i.category === cat).length

                return (
                  <button
                    key={cat}
                    onClick={() => setActiveFilter(cat)}
                    className={`flex items-center gap-2 text-[10px] tracking-[2px] uppercase px-5 py-2.5 border transition-all duration-300 cursor-pointer font-normal
                      ${activeFilter === cat
                        ? 'bg-dark border-dark text-white'
                        : 'bg-transparent border-border text-muted hover:border-dark hover:text-dark'
                      }`}
                  >
                    {cat}
                    <span
                      className={`text-[9px] px-1.5 py-0.5 rounded-sm transition-all duration-300 ${
                        activeFilter === cat
                          ? 'bg-white/15 text-white/70'
                          : 'bg-border text-muted'
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                )
              })}
            </div>
          </FadeIn>

          {/* ── Results label ── */}
          <FadeIn delay={80}>
            <p className="text-[12px] tracking-[2px] uppercase text-muted mb-8">
              {activeFilter === 'All'
                ? `Showing all ${PORTFOLIO_ITEMS.length} events`
                : `${filtered.length} ${activeFilter} event${filtered.length !== 1 ? 's' : ''}`
              }
            </p>
          </FadeIn>

          {/* ── Grid ── */}
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-3 space-y-3">
            {filtered.map((item, i) => (
              <FadeIn
                key={item.id}
                direction="up"
                delay={i * 40}
                threshold={0.04}
                className="break-inside-avoid"
              >
                <PortfolioCard
                  item={item}
                  index={i}
                  onSelect={handleSelect}
                />
              </FadeIn>
            ))}
          </div>

          {/* Empty state */}
          {filtered.length === 0 && (
            <div className="flex flex-col items-center justify-center py-32 gap-4">
              <p className="font-display text-3xl text-muted italic">
                No events in this category yet.
              </p>
              <button
                onClick={() => setActiveFilter('All')}
                className="text-[11px] tracking-[2px] uppercase text-gold border-b border-gold pb-0.5 cursor-pointer bg-transparent border-t-0 border-l-0 border-r-0 font-normal hover:opacity-60 transition-opacity"
              >
                View all events
              </button>
            </div>
          )}

          {/* ── Bottom CTA ── */}
          <FadeIn delay={200}>
            <div
              className="mt-20 p-12 lg:p-16 text-center relative overflow-hidden"
              style={{ background: '#1A1612' }}
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-gold/30 to-transparent" />
              <p className="text-[10px] tracking-[4px] uppercase text-gold mb-4 font-medium">
                Ready to Create Something?
              </p>
              <h2
                className="font-display font-light text-white leading-tight mb-4"
                style={{ fontSize: 'clamp(28px, 4vw, 52px)' }}
              >
                Let's Make Your Event <em className="italic text-gold-light">Unforgettable</em>
              </h2>
              <p className="text-white/45 text-[14px] mb-8 max-w-md mx-auto leading-relaxed">
                Inspired by what you've seen? Get in touch and let's start planning.
              </p>
              <button
                onClick={() => navigate('/#contact', { replace: false })}
                className="group relative inline-flex items-center gap-3 bg-gold text-dark px-10 py-4 text-[11px] tracking-[2.5px] uppercase font-medium cursor-pointer border-none hover:bg-gold-light transition-colors duration-300 overflow-hidden"
              >
                <span
                  className="absolute inset-0 -translate-x-100 group-hover:translate-x-100 transition-transform duration-700"
                  style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent)' }}
                />
                <span className="relative">Get a Free Quote</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="relative w-4 h-4">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </div>
          </FadeIn>

        </div>
      </div>

      {/* ── Modal — driven by URL param ── */}
      {selectedItem && (
        <PortfolioModal
          item={selectedItem}
          onClose={handleClose}
        />
      )}
    </>
  )
}