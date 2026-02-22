import FadeIn from '../animations/FadeIn'
import { ABOUT } from '../data/siteData'

export default function About() {
  const { label, heading, headingEm, paragraphs, image, stats } = ABOUT

  return (
    <section id="about" className="grid grid-cols-1 lg:grid-cols-2">

      {/* Image panel */}
      <div className="relative overflow-hidden min-h-100 lg:min-h-150">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105 hover:scale-100 transition-transform duration-[1.5s] ease-out"
          style={{ backgroundImage: `url('${image}')` }}
        />
        {/* Subtle dark vignette on right edge for blend */}
        <div className="absolute inset-0 bg-linear-to-r from-transparent via-transparent to-dark/20 hidden lg:block" />
      </div>

      {/* Content panel */}
      <div className="bg-cream px-8 py-16 lg:px-20 lg:py-24 flex flex-col justify-center">

        <FadeIn direction="right">
          <p className="text-[10px] tracking-[4px] uppercase text-gold mb-5 font-medium">
            {label}
          </p>
        </FadeIn>

        <FadeIn direction="right" delay={100}>
          <h2
            className="font-display font-light leading-[1.15] text-brown mb-7"
            style={{ fontSize: 'clamp(32px, 3.5vw, 52px)' }}
          >
            {heading}<br />
            Look <em className="italic text-gold">{headingEm}</em>
          </h2>
        </FadeIn>

        {paragraphs.map((p, i) => (
          <FadeIn key={i} direction="right" delay={200 + i * 80}>
            <p className="text-[15px] leading-[1.9] text-muted mb-4">{p}</p>
          </FadeIn>
        ))}

        <FadeIn direction="right" delay={380}>
          <div className="w-12 h-px bg-gold my-8" />
        </FadeIn>

        {/* Stats */}
        <FadeIn direction="right" delay={440}>
          <div className="flex flex-wrap gap-8 lg:gap-12">
            {stats.map(({ number, label }) => (
              <div key={label}>
                <div className="font-display text-[40px] lg:text-[48px] font-light text-brown leading-none">
                  {number}
                </div>
                <div className="text-[10px] tracking-[2px] uppercase text-muted mt-1.5">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}