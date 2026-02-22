import { useState } from 'react'
import FadeIn       from '../animations/FadeIn'
import ServiceModal from './ServiceModal'
import { SERVICES } from '../data/siteData'

export default function Services() {
  const [hovered,  setHovered]  = useState(null)
  const [selected, setSelected] = useState(null)

  return (
    <>
      <section id="services" className="py-20 lg:py-28 px-6 lg:px-16 bg-warmwhite">

        {/* Header */}
        <div className="max-w-140 mx-auto text-center mb-16">
          <FadeIn>
            <p className="text-[10px] tracking-[4px] uppercase text-gold mb-4 font-medium">
              What We Do
            </p>
          </FadeIn>
          <FadeIn delay={100}>
            <h2
              className="font-display font-light leading-[1.15] text-brown mb-4"
              style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}
            >
              Events We <em className="italic text-gold">Specialize</em> In
            </h2>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="text-muted text-[15px] leading-relaxed">
              No event is too big or too small. Click any card to explore what we offer.
            </p>
          </FadeIn>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0.5 max-w-300 mx-auto">
          {SERVICES.map((service, i) => (
            <FadeIn
              key={service.id}
              direction="up"
              delay={i * 80}
              threshold={0.1}
            >
              <div
                role="button"
                tabIndex={0}
                aria-label={`Learn more about ${service.title}`}
                onClick={() => setSelected(service)}
                onKeyDown={(e) => e.key === 'Enter' && setSelected(service)}
                onMouseEnter={() => setHovered(service.id)}
                onMouseLeave={() => setHovered(null)}
                className="relative overflow-hidden cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                style={{ aspectRatio: '3/4' }}
              >
                {/* Image */}
                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.2s] ease-out"
                  style={{ transform: hovered === service.id ? 'scale(1.07)' : 'scale(1)' }}
                  loading="lazy"
                />

                {/* Overlay */}
                <div
                  className="absolute inset-0 transition-opacity duration-500"
                  style={{
                    background: 'linear-gradient(to top, rgba(26,22,18,0.92) 0%, rgba(26,22,18,0.2) 55%, rgba(26,22,18,0.05) 100%)',
                    opacity: hovered === service.id ? 1 : 0.82,
                  }}
                />

                {/* Card number watermark */}
                <span
                  className="absolute top-4 right-5 font-display text-white/10 select-none pointer-events-none"
                  style={{ fontSize: '56px', lineHeight: 1 }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>

                {/* Explore pill */}
                <div
                  className="absolute top-4 left-4 transition-all duration-400"
                  style={{
                    opacity:   hovered === service.id ? 1 : 0,
                    transform: hovered === service.id ? 'translateY(0)' : 'translateY(-6px)',
                  }}
                >
                  <span className="text-[9px] tracking-[2.5px] uppercase text-white/70 border border-white/25 px-2.5 py-1">
                    Explore →
                  </span>
                </div>

                {/* Bottom content */}
                <div className="absolute bottom-0 left-0 right-0 p-7 lg:p-8">
                  <h3 className="font-display text-[24px] lg:text-[26px] font-normal text-white mb-2 leading-tight">
                    {service.title}
                  </h3>
                  <p
                    className="text-[13px] text-white/60 leading-relaxed overflow-hidden transition-all duration-500"
                    style={{
                      maxHeight: hovered === service.id ? '80px' : '0px',
                      opacity:   hovered === service.id ? 1 : 0,
                    }}
                  >
                    {service.description}
                  </p>
                  <div
                    className="h-px bg-gold mt-4 transition-all duration-500 origin-left"
                    style={{ width: hovered === service.id ? '48px' : '20px' }}
                  />
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {selected && (
        <ServiceModal
          service={selected}
          onClose={() => setSelected(null)}
        />
      )}
    </>
  )
}