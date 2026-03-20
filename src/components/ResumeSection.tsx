import { motion } from "framer-motion";

const items = [
  { title: "AI Developer", org: "Google Inc.", date: "2020 - Present" },
  { title: "Machine Learning Engineer", org: "Microsoft Inc.", date: "2018 - 2020" },
  { title: "Data Scientist", org: "IBM Inc.", date: "2014 - 2018" },
  { title: "M.Sc. in Computer Science", org: "Stanford University", date: "2013 - 2014" },
  { title: "B.Sc. in Information Technology", org: "Massachusetts Institute of Technology", date: "2008 - 2013" },
];

const ResumeSection = () => {
  return (
    <section id="resume" className="section-anchor py-20">
      <div className="section-tag mb-8">Resume</div>
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-12"
      >
        Education & Experience
      </motion.h3>

      <div>
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="education-item"
          >
            <div>
              <h5 className="font-heading font-semibold text-foreground mb-1">{item.title}</h5>
              <span className="text-sm text-muted-foreground">{item.org}</span>
            </div>
            <span className="text-xs text-foreground font-mono">{item.date}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ResumeSection;
