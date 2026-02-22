// ─────────────────────────────────────────────
//  siteData.js — single source of truth for all
//  landing page content. Swap text/images here.
// ─────────────────────────────────────────────

export const NAV_LINKS = [
  { label: 'About',        href: '#about' },
  { label: 'Services',     href: '#services' },
  { label: 'Portfolio',    href: '#portfolio' },
  { label: 'Testimonials', href: '#testimonials' },
]

export const INTRO_BAND_ITEMS = [
  'Weddings',
  'Corporate Events',
  'Graduations',
  'Birthday Parties',
  'Custom Events',
]

export const ABOUT = {
  label:    'Who We Are',
  heading:  'Every Event Deserves to Look',
  headingEm: 'Extraordinary',
  paragraphs: [
    'We are a full-service event decoration company dedicated to transforming ordinary spaces into breathtaking environments. Whether it\'s a tented wedding reception or a corporate gala, we handle every element — from table settings to ceiling drapes.',
    'Our approach is simple: listen to your vision, then bring it to life with precision and elegance. We show up, we set up, and we leave nothing behind but memories.',
  ],
  image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=900&q=80',
  stats: [
    { number: '150+', label: 'Events Decorated' },
    { number: '8+',   label: 'Years Experience'  },
    { number: '100%', label: 'Client Satisfaction'},
  ],
}

export const SERVICES = [
  {
    id: 1,
    title: 'Weddings',
    description: 'Ceremony & reception decor, floral arrangements, tent styling and full venue dressing.',
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=700&q=80',
  },
  {
    id: 2,
    title: 'Graduation Parties',
    description: 'Themed setups, chair & table arrangements, balloon décor and backdrops.',
    image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=700&q=80',
  },
  {
    id: 3,
    title: 'Corporate Events',
    description: 'Professional staging, branded backdrops, conference and gala setups.',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=700&q=80',
  },
  {
    id: 4,
    title: 'Birthday Parties',
    description: 'Custom themes, cake tables, photo booths and full venue transformation.',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=700&q=80',
  },
  {
    id: 5,
    title: 'Outdoor Events',
    description: 'Tent décor, fairy lights, outdoor furniture, draping and garden setups.',
    image: 'https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=700&q=80',
  },
  {
    id: 6,
    title: 'Custom Events',
    description: 'Any occasion — we design entirely around your unique vision and budget.',
    image: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?w=700&q=80',
  },
]

export const PORTFOLIO_ITEMS = [
  { id: 1, image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=900&q=80',  category: 'Wedding',   span: 'lg' },
  { id: 2, image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=700&q=80',  category: 'Graduation', span: 'sm' },
  { id: 3, image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=700&q=80',  category: 'Corporate',  span: 'sm' },
  { id: 4, image: 'https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=700&q=80',  category: 'Outdoor',    span: 'sm' },
  { id: 5, image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=700&q=80',  category: 'Wedding',    span: 'sm' },
  { id: 6, image: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?w=700&q=80',  category: 'Birthday',   span: 'sm' },
]

export const WHY_US = {
  label:    'Why Choose Us',
  heading:  'More Than Decoration.',
  headingEm: 'A Full Experience.',
  body: 'We go beyond aesthetics. Every event we touch is planned, executed, and dismantled seamlessly — so you can focus entirely on enjoying your moment.',
  features: [
    {
      id: 1,
      title: 'Custom Themes',
      description: 'Every setup is designed from scratch to match your vision, color scheme, and style.',
    },
    {
      id: 2,
      title: 'Full Setup & Takedown',
      description: 'We handle everything — arrival, installation, and full cleanup after your event.',
    },
    {
      id: 3,
      title: 'Trusted by Hundreds',
      description: 'Over 150 successful events with clients who keep coming back for more.',
    },
    {
      id: 4,
      title: 'Always Reachable',
      description: 'From first inquiry to event day, we\'re here to answer every question you have.',
    },
  ],
}

export const TESTIMONIALS = [
  {
    id: 1,
    quote: 'The venue looked absolutely stunning. Every detail was exactly what I imagined — the draping, the lighting, the floral arrangements. Our guests couldn\'t stop complimenting it.',
    name: 'Amara K.',
    event: 'Wedding — June 2024',
    avatar: 'https://i.pravatar.cc/80?img=47',
  },
  {
    id: 2,
    quote: 'We hired them for our company\'s annual dinner and the transformation was unbelievable. Professional, punctual, and the results were beyond what we expected.',
    name: 'James O.',
    event: 'Corporate Event — March 2024',
    avatar: 'https://i.pravatar.cc/80?img=12',
  },
  {
    id: 3,
    quote: 'My daughter\'s graduation party was a dream. The balloon arch, table setup, and photo area were all perfect. I\'ll be using them for every event going forward.',
    name: 'Ngozi M.',
    event: 'Graduation Party — Nov 2024',
    avatar: 'https://i.pravatar.cc/80?img=32',
  },
]

export const CONTACT = {
  label:    'Get In Touch',
  heading:  'Let\'s Talk About Your',
  headingEm: 'Event',
  body: 'Fill in the form and we\'ll get back to you within 24 hours with availability and a preliminary quote.',
  details: [
    { label: 'Phone',     value: '+254 700 000 000' },
    { label: 'Email',     value: 'hello@elumedecor.com' },
    { label: 'Instagram', value: '@elumedecor' },
  ],
  eventTypes: ['Wedding', 'Corporate Event', 'Graduation Party', 'Birthday Party', 'Outdoor Event', 'Other'],
}

export const FOOTER = {
  tagline: 'Transforming spaces into unforgettable experiences — one event at a time. Based in Nairobi, serving all of Kenya.',
  columns: [
    {
      title: 'Services',
      links: [
        { label: 'Weddings',        href: '#' },
        { label: 'Corporate Events', href: '#' },
        { label: 'Graduations',     href: '#' },
        { label: 'Birthday Parties', href: '#' },
        { label: 'Custom Events',   href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us',      href: '#' },
        { label: 'Portfolio',     href: '#' },
        { label: 'Testimonials',  href: '#' },
        { label: 'Contact',       href: '#' },
      ],
    },
    {
      title: 'Contact',
      links: [
        { label: '+254 700 000 000',    href: 'tel:+254700000000' },
        { label: 'hello@elumedecor.com', href: 'mailto:hello@elumedecor.com' },
        { label: '@elumedecor',         href: '#' },
        { label: 'Nairobi, Kenya',      href: '#' },
      ],
    },
  ],
  socials: [
    { label: 'Instagram', href: '#' },
    { label: 'Facebook',  href: '#' },
    { label: 'YouTube',   href: '#' },
  ],
}