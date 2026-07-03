import { motion } from "framer-motion";
import { Star } from "lucide-react";

export function Reviews() {
  const reviews = [
    {
      name: "Michael R.",
      location: "Austin TX",
      service: "Roof Replacement",
      text: "SummitShield Roofing inspected our roof after a storm and explained everything clearly. The crew was professional, fast, and left the property clean. Could not ask for better service.",
    },
    {
      name: "Jennifer K.",
      location: "Tampa FL",
      service: "Storm Damage Repair",
      text: "After the hurricane, we were worried about our roof. SummitShield came out quickly, did a thorough inspection, and got everything repaired within the week. Incredibly responsive team.",
    },
    {
      name: "David S.",
      location: "Denver CO",
      service: "Roof Inspection",
      text: "They found issues I had no idea about and explained exactly what needed attention. No pressure, no upselling. Just honest advice and quality work.",
    },
    {
      name: "Amanda P.",
      location: "Dallas TX",
      service: "Emergency Roofing",
      text: "We had a leak in the middle of a heavy rainstorm. SummitShield had someone here within hours. They stopped the damage fast and followed up with a full repair the next day.",
    },
    {
      name: "Robert L.",
      location: "Phoenix AZ",
      service: "Gutter Installation",
      text: "The team installed new gutters and repaired the flashing around our chimney. Professional, clean, on time. The roof looks great and we have not had any issues since.",
    },
    {
      name: "Sarah M.",
      location: "Atlanta GA",
      service: "Full Roof Replacement",
      text: "We replaced the entire roof and the experience was smooth from start to finish. They kept us informed, finished on schedule, and cleaned everything up spotlessly.",
    },
  ];

  return (
    <section id="reviews" className="py-24 bg-navy">
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-heading font-bold text-warm-white text-center mb-16"
        >
          Trusted by Homeowners
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-warm-white rounded-lg p-8 shadow-lg flex flex-col"
            >
              <div className="flex text-copper mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <blockquote className="text-slate italic leading-relaxed flex-1 mb-6">
                "{review.text}"
              </blockquote>
              <div className="mt-auto border-t border-soft-gray pt-4">
                <div className="font-bold text-navy">{review.name}</div>
                <div className="flex flex-wrap items-center gap-2 mt-1">
                  <span className="text-sm text-slate">{review.location}</span>
                  <span className="text-xs font-semibold text-copper bg-copper/10 px-2 py-1 rounded-full">
                    {review.service}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
