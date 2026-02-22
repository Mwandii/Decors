/* ─────────────────────────────────────────────────────
   Portfolio.jsx  — landing page section
   Shows max 8 cards. No filters (keep landing clean).
   "View All Work" routes to /portfolio.
───────────────────────────────────────────────────── */
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import FadeIn         from '../animations/FadeIn'
import PortfolioCard  from './PortfolioCard'
import PortfolioModal from './PortfolioModal'
import { PORTFOLIO_ITEMS } from '../data/siteData'

const PREVIEW_COUNT = 8

export default function Portfolio() {
  const [selected, setSelected] = useState(null)
  const navigate   = useNavigate()

  // Always take the first 8 — put your best/most recent first in siteData
  const preview = PORTFOLIO_ITEMS.slice(0, PREVIEW_COUNT)

  return (
    <>
      <section id="portfolio" className="py-20 lg:py-28 px-6 lg:px-16 bg-cream">

        {/* Header */}
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

          {/* View all — desktop */}
          <FadeIn direction="left" delay={200} className="hidden md:block shrink-0">
            <button
              onClick={() => navigate('/portfolio')}
              className="text-[11px] tracking-[2px] uppercase text-gold border-b border-gold pb-0.5 cursor-pointer bg-transparent border-t-0 border-l-0 border-r-0 font-normal hover:opacity-60 transition-opacity"
            >
              View All Work →
            </button>
          </FadeIn>
        </div>

        {/* Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-3 space-y-3">
          {preview.map((item, i) => (
            <FadeIn
              key={item.id}
              direction="up"
              delay={i * 55}
              threshold={0.05}
              className="break-inside-avoid"
            >
              <PortfolioCard
                item={item}
                index={i}
                onSelect={setSelected}
              />
            </FadeIn>
          ))}
        </div>

        {/* View all — bottom CTA (mobile + desktop) */}
        <FadeIn delay={300}>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => navigate('/portfolio')}
              className="group relative flex items-center gap-3 border border-dark text-dark px-10 py-4 text-[11px] tracking-[2.5px] uppercase font-medium cursor-pointer bg-transparent hover:bg-dark hover:text-white transition-all duration-300 overflow-hidden"
            >
              <span
                className="absolute inset-0 bg-dark -translate-x-100 group-hover:translate-x-0 transition-transform duration-400 -z-10"
              />
              View All {PORTFOLIO_ITEMS.length} Events →
            </button>
            <span className="text-[12px] text-muted">
              {PORTFOLIO_ITEMS.length - PREVIEW_COUNT} more events in the full gallery
            </span>
          </div>
        </FadeIn>

      </section>

      {selected && (
        <PortfolioModal
          item={selected}
          onClose={() => setSelected(null)}
        />
      )}
    </>
  )
}