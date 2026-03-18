import { client } from "@/config/client";

export const heroData = {
  title: "Quality Timber Decking\n& Landscaping in Sheffield",
  subtitle: `DECKING, FENCING & LANDSCAPING ACROSS ${client.basedIn.toUpperCase()}`,
  image: "/images/hero-bg-v2.jpg",
};

export const introData = {
  heading: `Transforming Outdoor Spaces Across ${client.basedIn}`,
  text: [
    `${client.name} is a specialist timber decking and landscaping company based in ${client.region}. Led by director ${client.founderName} Charles, we design and install beautiful, durable outdoor living spaces — from bespoke timber decking and pergolas to fencing, patios and full garden transformations.`,
    "Explore a curated selection of our completed projects within our Portfolio.",
  ],
  cta: { label: "Get a Free Quote", href: "/contact" },
  image: "/images/intro-circle-v2.jpg",
};

export const servicesData = {
  tabs: [
    {
      label: "TIMBER DECKING",
      title: "Timber Decking",
      text: "Bespoke softwood and hardwood decking built to last. We design and install raised decks, ground-level platforms, multi-tier structures and wraparound decking — all pressure-treated and finished to a beautiful standard.",
      tagline: "Built to last — designed to impress.",
      cta: { label: "Read More", href: "/garden-design" },
      image: "/images/service-driveways-v2.jpg",
    },
    {
      label: "FENCING & GATES",
      title: "Fencing & Gates",
      text: "Quality timber fencing including close board, feather edge, lap panels and bespoke designs. We also build matching timber gates, trellis panels and screening to complete the look.",
      tagline: "Secure, stylish boundaries for every property.",
      cta: { label: "Read More", href: "/garden-design" },
      image: "/images/service-fencing-v2.jpg",
    },
    {
      label: "PERGOLAS & STRUCTURES",
      title: "Pergolas & Garden Structures",
      text: "Custom-built timber pergolas, gazebos, arbours and garden rooms. Whether you want a shaded seating area, a hot tub surround or a statement garden feature, we build it from scratch to your exact specifications.",
      tagline: "Handcrafted garden structures that transform any space.",
      cta: { label: "Read More", href: "/garden-design" },
      image: "/images/service-patios-v2.jpg",
    },
    {
      label: "LANDSCAPING",
      title: "Full Garden Landscaping",
      text: "Complete garden transformations from concept to completion. We handle turfing, paving, planting, drainage, retaining walls and everything in between — creating outdoor spaces that are practical, beautiful and built to stand the test of time.",
      tagline: "From overgrown to outstanding — we handle it all.",
      cta: { label: "Read More", href: "/garden-design" },
      image: "/images/service-lawns-v2.jpg",
    },
  ],
};

export const whyChooseData = {
  title: `Why Choose ${client.name}?`,
  paragraphs: [
    `With a perfect 5-star Google rating and a Companies House verified business, ${client.name} is a trusted name for timber decking and landscaping across ${client.basedIn} and South Yorkshire.`,
    "Every project is built with quality timber, precision joinery and a meticulous eye for detail. We use only pressure-treated, sustainably sourced materials that look stunning and last for decades.",
    `${client.founderName} personally oversees every build from start to finish. No subcontractors, no shortcuts — just an experienced team of craftsmen who take real pride in their work.`,
    "From the initial design consultation through to the final coat of treatment oil, we keep you informed at every stage. Clear pricing, no hidden extras, and a finished result that exceeds expectations.",
  ],
  image: "/images/why-choose-new-v2.jpg",
};

export const philosophyData = {
  title: "Our Approach",
  paragraphs: [
    "We believe outdoor spaces should be an extension of your home — not an afterthought. Every decking project and garden build starts with understanding how you want to use the space.",
    "Every project begins with a free site visit and design consultation. We measure up, discuss your ideas, and provide a detailed written quotation with no obligation and no pressure.",
    "We are proud of our craftsmanship and stand behind every build. Quality timber, solid construction and a clean, professional finish — that is the Yorkshire Timber Decking standard.",
  ],
  cta: { label: "See How We Work", href: "/about" },
  image: "/images/portfolio/project-05.jpg",
};

export const landscapingData = {
  title: "Complete Outdoor Living Solutions",
  paragraphs: [
    "Whether it is a statement timber deck for entertaining, a sheltered pergola for relaxing, robust fencing for privacy, or a complete garden transformation — we design and build it all under one roof.",
    "Our experienced team works together on every project, ensuring consistent quality from foundation to finish. We take pride in leaving every garden better than we found it — and built to stand the South Yorkshire weather.",
  ],
  cta: { label: "View Our Projects", href: "/portfolio" },
  image: "/images/landscaping-main-v2.jpg",
};

export const ctaData = {
  heading: "Ready To Transform Your Outdoor Space?",
  text: "Get in touch for a free, no-obligation design consultation. We will visit your property, discuss your ideas and provide a detailed written quotation.",
  subtext: `Call ${client.founderName} on ${client.phone} or fill in the form below and we will get back to you within 24 hours.`,
};

export const projectsShowcase = [
  { title: "Raised Timber Deck", location: client.basedIn, image: "/images/portfolio/project-50.jpg", slug: "raised-timber-deck" },
  { title: "Pergola & Seating Area", location: client.basedIn, image: "/images/portfolio/project-30.jpg", slug: "pergola-seating" },
  { title: "Close Board Fencing", location: client.basedIn, image: "/images/portfolio/project-03.jpg", slug: "close-board-fencing" },
  { title: "Multi-Level Decking", location: client.basedIn, image: "/images/portfolio/project-20.jpg", slug: "multi-level-decking" },
  { title: "Patio & Planting Scheme", location: client.basedIn, image: "/images/portfolio/project-10.jpg", slug: "patio-planting" },
  { title: "Hot Tub Deck Surround", location: client.basedIn, image: "/images/portfolio/project-40.jpg", slug: "hot-tub-surround" },
  { title: "Garden Room Platform", location: client.basedIn, image: "/images/portfolio/project-55.jpg", slug: "garden-room-platform" },
  { title: "Feather Edge Fencing", location: client.basedIn, image: "/images/portfolio/project-04.jpg", slug: "feather-edge-fencing" },
  { title: "Complete Garden Build", location: client.basedIn, image: "/images/portfolio/project-35.jpg", slug: "complete-garden-build" },
  { title: "Wraparound Deck", location: client.basedIn, image: "/images/portfolio/project-15.jpg", slug: "wraparound-deck" },
];
