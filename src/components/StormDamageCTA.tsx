import { motion } from "framer-motion";
import { Zap, FileText, Umbrella } from "lucide-react";
import stormImg from "@/assets/storm-cta.png";

export function StormDamageCTA() {
  const badges = [
    { icon: Zap, text: "Fast Response" },
    { icon: FileText, text: "Insurance Claim Support" },
    { icon: Umbrella, text: "Leak Protection" },
  ];

  return (
    <section className="relative py-24 bg-navy overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={stormImg}
          alt="Dark stormy sky over an American house"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#172033]/80" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-heading font-bold text-warm-white mb-6 leading-tight"
          >
            Storm Damage? Get a Roof Inspection Before the Problem Spreads
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-soft-gray mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            High winds, hail, and heavy rain can damage your roof even when the problem is not obvious from the ground. Our team checks your roof carefully and helps you understand what needs attention.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <a
              href="#inspection-form"
              className="w-full sm:w-auto inline-flex items-center justify-center bg-clay hover:bg-clay/90 text-warm-white font-bold h-14 px-8 text-base transition-colors min-h-[48px]"
              data-testid="cta-storm-inspection"
            >
              Request Storm Damage Inspection
            </a>
            <a
              href="tel:+10000000000"
              className="w-full sm:w-auto inline-flex items-center justify-center border-2 border-warm-white text-warm-white hover:bg-warm-white hover:text-navy font-bold h-14 px-8 text-base transition-colors min-h-[48px]"
              data-testid="cta-storm-call"
            >
              Call Now for Emergency Repair
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-6 md:gap-12"
          >
            {badges.map((badge, idx) => (
              <div key={idx} className="flex items-center text-warm-white gap-2">
                <badge.icon className="w-5 h-5 text-copper" />
                <span className="font-medium text-sm md:text-base">{badge.text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
