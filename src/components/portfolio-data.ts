export type Project = {
  img: string;
  gallery: string[];
  tag: string;
  title: string;
  year: string;
  summary: string;
  why: string;
  role: string;
  tools: string[];
  skills: string[];
  features: string[];
  challenges: string[];
  results: string[];
};

export const projects: Project[] = [
  {
    img: "/images/portfolio-1.webp",
    gallery: ["/images/portfolio-1.webp", "/images/portfolio-3.webp", "/images/portfolio-2.webp"],
    tag: "Conversational AI",
    title: "AI-Powered Chatbot",
    year: "2025",
    summary:
      "An AI assistant designed to automate customer support flows, answer high-volume questions, and hand off edge cases to human agents.",
    why: "The goal was to reduce repetitive support work and improve response speed without sacrificing answer quality.",
    role: "Led backend integration, prompt orchestration, retrieval flow design, and dashboard reporting.",
    tools: ["Python", "FastAPI", "PostgreSQL", "OpenAI API", "Docker"],
    skills: ["LLM Integration", "Prompt Engineering", "Backend Development", "Analytics"],
    features: [
      "Context-aware support responses using knowledge-base retrieval.",
      "Escalation routing for low-confidence conversations.",
      "Admin dashboard for usage, feedback, and conversation review.",
    ],
    challenges: [
      "Reducing hallucinations in domain-specific support answers.",
      "Balancing response quality with acceptable latency under load.",
    ],
    results: [
      "Reduced first-response time across support flows.",
      "Improved support team efficiency by automating common inquiries.",
    ],
  },
  {
    img: "/images/portfolio-3.webp",
    gallery: ["/images/portfolio-3.webp", "/images/portfolio-1.webp", "/images/portfolio-4.webp"],
    tag: "Predictive Analytics",
    title: "Sales Forecast Dashboard",
    year: "2024",
    summary:
      "A forecasting platform that helps teams monitor revenue trends, compare scenarios, and surface anomalies in planning cycles.",
    why: "The project was built to replace spreadsheet-heavy forecasting with a more reliable and visual decision system.",
    role: "Built data pipelines, forecasting logic, dashboard APIs, and reporting views.",
    tools: ["Python", "Pandas", "Scikit-learn", "Flask", "MySQL"],
    skills: ["Forecasting", "Data Pipelines", "Visualization", "Model Evaluation"],
    features: [
      "Interactive monthly and quarterly forecast views.",
      "Historical trend comparison and anomaly detection.",
      "Scenario-based planning with exportable summary reports.",
    ],
    challenges: [
      "Cleaning inconsistent historical sales records from multiple sources.",
      "Explaining forecast confidence to non-technical stakeholders.",
    ],
    results: [
      "Improved planning visibility for business teams.",
      "Enabled faster monthly reporting and better variance tracking.",
    ],
  },
  {
    img: "/images/portfolio-2.webp",
    gallery: ["/images/portfolio-2.webp", "/images/portfolio-3.webp", "/images/portfolio-1.webp"],
    tag: "Computer Vision",
    title: "Real-Time Object Detection",
    year: "2023",
    summary:
      "A computer vision solution for detecting and tracking objects in live video streams for monitoring and automation workflows.",
    why: "This project addressed the need for faster visual monitoring where manual observation was slow and inconsistent.",
    role: "Handled model training, inference optimization, and deployment integration.",
    tools: ["Python", "PyTorch", "OpenCV", "CUDA", "Streamlit"],
    skills: ["Computer Vision", "Model Optimization", "Inference Pipelines", "Deployment"],
    features: [
      "Real-time detection and class labeling from live camera feeds.",
      "Confidence threshold controls and visual overlays.",
      "Event logging for downstream review and analytics.",
    ],
    challenges: [
      "Maintaining stable inference speed across different hardware setups.",
      "Improving detection reliability in low-light or noisy conditions.",
    ],
    results: [
      "Delivered near real-time inference for monitoring scenarios.",
      "Reduced manual review effort for repetitive visual checks.",
    ],
  },
  {
    img: "/images/portfolio-4.webp",
    gallery: ["/images/portfolio-4.webp", "/images/portfolio-1.webp", "/images/portfolio-3.webp"],
    tag: "Resume Pro",
    title: "Resume ZenG Pro",
    year: "2026",
    summary:
      "A personal portfolio and resume experience focused on AI work, modern motion, and structured project storytelling.",
    why: "The aim was to present technical projects in a way that feels both polished and easy to scan for recruiters or clients.",
    role: "Designed the interface, built the frontend, and refined the interaction patterns.",
    tools: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite"],
    skills: ["UI Development", "Motion Design", "Responsive Layout", "Frontend Architecture"],
    features: [
      "Single-page portfolio with animated section transitions.",
      "Detailed project modals for technical storytelling.",
      "Theme toggle and responsive layout refinements.",
    ],
    challenges: [
      "Balancing strong visual style with readability and performance.",
      "Keeping animations smooth without making the UI feel noisy.",
    ],
    results: [
      "Created a stronger portfolio presentation for technical work.",
      "Improved content structure for project-focused storytelling.",
    ],
  },
];
