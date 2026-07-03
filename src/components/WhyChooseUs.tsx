import { motion } from "framer-motion";
import { Eye, Star, Shield, MessageCircle } from "lucide-react";

export function WhyChooseUs() {
  const features = [
    {
      title: "Honest Inspections",
      icon: Eye,
      description: "We explain what your roof actually needs without pressure or confusion.",
    },
    {
      title: "Clean Professional Work",
      icon: Star,
      description: "Our crews respect your home, protect your property, and clean up after the job.",
    },
    {
      title: "Durable Materials",
      icon: Shield,
      description: "We use quality roofing materials designed for long-term protection.",
    },
    {
      title: "Clear Communication",
      icon: MessageCircle,
      description: "You know what is happening before, during, and after the roofing project.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-cream">
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-heading font-bold text-navy text-center mb-16"
        >
          Why Homeowners Trust SummitShield Roofing
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-warm-white p-6 md:p-8 rounded-lg shadow-sm border-l-4 border-l-copper hover:-translate-y-1 transition-transform duration-300 flex flex-col items-center text-center sm:items-start sm:text-left"
            >
              <div className="w-14 h-14 bg-forest/10 rounded-full flex items-center justify-center mb-6">
                <feature.icon className="w-7 h-7 text-forest" />
              </div>
              <h3 className="text-xl font-heading font-bold text-navy mb-3">
                {feature.title}
              </h3>
              <p className="text-slate leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
