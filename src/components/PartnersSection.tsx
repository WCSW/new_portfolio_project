import { motion } from "framer-motion";

const partners = [
  "/images/partner-1.png",
  "/images/partner-2.png",
  "/images/partner-3.png",
  "/images/partner-4.png",
  "/images/partner-5.png",
  "/images/partner-6.png",
  "/images/partner-7.png",
  "/images/partner-8.png",
  "/images/partner-9.png",
];

const PartnersSection = () => {
  return (
    <section id="partners" className="section-anchor py-20">
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 items-center">
        <div className="xl:col-span-5">
          <div className="section-tag mb-8">Partner</div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-3xl md:text-4xl font-semibold text-foreground"
          >
            Trusted By 100+ Brands Worldwide
          </motion.h3>
        </div>
        <div className="xl:col-span-7">
          <div className="grid grid-cols-3 md:grid-cols-4 gap-6">
            {partners.map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center justify-center"
              >
                <img src={src} alt="partner" className="partner-logo h-10 md:h-12 object-contain" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
