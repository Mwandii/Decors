import { useState } from 'react'
import FadeIn          from '../animations/FadeIn'
import PortfolioModal from './PortfolioModal'
import { PORTFOLIO_ITEMS } from '../data/siteData'

const CATEGORIES = ['All', 'Wedding', 'Corporate', 'Graduation', 'Birthday', 'Outdoor']

/* ── Card aspect ratios for visual variety in the grid ── */
const ASPECTS = ['aspect-[4/5]', 'aspect-[4/5]', 'aspect-square', 'aspect-[4/5]', 'aspect-square', 'aspect-[4/5]', 'aspect-square', 'aspect-[4/5]']

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [selected,     setSelected]     = useState(null)
  const [hovered,      setHovered]      = useState(null)

  const filtered = activeFilter === 'All'
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter(item => item.category === activeFilter)

  return (
    <>
      <section id="portfolio" className="py-20 lg:py-28 px-6 lg:px-16 bg-cream">

        {/* ── Header ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <FadeIn>
              <p className="text-[10px] tracking-[4px] uppercase text-gold mb-4 font-medium">
                Our Work
              </p>
            </FadeIn>
            <FadeIn delay={100}>
              <h2
                className="font-display font-light leading-[1.1] text-brown"
                style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}
              >
                Every Setup, a <em className="italic text-gold">Story</em>
              </h2>
            </FadeIn>
            <FadeIn delay={180}>
              <p className="text-muted text-[14px] leading-relaxed mt-3 max-w-md">
                A selection of our recent work — each event designed from scratch around a unique vision.
              </p>
            </FadeIn>
          </div>
        </div>

        {/* ── Filter pills ── */}
        <FadeIn delay={220}>
          <div className="flex flex-wrap gap-2.5 mb-10">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`text-[10px] tracking-[2px] uppercase px-5 py-2.5 border transition-all duration-300 cursor-pointer font-normal
                  ${activeFilter === cat
                    ? 'bg-dark border-dark text-white'
                    : 'bg-transparent border-border text-muted hover:border-dark hover:text-dark'
                  }`}
              >
                {cat}
                {cat !== 'All' && (
                  <span className="ml-2 opacity-50">
                    {PORTFOLIO_ITEMS.filter(i => i.category === cat).length}
                  </span>
                )}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* ── Masonry grid ── */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-3 space-y-3">
          {filtered.map((item, i) => (
            <FadeIn
              key={item.id}
              direction="up"
              delay={i * 60}
              threshold={0.05}
              className="break-inside-avoid"
            >
              {/* ── Case study card ── */}
              <div
                role="button"
                tabIndex={0}
                aria-label={`View ${item.theme}`}
                onClick={() => setSelected(item)}
                onKeyDown={(e) => e.key === 'Enter' && setSelected(item)}
                onMouseEnter={() => setHovered(item.id)}
                onMouseLeave={() => setHovered(null)}
                className={`relative overflow-hidden cursor-pointer group block w-full ${ASPECTS[i % ASPECTS.length]}`}
                style={{ display: 'block' }}
              >
                {/* Cover image */}
                <img
                  src={item.cover}
                  alt={item.theme}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.4s] ease-out"
                  style={{ transform: hovered === item.id ? 'scale(1.07)' : 'scale(1)' }}
                />

                {/* Base dark overlay — always visible at bottom */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(to top, rgba(26,22,18,0.88) 0%, rgba(26,22,18,0.1) 50%, rgba(26,22,18,0) 100%)',
                  }}
                />

                {/* Hover tint overlay */}
                <div
                  className="absolute inset-0 transition-opacity duration-500"
                  style={{
                    background: 'rgba(26,22,18,0.3)',
                    opacity: hovered === item.id ? 1 : 0,
                  }}
                />

                {/* ── Top row: category + photo count ── */}
                <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                  <span className="text-[9px] tracking-[2.5px] uppercase text-white/70 border border-white/20 bg-dark/30 backdrop-blur-sm px-2.5 py-1">
                    {item.category}
                  </span>
                  {/* Photo count badge */}
                  <span
                    className="text-[9px] tracking-[2px] text-white/50 flex items-center gap-1.5 transition-opacity duration-300"
                    style={{ opacity: hovered === item.id ? 1 : 0 }}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-3 h-3">
                      <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>
                      <polyline points="21 15 16 10 5 21"/>
                    </svg>
                    {item.gallery.length}
                  </span>
                </div>

                {/* ── Bottom content ── */}
                <div className="absolute bottom-0 left-0 right-0 p-5">

                  {/* Theme title */}
                  <h3 className="font-display text-white font-light leading-tight mb-2"
                    style={{ fontSize: 'clamp(16px, 2vw, 20px)' }}>
                    {item.theme}
                  </h3>

                  {/* Meta row — slides up on hover */}
                  <div
                    className="overflow-hidden transition-all duration-500"
                    style={{
                      maxHeight: hovered === item.id ? '80px' : '0px',
                      opacity:   hovered === item.id ? 1 : 0,
                    }}
                  >
                    <div className="flex flex-wrap gap-x-4 gap-y-1 mt-1 mb-3">
                      {[item.location, item.guests, item.year].map((val, j) => (
                        <span key={j} className="text-[11px] text-white/50 flex items-center gap-1.5">
                          <span className="w-1 h-1 rounded-full bg-gold/60 inline-block" />
                          {val}
                        </span>
                      ))}
                    </div>
                    <p className="text-[12px] text-white/45 leading-relaxed line-clamp-2">
                      {item.summary}
                    </p>
                  </div>

                  {/* Gold line + "View Event" */}
                  <div className="flex items-center gap-3 mt-2">
                    <div
                      className="h-px bg-gold transition-all duration-500 origin-left"
                      style={{ width: hovered === item.id ? '32px' : '16px' }}
                    />
                    <span
                      className="text-[10px] tracking-[2px] uppercase text-gold transition-all duration-400"
                      style={{ opacity: hovered === item.id ? 1 : 0 }}
                    >
                      View Event →
                    </span>
                  </div>
                </div>

              </div>
            </FadeIn>
          ))}
        </div>

        {/* ── Empty state ── */}
        {filtered.length === 0 && (
          <div className="text-center py-24">
            <p className="font-display text-2xl text-muted italic">No events in this category yet.</p>
          </div>
        )}

      </section>

      {/* Modal */}
      {selected && (
        <PortfolioModal
          item={selected}
          onClose={() => setSelected(null)}
        />
      )}
    </>
  )
}