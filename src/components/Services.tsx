import { motion } from "framer-motion";
import { Wrench, Home, CloudLightning, AlertTriangle, Search, Droplets, Building2, HousePlus } from "lucide-react";

export function Services() {
  const services = [
    {
      title: "Roof Repair",
      icon: Wrench,
      description: "Fix leaks, missing shingles, flashing issues, and small roof damage before it becomes expensive.",
    },
    {
      title: "Roof Replacement",
      icon: Home,
      description: "Upgrade your home with a durable, professionally installed roofing system.",
    },
    {
      title: "Storm Damage Repair",
      icon: CloudLightning,
      description: "Fast help after wind, hail, heavy rain, and severe weather damage.",
    },
    {
      title: "Emergency Roofing",
      icon: AlertTriangle,
      description: "Quick response when roof problems cannot wait.",
    },
    {
      title: "Roof Inspection",
      icon: Search,
      description: "Detailed roof assessments with honest recommendations and clear next steps.",
    },
    {
      title: "Gutter Installation",
      icon: Droplets,
      description: "Protect your roof, walls, and foundation with properly installed gutter systems.",
    },
    {
      title: "Commercial Roofing",
      icon: Building2,
      description: "Reliable roofing services for offices, shops, warehouses, and commercial properties.",
    },
    {
      title: "Residential Roofing",
      icon: HousePlus,
      description: "Quality roofing solutions for homeowners who want lasting protection.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-cream">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-heading font-bold text-navy mb-4"
          >
            Complete Roofing Services for Homes and Businesses
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate"
          >
            Whether you need a quick repair, storm damage support, or a complete roof replacement, our team delivers reliable roofing solutions built to last.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-warm-white rounded-lg shadow-sm border-t-4 border-t-copper hover:shadow-md transition-shadow flex flex-col p-6 hover:-translate-y-1 duration-300"
            >
              <div className="w-12 h-12 bg-cream rounded-full flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-clay" />
              </div>
              <h3 className="text-xl font-heading font-bold text-navy mb-3">
                {service.title}
              </h3>
              <p className="text-slate flex-1 mb-6 leading-relaxed">
                {service.description}
              </p>
              <a
                href="#contact"
                className="text-clay font-semibold hover:text-copper transition-colors inline-flex items-center group mt-auto"
                data-testid={`service-link-${index}`}
              >
                Request Service
                <span className="ml-2 group-hover:translate-x-1 transition-transform">
                  &rarr;
                </span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
