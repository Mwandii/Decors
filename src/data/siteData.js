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
    // Card-level (used on the Services grid)
    description: 'Ceremony & reception decor, floral arrangements, tent styling and full venue dressing.',
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=700&q=80',
    // Modal-level (used inside the lightbox)
    modalImage: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1200&q=85',
    tagline: 'Your dream day, brought to life in every detail.',
    about: 'We transform wedding venues into breathtaking spaces that tell your love story. From the first floral centerpiece to the last draped arch, every element is designed around you — your colors, your theme, your vision.',
    includes: [
      'Tent & ceiling draping',
      'Floral centerpieces & arrangements',
      'Chair covers, sashes & table linen',
      'Aisle & altar decoration',
      'Sweetheart / head table styling',
      'Balloon installations & arches',
      'Fairy light canopies',
      'Welcome signage & stationery styling',
    ],
    gallery: [
      'https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=600&q=80',
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&q=80',
      'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&q=80',
    ],
    quoteEventType: 'Wedding',
  },
  {
    id: 2,
    title: 'Graduation Parties',
    description: 'Themed setups, chair & table arrangements, balloon décor and backdrops.',
    image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=700&q=80',
    modalImage: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1200&q=85',
    tagline: 'Celebrate the milestone in style.',
    about: 'Graduation is one of life\'s biggest milestones and it deserves a celebration that looks as grand as the achievement. We handle every detail so the graduate and family can focus on the moment.',
    includes: [
      'Themed backdrop & photo wall',
      'Balloon garlands & arch installations',
      'Table centerpieces & florals',
      'Chair & table linen dressing',
      'Personalized name & year signage',
      'Candy / dessert table styling',
      'Step-and-repeat banners',
      'Full setup & takedown',
    ],
    gallery: [
      'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?w=600&q=80',
      'https://images.unsplash.com/photo-1627556704302-624286467c65?w=600&q=80',
      'https://images.unsplash.com/photo-1576267423048-15c0040fec78?w=600&q=80',
    ],
    quoteEventType: 'Graduation Party',
  },
  {
    id: 3,
    title: 'Corporate Events',
    description: 'Professional staging, branded backdrops, conference and gala setups.',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=700&q=80',
    modalImage: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200&q=85',
    tagline: 'Spaces that reflect your brand\'s excellence.',
    about: 'First impressions matter. Whether it\'s an annual company dinner, a product launch, or a conference, we create environments that communicate professionalism, ambition, and class — all aligned to your brand identity.',
    includes: [
      'Branded backdrops & step-and-repeat',
      'Stage & podium dressing',
      'Table settings for gala dinners',
      'Floral & greenery installations',
      'Entrance & registration area styling',
      'Corporate color-scheme theming',
      'Lighting coordination',
      'Breakdown & cleanup included',
    ],
    gallery: [
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80',
      'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600&q=80',
      'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=600&q=80',
    ],
    quoteEventType: 'Corporate Event',
  },
  {
    id: 4,
    title: 'Birthday Parties',
    description: 'Custom themes, cake tables, photo booths and full venue transformation.',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=700&q=80',
    modalImage: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1200&q=85',
    tagline: 'Because every birthday deserves to feel magical.',
    about: 'From intimate adult birthdays to full children\'s party transformations, we bring your chosen theme to life with creativity and precision. No theme is too bold, no request too specific.',
    includes: [
      'Custom theme design & execution',
      'Balloon sculptures & installations',
      'Cake table & dessert bar styling',
      'Photo booth backdrop & props',
      'Table centerpieces & florals',
      'Chair & linen dressing',
      'Personalized birthday signage',
      'Entrance décor & room transformation',
    ],
    gallery: [
      'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=600&q=80',
      'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&q=80',
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80',
    ],
    quoteEventType: 'Birthday Party',
  },
  {
    id: 5,
    title: 'Outdoor Events',
    description: 'Tent décor, fairy lights, outdoor furniture, draping and garden setups.',
    image: 'https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=700&q=80',
    modalImage: 'https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=1200&q=85',
    tagline: 'The open air, dressed to impress.',
    about: 'Outdoor events have a beauty all their own — and we know exactly how to enhance it. We work with the natural environment, using lighting, fabric, and greenery to create spaces that feel both organic and intentional.',
    includes: [
      'Tent interior draping & lining',
      'Fairy light & Edison bulb canopies',
      'Outdoor furniture arrangement',
      'Garden & floral installations',
      'Pergola & arch decoration',
      'Ground & pathway lighting',
      'Weather-appropriate styling solutions',
      'Full setup & post-event breakdown',
    ],
    gallery: [
      'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&q=80',
      'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=600&q=80',
      'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&q=80',
    ],
    quoteEventType: 'Outdoor Event',
  },
  {
    id: 6,
    title: 'Custom Events',
    description: 'Any occasion — we design entirely around your unique vision and budget.',
    image: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?w=700&q=80',
    modalImage: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?w=1200&q=85',
    tagline: 'No event is too unique for us.',
    about: 'Have something in mind that doesn\'t fit a standard category? Perfect — those are our favorite projects. We start with a blank canvas and build something entirely around your vision, your budget, and your story.',
    includes: [
      'One-on-one concept consultation',
      'Mood board & theme development',
      'Fully bespoke decor design',
      'Custom props & installations',
      'Flexible budget planning',
      'Any venue, any size',
      'Full coordination on the day',
      'Complete setup & breakdown',
    ],
    gallery: [
      'https://images.unsplash.com/photo-1531058020387-3be344556be6?w=600&q=80',
      'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&q=80',
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&q=80',
    ],
    quoteEventType: 'Other',
  },
]

export const PORTFOLIO_ITEMS = [
  {
    id: 1,
    category: 'Wedding',
    theme: 'Ivory & Sage Garden Wedding',
    location: 'Karen, Nairobi',
    guests: '200 guests',
    year: '2024',
    summary: 'Full venue transformation with ceiling drapes, floral arches, and a candlelit reception under a decorated tent.',
    cover: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1200&q=85',
      'https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=1200&q=85',
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1200&q=85',
      'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=1200&q=85',
    ],
    featured: true,
  },
  {
    id: 2,
    category: 'Corporate',
    theme: 'Black & Gold Annual Gala',
    location: 'Westlands, Nairobi',
    guests: '350 guests',
    year: '2024',
    summary: 'Sophisticated black-tie dinner setup with branded stage, gold table settings, and a dramatic entrance installation.',
    cover: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200&q=85',
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=85',
      'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1200&q=85',
    ],
    featured: false,
  },
  {
    id: 3,
    category: 'Graduation',
    theme: 'Blush & Gold Graduation Celebration',
    location: 'Kilimani, Nairobi',
    guests: '120 guests',
    year: '2024',
    summary: 'Custom balloon arch, personalized signage, dessert table, and a full photo wall backdrop for the graduate.',
    cover: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1200&q=85',
      'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?w=1200&q=85',
      'https://images.unsplash.com/photo-1627556704302-624286467c65?w=1200&q=85',
    ],
    featured: false,
  },
  {
    id: 4,
    category: 'Outdoor',
    theme: 'Bohemian Fairy Light Garden Party',
    location: 'Gigiri, Nairobi',
    guests: '80 guests',
    year: '2023',
    summary: 'Outdoor pergola draped in fairy lights, hanging florals, rustic wooden furniture, and an open-air dining setup.',
    cover: 'https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=1200&q=85',
      'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1200&q=85',
      'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1200&q=85',
    ],
    featured: false,
  },
  {
    id: 5,
    category: 'Birthday',
    theme: 'Midnight Blue 40th Birthday',
    location: 'Lavington, Nairobi',
    guests: '150 guests',
    year: '2023',
    summary: 'Dramatic navy and silver theme with oversized balloon installations, a luxury cake table, and a cinematic entrance.',
    cover: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1200&q=85',
      'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=1200&q=85',
      'https://images.unsplash.com/photo-1531058020387-3be344556be6?w=1200&q=85',
    ],
    featured: false,
  },
  {
    id: 6,
    category: 'Wedding',
    theme: 'Tropical Luxe Beach Wedding',
    location: 'Diani, Mombasa',
    guests: '180 guests',
    year: '2023',
    summary: 'Beachfront ceremony arch, tropical florals, draped reception tent with rattan furniture and warm amber lighting.',
    cover: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1200&q=85',
      'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1200&q=85',
      'https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=1200&q=85',
    ],
    featured: false,
  },
  {
    id: 7,
    category: 'Corporate',
    theme: 'Product Launch — Tech Brand',
    location: 'CBD, Nairobi',
    guests: '250 guests',
    year: '2023',
    summary: 'Sleek modern staging, brand-color LED installations, press backdrop wall, and a lounge networking area.',
    cover: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=85',
      'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=1200&q=85',
      'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1200&q=85',
    ],
    featured: false,
  },
  {
    id: 8,
    category: 'Graduation',
    theme: 'Classic Red & White Graduation',
    location: 'Parklands, Nairobi',
    guests: '90 guests',
    year: '2024',
    summary: 'Full garden party setup with a balloon column entrance, class-themed photo wall, and a decorated buffet station.',
    cover: 'https://images.unsplash.com/photo-1576267423048-15c0040fec78?w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1576267423048-15c0040fec78?w=1200&q=85',
      'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1200&q=85',
      'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?w=1200&q=85',
    ],
    featured: false,
  },
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