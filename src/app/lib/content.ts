// this file is a data + type-definition module for our portfolio, and that import plays a very specific role.
//lucide-react is an icon library for React
//Each icon is a React component (SVG-based): to install it, run npm install lucide-react
import { LucideIcon, Github, Linkedin, Mail } from "lucide-react";


//navigation links
export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];


//highlight tags
export const highlightTags = [
  "Frontend Developer",
  "Next.js + TypeScript",
  "Design Systems",
  "Performance-first",
  "Git & GitHub",
  "Biome & ESLint workflow",
  "Chakra UI ",
];




//custom type for hero stats
export type Stat = {
  label: string;
  value: string;
  helper?: string;
};

export const heroStats: Stat[] = [
  {
    label: "Featured projects",
    value: "7",
    helper: "30+ builds, prototypes, and learning",
  },

  { label: "Availability", 
    value: "Seeking new work",
     helper: "Full time" },

  { label: "Timezone",
    value: "EST/EDT (flex)",
    helper: "Async friendly" },

   {
    label: "Experience",
    value: "Frontend focused",
    helper: "React • Next.js • TypeScript",
  },
];


//workflow items
export const workflowItems =
[
 "Clean Code",
   "Component Architecture",
   "Automation",
   "Figma To Code",
   "Accessible UI",
   "Linting & Formatting",
 ]



//custom type for projects
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


export const projects: Project[] = [
  {
    title: "Skinstric.ai",
    description: "Skinstric.ai is an interactive skincare assistant that helps users discover personalized skincare insights and explore products or routines, combining clean design with smooth API integration, and component architecture. This was a paid internship project.",
    impact:"Utilized react-webcam and converted to base64, transformed data to visual using ChartJS, Showcased ability to convert Figma‑style designs into pixel‑perfect, production‑ready UI ",
    tech: ["React.js", "Tailwind", "react-webcam", "base64", "Axios", "ChartJS", "Figma", "Vercel"],
    image: "/projects/skinstric.png",
    alt: "skinstric.ai",
    live: "https://skinstric-tim-rbnq.vercel.app/",
    code: "https://github.com/timtchouamou/Skinstric-tim",
  },
  {
   title: "ImmigrationPro",
   description: "ImmigrationPro is a modern bilingual immigration services web application built with React, TypeScript, and Vite. The app helps users explore study in France and work in Canada pathways, submit immigration requests, and track application progress. It uses Chakra UI for a reusable responsive interface, Redux Toolkit for state management, i18next for English/French localization, and Firebase Firestore for request data handling.",
   impact: "ImmigrationPro demonstrates how modern frontend tools can deliver a fast, multilingual, and user-friendly immigration platform. It improves client experience with clear service navigation, smooth request submission, and practical application tracking in one unified interface.",
   tech: ["React", "TypeScript", "Vite", "Chakra UI", "Redux Toolkit", "i18next", "Firebase Firestore", "Vercel"],
   image: "/projects/immigrationpro.jpg",
   alt: "ImmigrationPro Immigration Services Web App",
    live: "https://immigratravel-pro.vercel.app/",
    code: "https://github.com/timtchouamou/immigrationPro",
  },
  {
   title: "KoudoTransit Logistics Portal",
   description: "KoudoTransit is a modern logistics web application built with React 19, Vite, TypeScript, and Redux Toolkit. The app allows users to explore services, review customer operations, submit transport requests, and track shipment status in real time. It uses React Router for multi-page navigation, Chakra UI for a polished responsive interface, Firebase Firestore for request storage, and bilingual EN/FR content support to deliver a fast and user-friendly experience.",
   impact: "KoudoTransit demonstrates how a modern React + Redux architecture can improve logistics workflows with clear navigation, multilingual access, quick request submission, and transparent shipment tracking. It helps teams and clients interact faster with shipping operations and service management.",
   tech: ["React 19", "Vite", "TypeScript", "Chakra UI", "Redux Toolkit", "React Router", "Firebase Firestore", "Vercel"],
   image: "/projects/transit.jpg",
   alt: "KoudoTransit Logistics Portal",
    live: "https://transit-import-export.vercel.app/",
    code: "https://github.com/timtchouamou/transit_import_export",
  },
  {
    title: "Summarist",
    description:"Summarist is a clean, modern web application that delivers concise, high‑quality book summaries through a fast and intuitive reading experience. The project focuses on performance, accessibility, and reusable component architecture",
    impact:"Demonstrated strong frontend fundamentals through clean architecture, modular code, and predictable state management, Implemented a full code‑quality pipeline using Biome, TypeScript, Husky, and GitHub Actions",
    tech: ["Next.js","Firebase","TailwindCSS","TypeScript", "Biome","Type-Checking", "GitHub Actions CI pipeline", "Husky"],
    image: "/projects/summarist1.png",
    alt: "Book summaries",
    live: "https://summarist-tim.vercel.app/",
    code: "https://github.com/timtchouamou/summarist-tim",
  },

  {
    title: "Ultraverse-NFT Marketplace(Internship project)",
    description:"Ultraverse is a responsive NFT marketplace project developed during an internship. It focuses on exploring real-world frontend development practices: component architecture, responsive UI design, and data-driven rendering. This was an internship project.",
    impact:"Built reusable, scalable components that streamlined UI development and reduced duplicate code",
    tech: ["React", "TypeScript", "PWA", "Maps"],
    image: "/projects/ultraverseNFT1.png",
    alt: "Ultraverse NFT Marketplace",
    live: "https://keylan-internship.vercel.app/",
    code: "https://github.com/kingkey0101/Keylan-internship",
  },
  {
    title: "Netflix-Clone",
    description:"Netflix Clone is a responsive prototype replicating the Netflix login experience and grid layout. It highlights modern UI composition, responsive design, and component reusability in a simplified authentication context.  Implemented a Vite + React frontend, React Router for client routing, and Firebase Auth for secure sign‑in flows; deployed on Vercel and audited with Lighthouse.",
    impact:"A responsive Netflix‑style authentication UI and grid with reusable modular components, client routing, and Firebase‑backed auth.",
    tech: ["React.js", "TailwindCSS", "JavaScript"],
    image: "/projects/netflix.png",
    alt: "Netflix Clone",
    live: "https://netflix-clone-murex-8-90.vercel.app/",
    code: "https://github.com/timtchouamou/Netflix-clone",
  },
  {
    title: "Library-Store",
    description:"Library-Store is a modern e-commerce bookstore web application built with Next.js 14 and Redux Toolkit. The app allows users to browse books, view book details, and manage a shopping cart with global state management. It uses Next.js App Router, client components, and optimized UI features like skeleton loaders and responsive design to provide a fast and smooth user experience.",
    impact:"Library-Store shows how modern tools like Next.js 14 and Redux Toolkit can build a fast and smooth online bookstore. It improves user experience with fast page loading, easy book browsing, and simple cart management.",
    tech: ["Next.js 14", "CSS", "JavaScript", "Redux Toolkit", "Vercel"],
    image: "/projects/library-store.png",
    alt: "Library Store",
    live: "https://library-store-ivory.vercel.app/",
    code: "https://github.com/timtchouamou/Library-Store",
  },
  {
    title: "Dav'Print",
    description: "Dav'Print is a modern printing-service web application built with React 19, TypeScript, and Vite. It helps customers discover services, browse promotions, submit quote requests, and track orders through a clean, responsive interface. The app uses Chakra UI for polished design, Redux Toolkit for global state, Firebase Firestore for request storage, and i18next for French/English localization.",
    impact: "Dav'Print improves customer experience by making printing services easier to access online. Users can quickly request quotes, check order progress, and view offers, while the business benefits from faster lead collection and clearer service communication.",
    tech: ["React 19", "TypeScript", "Vite", "Chakra UI", "Redux Toolkit", "Firebase Firestore", "i18next", "React Router", "Vercel"],
    image: "/projects/dav-print.png",
    alt: "Dav'Print Printing Service Web App",
    live: "https://dav-print.vercel.app/",
    code: "https://github.com/timtchouamou/Dav-Print"
  }
];

//custom type for skill groups
export type SkillGroup = {
  label: string;
  accent: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: "Frontend",
    accent: "text-blue-300",
    items: ["React/Next.js", "JavaScript/TypeScript", "TailwindCSS", "Shadcn/ui", "ChartJS", "Accessibility", "Figma",],
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

//custom type for social links
export type SocialLink = {
  href: string;
  label: string;
  icon: LucideIcon;
};


export const socials: SocialLink[] = [
  { href: "https://github.com/timtchouamou",
    label: "GitHub", 
    icon: Github },

  {
    href: "https://www.linkedin.com/in/timothee-djouokep-tchouamou-13a633bb/",
    label: "LinkedIn",
    icon: Linkedin},

  { href: "mailto:tim.tchouamou@gmail.com",
    label: "Email",
    icon: Mail },
];




