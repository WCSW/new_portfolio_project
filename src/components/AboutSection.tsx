import TypeWriter from "./TypeWriter";
import CountUp from "./CountUp";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="section-anchor hero-section">
      <div className="section-tag mb-6">About</div>

      <div className="hero-intro mb-9">
        <span className="hero-intro-corner hero-intro-corner-tl" />
        <span className="hero-intro-corner hero-intro-corner-tr" />
        <span className="hero-intro-corner hero-intro-corner-bl" />
        <span className="hero-intro-corner hero-intro-corner-br" />
        <h3 className="font-heading text-[1.9rem] font-semibold text-foreground md:text-[2.2rem]">
          Hello! I'm{" "}
          <TypeWriter
            words={["AI Developer", "ML Engineer", "Python Developer", "Data Engineer"]}
            className="text-primary"
          />
        </h3>
      </div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="hero-title"
      >
        Empower Code
        <br />
        Intelligence
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="hero-copy"
      >
        Hello! I'm ZenG, an AI Developer with 10 years of experience in designing and developing intelligent
        systems. My expertise spans machine learning, natural language processing, computer vision, and
        data analysis. Driven by curiosity, I transform complex data into smart solutions.
      </motion.p>

      <div className="hero-stats">
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
