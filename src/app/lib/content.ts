// this file is a data + type-definition module for our portfolio, and that import plays a very specific role.
//lucide-react is an icon library for React
//Each icon is a React component (SVG-based): to install it, run npm install lucide-react
import { LucideIcon, Github, Linkedin, Mail } from "lucide-react";

export type Stat = {
  label: string;
  value: string;
  helper?: string;
};

export type Project = {
  title: string;
  description: string;
  impact: string;
  tech: string[];
  image: string;
  alt: string;
  live: string;
  code: string;
};

export type SkillGroup = {
  label: string;
  accent: string;
  items: string[];
};

export type SocialLink = {
  href: string;
  label: string;
  icon: LucideIcon;
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const highlightTags = [
  "Frontend Developer",
  "Next.js + TypeScript",
  "Design Systems",
  "Performance-first",
  "Git & GitHub",
  "Biome & ESLint workflow",
];

export const heroStats: Stat[] = [
  {
    label: "Featured projects",
    value: "4",
    helper: "30+ builds, prototypes, and learning",
  },
  { label: "Availability", value: "Seeking new work", helper: "Full time" },
  { label: "Timezone", value: "EST/EDT (flex)", helper: "Async friendly" },
   {
    label: "Experience",
    value: "Frontend focused",
    helper: "React • Next.js • TypeScript",
  },
];


export const projects: Project[] = [
  {
    title: "Skinstric.ai(Internship project)",
    description:
      "Skinstric.ai is an interactive skincare assistant that helps users discover personalized skincare insights and explore products or routines, combining clean design with smooth API integration, and component architecture. This was a paid internship project.",
    impact:
      "Utilized react-webcam and converted to base64, transformed data to visual using ChartJS, Showcased ability to convert Figma‑style designs into pixel‑perfect, production‑ready UI ",
    tech: [
      "React.js",
      "Tailwind",
      "react-webcam",
      "base64",
      "Axios",
      "ChartJS",
      "Figma",
      "Vercel",
    ],
    image: "/projects/skinstric.png",
    alt: "skinstric.ai",
    live: "https://skinstric-tim-rbnq.vercel.app/",
    code: "https://github.com/timtchouamou/Skinstric-tim",
  },
  {
    title: "Summarist",
    description:
      "Summarist is a clean, modern web application that delivers concise, high‑quality book summaries through a fast and intuitive reading experience. The project focuses on performance, accessibility, and reusable component architecture",
    impact:
      "Demonstrated strong frontend fundamentals through clean architecture, modular code, and predictable state management, Implemented a full code‑quality pipeline using Biome, TypeScript, Husky, and GitHub Actions",
    tech: [
      "Next.js",
      "Firebase",
      "TailwindCSS",
      "TypeScript",
      "Biome",
      "Type-Checking",
      "GitHub Actions CI pipeline",
      "Husky",
    ],
    image: "/projects/summarist.png",
    alt: "Book summaries",
    live: "https://summarist-tim.vercel.app/",
    code: "https://github.com/timtchouamou/summarist-tim",
  },

  {
    title: "Ultraverse-NFT Marketplace(Internship project)",
    description:
      "Ultraverse is a responsive NFT marketplace project developed during an internship. It focuses on exploring real-world frontend development practices: component architecture, responsive UI design, and data-driven rendering. This was an internship project.",
    impact:
      "Built reusable, scalable components that streamlined UI development and reduced duplicate code",
    tech: ["React", "TypeScript", "PWA", "Maps"],
    image: "/projects/ultraverseNFT.png",
    alt: "Ultraverse NFT Marketplace",
    live: "https://keylan-internship.vercel.app/",
    code: "https://github.com/kingkey0101/Keylan-internship",
  },
  {
    title: "Netflix-Clone",
    description:
      "Netflix Clone is a responsive prototype replicating the Netflix login experience and grid layout. It highlights modern UI composition, responsive design, and component reusability in a simplified authentication context.  Implemented a Vite + React frontend, React Router for client routing, and Firebase Auth for secure sign‑in flows; deployed on Vercel and audited with Lighthouse.",
    impact:
      "A responsive Netflix‑style authentication UI and grid with reusable modular components, client routing, and Firebase‑backed auth.",
    tech: ["React.js", "TailwindCSS", "JavaScript"],
    image: "/projects/netflix.png",
    alt: "SeaKing prompt",
    live: "https://netflix-clone-murex-8-90.vercel.app/",
    code: "https://github.com/timtchouamou/Netflix-clone",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    label: "Frontend",
    accent: "text-blue-300",
    items: [
      "React/Next.js",
      "JavaScript/TypeScript",
      "TailwindCSS",
      "Shadcn/ui",
      "ChartJS",
      "Accessibility",
      "Figma",
    ],
  },
  {
    label: "Product & UX",
    accent: "text-cyan-300",
    items: ["Rapid prototyping", "User flows", "Analytics"],
  },
  {
    label: "Backend & Ops",
    accent: "text-purple-300",
    items: ["APIs & Webhooks", "CI/CD", "Clerk", "Firebase"],
  },
  {
    label: "AI & Data",
    accent: "text-amber-300",
    items: ["Prompt tooling", "Integrated AI‑assisted workflows"],
  },
];

export const socials: SocialLink[] = [
  { href: "https://github.com/timtchouamou", label: "GitHub", icon: Github },
  {
    href: "https://www.linkedin.com/in/timothee-djouokep-tchouamou-13a633bb/",
    label: "LinkedIn",
    icon: Linkedin,
  },
  { href: "mailto:tim.tchouamou@gmail.com", label: "Email", icon: Mail },
];
