/*
 * GENERATION FINGERPRINT
 * archetype: F (Type Editorial)
 * style: S6 (Editorial Magazine)
 * voice: V7 Editorial
 * header: pill-floating
 * footer: FT2 Asymmetric Editorial
 * card: CV2 Oversized Number Minimal
 * hero_text: H5 big-stack | hero_entrance: E2 word-split-rise
 * cta: CTA1 centered oversized type
 * color: editorial-dark + cream chapter
 * asset_mode: live-generate
 * build_mode: landing (public-only, no admin)
 */
import assetManifest from "./asset-manifest.json";

const images = (assetManifest as { images?: Record<string, string> }).images ?? {};
const videos = (assetManifest as { videos?: Record<string, string> }).videos ?? {};

export const siteConfig = {
  templateId: "vantage-studio-editorial-v1",
  headerVariant: "pill-floating" as const,
  company: {
    name: "Vantage Studio",
    shortName: "Vantage",
    tagline: "A London creative studio for ambitious B2B brands.",
    description:
      "We build cultural traction for enterprise brands — strategy, creative, media and content under one roof in London.",
    location: "London, UK",
    email: "hello@vantage.studio",
    phone: "+44 20 7100 4000",
    address: "12 Bonhill Street, London EC2A 4BX",
  },
  brand: {
    primary: "#d97757",
    accent: "#c8a47a",
    logo: null,
  },
  seo: {
    siteUrl: "https://vantage.studio",
    title: "Vantage Studio — London Creative Studio for B2B Brands",
    description:
      "Vantage is a London creative studio building cultural traction for ambitious B2B brands through strategy, creative, media and content.",
    locale: "en_GB",
    ogImage: images["section-cta"] ?? images["section-services"] ?? "",
  },
  hero: {
    eyebrow: "London · Creative Studio · Est. 2018",
    h1Lines: [
      { text: "We make B2B" },
      { text: "brands worth", italic: true },
      { text: "noticing." },
    ],
    body:
      "Vantage builds the strategy, creative, media and content that turn enterprise category leaders into cultural ones.",
    backgroundVideo: videos["scene-1"] ?? "",
    backgroundImage:
      images["scene-1-end"] ?? images["section-hero-poster"] ?? "",
  },
  valueProp: {
    eyebrow: "What we do",
    statement:
      "We sit between brand and growth — making the work that actually moves a category.",
  },
  services: [
    {
      number: "01",
      slug: "strategy",
      name: "Strategy",
      description:
        "Positioning, narrative architecture and category design for B2B brands ready to lead, not follow.",
      detail:
        "We run brand audits, market re-positioning, narrative workshops and competitor decoding. Output is a position you can ship — not a 60-page deck.",
      deliverables: [
        "Brand & category positioning",
        "Narrative architecture",
        "Messaging frameworks",
        "Naming & verbal identity",
      ],
    },
    {
      number: "02",
      slug: "creative",
      name: "Creative",
      description:
        "Identity systems, art direction and campaign creative built to live across surfaces — not stuck in a brand book.",
      detail:
        "Visual identity, design systems, art direction, campaign concepts and editorial film. We design for software, surface and stage.",
      deliverables: [
        "Visual identity & systems",
        "Campaign art direction",
        "Editorial design",
        "Motion & film direction",
      ],
    },
    {
      number: "03",
      slug: "media",
      name: "Media",
      description:
        "Paid, earned and owned planning — measured against share of conversation, not just clicks.",
      detail:
        "Media planning and buying that treats your brand as a publisher. Channel strategy, paid amplification, distribution partnerships and measurement.",
      deliverables: [
        "Channel strategy",
        "Paid media planning",
        "PR & earned amplification",
        "Performance measurement",
      ],
    },
    {
      number: "04",
      slug: "content",
      name: "Content",
      description:
        "Editorial programmes — reports, films, podcasts and stages — that earn attention rather than buy it.",
      detail:
        "We produce flagship editorial: research reports, documentary film, podcast series, event experiences and the steady drumbeat that keeps brands in the conversation.",
      deliverables: [
        "Editorial strategy",
        "Long-form research",
        "Documentary & podcast",
        "Event direction",
      ],
    },
  ],
  servicesHeading: "Four disciplines, one room.",
  showcase: {
    eyebrow: "Selected work",
    heading: "Recent work for category-defining brands.",
    items: [
      {
        slug: "northwind-rebrand",
        client: "Northwind Logistics",
        title: "Repositioning a freight giant as a climate company.",
        sector: "Industrial",
        year: "2025",
        image: images["section-work-1"] ?? "",
      },
      {
        slug: "lattice-launch",
        client: "Lattice AI",
        title: "Launching enterprise AI with editorial gravity.",
        sector: "AI / SaaS",
        year: "2025",
        image: images["section-work-2"] ?? "",
      },
      {
        slug: "harbour-bank",
        client: "Harbour Bank",
        title: "Designing a private bank for builders, not heirs.",
        sector: "Financial Services",
        year: "2024",
        image: images["section-work-3"] ?? "",
      },
      {
        slug: "ovum-health",
        client: "Ovum Health",
        title: "A reproductive health brand the NHS sends patients to.",
        sector: "Healthcare",
        year: "2024",
        image: images["section-work-4"] ?? "",
      },
    ],
  },
  manifesto: {
    eyebrow: "The Vantage point",
    body: "Most B2B brands sell. Few are believed. We exist for the ones that want to be.",
  },
  process: {
    eyebrow: "How we work",
    heading: "A studio. Not an agency machine.",
    steps: [
      {
        n: "01",
        name: "Diagnose",
        body: "Two weeks. We pressure-test what you actually sell, who actually buys, and what the category will reward.",
      },
      {
        n: "02",
        name: "Define",
        body: "We write the position, the narrative and the visual posture. Senior people in the room — partner-led.",
      },
      {
        n: "03",
        name: "Design",
        body: "Identity systems, editorial design, campaign creative. Built for the surfaces it will actually live on.",
      },
      {
        n: "04",
        name: "Distribute",
        body: "Media, content and amplification — engineered for share of conversation, not just impressions.",
      },
    ],
  },
  stats: [
    { value: 42, suffix: "+", label: "B2B brands shipped" },
    { value: 8, suffix: " yrs", label: "Partner-led studio" },
    { value: 12, suffix: "", label: "Cannes, D&AD & Webby wins" },
  ],
  testimonials: [
    {
      quote:
        "Vantage rewired how our buyers see the category. The work paid for itself in the first quarter.",
      author: "Sasha Owens",
      role: "CMO, Northwind Logistics",
    },
    {
      quote:
        "We've worked with the big networks. Vantage produced sharper work, faster, with senior people in every room.",
      author: "Theo Marchetti",
      role: "VP Brand, Lattice AI",
    },
    {
      quote:
        "They treated brand as a strategic problem, not a design exercise. That changed the conversation internally.",
      author: "Imogen Bell",
      role: "CEO, Ovum Health",
    },
  ],
  marquee: [
    "Strategy",
    "Creative",
    "Media",
    "Content",
    "London",
    "Since 2018",
    "Partner-led",
    "Enterprise B2B",
  ],
  cta: {
    eyebrow: "Start a project",
    headline: "Book a discovery call.",
    body: "Tell us what you're shipping. We'll tell you in 30 minutes whether we're the right room for it.",
    primary: "Book a discovery call",
    primaryHref: "/contact",
    secondary: "View selected work",
    secondaryHref: "/work",
  },
  footer: {
    variant: "FT2",
    brandStatement: "A London creative studio for ambitious B2B brands.",
    contactEmail: "hello@vantage.studio",
    contactPhone: "+44 20 7100 4000",
    address: ["12 Bonhill Street", "London EC2A 4BX", "United Kingdom"],
    socials: {
      instagram: "https://instagram.com/vantage.studio",
      linkedin: "https://linkedin.com/company/vantage-studio",
      x: "https://x.com/vantagestudio",
      threads: "",
      youtube: "",
      facebook: "",
      tiktok: "",
      pinterest: "",
      whatsapp: "",
    },
    legal: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
    columns: [
      {
        heading: "Studio",
        links: [
          { label: "About", href: "/about" },
          { label: "Work", href: "/work" },
          { label: "Services", href: "/services" },
          { label: "Contact", href: "/contact" },
        ],
      },
      {
        heading: "Disciplines",
        links: [
          { label: "Strategy", href: "/services/strategy" },
          { label: "Creative", href: "/services/creative" },
          { label: "Media", href: "/services/media" },
          { label: "Content", href: "/services/content" },
        ],
      },
    ],
  },
  colors: {
    text: {
      hero: "#f5f1e8",
      body: "rgba(245,241,232,0.78)",
      eyebrow: "#d97757",
      muted: "rgba(245,241,232,0.55)",
    },
    cardOverlay: {
      tint: "rgba(10,10,9,0.78)",
      blur: "xl",
      border: "1px solid rgba(245,241,232,0.10)",
    },
  },
  motion: {
    intensity: "medium" as const,
    cursorFollower: true,
    scrollProgress: true,
  },
};

export type SiteConfig = typeof siteConfig;
