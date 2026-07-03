import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function TrustStrip() {
  const stats = [
    { value: "15+", label: "Years Experience" },
    { value: "1,200+", label: "Roofs Completed" },
    { value: "5-Star", label: "Rated Service" },
    { value: "100%", label: "Warranty-Backed Work" },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <section className="bg-slate py-12 relative z-20 border-b-4 border-primary" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-4 divide-x-0 md:divide-x divide-white/10">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              className="flex flex-col items-center justify-center text-center px-4"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <span className="text-4xl md:text-5xl font-heading font-bold text-warm-white mb-2 tracking-tight">
                {stat.value}
              </span>
              <span className="text-sm md:text-base font-medium text-soft-gray uppercase tracking-wider">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
