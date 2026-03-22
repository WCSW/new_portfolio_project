import { lazy, Suspense, useState } from "react";
import { motion } from "framer-motion";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import type { Project } from "./portfolio-data";

const ProjectDialogContent = lazy(() => import("./ProjectDialogContent"));

const ProjectDialog = ({ project }: { project: Project }) => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
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

      {open ? (
        <Suspense fallback={null}>
          <ProjectDialogContent project={project} />
        </Suspense>
      ) : null}
    </Dialog>
  );
};

export default ProjectDialog;
