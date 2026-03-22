import { motion } from "framer-motion";
import { useState } from "react";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Standard",
    price: "$29",
    features: ["60 keywords", "6,000 monthly website visitors", "8 blogs / month", "10 quality backlinks / month"],
  },
  {
    name: "Premium",
    price: "$39",
    features: ["60 keywords", "6,000 monthly website visitors", "8 blogs / month", "10 quality backlinks / month"],
  },
];

const PricingSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="pricing" className="section-anchor py-14 md:py-16">
      <div className="section-tag mb-8">Pricing</div>
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-8"
      >
        My Pricing
      </motion.h3>

      <div className="flex gap-1 p-1 bg-secondary rounded-full w-fit mb-8">
        {plans.map((plan, i) => (
          <button
            key={i}
            onClick={() => setActiveTab(i)}
            className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
              activeTab === i
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {plan.name} Plan
          </button>
        ))}
      </div>

      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="pricing-card"
      >
        <h4 className="font-heading text-2xl font-semibold text-foreground mb-6">
          {plans[activeTab].name}<br />Plan
        </h4>
        <ul className="space-y-3 mb-8">
          {plans[activeTab].features.map((f, i) => (
            <li key={i} className="flex items-center gap-3 text-foreground text-sm">
              <Check size={16} className="text-primary" />
              {f}
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2 mb-6">
          <span className="font-heading text-3xl font-bold text-foreground">{plans[activeTab].price}</span>
          <span className="text-sm text-muted-foreground">/per hour</span>
        </div>
        <a href="#contact" className="btn-primary">Get Started !</a>
      </motion.div>
    </section>
  );
};

export default PricingSection;
