import { FOOTER } from '../data/siteData'

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
)

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
)

const YouTubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
    <polygon points="9.75,15.02 15.5,12 9.75,8.98 9.75,15.02"/>
  </svg>
)

const socialIcons = { Instagram: <InstagramIcon />, Facebook: <FacebookIcon />, YouTube: <YouTubeIcon /> }

export default function Footer() {
  const { tagline, columns, socials } = FOOTER
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark px-6 lg:px-16 pt-16 pb-8">

      {/* Top grid */}
      <div className="max-w-300 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-white/[0.07]">

        {/* Brand */}
        <div className="sm:col-span-2 lg:col-span-1">
          <div className="font-display text-[22px] tracking-[4px] uppercase text-white mb-5">
            Mwandi's <span className="text-gold-light">Décor</span>
          </div>
          <p className="text-[13px] text-white/35 leading-relaxed mb-8">{tagline}</p>
          <div className="flex gap-3">
            {socials.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-9 h-9 border border-white/10 flex items-center justify-center text-white/40 no-underline hover:border-gold hover:text-gold transition-all duration-300"
              >
                {socialIcons[label]}
              </a>
            ))}
          </div>
        </div>

        {/* Link columns */}
        {columns.map(({ title, links }) => (
          <div key={title}>
            <h5 className="text-[10px] tracking-[3px] uppercase text-gold mb-6 font-medium">
              {title}
            </h5>
            <ul className="list-none space-y-3">
              {links.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-[13px] text-white/35 no-underline hover:text-white/70 transition-colors duration-300"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="max-w-300 mx-auto flex flex-col sm:flex-row justify-between items-center gap-3 pt-7">
        <p className="text-[11px] text-white/20 tracking-wide">
          © {currentYear} Mwandi's Décor. All rights reserved.
        </p>
        <div className="flex gap-6">
          {['Privacy Policy', 'Terms of Service'].map(l => (
            <a key={l} href="#" className="text-[11px] text-white/20 no-underline hover:text-white/40 transition-colors">
              {l}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}