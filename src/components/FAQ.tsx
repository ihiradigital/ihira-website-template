import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  const faqs = [
    {
      q: "How do I know if my roof needs repair or replacement?",
      a: "If your roof is less than 15 years old and damage is isolated to one area, repair is often the right choice. A full replacement is usually recommended for roofs over 20 years old, widespread damage, or when repair costs approach 50% of replacement cost. A free inspection will give you a clear recommendation.",
    },
    {
      q: "Do you offer free roof inspections?",
      a: "Yes. We offer free roof inspections for homeowners in our service area. Our inspector will assess the condition of your roof, identify any issues, and provide an honest written report with no obligation.",
    },
    {
      q: "How long does a roof replacement usually take?",
      a: "Most residential roof replacements are completed in one to two days depending on the size of the home and weather conditions. We keep you informed throughout the process.",
    },
    {
      q: "Can you help with storm damage inspections?",
      a: "Absolutely. We specialize in post-storm inspections. We document all damage, provide a detailed report, and can help guide you through the insurance claim process if needed.",
    },
    {
      q: "What roofing materials do you work with?",
      a: "We work with asphalt shingles, architectural shingles, metal roofing, flat roofing membranes, and more. We recommend the right material based on your budget, climate, and home style.",
    },
    {
      q: "Do you provide emergency roof repair?",
      a: "Yes. We offer 24/7 emergency roof repair for active leaks, storm damage, and urgent situations. Call our emergency line anytime.",
    },
    {
      q: "Will you clean up after the roofing work?",
      a: "Always. Our crew uses tarps to protect your property, collects all debris and old materials, and does a final walkthrough before leaving to make sure everything is clean.",
    },
    {
      q: "How do I schedule an inspection?",
      a: "You can schedule a free inspection by filling out the form on this page, calling our office, or clicking the Free Roof Inspection button in the navigation bar. We typically contact you within a few hours.",
    },
  ];

  return (
    <section id="faq" className="py-24 bg-cream">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-heading font-bold text-navy text-center mb-12"
        >
          Roofing Questions Homeowners Ask Most
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, idx) => (
              <AccordionItem
                key={idx}
                value={`item-${idx}`}
                className="bg-warm-white px-6 rounded-lg border border-soft-gray"
              >
                <AccordionTrigger className="text-left font-bold text-navy hover:text-clay hover:no-underline py-4 md:py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-slate text-base leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
