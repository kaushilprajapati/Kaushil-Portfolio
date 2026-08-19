const BASE = import.meta.env.BASE_URL

export const img = (path: string) => `${BASE}${path.replace(/^\//, '')}`

export type Shot = { src: string; caption: string }

export type Project = {
  slug: string
  index: string
  name: string
  category: string
  badge: string
  region: string
  industry: string
  live: string
  cover: string
  tagline: string
  challenge: string
  solution: string
  highlights: string[]
  stack: string[]
  shots: Shot[]
  accent: string
}

const g = (slug: string, file: string) => img(`images/${slug}/${file}.webp`)

export const projects: Project[] = [
  {
    slug: 'employee-management',
    index: '01',
    name: 'Employee Management System',
    category: 'Enterprise SaaS Platform · Custom Web Application',
    badge: 'Live & In Production',
    region: 'Philippines',
    industry: 'HR Technology & Payroll',
    live: 'firehorseconsulting.ph',
    cover: g('employee-management', 'payroll-dashboard'),
    accent: '#6ea8fe',
    tagline:
      'A full-fledged, role-based HR & payroll intelligence platform — built, deployed and actively used by client teams every single day.',
    challenge:
      'Philippine enterprises wrestle with some of the most intricate payroll rules in the region — SSS, PhilHealth, Pag-IBIG and withholding tax all change, all interlock, and all must reconcile to the cent. Doing this on spreadsheets is slow, error-prone and impossible to audit.',
    solution:
      'I engineered a complete, multi-portal employee management system with three dedicated experiences — Employee, HR and Payroll — each behind its own secure login. Government contributions auto-calculate every run, loans amortise themselves, payslips generate and deliver automatically, and a live analytics layer turns payroll into decision-ready data.',
    highlights: [
      'Three role-based portals — Employee, HR & Payroll — with secure authentication',
      'Automated SSS, PhilHealth, Pag-IBIG & withholding-tax computation',
      'Loan & deduction engine with self-amortising schedules (salary, calamity, HCMF, MP2)',
      'Payslip generation with email PDF delivery and bulk ZIP export',
      'Employee self-service: clock in/out with location, leave, overtime & manual filing',
      'Manager approval portal with one-click leave, OT & attendance sign-off',
    ],
    stack: ['PHP', 'MySQL', 'JavaScript', 'REST APIs', 'Role-based Auth', 'PDF Engine'],
    shots: [
      { src: g('employee-management', 'payroll-dashboard'), caption: 'Payroll portal — runs, contributions & real-time analytics' },
      { src: g('employee-management', 'hr-dashboard'), caption: 'HR portal — workforce overview & people operations' },
      { src: g('employee-management', 'employee-dashboard'), caption: 'Employee portal — personal dashboard & self-service' },
      { src: g('employee-management', 'payroll-login'), caption: 'Payroll secure login' },
      { src: g('employee-management', 'hr-login'), caption: 'HR secure login' },
      { src: g('employee-management', 'employee-login'), caption: 'Employee secure login' },
    ],
  },
  {
    slug: 'quick-fix-foods',
    index: '02',
    name: 'Quick Fix Foods',
    category: 'Online Ordering Platform · Web App + Admin Dashboard',
    badge: 'International Client',
    region: 'Girrawheen, Australia',
    industry: 'Food & Beverage / QSR',
    live: 'quickfixfoods.com.au',
    cover: g('quick-fix-foods', 'hero'),
    accent: '#ff8a5c',
    tagline:
      'A bright, appetite-first ordering experience for a Western-Australian seafood & burger kitchen — paired with an admin dashboard that runs the back of house.',
    challenge:
      'A busy neighbourhood takeaway needed to move beyond phone-only orders, present a tempting menu online, and manage incoming orders without adding chaos to the kitchen during peak hours.',
    solution:
      'I built a fast, mobile-first storefront with a mouth-watering hero, structured menu and a dedicated online ordering flow — backed by a custom admin dashboard where staff manage orders, menu items and enquiries in real time.',
    highlights: [
      'Conversion-focused storefront with live deals and category browsing',
      'Dedicated online ordering flow built for speed on mobile',
      'Custom admin dashboard for order & menu management',
      'Integrated contact and enquiry handling',
      'Opening hours, location & store details surfaced cleanly',
    ],
    stack: ['PHP', 'MySQL', 'JavaScript', 'Responsive UI', 'Admin Panel'],
    shots: [
      { src: g('quick-fix-foods', 'hero'), caption: 'Storefront hero — simply tasty food that everyone loves' },
      { src: g('quick-fix-foods', 'order'), caption: 'Online ordering flow' },
      { src: g('quick-fix-foods', 'admin'), caption: 'Custom admin dashboard' },
      { src: g('quick-fix-foods', 'info'), caption: 'About & menu highlights' },
      { src: g('quick-fix-foods', 'contact'), caption: 'Contact & enquiry section' },
    ],
  },
  {
    slug: 'truearth',
    index: '03',
    name: 'TruEarth BioProducts',
    category: 'Product Catalogue + AI Assistant · Web Platform',
    badge: 'Featured Build',
    region: 'India',
    industry: 'Sustainability / Packaging',
    live: 'truearthbio.com',
    cover: g('truearth', 'hero'),
    accent: '#7bd88f',
    tagline:
      'A polished green-tech showcase for a certified biodegradable-packaging maker — complete with an on-site AI chatbot and a full product catalogue.',
    challenge:
      'A fast-growing, certified manufacturer of compostable packaging needed a credible digital home that could communicate sustainability convincingly, display a wide product range, and answer buyer questions instantly.',
    solution:
      'I delivered an immersive, eco-led brand site with an animated narrative, a structured catalogue of 12+ compostable products with detail pages, a certifications wall (MSME, Startup India, CIPET, CPCB), interactive eco-facts, and a custom on-site AI chatbot that guides visitors and answers product FAQs.',
    highlights: [
      'Custom AI chatbot for product guidance & site navigation',
      'Catalogue of 12+ compostable products with dedicated detail pages',
      'Certifications showcase with verifiable documents',
      'Interactive eco-facts and engagement micro-moments',
      'WhatsApp, enquiry forms & social integration',
    ],
    stack: ['PHP', 'MySQL', 'JavaScript', 'AI Chatbot', 'CMS Catalogue'],
    shots: [
      { src: g('truearth', 'hero'), caption: 'Go green without giving up a thing — brand hero' },
      { src: g('truearth', 'products'), caption: 'Compostable product catalogue' },
      { src: g('truearth', 'product-details'), caption: 'Product detail page' },
      { src: g('truearth', 'chatbot'), caption: 'Custom on-site AI assistant answering product FAQs' },
      { src: g('truearth', 'info'), caption: 'Sustainability story & certifications' },
      { src: g('truearth', 'contact'), caption: 'Get in touch' },
    ],
  },
  {
    slug: 'loopi',
    index: '04',
    name: 'Loopi',
    category: 'SaaS Product · Subscription Web App',
    badge: 'Featured Build',
    region: 'India',
    industry: 'SaaS / Digital Identity',
    live: 'loopi.in',
    cover: g('loopi', 'hero'),
    accent: '#8b7bff',
    tagline:
      'A complete subscription SaaS for digital business cards — sign-up, builder, hosted mini-sites and auto-generated QR codes, all under one link.',
    challenge:
      'Paper business cards are wasteful and forgettable, and existing digital alternatives felt clunky. The brief: let anyone spin up a beautiful, shareable digital card in minutes — and run it as a real subscription product.',
    solution:
      'I built Loopi end-to-end as a multi-tenant SaaS: account registration and sign-in, a customizable card builder with templates, hosted mini-sites for each user, automatic QR-code generation, and one-click sharing — wrapped in a confident marketing site with a clear plan.',
    highlights: [
      'Full subscription SaaS — registration, sign-in & plan management',
      'Card builder with customizable templates, colors & layouts',
      'Hosted personal mini-sites for every user',
      'Auto-generated QR codes & one-click multi-channel sharing',
      'Sustainability-led positioning with live example gallery',
    ],
    stack: ['PHP', 'MySQL', 'JavaScript', 'Multi-tenant SaaS', 'QR Generation'],
    shots: [
      { src: g('loopi', 'hero'), caption: 'Your brand. One link. — product hero' },
      { src: g('loopi', 'info'), caption: 'Why Loopi at every expo' },
      { src: g('loopi', 'info-2'), caption: 'Features & single-plan pricing' },
      { src: g('loopi', 'footer'), caption: 'Live mini-site examples & sharing' },
    ],
  },
  {
    slug: 'mdk-cricket',
    index: '05',
    name: 'MDK Cricket Academy',
    category: 'Marketing Site + Enquiry System · Website',
    badge: 'Featured Build',
    region: 'Vadodara, India',
    industry: 'Sports & Coaching',
    live: 'mdkcricketacademy.in',
    cover: g('mdk-cricket', 'hero'),
    accent: '#ffd166',
    tagline:
      'An energetic, video-led home for a BCCI-certified cricket academy — built to convert visitors into enrolled players.',
    challenge:
      'An established academy with 27 years of pedigree needed a digital presence that matched its reputation — showcasing coaches, programs and facilities while making it effortless for parents and players to enquire and book.',
    solution:
      'I crafted a dynamic, video-driven site with program breakdowns, a candid photo gallery, transparent rentals/turf pricing, a live-events section, real player testimonials, and an integrated enquiry form wired to WhatsApp for instant response.',
    highlights: [
      'Auto-playing video banners for an energetic first impression',
      'Detailed training-program pages (one-on-one, pace, fitness, group)',
      'Photo gallery & player testimonial wall',
      'Transparent turf & net rental pricing with booking CTA',
      'Enquiry form with direct WhatsApp connectivity',
    ],
    stack: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'WhatsApp API'],
    shots: [
      { src: g('mdk-cricket', 'hero'), caption: '27 years of experience — video-led hero' },
      { src: g('mdk-cricket', 'info'), caption: 'Why choose us & training programs' },
      { src: g('mdk-cricket', 'gallery'), caption: 'Candid gallery' },
      { src: g('mdk-cricket', 'contact'), caption: 'Programs & rentals' },
      { src: g('mdk-cricket', 'contact-2'), caption: 'Enquiry & testimonials' },
      { src: g('mdk-cricket', 'footer'), caption: 'Footer & quick links' },
    ],
  },
  {
    slug: 'oz-cargo',
    index: '06',
    name: 'Oz Cargo Carriers',
    category: 'Corporate Site + Tracking System · Web Application',
    badge: 'International Client',
    region: 'Australia',
    industry: 'Logistics & Freight',
    live: 'ozcargocarriers.com.au',
    cover: g('oz-cargo', 'hero'),
    accent: '#5ec8d8',
    tagline:
      'A premium logistics presence with a live shipment-tracking experience — built to win trust with businesses shipping across Australia.',
    challenge:
      'A logistics operator needed an authoritative web presence that conveyed scale and reliability, while giving customers a self-service way to track shipments and request quotes without picking up the phone.',
    solution:
      'I designed a bold, stats-forward corporate site spanning the full service range — ground, express, sea freight, warehousing, interstate and specialised handling — and engineered a real-time tracking module with a status timeline, plus streamlined quote and contact journeys.',
    highlights: [
      'Real-time shipment tracking with visual status timeline',
      'Complete service catalogue across six freight categories',
      'Trust-building metrics: shipments delivered, on-time rate, coverage',
      'Quote request & contact journeys throughout',
      'Confident, motion-rich premium visual design',
    ],
    stack: ['HTML5', 'JavaScript', 'PHP', 'Tracking Module', 'Responsive UI'],
    shots: [
      { src: g('oz-cargo', 'hero'), caption: "Australia's logistics leader — hero" },
      { src: g('oz-cargo', 'info'), caption: 'Services & company credentials' },
      { src: g('oz-cargo', 'contact-1'), caption: 'Real-time tracking system' },
      { src: g('oz-cargo', 'contact-2'), caption: 'Tracking timeline & support' },
      { src: g('oz-cargo', 'footer'), caption: 'Quote & footer' },
    ],
  },
  {
    slug: 'xcelcore',
    index: '07',
    name: 'Xcelcore Securities',
    category: 'Brand & Advisory Site · Website',
    badge: 'Featured Build',
    region: 'Vadodara, India',
    industry: 'Finance & Investment',
    live: 'xcelcore.in',
    cover: g('xcelcore', 'hero'),
    accent: '#c4b5a0',
    tagline:
      "An editorial, design-led identity for a boutique securities house — 'markets, refined' expressed in every pixel.",
    challenge:
      'A boutique investment advisory wanted to stand apart from loud, templated finance sites — projecting discretion, expertise and a bespoke, high-conviction philosophy to a discerning clientele.',
    solution:
      'I delivered a refined, typography-forward brand site with editorial pacing, a clear three-service architecture (India equity, international markets, curated mutual funds), an elegant enquiry flow, and a restrained palette that reads as premium and trustworthy.',
    highlights: [
      'Editorial, typography-led design language',
      'Clear three-service architecture with ticket-size clarity',
      "Considered 'why us' narrative & philosophy section",
      'Refined enquiry form with interest routing',
      'Boutique, high-trust visual identity',
    ],
    stack: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'Custom Type System'],
    shots: [
      { src: g('xcelcore', 'hero'), caption: 'Markets, refined — brand hero' },
      { src: g('xcelcore', 'info'), caption: 'Three doors, one considered approach' },
      { src: g('xcelcore', 'contact'), caption: 'Begin a conversation — enquiry' },
    ],
  },
  {
    slug: 'fitfamworld',
    index: '08',
    name: 'Fit Fam World',
    category: 'Retail Showcase Site · Website',
    badge: 'Featured Build',
    region: 'Vadodara, India',
    industry: 'Fitness Equipment Retail',
    live: 'fitfamworld.in',
    cover: g('fitfamworld', 'hero'),
    accent: '#ff6b8a',
    tagline:
      'A clean storefront-style site for Vadodara’s authorised Aerofit equipment partner, with 17+ years of trade behind it.',
    challenge:
      'An established fitness-equipment retailer and wholesaler needed a credible online showcase to display its product range, communicate its authorised-partner status, and capture leads from gym owners and home buyers.',
    solution:
      'I built a crisp, product-forward site with a visual product grid, a confident brand story, embedded Google Maps location, and quick contact paths via form and WhatsApp — turning their decades of reputation into an online lead engine.',
    highlights: [
      'Visual product showcase grid',
      'Authorised-partner credibility & experience storytelling',
      'Embedded Google Maps store location',
      'Contact form plus direct WhatsApp & call CTAs',
      'Clean, responsive, fast-loading layout',
    ],
    stack: ['HTML5', 'CSS3', 'JavaScript', 'Google Maps', 'WhatsApp API'],
    shots: [
      { src: g('fitfamworld', 'hero'), caption: 'Our products — visual showcase' },
      { src: g('fitfamworld', 'info'), caption: 'Brand story & experience' },
      { src: g('fitfamworld', 'contact'), caption: 'Contact & location' },
    ],
  },
  {
    slug: 'firehorse-consulting',
    index: '09',
    name: 'Fire Horse Consulting',
    category: 'Corporate Website · Multi-page Website',
    badge: 'International Client',
    region: 'Makati, Philippines',
    industry: 'Finance & Consulting',
    live: 'firehorseconsulting.ph',
    cover: g('firehorse-consulting', 'hero'),
    accent: '#ff7a59',
    tagline:
      'The corporate face of a Philippine CFO-advisory, strategy & HR-tech firm — and the front door to the employee platform.',
    challenge:
      'A consulting firm spanning CFO advisory, business strategy and proprietary HR software needed a single authoritative site that could speak to enterprise buyers across all three offerings and drive demo bookings.',
    solution:
      'I built a polished, multi-page corporate website with dedicated service sections, a clear value narrative, an industries-served showcase, a resources hub, and consultation/demo booking journeys — establishing Fire Horse as a credible Philippine partner for finance and HR transformation.',
    highlights: [
      'Multi-page architecture across CFO advisory, strategy & HR software',
      'Enterprise-grade messaging with compliance trust signals',
      'Industries-served & differentiator sections',
      'Resources hub and lead-capture demo booking',
      'Cohesive brand system tying website & product platform together',
    ],
    stack: ['PHP', 'MySQL', 'JavaScript', 'Responsive UI', 'Lead Capture'],
    shots: [
      { src: g('firehorse-consulting', 'hero'), caption: 'Beyond numbers, real business impact — hero' },
      { src: g('firehorse-consulting', 'info'), caption: 'What we do & the Fire Horse difference' },
      { src: g('firehorse-consulting', 'info-2'), caption: 'Trusted partner & industries served' },
      { src: g('firehorse-consulting', 'contact'), caption: 'Engagement & conversion' },
      { src: g('firehorse-consulting', 'footer'), caption: 'Footer & contact' },
    ],
  },
]
