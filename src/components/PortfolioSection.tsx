import { motion } from "framer-motion";

const projects = [
  { img: "/images/portfolio-1.webp", tag: "Conversational AI", title: "AI-Powered Chatbot" },
  { img: "/images/portfolio-3.webp", tag: "Predictive Analytics", title: "Sales Forecast Dashboard" },
  { img: "/images/portfolio-2.webp", tag: "Computer Vision", title: "Real-Time Object Detection" },
  { img: "/images/portfolio-4.webp", tag: "Resume Pro", title: "Resume ZenG Pro" },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-20">
      <div className="section-tag mb-8">Portfolio</div>
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-12"
      >
        Featured Projects
      </motion.h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="portfolio-card group"
          >
            <img src={p.img} alt={p.title} className="w-full aspect-[3/2] object-cover rounded-xl" />
            <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-background/90 to-transparent">
              <span className="text-[10px] uppercase tracking-[2px] text-primary font-mono">{p.tag}</span>
              <h5 className="font-heading font-semibold text-foreground mt-1">{p.title}</h5>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;
