import { motion } from "framer-motion";
import { Award, BadgeCheck, ExternalLink, FolderOpen } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const certifications = [
  {
    title: "Advanced Python: Working With Data",
    issuer: "LinkedIn Learning",
    issued: "Issued Aug 2023",
    skills: ["Python", "Data Management", "Data Processing"],
    accent: "linkedin",
  },
  {
    title: "Machine Learning Foundations",
    issuer: "Coursera",
    issued: "Issued Jan 2024",
    skills: ["Machine Learning", "Model Evaluation", "Scikit-learn"],
    accent: "coursera",
  },
  {
    title: "Deep Learning Specialization",
    issuer: "DeepLearning.AI",
    issued: "Issued Jun 2024",
    skills: ["Deep Learning", "Neural Networks", "TensorFlow"],
    accent: "deeplearning",
  },
  {
    title: "Data Visualization with Python",
    issuer: "LinkedIn Learning",
    issued: "Issued Sep 2024",
    skills: ["Matplotlib", "Dashboards", "Storytelling"],
    accent: "linkedin",
  },
  {
    title: "AI for Product Thinking",
    issuer: "Coursera",
    issued: "Issued Nov 2024",
    skills: ["AI Strategy", "Use Cases", "Product Design"],
    accent: "coursera",
  },
  {
    title: "Neural Networks for NLP",
    issuer: "DeepLearning.AI",
    issued: "Issued Feb 2025",
    skills: ["NLP", "Transformers", "Sequence Models"],
    accent: "deeplearning",
  },
];

const featuredCertifications = certifications.slice(0, 3);

const CertificationsSection = () => {
  return (
    <section id="certifications" className="section-anchor py-14 md:py-16">
      <div className="section-tag mb-8">Licenses & Certifications</div>
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-5 font-heading text-3xl font-semibold text-foreground md:text-4xl"
      >
        Verified Learning & Continuous Growth
      </motion.h3>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.05 }}
        className="max-w-3xl text-base leading-8 text-muted-foreground"
      >
        A focused selection of the most relevant certifications, with the full archive available on demand.
      </motion.p>

      <div className="mt-10 space-y-4">
        {featuredCertifications.map((cert, index) => (
          <motion.article
            key={cert.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.06 }}
            className={`cert-card cert-card-${cert.accent} cert-card-separated`}
          >
            <div className="cert-badge-shell">
              <div className="cert-badge cert-badge-compact">
                {index === 0 ? <BadgeCheck size={22} /> : <Award size={22} />}
              </div>
            </div>

            <div className="cert-content">
              <div className="flex flex-wrap items-center gap-2.5">
                <h4 className="font-heading text-base font-semibold leading-snug text-foreground md:text-lg">
                  {cert.title}
                </h4>
                <span className="cert-issued">{cert.issued}</span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">{cert.issuer}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {cert.skills.slice(0, 2).map((skill) => (
                  <span key={skill} className="cert-skill-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <button type="button" className="cert-action cert-action-compact">
              Show Credential
              <ExternalLink size={15} />
            </button>
          </motion.article>
        ))}
      </div>

      <div className="cert-archive-bar mt-6">
        <div>
          <p className="text-sm text-muted-foreground">Need the full archive?</p>
          <p className="mt-1 font-heading text-lg font-semibold text-foreground md:text-xl">
            View all {certifications.length} certifications in one place
          </p>
        </div>

        <Dialog>
          <DialogTrigger asChild>
            <button type="button" className="cert-action cert-action-compact">
              <FolderOpen size={18} />
              View All Certifications
            </button>
          </DialogTrigger>

          <DialogContent className="cert-modal">
            <DialogHeader className="cert-modal-header">
              <DialogTitle className="font-heading text-2xl text-foreground">All Licenses & Certifications</DialogTitle>
              <DialogDescription className="max-w-2xl leading-7">
                Browse the complete certification archive without crowding the main portfolio page.
              </DialogDescription>
            </DialogHeader>

            <div className="cert-modal-body">
              {certifications.map((cert, index) => (
                <motion.article
                  key={`${cert.title}-${cert.issued}`}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.04 }}
                  className={`cert-card cert-card-${cert.accent} cert-card-separated`}
                >
                  <div className="cert-badge-shell">
                    <div className="cert-badge cert-badge-compact">
                      {index === 0 ? <BadgeCheck size={22} /> : <Award size={22} />}
                    </div>
                  </div>

                  <div className="cert-content">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <h4 className="font-heading text-base font-semibold leading-snug text-foreground md:text-lg">
                        {cert.title}
                      </h4>
                      <span className="cert-issued">{cert.issued}</span>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">{cert.issuer}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {cert.skills.slice(0, 2).map((skill) => (
                        <span key={skill} className="cert-skill-pill">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button type="button" className="cert-action cert-action-compact">
                    Show Credential
                    <ExternalLink size={15} />
                  </button>
                </motion.article>
              ))}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default CertificationsSection;
