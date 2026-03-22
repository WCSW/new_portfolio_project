import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    text: "ZenG delivered exceptional work. He's professional, fast, and extremely easy to work with. I'd definitely hire him again for future projects!",
    name: "Lincoln Press",
    role: "CEO Themesfalt",
  },
  {
    text: "ZenG managed our project with impressive efficiency and clarity. Deadlines were met, communication was smooth, and the outcome was exactly what we hoped for.",
    name: "Cheyenne Mango",
    role: "CEO Themesfalt",
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  return (
    <section id="recommendations" className="section-anchor py-14 md:py-16">
      <div className="flex items-end justify-between mb-12">
        <div>
          <div className="section-tag mb-8">Recommendations</div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-3xl md:text-4xl font-semibold text-foreground"
          >
            Professional Recommendations
          </motion.h3>
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => setCurrent(Math.max(0, current - 1))}
            className="social-icon"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={() => setCurrent(Math.min(testimonials.length - 1, current + 1))}
            className="social-icon"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="testimonial-card"
          >
            <Quote size={32} className="text-primary/30 mb-4" />
            <p className="text-foreground mb-6 leading-relaxed">{t.text}</p>
            <div>
              <h5 className="font-heading font-semibold text-foreground">{t.name}</h5>
              <span className="text-xs uppercase tracking-[2px] text-primary font-mono">{t.role}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
