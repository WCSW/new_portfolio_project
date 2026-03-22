import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, CalendarDays, Layers3, Wrench } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const projects = [
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
];

const ProjectDialog = ({ project }: { project: (typeof projects)[number] }) => {
  const [api, setApi] = useState<CarouselApi>();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!api) return;

    const updateSelectedIndex = () => setSelectedIndex(api.selectedScrollSnap());
    updateSelectedIndex();
    api.on("select", updateSelectedIndex);
    api.on("reInit", updateSelectedIndex);

    return () => {
      api.off("select", updateSelectedIndex);
    };
  }, [api]);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <motion.button
          type="button"
          variants={{
            hidden: { opacity: 0, y: 24 },
            show: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
            },
          }}
          whileHover={{ y: -6 }}
          transition={{ type: "tween", duration: 0.25 }}
          className="portfolio-card group text-left"
        >
          <div className="portfolio-media">
            <img src={project.img} alt={project.title} className="portfolio-image" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-background/90 to-transparent">
            <span className="font-mono text-[10px] uppercase tracking-[2px] text-primary">{project.tag}</span>
            <h5 className="mt-1 font-heading font-semibold text-foreground">{project.title}</h5>
          </div>
        </motion.button>
      </DialogTrigger>

      <DialogContent className="project-modal">
        <div ref={scrollRef} className="project-modal-scroll-shell">
          <DialogHeader className="project-modal-header">
            <div className="project-modal-hero">
              <Carousel opts={{ loop: true }} setApi={setApi} className="project-modal-carousel">
                <CarouselContent className="ml-0">
                  {project.gallery.map((image, index) => (
                    <CarouselItem key={`${project.title}-${index}`} className="pl-0">
                      <img
                        src={image}
                        alt={`${project.title} slide ${index + 1}`}
                        className="project-modal-image"
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="project-modal-arrow project-modal-arrow-left" />
                <CarouselNext className="project-modal-arrow project-modal-arrow-right" />
              </Carousel>

              <div className="project-modal-thumbs">
                {project.gallery.map((image, index) => (
                  <button
                    key={`${project.title}-thumb-${index}`}
                    type="button"
                    onClick={() => api?.scrollTo(index)}
                    className={`project-modal-thumb ${selectedIndex === index ? "active" : ""}`}
                    aria-label={`Show image ${index + 1} for ${project.title}`}
                  >
                    <img src={image} alt="" className="project-modal-thumb-image" />
                  </button>
                ))}
              </div>
            </div>
            <div className="project-modal-intro">
              <div className="flex flex-wrap items-center gap-3">
                <span className="project-modal-tag">{project.tag}</span>
                <span className="project-modal-meta">
                  <CalendarDays size={14} />
                  {project.year}
                </span>
              </div>
              <DialogTitle className="font-heading text-3xl font-semibold text-foreground md:text-4xl">
                {project.title}
              </DialogTitle>
              <DialogDescription className="max-w-3xl text-base leading-7 text-muted-foreground">
                {project.summary}
              </DialogDescription>
            </div>
          </DialogHeader>

          <div className="project-modal-body">
            <article className="project-modal-panel">
              <h4>Why This Project</h4>
              <p>{project.why}</p>
            </article>

            <article className="project-modal-panel">
              <h4>My Role</h4>
              <p>{project.role}</p>
            </article>

            <article className="project-modal-panel">
              <div className="project-modal-panel-title">
                <Wrench size={16} />
                <h4>Tools Used</h4>
              </div>
              <div className="project-modal-pill-wrap">
                {project.tools.map((tool) => (
                  <span key={tool} className="project-modal-pill">
                    {tool}
                  </span>
                ))}
              </div>
            </article>

            <article className="project-modal-panel">
              <div className="project-modal-panel-title">
                <Layers3 size={16} />
                <h4>Skills Applied</h4>
              </div>
              <div className="project-modal-pill-wrap">
                {project.skills.map((skill) => (
                  <span key={skill} className="project-modal-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </article>

            <article className="project-modal-panel">
              <h4>Key Features</h4>
              <ul className="project-modal-list">
                {project.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </article>

            <article className="project-modal-panel">
              <h4>Challenges</h4>
              <ul className="project-modal-list">
                {project.challenges.map((challenge) => (
                  <li key={challenge}>{challenge}</li>
                ))}
              </ul>
            </article>

            <article className="project-modal-panel">
              <div className="project-modal-panel-title">
                <ArrowUpRight size={16} />
                <h4>Impact & Outcomes</h4>
              </div>
              <ul className="project-modal-list">
                {project.results.map((result) => (
                  <li key={result}>{result}</li>
                ))}
              </ul>
            </article>
          </div>
        </div>

      </DialogContent>
    </Dialog>
  );
};

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="section-anchor py-14 md:py-16">
      <div className="section-tag mb-8">Portfolio</div>
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12 font-heading text-3xl font-semibold text-foreground md:text-4xl"
      >
        Featured Projects
      </motion.h3>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.12,
            },
          },
        }}
        className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3"
      >
        {projects.map((project) => (
          <ProjectDialog key={project.title} project={project} />
        ))}
      </motion.div>
    </section>
  );
};

export default PortfolioSection;
