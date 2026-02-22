import FadeIn from '../animations/FadeIn'

export default function CTABand() {
  const handleClick = () => {
    const el = document.getElementById('contact')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative py-28 lg:py-40 px-6 text-center overflow-hidden">

      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(26,22,18,0.78), rgba(26,22,18,0.78)),
            url('https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1600&q=80')
          `,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      />

      {/* Gold decorative lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="relative max-w-[720px] mx-auto">
        <FadeIn direction="none">
          <p className="text-[10px] tracking-[5px] uppercase text-gold-light mb-5 font-medium">
            Let's Create Something Beautiful
          </p>
        </FadeIn>

        <FadeIn delay={100}>
          <h2
            className="font-display font-light text-white leading-[1.1] mb-5"
            style={{ fontSize: 'clamp(36px, 5.5vw, 68px)' }}
          >
            Planning an Event?<br />
            Let's Make It <em className="italic text-gold-light">Unforgettable.</em>
          </h2>
        </FadeIn>

        <FadeIn delay={200}>
          <p className="text-white/55 text-[15px] leading-relaxed mb-12 max-w-md mx-auto">
            Tell us about your event and we'll put together a proposal that brings your vision to life — on time and on budget.
          </p>
        </FadeIn>

        <FadeIn delay={300}>
          <button
            onClick={handleClick}
            className="relative inline-block bg-gold text-dark px-12 py-4 text-[11px] tracking-[3px] uppercase font-medium cursor-pointer border-none hover:bg-gold-light transition-colors duration-300 overflow-hidden group"
          >
            {/* Shimmer on hover */}
            <span
              className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"
              style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent)' }}
            />
            <span className="relative">Start Planning →</span>
          </button>
        </FadeIn>
      </div>
    </section>
  )
}