import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "AI & Data Expertise",
    items: ["Machine Learning", "Deep Learning", "Data Science", "ETL Pipelines"],
  },
  {
    title: "Programming Languages",
    items: ["Python", "JavaScript", "Java", "Dart", "C", "C#"],
  },
  {
    title: "Frontend Development",
    items: ["HTML5", "CSS3", "Bootstrap", "jQuery"],
  },
  {
    title: "Frameworks & Tools",
    items: ["Django", "Flask", "TensorFlow", "PyTorch", "Flutter", "ASP.Net MVC"],
  },
  {
    title: "Databases",
    items: ["MySQL", "PostgreSQL", "Firebase", "IBM DB2"],
  },
  {
    title: "Data Science Libraries",
    items: ["NumPy", "Pandas", "Scikit-learn", "Keras", "Matplotlib"],
  },
  {
    title: "Automation Platforms",
    items: ["IBM Business Automation Workflow", "Automation Anywhere"],
  },
  {
    title: "Professional Strengths",
    items: ["Leadership", "Teamwork", "Analytical Thinking", "Problem-Solving", "Quick Learner"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-anchor py-14 md:py-16">
      <div className="section-tag mb-8">Skills</div>
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12 font-heading text-3xl font-semibold text-foreground md:text-4xl"
      >
        Technical Stack & Strengths
      </motion.h3>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {skillGroups.map((group, index) => (
          <motion.article
            key={group.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="skill-card"
          >
            <h4 className="mb-5 font-heading text-xl font-semibold text-foreground">{group.title}</h4>
            <div className="flex flex-wrap gap-2.5">
              {group.items.map((item) => (
                <span key={item} className="skill-pill">
                  {item}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
