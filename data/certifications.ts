export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  image?: string;
}

export const certifications: Certification[] = [
  {
    id: "udemy-ai-ml",
    title: "Complete A.I. & Machine Learning, Data Science Bootcamp",
    issuer: "Udemy (Andrei Neagoie, Daniel Bourke)",
    date: "March 2026",
    credentialUrl: "/images/Certification/ML & Data Science Cert..jpg",
    image: "/images/Certification/ML & Data Science Cert..jpg",
  },
  {
    id: "udemy-python",
    title: "100 Days of Code: The Complete Python Pro Bootcamp",
    issuer: "Udemy (Dr. Angela Yu)",
    date: "February 2026",
    credentialUrl: "/images/Certification/100 Days of Python Coding.jpg",
    image: "/images/Certification/100 Days of Python Coding.jpg",
  },
  {
    id: "udemy-fullstack",
    title: "The Complete Full-Stack Web Development Bootcamp",
    issuer: "Udemy (Dr. Angela Yu)",
    date: "April 2026",
    credentialUrl: "/images/Certification/UC-10c24324-292b-40c8-8afd-fa74359d9158.jpg",
    image: "/images/Certification/UC-10c24324-292b-40c8-8afd-fa74359d9158.jpg",
  }
];
