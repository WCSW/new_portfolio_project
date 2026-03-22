import { motion } from "framer-motion";
import { Linkedin, Github, Twitter, Dribbble } from "lucide-react";
import TypeWriter from "./TypeWriter";

const ContactSection = () => {
  return (
    <section id="contact" className="section-anchor py-14 md:py-16">
      <div className="grid grid-cols-1 gap-12 xl:grid-cols-12">
        <div className="xl:col-span-5">
          <div className="section-tag mb-8">Contact</div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-2 font-heading text-3xl font-semibold text-foreground md:text-4xl">
              Lets{" "}
              <TypeWriter words={["Design", "Create", "Craft"]} className="text-primary" />{" "}
              Incredible
            </h3>
            <h3 className="mb-10 font-heading text-3xl font-semibold text-foreground md:text-4xl">
              Work Together
            </h3>
          </motion.div>

          <div className="mb-3">
            <h4 className="mb-1 font-heading text-xl text-foreground">
              <a
                href="mailto:themesflat@gmail.com"
                className="underline underline-offset-4 transition-colors hover:text-primary"
              >
                themesflat@gmail.com
              </a>
            </h4>
            <p className="text-xs text-muted-foreground">Based in San Francisco, CA</p>
          </div>

          <div className="mt-4 flex gap-3">
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
            className="glass-card space-y-6 p-8"
            onSubmit={(e) => e.preventDefault()}
          >
            <input type="text" placeholder="Your name" className="form-input" />
            <input type="email" placeholder="Your email" className="form-input" />
            <textarea rows={4} placeholder="Your Message..." className="form-input resize-none" />

            <button type="submit" className="btn-primary">
              Get Started !
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
