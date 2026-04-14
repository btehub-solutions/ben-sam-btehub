export interface CommunityItem {
  id: string;
  title: string;
  type: "talk" | "article" | "workshop" | "open-source" | "mentorship";
  description: string;
  link?: string;
  date: string;
}

export const communityItems: CommunityItem[] = [
  {
    id: "comm-0",
    title: "BTEHub Daily Updates",
    type: "article",
    description:
      "Authoring daily insights on AI tools, technology trends, and industry developments. Focused on simplifying complex emerging technologies for a community of business leaders and creators.",
    date: "2024-Present",
  },
  {
    id: "comm-01",
    title: "BTEHub Practical Tutorials",
    type: "workshop",
    description:
      "Developing implementation-focused step-by-step guides for real-world AI and automation projects, empowering developers to move from concepts to working systems.",
    date: "2024-Present",
  },
  {
    id: "comm-1",
    title: "Corporate AI Training & Workshops",
    type: "workshop",
    description:
      "Conducted a series of high-impact AI workshops and corporate training sessions for organizations including GText Holdings, NBI Institutes, and the Ogun Tech Community (OTC). Delivered practical training on AI automation, digital transformation, and productivity frameworks for professional teams and online cohorts.",
    date: "2024 - Present",
  },
  {
    id: "comm-2",
    title: "AI Dependence and the Evolution of the Newsroom",
    type: "talk",
    description:
      "Guest Speaker at World Radio Day 2026, hosted by the Nigeria Union of Journalists (NUJ), Ogun State Council. Delivered a keynote address on the intersection of broadcast media and emerging AI technology.",
    date: "2026",
  },
  {
    id: "comm-3",
    title: "AI Engineering Skills & Value Creation",
    type: "talk",
    description:
      "Featured expert on OGTV (Ogun State Television) hosted by Charity James. Discussed 'AI Engineering Skills | Profit Point', addressing practical AI applications, essential skill sets, and strategic positioning for value creation in an AI-driven economy.",
    date: "2026",
  },
  {
    id: "comm-4",
    title: "AI Fluency and the 4Ds Framework",
    type: "talk",
    description:
      "Featured guest speaker on Splash FM 106.7 Abeokuta. Delivered an expert session on the 4Ds Framework (Delegation, Description, Discernment, and Diligence), providing a roadmap for safe and efficient human-AI collaboration.",
    date: "2025",
  },
  {
    id: "comm-5",
    title: "Global AI & ML Mentorship",
    type: "mentorship",
    description:
      "Providing strategic mentorship and technical guidance to a global cohort of 100+ aspiring professionals and students in AI and Machine Learning. Facilitating growth through structured learning on AI implementation, career development, and emerging industry trends.",
    date: "2023 - Present",
  },
];
