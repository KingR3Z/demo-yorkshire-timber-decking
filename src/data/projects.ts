export interface FeaturedProject {
  id: string;
  title: string;
  description: string;
  location: string;
  budget?: string;
  designTime: string;
  installationTime: string;
  image: string;
}

export const featuredProjects: FeaturedProject[] = [
  {
    id: "sheffield-raised-deck",
    title: "raised timber deck with balustrade",
    description:
      "A stunning raised softwood deck with glass balustrade panels, built-in LED lighting and matching steps. Designed as an outdoor entertaining space with views over the garden.",
    location: "Sheffield",
    designTime: "1 week",
    installationTime: "6 days",
    image: "/images/portfolio/project-01.jpg",
  },
  {
    id: "rotherham-pergola",
    title: "pergola & seating area",
    description:
      "Custom-built timber pergola with integrated bench seating and planters. Pressure-treated softwood frame with a polycarbonate roof panel for year-round use.",
    location: "Rotherham",
    designTime: "5 days",
    installationTime: "4 days",
    image: "/images/portfolio/project-02.jpg",
  },
  {
    id: "doncaster-fencing",
    title: "close board fencing & gate",
    description:
      "Full boundary replacement with close board fencing, concrete gravel boards and a bespoke matching timber gate. Built to last with capped posts and arris rails.",
    location: "Doncaster",
    designTime: "3 days",
    installationTime: "3 days",
    image: "/images/portfolio/project-03.jpg",
  },
  {
    id: "barnsley-multi-deck",
    title: "multi-level garden decking",
    description:
      "A two-tier decking solution built into a sloped garden, with integrated storage underneath the upper platform. Finished with composite decking boards for low maintenance.",
    location: "Barnsley",
    designTime: "1 week",
    installationTime: "7 days",
    image: "/images/portfolio/project-04.jpg",
  },
  {
    id: "chesterfield-hot-tub",
    title: "hot tub deck surround",
    description:
      "Bespoke sunken hot tub surround with wrap-around decking, privacy screens and recessed lighting. Built with treated softwood and finished with non-slip decking oil.",
    location: "Chesterfield",
    designTime: "5 days",
    installationTime: "5 days",
    image: "/images/portfolio/project-05.jpg",
  },
  {
    id: "wakefield-garden-room",
    title: "garden room platform & steps",
    description:
      "Timber base platform for a garden room installation, complete with wraparound steps and a small entertaining deck to the side. Level, square and built to take the load.",
    location: "Wakefield",
    designTime: "4 days",
    installationTime: "3 days",
    image: "/images/portfolio/project-06.jpg",
  },
  {
    id: "huddersfield-patio",
    title: "patio & timber border",
    description:
      "Indian sandstone patio with timber sleeper borders, new turf and a planting scheme designed for year-round colour. A complete back garden transformation.",
    location: "Huddersfield",
    designTime: "1 week",
    installationTime: "5 days",
    image: "/images/portfolio/project-07.jpg",
  },
  {
    id: "worksop-feather-edge",
    title: "feather edge fencing",
    description:
      "Premium feather edge fencing throughout a large rear garden with concrete posts and gravel boards. Finished with a timber-stain treatment for a natural, long-lasting look.",
    location: "Worksop",
    designTime: "3 days",
    installationTime: "4 days",
    image: "/images/portfolio/project-08.jpg",
  },
];
