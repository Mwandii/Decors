/* ─────────────────────────────────────────────────────
   PortfolioCard.jsx
   Shared card used by both the landing Portfolio section
   and the full PortfolioPage. Accepts onSelect callback.
───────────────────────────────────────────────────── */
import { useState } from 'react'

const ASPECTS = [
  'aspect-[4/5]',
  'aspect-[4/5]',
  'aspect-square',
  'aspect-[4/5]',
  'aspect-square',
  'aspect-[4/5]',
  'aspect-square',
  'aspect-[4/5]',
]

const PhotoIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-3 h-3">
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <circle cx="8.5" cy="8.5" r="1.5" />
    <polyline points="21 15 16 10 5 21" />
  </svg>
)

export default function PortfolioCard({ item, index, onSelect }) {
  const [hovered, setHovered] = useState(false)
  const aspectClass = ASPECTS[index % ASPECTS.length]

  return (
    <div
      role="button"
      tabIndex={0}
      aria-label={`View ${item.theme}`}
      onClick={() => onSelect(item)}
      onKeyDown={(e) => e.key === 'Enter' && onSelect(item)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative overflow-hidden cursor-pointer w-full ${aspectClass}`}
      style={{ display: 'block' }}
    >
      {/* Cover image */}
      <img
        src={item.cover}
        alt={item.theme}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.4s] ease-out"
        style={{ transform: hovered ? 'scale(1.07)' : 'scale(1)' }}
      />

      {/* Base gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to top, rgba(26,22,18,0.88) 0%, rgba(26,22,18,0.1) 50%, rgba(26,22,18,0) 100%)',
        }}
      />

      {/* Hover tint */}
      <div
        className="absolute inset-0 transition-opacity duration-500"
        style={{ background: 'rgba(26,22,18,0.28)', opacity: hovered ? 1 : 0 }}
      />

      {/* Top row */}
      <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
        <span className="text-[9px] tracking-[2.5px] uppercase text-white/70 border border-white/20 bg-dark/30 backdrop-blur-sm px-2.5 py-1">
          {item.category}
        </span>
        <span
          className="text-[9px] tracking-[2px] text-white/50 flex items-center gap-1.5 transition-opacity duration-300"
          style={{ opacity: hovered ? 1 : 0 }}
        >
          <PhotoIcon />
          {item.gallery.length}
        </span>
      </div>

      {/* Bottom content */}
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <h3
          className="font-display text-white font-light leading-tight mb-2"
          style={{ fontSize: 'clamp(15px, 2vw, 20px)' }}
        >
          {item.theme}
        </h3>

        {/* Meta — slides up on hover */}
        <div
          className="overflow-hidden transition-all duration-500"
          style={{
            maxHeight: hovered ? '80px' : '0px',
            opacity:   hovered ? 1 : 0,
          }}
        >
          <div className="flex flex-wrap gap-x-4 gap-y-1 mt-1 mb-2">
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

        {/* Gold line */}
        <div className="flex items-center gap-3 mt-2">
          <div
            className="h-px bg-gold transition-all duration-500 origin-left"
            style={{ width: hovered ? '32px' : '16px' }}
          />
          <span
            className="text-[10px] tracking-[2px] uppercase text-gold transition-opacity duration-400"
            style={{ opacity: hovered ? 1 : 0 }}
          >
            View Event →
          </span>
        </div>
      </div>
    </div>
  )
}