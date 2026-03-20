import TypeWriter from "./TypeWriter";
import CountUp from "./CountUp";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="section-anchor min-h-screen flex flex-col justify-start pt-6 pb-20">
      <div className="section-tag mb-8">About</div>

      <h3 className="font-heading text-xl text-foreground mb-4">
        Hello! I'm{" "}
        <TypeWriter
          words={["Data Engineer","Machine Learning (ML) Engineer", "AI Developer","Python Developer"]}
          className="text-primary"
        />
      </h3>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="font-heading text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight"
      >
        Empower Code Intelligence
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-muted-foreground max-w-2xl mb-12 leading-relaxed"
      >
        Hello! I'm ZenG, an AI Developer with 10 years of experience in designing and developing intelligent
        systems. My expertise spans machine learning, natural language processing, computer vision, and
        data analysis. Driven by curiosity, I transform complex data into smart solutions.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {[
          { end: 10, suffix: "+", label: "Years in AI Development" },
          { end: 500, suffix: "+", label: "Satisfied Clients" },
          { end: 1, suffix: "k+", label: "Projects Completed" },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="counter-card"
          >
            <CountUp end={item.end} suffix={item.suffix} />
            <p className="text-sm text-muted-foreground mt-2">{item.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
