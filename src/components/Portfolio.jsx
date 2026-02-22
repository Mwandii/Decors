import { useState } from 'react'
import FadeIn from '../animations/FadeIn'
import { PORTFOLIO_ITEMS } from '../data/siteData'

const CATEGORIES = ['All', 'Wedding', 'Graduation', 'Corporate', 'Outdoor', 'Birthday']

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered = activeFilter === 'All'
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter(item => item.category === activeFilter)

  return (
    <section id="portfolio" className="py-20 lg:py-28 px-6 lg:px-16 bg-cream">

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <FadeIn>
            <p className="text-[10px] tracking-[4px] uppercase text-gold mb-4 font-medium">
              Our Work
            </p>
          </FadeIn>
          <FadeIn delay={100}>
            <h2
              className="font-display font-light leading-[1.15] text-brown"
              style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}
            >
              Recent <em className="italic text-gold">Events</em>
            </h2>
          </FadeIn>
        </div>
        <FadeIn direction="left" delay={150}>
          <a
            href="#"
            className="text-[11px] tracking-[2px] uppercase text-gold no-underline border-b border-gold pb-0.5 hover:opacity-60 transition-opacity self-start md:self-auto"
          >
            View Full Gallery →
          </a>
        </FadeIn>
      </div>

      {/* Filter pills */}
      <FadeIn delay={200}>
        <div className="flex flex-wrap gap-3 mb-10">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`text-[10px] tracking-[2px] uppercase px-5 py-2 border transition-all duration-300 cursor-pointer font-normal
                ${activeFilter === cat
                  ? 'bg-gold border-gold text-dark'
                  : 'bg-transparent border-border text-muted hover:border-gold hover:text-gold'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </FadeIn>

      {/* Masonry-style grid */}
      <div
        className="grid gap-2 lg:gap-3"
        style={{ gridTemplateColumns: 'repeat(12, 1fr)' }}
      >
        {filtered.map((item, i) => {
          /* Determine layout spans based on position & size hint */
          const isFirst = i === 0
          const colSpan = isFirst
            ? 'col-span-12 lg:col-span-7'
            : i % 3 === 1
            ? 'col-span-6 lg:col-span-5'
            : 'col-span-6 lg:col-span-4'
          const height  = isFirst ? 'h-64 sm:h-80 lg:h-[520px]' : 'h-48 sm:h-56 lg:h-[280px]'

          return (
            <FadeIn
              key={item.id}
              direction="up"
              delay={i * 60}
              threshold={0.05}
              className={`${colSpan} overflow-hidden relative group`}
            >
              <div className={`relative overflow-hidden ${height}`}>
                <img
                  src={item.image}
                  alt={item.category}
                  className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                  loading="lazy"
                />
                {/* Category badge on hover */}
                <div className="absolute inset-0 bg-dark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end p-5">
                  <span className="text-[10px] tracking-[3px] uppercase text-white border border-white/50 px-3 py-1.5 translate-y-3 group-hover:translate-y-0 transition-transform duration-400">
                    {item.category}
                  </span>
                </div>
              </div>
            </FadeIn>
          )
        })}
      </div>
    </section>
  )
}