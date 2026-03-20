import { motion } from "framer-motion";
import { Linkedin, Github, Twitter, Dribbble } from "lucide-react";
import { useState } from "react";
import TypeWriter from "./TypeWriter";

const budgets = ["< $1,000", "$1,000 - $5,000", "$5,000 - $10,000", "$10,000 - 20,000", "> $20,000"];

const ContactSection = () => {
  const [selectedBudget, setSelectedBudget] = useState<string | null>(null);

  return (
    <section id="contact" className="section-anchor py-20">
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-12">
        <div className="xl:col-span-5">
          <div className="section-tag mb-8">Contact</div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-2">
              Lets{" "}
              <TypeWriter words={["Design", "Create", "Craft"]} className="text-primary" />{" "}
              Incredible
            </h3>
            <h3 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-10">
              Work Together
            </h3>
          </motion.div>

          <div className="mb-3">
            <h4 className="font-heading text-xl text-foreground mb-1">
              <a href="mailto:themesflat@gmail.com" className="hover:text-primary transition-colors underline underline-offset-4">
                themesflat@gmail.com
              </a>
            </h4>
            <p className="text-xs text-muted-foreground">Based in San Francisco, CA</p>
          </div>

          <div className="flex gap-3 mt-4">
            {[Linkedin, Github, Twitter, Dribbble].map((Icon, i) => (
              <a key={i} href="#" className="social-icon">
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div className="xl:col-span-7">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 space-y-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <input type="text" placeholder="Your name" className="form-input" />
            <input type="email" placeholder="Your email" className="form-input" />
            <textarea rows={4} placeholder="Your Message..." className="form-input resize-none" />

            <div className="flex flex-wrap gap-2">
              {budgets.map((b) => (
                <button
                  key={b}
                  type="button"
                  onClick={() => setSelectedBudget(b)}
                  className={`budget-tag ${selectedBudget === b ? "active" : ""}`}
                >
                  {b}
                </button>
              ))}
            </div>

            <button type="submit" className="btn-primary">
              Get Started !
            </button>
          </motion.form>
        </div>
      </div>

      <p className="text-center text-xs text-muted-foreground mt-16">
        © 2025 ZenG. All Rights Reserved.
      </p>
    </section>
  );
};

export default ContactSection;
