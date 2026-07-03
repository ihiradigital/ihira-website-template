import { motion } from "framer-motion";

export function Process() {
  const steps = [
    {
      title: "Schedule Free Inspection",
      description: "Homeowners request a roof inspection online or by phone.",
    },
    {
      title: "Get a Clear Recommendation",
      description: "We inspect the roof and explain whether it needs repair, replacement, or monitoring.",
    },
    {
      title: "Professional Roofing Work",
      description: "Our crew completes the roofing work with care, safety, and quality materials.",
    },
    {
      title: "Final Walkthrough & Cleanup",
      description: "We review the finished work, clean the property, and answer final questions.",
    },
  ];

  return (
    <section id="process" className="py-24 bg-warm-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-heading font-bold text-navy mb-4"
          >
            A Simple Roofing Process From Inspection to Final Cleanup
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate"
          >
            We make roofing straightforward with clear steps, honest communication, and dependable workmanship.
          </motion.p>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block relative max-w-5xl mx-auto">
          {/* Connecting line */}
          <div className="absolute top-[3.5rem] left-0 w-full h-[2px] bg-navy/10 -z-10" />
          
          <div className="grid grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="flex flex-col items-center text-center relative z-10"
              >
                <div className="w-28 h-28 bg-warm-white rounded-full flex items-center justify-center p-2 mb-6 shadow-sm border border-soft-gray">
                  <div className="w-full h-full bg-copper text-warm-white rounded-full flex items-center justify-center text-3xl font-heading font-bold">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">{step.title}</h3>
                <p className="text-slate leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile/Tablet Layout */}
        <div className="lg:hidden max-w-2xl mx-auto relative">
          {/* Connecting line */}
          <div className="absolute top-0 bottom-0 left-8 md:left-12 w-[2px] bg-navy/10" />

          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="flex gap-6 md:gap-8 items-start relative"
              >
                <div className="flex-shrink-0 w-16 h-16 md:w-24 md:h-24 bg-warm-white rounded-full flex items-center justify-center p-1 md:p-2 z-10 shadow-sm border border-soft-gray relative mt-0 md:-mt-2">
                  <div className="w-full h-full bg-copper text-warm-white rounded-full flex items-center justify-center text-xl md:text-2xl font-heading font-bold">
                    {index + 1}
                  </div>
                </div>
                <div className="flex-1 pt-2 md:pt-4">
                  <h3 className="text-lg md:text-xl font-bold text-navy mb-2">{step.title}</h3>
                  <p className="text-slate leading-relaxed text-sm md:text-base">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
