import { useState } from 'react'
import FadeIn from '../animations/FadeIn'
import { SERVICES } from '../data/siteData'

export default function Services() {
  const [hovered, setHovered] = useState(null)

  return (
    <section id="services" className="py-20 lg:py-28 px-6 lg:px-16 bg-warmwhite">

      {/* Header */}
      <div className="max-w-[560px] mx-auto text-center mb-16">
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
            No event is too big or too small. We bring the same passion and attention to detail to every occasion.
          </p>
        </FadeIn>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0.5 max-w-[1200px] mx-auto">
        {SERVICES.map((service, i) => (
          <FadeIn key={service.id} direction="up" delay={i * 80} className="relative overflow-hidden group" threshold={0.1}>
            <div
              className="relative overflow-hidden cursor-default"
              style={{ aspectRatio: '3/4' }}
              onMouseEnter={() => setHovered(service.id)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Image */}
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.2s] ease-out"
                style={{
                  transform: hovered === service.id ? 'scale(1.06)' : 'scale(1)',
                }}
                loading="lazy"
              />

              {/* Overlay */}
              <div
                className="absolute inset-0 transition-opacity duration-500"
                style={{
                  background: 'linear-gradient(to top, rgba(26,22,18,0.92) 0%, rgba(26,22,18,0.2) 55%, rgba(26,22,18,0.05) 100%)',
                  opacity: hovered === service.id ? 1 : 0.85,
                }}
              />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-7 lg:p-8">
                {/* Number */}
                <span className="font-display text-gold/40 text-[48px] font-light leading-none absolute top-4 right-6 select-none">
                  {String(i + 1).padStart(2, '0')}
                </span>

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

                {/* Gold line indicator */}
                <div
                  className="h-px bg-gold mt-4 transition-all duration-500 origin-left"
                  style={{ width: hovered === service.id ? '40px' : '20px' }}
                />
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}