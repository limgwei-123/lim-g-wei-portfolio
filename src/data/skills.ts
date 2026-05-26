export type SkillCategory = {
  category: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    category: "Backend",
    skills: [
      "Python",
      "FastAPI",
      "SQLAlchemy",
      "PostgreSQL",
      "Alembic",
      "JWT Authentication",
    ],
  },
  {
    category: "AI / ML",
    skills: [
      "Gemini API",
      "LangGraph",
      "LLM Integration",
      "RAG",
      "Prompt Engineering",
      "CNN",
      "Computer Vision",
      "EEG Classification",
      "Model Evaluation",
    ],
  },
  {
    category: "DevOps / Tools",
    skills: [
      "Docker",
      "Docker Compose",
      "Git",
      "GitHub",
      "GitHub Actions",
      "Vercel",
      "Render",
      "Pytest",
    ],
  },
];
