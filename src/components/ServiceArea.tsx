import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export function ServiceArea() {
  const cities = [
    "Austin", "Round Rock", "Cedar Park", "Georgetown", 
    "Pflugerville", "Leander", "Kyle", "Buda", "Manor", "Hutto"
  ];

  return (
    <section className="py-24 bg-warm-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy mb-6">
              Proudly Serving Local Homeowners and Businesses
            </h2>
            <p className="text-lg text-slate mb-8 leading-relaxed">
              We provide roofing services to homeowners and businesses across the greater Austin area and surrounding communities.
            </p>
            <div className="flex flex-wrap gap-3">
              {cities.map((city, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 bg-cream text-navy font-medium text-sm rounded-full border border-soft-gray"
                >
                  {city}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full h-80 lg:h-[400px] bg-cream border-2 border-navy flex flex-col items-center justify-center p-6 text-center rounded-lg shadow-sm"
          >
            <MapPin className="w-12 h-12 text-clay mb-4" />
            <h3 className="text-xl font-heading font-bold text-navy">
              Service Area Map &mdash; Austin Metro Region
            </h3>
            <p className="text-slate mt-2">
              (Interactive map placeholder)
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
