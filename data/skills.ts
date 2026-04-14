export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  level: number; // 0 to 100
  icon?: string;
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Machine Learning & AI",
    skills: [
      { name: "TensorFlow", level: 92 },
      { name: "PyTorch", level: 88 },
      { name: "Scikit-learn", level: 95 },
      { name: "Keras", level: 90 },
      { name: "Hugging Face", level: 85 },
      { name: "LangChain", level: 82 },
    ],
  },

  {
    name: "Programming Languages",
    skills: [
      { name: "Python", level: 96 },
      { name: "JavaScript", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "SQL", level: 88 },
    ],
  },
  {
    name: "Data Engineering & MLOps",
    skills: [
      { name: "Docker", level: 85 },
      { name: "Kubernetes", level: 72 },
      { name: "MLflow", level: 80 },
      { name: "Apache Kafka", level: 75 },
      { name: "AWS", level: 82 },
      { name: "Git/CI-CD", level: 90 },
    ],
  },
  {
    name: "Web & API Development",
    skills: [
      { name: "FastAPI", level: 88 },
      { name: "Flask", level: 85 },
      { name: "Next.js", level: 78 },
      { name: "React", level: 80 },
      { name: "REST APIs", level: 92 },
      { name: "GraphQL", level: 70 },
    ],
  },
  {
    name: "Databases & Tools",
    skills: [
      { name: "PostgreSQL", level: 88 },
      { name: "MongoDB", level: 82 },
      { name: "Redis", level: 78 },
      { name: "Pinecone", level: 75 },
      { name: "Jupyter", level: 95 },
      { name: "Pandas", level: 94 },
    ],
  },
];
