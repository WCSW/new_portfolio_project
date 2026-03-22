import { motion } from "framer-motion";
import ProjectDialog from "./ProjectDialog";
import { projects } from "./portfolio-data";

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
