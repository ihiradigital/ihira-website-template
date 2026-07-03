import { motion } from "framer-motion";
import { Shield, CheckCircle, Clock, MapPin, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.png";

export function Hero() {
  const trustBadges = [
    { icon: Shield, text: "Licensed & Insured" },
    { icon: CheckCircle, text: "Free Roof Inspections" },
    { icon: Clock, text: "24/7 Emergency Repair" },
    { icon: MapPin, text: "Local Roofing Experts" },
  ];

  return (
    <section className="relative min-h-[100dvh] pt-24 pb-12 lg:py-0 flex items-center bg-navy overflow-hidden">
      {/* Background Image with Navy Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Premium newly-installed asphalt shingle roof on an American home"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-navy/75 lg:bg-navy/65" />
        {/* Gradient fade to left for desktop readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/80 to-transparent hidden lg:block" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6 h-full flex flex-col justify-center">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="inline-block py-1 px-3 bg-primary/20 border border-primary/30 text-warm-white text-sm font-semibold tracking-wider uppercase mb-6 backdrop-blur-sm">
              Your Trusted Local Roofers
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-extrabold text-warm-white leading-[1.1] mb-6 drop-shadow-lg">
              Roofing You Can <span className="text-primary">Trust</span> When Your Home Needs Protection
            </h1>
            <p className="text-lg md:text-xl text-soft-gray mb-10 max-w-2xl leading-relaxed drop-shadow-md font-medium">
              From emergency roof repairs to full roof replacements, we help homeowners protect their property with honest inspections, durable materials, and clean professional work.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold h-14 px-8 rounded-none text-base shadow-lg shadow-primary/20 transition-all hover:translate-y-[-2px]">
                <a href="#inspection-form">
                  Schedule Free Roof Inspection
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-warm-white text-warm-white hover:bg-warm-white hover:text-navy font-bold h-14 px-8 rounded-none text-base backdrop-blur-sm transition-all bg-transparent">
                <a href="tel:+10000000000">
                  <Phone className="mr-2 w-5 h-5" />
                  Call Emergency Team
                </a>
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 pt-6 border-t border-white/20">
              {trustBadges.map((badge, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + (index * 0.1) }}
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-navy border border-white/10 flex items-center justify-center">
                    <badge.icon className="w-5 h-5 text-secondary" />
                  </div>
                  <span className="text-sm font-semibold text-warm-white leading-tight">
                    {badge.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
