import { client, phoneLink, emailLink } from "@/config/client";

export const contactHeroData = {
  overline: "GET IN TOUCH",
  heading:
    `Contact ${client.name} for a free, no-obligation consultation.`,
  text: "Whether you need a bespoke timber deck, new fencing, a garden pergola or a complete outdoor transformation — we are here to help. Call or message us to arrange a free site visit.",
  image: "/images/garden-consultation-v2.jpg",
};

export const contactMethods = [
  {
    icon: "email",
    label: "Email Us",
    value: client.email,
    href: emailLink,
  },
  {
    icon: "phone",
    label: "Call Us",
    value: client.phone,
    href: phoneLink,
  },
  {
    icon: "whatsapp",
    label: "WhatsApp",
    value: client.whatsapp.display,
    href: client.whatsapp.link,
  },
];

export const locationData = {
  address: [
    client.name,
    ...client.address,
  ],
  image: "/images/office.jpg",
};

export const hoursData = {
  hours: client.hours,
};

export const socialLinks = client.socials;

export const exploreServices = [
  {
    title: "Timber Decking",
    image: "/images/service-patios-v2.jpg",
    href: "/garden-design",
  },
  {
    title: "Fencing & Gates",
    image: "/images/landscaping-main-v2.jpg",
    href: "/garden-design",
  },
  {
    title: "Pergolas & Structures",
    image: "/images/service-lawns-v2.jpg",
    href: "/garden-design",
  },
  {
    title: "Full Garden Landscaping",
    image: "/images/service-fencing-v2.jpg",
    href: "/garden-design",
  },
];
