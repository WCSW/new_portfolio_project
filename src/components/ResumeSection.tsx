import { motion } from "framer-motion";

const experienceItems = [
  {
    title: "AI Developer",
    org: "Google Inc.",
    date: "2020 - Present",
    details: [
      "Built internal AI tooling for workflow automation and prediction pipelines.",
      "Collaborated with product teams to ship model-backed features across multiple surfaces.",
      "Improved deployment reliability with monitoring and evaluation dashboards.",
    ],
  },
  {
    title: "Machine Learning Engineer",
    org: "Microsoft Inc.",
    date: "2018 - 2020",
    details: [
      "Trained and optimized recommendation and classification models for production use.",
      "Created reusable data preprocessing pipelines for large-scale training jobs.",
      "Worked with engineering teams to reduce inference latency in core services.",
    ],
  },
  {
    title: "Data Scientist",
    org: "IBM Inc.",
    date: "2014 - 2018",
    details: [
      "Designed experiments and analytics reports for customer-facing data products.",
      "Built forecasting dashboards for business and operations teams.",
      "Presented actionable insights from large structured and unstructured datasets.",
    ],
  },
];

const educationItems = [
  {
    title: "M.Sc. in Computer Science",
    org: "Stanford University",
    date: "2013 - 2014",
    details: [
      "Focused on machine learning systems, distributed computing, and applied research.",
      "Completed capstone work around intelligent data processing pipelines.",
      "Participated in research-led collaboration projects and technical presentations.",
    ],
  },
  {
    title: "B.Sc. in Information Technology",
    org: "Massachusetts Institute of Technology",
    date: "2008 - 2013",
    details: [
      "Built a strong foundation in software engineering, algorithms, and data structures.",
      "Completed projects in web systems, databases, and systems programming.",
      "Contributed to student-led development teams and technical workshops.",
    ],
  },
];

const ResumeSection = () => {
  return (
    <section id="resume" className="section-anchor py-14 md:py-16">
      <div className="section-tag mb-8">Resume</div>
      <div className="space-y-14">
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 font-heading text-3xl font-semibold text-foreground md:text-4xl"
          >
            Experience
          </motion.h3>
          <div className="resume-list">
            {experienceItems.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="education-item"
              >
                <div className="resume-content">
                  <h5 className="mb-1 font-heading font-semibold text-foreground">{item.title}</h5>
                  <span className="text-sm text-muted-foreground">{item.org}</span>
                  <div className="resume-details">
                    <ul className="resume-detail-list">
                      {item.details.map((detail) => (
                        <li key={detail}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <span className="resume-date">{item.date}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 font-heading text-3xl font-semibold text-foreground md:text-4xl"
          >
            Education
          </motion.h3>
          <div className="resume-list">
            {educationItems.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="education-item"
              >
                <div className="resume-content">
                  <h5 className="mb-1 font-heading font-semibold text-foreground">{item.title}</h5>
                  <span className="text-sm text-muted-foreground">{item.org}</span>
                  <div className="resume-details">
                    <ul className="resume-detail-list">
                      {item.details.map((detail) => (
                        <li key={detail}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <span className="resume-date">{item.date}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
