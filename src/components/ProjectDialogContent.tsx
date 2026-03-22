import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, CalendarDays, Layers3, Wrench } from "lucide-react";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import type { Project } from "./portfolio-data";

const ProjectDialogContent = ({ project }: { project: Project }) => {
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
  );
};

export default ProjectDialogContent;
