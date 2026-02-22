import { useEffect, useState } from 'react'

export default function Hero() {
  const [loaded, setLoaded] = useState(false)

  /* slight delay so CSS transition fires after mount */
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(t)
  }, [])

  const handleScroll = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative h-screen min-h-175 flex items-center justify-center overflow-hidden">

      {/* Background image */}
      <div
        className="absolute inset-0 scale-105"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1800&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transition: 'transform 8s ease-out',
          transform: loaded ? 'scale(1)' : 'scale(1.05)',
        }}
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, rgba(26,22,18,0.5) 0%, rgba(26,22,18,0.15) 40%, rgba(26,22,18,0.7) 100%)',
        }}
      />

      {/* Subtle grain texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")',
        }}
      />

      {/* Content */}
      <div className="relative text-center text-white max-w-3xl px-6 z-10">

        {/* Tag line */}
        <div
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'none' : 'translateY(20px)',
            transition: 'opacity 0.9s ease 0.2s, transform 0.9s ease 0.2s',
          }}
        >
          <span className="inline-flex items-center gap-3 text-[11px] tracking-[4px] uppercase text-gold-light font-normal mb-7">
            <span className="w-8 h-px bg-gold-light/60" />
            Premium Event Decoration
            <span className="w-8 h-px bg-gold-light/60" />
          </span>
        </div>

        {/* Heading */}
        <h1
          className="font-display font-light leading-[1.05] tracking-tight mb-6"
          style={{
            fontSize: 'clamp(48px, 7.5vw, 92px)',
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'none' : 'translateY(28px)',
            transition: 'opacity 0.9s ease 0.4s, transform 0.9s ease 0.4s',
          }}
        >
          We Turn Your Event<br />
          Into an <em className="italic text-gold-light">Experience</em>
        </h1>

        {/* Sub */}
        <p
          className="text-white/70 leading-relaxed font-light max-w-md mx-auto mb-11"
          style={{
            fontSize: 'clamp(14px, 1.5vw, 16px)',
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'none' : 'translateY(20px)',
            transition: 'opacity 0.9s ease 0.6s, transform 0.9s ease 0.6s',
          }}
        >
          From intimate gatherings to grand celebrations — every detail, every drape, every light, crafted with intention.
        </p>

        {/* CTAs */}
        <div
          className="flex gap-4 justify-center flex-wrap"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'none' : 'translateY(20px)',
            transition: 'opacity 0.9s ease 0.8s, transform 0.9s ease 0.8s',
          }}
        >
          <button
            onClick={() => handleScroll('#contact')}
            className="bg-gold text-dark px-10 py-4 text-[11px] tracking-[2.5px] uppercase font-medium cursor-pointer border-none hover:bg-gold-light transition-colors duration-300"
          >
            Get a Free Quote
          </button>
          <button
            onClick={() => handleScroll('#portfolio')}
            className="border border-white/50 text-white px-10 py-4 text-[11px] tracking-[2.5px] uppercase font-light cursor-pointer bg-transparent hover:bg-white/10 hover:border-white transition-all duration-300"
          >
            View Our Work
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{
          opacity: loaded ? 1 : 0,
          transition: 'opacity 1s ease 1.2s',
        }}
      >
        <span className="text-white/40 text-[9px] tracking-[4px] uppercase">Scroll</span>
        <div className="w-px h-12 bg-linear-to-b from-white/40 to-transparent" />
      </div>
    </section>
  )
}