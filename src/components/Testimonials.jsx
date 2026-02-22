import FadeIn from '../animations/FadeIn'
import { TESTIMONIALS } from '../data/siteData'

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 lg:py-28 px-6 lg:px-16 bg-warmwhite">

      {/* Header */}
      <div className="max-w-[500px] mx-auto text-center mb-16">
        <FadeIn>
          <p className="text-[10px] tracking-[4px] uppercase text-gold mb-4 font-medium">
            Testimonials
          </p>
        </FadeIn>
        <FadeIn delay={100}>
          <h2
            className="font-display font-light leading-[1.15] text-brown"
            style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}
          >
            What Our Clients <em className="italic text-gold">Say</em>
          </h2>
        </FadeIn>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1200px] mx-auto">
        {TESTIMONIALS.map((t, i) => (
          <FadeIn key={t.id} direction="up" delay={i * 120}>
            <div className="bg-cream p-10 relative group hover:shadow-xl transition-shadow duration-500">

              {/* Decorative corner accent */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-gold/30 group-hover:border-gold transition-colors duration-400" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-gold/30 group-hover:border-gold transition-colors duration-400" />

              {/* Quote mark */}
              <span className="font-display text-[72px] leading-[0.6] text-gold opacity-30 mb-5 block select-none">
                "
              </span>

              {/* Quote text */}
              <p className="font-display italic text-[17px] lg:text-[18px] text-muted leading-[1.85]">
                {t.quote}
              </p>

              {/* Author */}
              <div className="mt-8 flex items-center gap-4 pt-6 border-t border-border">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-11 h-11 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div>
                  <strong className="block text-[13px] font-medium text-brown tracking-wide">
                    {t.name}
                  </strong>
                  <span className="text-[11px] text-muted tracking-wide">{t.event}</span>
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}