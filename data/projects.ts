export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  category: string;
  image: string;
  github?: string;
  live?: string;
  featured: boolean;
  metrics?: string[];
}

export const projects: Project[] = [
  {
    id: "alertdrive-ai",
    title: "AlertDrive AI",
    description:
      "Real-time driver monitoring system for drowsiness and distraction detection using computer vision and deep learning.",
    longDescription:
      "A professional-grade Driver Monitoring System (DMS) that uses MediaPipe facial landmark tracking, geometric Eye Aspect Ratio (EAR) and Mouth Aspect Ratio (MAR) calculations for precise drowsiness and yawn detection, plus head pose estimation for distraction monitoring. Includes auto-calibration and real-time audio alerts.",
    techStack: [
      "Python",
      "TensorFlow",
      "OpenCV",
      "MediaPipe",
      "MobileNetV2",
      "NumPy",
    ],
    category: "Computer Vision",
    image: "/images/projects/alertdrive.png",
    github: "https://github.com/btehub-solutions/AlertDrive_AI.git",
    featured: true,
  },
  {
    id: "taxnaija",
    title: "TaxNaija",
    description:
      "AI-powered tax classification and liability prediction platform for Nigerian employees and businesses.",
    longDescription:
      "A comprehensive AI-driven tax solution built with Flask. It provides automated tax classification for employees and predictive tax liability analytics for businesses, ensuring compliance with Nigerian tax regulations through machine learning.",
    techStack: ["Python", "Flask", "Scikit-learn", "Pandas", "React", "PostgreSQL"],
    category: "AI Application",
    image: "/images/projects/taxnaija.png",
    github: "https://github.com/btehub-solutions/TaxNaija.git",
    featured: true,
  },
  {
    id: "vibeai",
    title: "VibeAI",
    description:
      "A next-gen AI learning platform designed for future-ready professionals. Features a dynamic interface with over 2,500 active learners and a focus on mastering AI-fluent communication.",
    longDescription:
      "A next-gen AI learning platform designed for future-ready professionals. Features a dynamic interface with over 2,500 active learners and a focus on mastering AI-fluent communication.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "OpenAI API", "React"],
    category: "Generative AI",
    image: "/images/projects/vibeai.png",
    github: "https://github.com/btehub-solutions/vibeai-frontend",
    live: "http://vibeaihub.vercel.app/",
    featured: true,
    metrics: ["2,500+ Active Learners", "AI-Powered Interactions"],
  },
  {
    id: "vetlink-connect",
    title: "VetLink Connect",
    description:
      "A professional agribusiness platform for Divine Agvet, specializing in authentic animal medicines and zero-compromise homegrown solutions for Nigerian farms.",
    longDescription:
      "A professional agribusiness platform for Divine Agvet, specializing in authentic animal medicines and zero-compromise homegrown solutions for Nigerian farms.",
    techStack: ["React", "Node.js", "FastAPI", "Python", "PostgreSQL"],
    category: "AI Application",
    image: "/images/projects/vetlink.png",
    github: "https://github.com/btehub-solutions/vetlink-connect",
    live: "https://www.divineagvet.com/",
    featured: false,
    metrics: ["Homegrown Solutions", "Authentic Medicines"],
  },
  {
    id: "olas-realtor",
    title: "Olas Realtor Consulting",
    description:
      "A comprehensive real estate consulting platform for Olas Realtor Ltd. Bridging property discovery and professional training with an integrated AI chatbot for the Nigerian market.",
    longDescription:
      "A comprehensive real estate consulting platform for Olas Realtor Ltd. Bridging property discovery and professional training with an integrated AI chatbot for the Nigerian market.",
    techStack: ["Next.js", "Tailwind CSS", "TypeScript", "React", "Vercel"],
    category: "Web Application",
    image: "/images/projects/olas.png",
    github: "https://github.com/btehub-solutions/Olas-Realtor-Consulting-Ltd",
    live: "https://olasrealtor.com/",
    featured: false,
    metrics: ["Property Discovery", "Professional Training"],
  },
  {
    id: "ojaybee-farms",
    title: "O-Jay-Bee Farms Elevate",
    description:
      "A digital transformation platform for O-Jay-Bee Farms, modernizing poultry, fish farming, and cassava processing operations in Ogun State, Nigeria.",
    longDescription:
      "A digital transformation platform for O-Jay-Bee Farms, modernizing poultry, fish farming, and cassava processing operations in Ogun State, Nigeria.",
    techStack: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Vercel"],
    category: "Web Application",
    image: "/images/projects/ojaybee.png",
    github: "https://github.com/btehub-solutions/o-jay-bee-farms-elevate",
    live: "https://ojaybeefarms.vercel.app/",
    featured: false,
    metrics: ["Agribusiness Modernization", "Ogun State Farms"],
  },
];

export const projectCategories = [
  "All",
  "Computer Vision",
  "NLP",
  "Generative AI",
  "AI Application",
  "Web Application",
];

