import { INTRO_BAND_ITEMS } from '../data/siteData'

export default function IntroBand() {
  /* Duplicate items for seamless marquee loop */
  const items = [...INTRO_BAND_ITEMS, ...INTRO_BAND_ITEMS]

  return (
    <div className="bg-dark overflow-hidden py-5 border-y border-white/5">
      <div
        className="flex gap-0 whitespace-nowrap"
        style={{
          animation: 'marquee 28s linear infinite',
        }}
      >
        {items.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-5 text-white/50 text-[10px] tracking-[3.5px] uppercase pr-8"
          >
            <span className="w-5 h-px bg-gold shrink-0" />
            {item}
          </span>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  )
}