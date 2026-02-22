import FadeIn from '../animations/FadeIn'
import { WHY_US } from '../data/siteData'

/* Simple SVG icons as inline components */
const icons = {
  1: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  ),
  2: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
      <circle cx="12" cy="12" r="10" /><polyline points="12,6 12,12 16,14" />
    </svg>
  ),
  3: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  4: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.8a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  ),
}

export default function WhyUs() {
  const { label, heading, headingEm, body, features } = WHY_US

  return (
    <section id="why-us" className="bg-dark py-20 lg:py-28 px-6 lg:px-16">
      <div className="max-w-300 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* Left — copy */}
        <div>
          <FadeIn>
            <p className="text-[10px] tracking-[4px] uppercase text-gold mb-5 font-medium">
              {label}
            </p>
          </FadeIn>
          <FadeIn delay={100}>
            <h2
              className="font-display font-light leading-[1.15] text-white mb-6"
              style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}
            >
              {heading}<br />
              <em className="italic text-gold">{headingEm}</em>
            </h2>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="text-white/50 text-[15px] leading-[1.9]">{body}</p>
          </FadeIn>

          {/* Decorative element */}
          <FadeIn delay={300}>
            <div className="flex items-center gap-4 mt-10">
              <div className="w-12 h-px bg-gold" />
              <span className="font-display text-gold/50 text-sm italic">since 2017</span>
            </div>
          </FadeIn>
        </div>

        {/* Right — feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {features.map((feature, i) => (
            <FadeIn key={feature.id} direction="up" delay={i * 100 + 150}>
              <div className="border-t border-white/10 pt-6 group">
                <div className="w-10 h-10 border border-gold/50 flex items-center justify-center mb-5 text-gold group-hover:bg-gold group-hover:border-gold group-hover:text-dark transition-all duration-400">
                  {icons[feature.id]}
                </div>
                <h4 className="font-display text-[20px] font-normal text-white mb-2 group-hover:text-gold-light transition-colors duration-300">
                  {feature.title}
                </h4>
                <p className="text-[13px] text-white/40 leading-relaxed">{feature.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  )
}