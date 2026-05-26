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
    links: [
      {
        label: "YouTube Demo",
        href: "https://youtu.be/Icc7M7hgYeo?si=hUDtDA6P0QRjJ_oj",
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
