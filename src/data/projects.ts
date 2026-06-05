export type Project = {
  name: string;
  subtitle: string;
  description: string;
  techStack: string[];
  liveDemo?: string;
  github?: string;
  links?: {
    label: string;
    href: string;
  }[];
  note?: string;
};

export const projects: Project[] = [
  {
    name: "Lifelikegame",
    subtitle: "AI-Powered Gamified Goal Management Platform",
    description:
      "A full-stack gamified life management application that helps users turn personal goals into scheduled tasks, daily task instances, points, rewards, and AI-generated action plans.(Frontend fully build from vibe coding with React)",
    techStack: [
      "React",
      "TypeScript",
      "FastAPI",
      "PostgreSQL",
      "Alembic",
      "LangGraph",
      "Docker",
      "JWT",
      "Gemini API",
      "Vercel",
      "Render",
    ],
    liveDemo: "https://lifelikegame.vercel.app/",
    github: "https://github.com/limgwei-123/lifelikegame",
    note: "Note: Free hosting may take up to 1 minute to wake up on first request.",
    links: [
      {
        label: "YouTube Demo",
        href: "https://youtu.be/Icc7M7hgYeo?si=hUDtDA6P0QRjJ_oj",
      },
    ],
  },
  {
    name: "Nutrition AI",
    subtitle: "AI-Powered Nutrition Retrieval and Calorie Estimation System",
    description:
      "A full-stack AI nutrition analysis application that estimates calories from food text input using Gemini embeddings, pgvector similarity search, and a PostgreSQL-based food knowledge base. The system records prediction results, latency, confidence, feedback, and monitoring metrics to support evaluation and production-style AI observability. Frontend and backend foundation were built with vibe coding, while the AI retrieval, pgvector, logging, and evaluation workflow were implemented manually.",
    techStack: [
      "pgvector",
      "Logging",
      "Evaluation",
      "SQLAlchemy",
      "Python",
      "RAG",
    ],
    github: "https://github.com/limgwei-123/nutrition_ai",
    note:
      "MVP currently supports one food item per text input. Image upload and multi-food portion estimation are planned future improvements.",
    links: [
      {
        label: "YouTube Demo",
        href: "https://www.youtube.com/watch?v=_R1zZcrbVz8",
      },
    ],
  },
  {
    name: "OpenLearning Course Assistant",
    subtitle: "Multimodal AI Education Assistant",
    description:
      "A private AI assistant integration for an online learning platform that allows students to submit text and image-based questions and receive text-based answers.",
    techStack: [
      "Python",
      "Gemini API",
      "Multimodal LLM",
      "Prompt Engineering",
      "Logging",
    ],
    note: "Private project. Source code and platform screenshots are not publicly available due to confidentiality.",
  },
  {
    name: "CCTV Abnormality Detection",
    subtitle: "CNN-Based Computer Vision System",
    description:
      "A computer vision project that detects abnormal CCTV frames using CNN-based image classification and image preprocessing techniques.",
    techStack: ["Python", "OpenCV", "CNN", "TensorFlow/Keras", "Image Processing"],
    note: "Private project. Details are summarized without exposing sensitive data.",
  },
  {
    name: "An interpretable Multi-channel CNN for EEG-Based driver drowsiness detection",
    subtitle: "CNN-Based EEG Classification Research",
    description:
      "A deep learning research project for cross-subject EEG-based drowsiness detection using CNN models, multi-channel EEG signals, and LOSO cross-validation. Attention and CAM use to visualize project",
    techStack: [
      "Attention module",
      "CAM visualization",
      "CNN",
      "EEG",
      "LOSO Cross-Validation",
      "Model Evaluation",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/limgwei-123/interpretability-drowsiness-model",
      },
    ],
  },
];
