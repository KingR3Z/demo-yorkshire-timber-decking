import { client } from "@/config/client";

export const aboutHeaderData = {
  overline: `ABOUT ${client.name.toUpperCase()}`,
  heading: "Specialist Timber Decking & Landscaping",
  paragraphs: [
    `${client.name} is a specialist timber decking and landscaping company based in ${client.region}. We design and build high-quality outdoor living spaces — from bespoke decking installations and pergolas to fencing, paving and complete garden transformations.`,
    "With hands-on experience and a genuine passion for timber craftsmanship, our team delivers beautifully finished projects on every job — whether it is a compact balcony deck or a full garden overhaul.",
  ],
  image: "/images/about-landscape-v2.jpg",
};

export const coreValues = [
  {
    title: "Quality Timber, Quality Build",
    description:
      "We use only pressure-treated, sustainably sourced timber. Every joint is precision-cut, every board is level, and every build is made to withstand years of South Yorkshire weather.",
    icon: "shield",
  },
  {
    title: "Expert Craftsmanship",
    description:
      "With years of specialist decking experience, we know what works. From timber selection and subframe design to finishing and treatment — every detail is handled with care.",
    icon: "lightbulb",
  },
  {
    title: "Customer First",
    description:
      "We are committed to clear communication, honest pricing and delivering exactly what we promise. Every project starts with a free consultation and a detailed written quote.",
    icon: "heart",
  },
];

export const directorData = {
  name: client.founderName,
  role: client.founderRole,
  image: "/images/director-portrait-v2.jpg",
  bio: [
    `${client.founderName} founded ${client.name} with a clear mission: to bring quality timber craftsmanship to homes and gardens across ${client.basedIn} and South Yorkshire.`,
    `With years of experience in carpentry and outdoor construction, ${client.founderName} specialises in designing and building timber decking that is both beautiful and built to last. Every project is personally overseen from first measurement to final finish.`,
    `${client.founderName} takes a hands-on approach — you will find him on site, saw in hand, making sure every board is perfectly placed. No subcontractors, no compromise on quality.`,
    `Under ${client.founderName}'s leadership, ${client.name} has built a strong reputation across ${client.region}, with consistently excellent feedback from customers.`,
    `When he is not on site, ${client.founderName} can be found researching new timber treatments and construction techniques to keep ${client.name} at the forefront of outdoor design in ${client.basedIn}.`,
  ],
  cta: { label: `Contact ${client.founderName}`, href: "/contact" },
};

export const missionData = {
  heading: "Our Mission",
  paragraphs: [
    `At ${client.name}, our mission is to create stunning outdoor spaces that homeowners across ${client.basedIn} can enjoy for years to come. We believe every garden deserves a well-designed, expertly built feature — and we make that happen at a fair price.`,
    "We approach every project with the same dedication to quality, whether it is a simple garden platform or a multi-level entertaining deck. Our team takes pride in precision joinery, clean finishes and builds that stand the test of time.",
    `As a local ${client.basedIn} business, we are committed to building lasting relationships with our customers. We treat every project as if it were our own home.`,
  ],
  image: "/images/mission-bg-v2.jpg",
};

export const partnersData = {
  heading: "Our Trusted Partners",
  partners: client.partners,
};

export const awardsData = {
  heading: "Recognised for Quality & Service",
  awards: client.awards,
};
