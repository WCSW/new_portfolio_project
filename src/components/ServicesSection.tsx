import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

const services = [
  { num: "01", title: "Custom AI Solutions", img: "/images/service-1.webp" },
  { num: "02", title: "Data Analysis & Visualization", img: "/images/service-2.webp" },
  { num: "03", title: "Machine Learning Automation", img: "/images/service-3.webp" },
  { num: "04", title: "AI Consulting & Training", img: "/images/service-4.webp" },
];

const ServicesSection = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="services" className="section-anchor py-14 md:py-16">
      <div className="section-tag mb-8">Services</div>
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-12"
      >
        AI Solutions That Matter
      </motion.h3>

      <div>
        {services.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="service-item"
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
          >
            <div className="flex items-center gap-6">
              <span className="text-sm text-muted-foreground font-mono">{s.num}/</span>
              <h5 className="font-heading font-semibold text-foreground text-lg">{s.title}</h5>
            </div>
            <div className="flex items-center gap-4">
              {hovered === i && (
                <motion.img
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  src={s.img}
                  alt={s.title}
                  className="w-[100px] h-[100px] rounded-lg object-cover hidden md:block"
                />
              )}
              <div className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground group-hover:text-primary group-hover:border-primary transition-colors">
                <ArrowRight size={16} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
