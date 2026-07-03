import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

import project1 from "@/assets/project-1.png";
import project2 from "@/assets/project-2.png";
import project3 from "@/assets/project-3.png";
import project4 from "@/assets/project-4.png";
import project5 from "@/assets/project-5.png";
import project6 from "@/assets/project-6.png";

export function Projects() {
  const projects = [
    {
      type: "Full Roof Replacement",
      result: "Upgraded home with a durable asphalt shingle system.",
      location: "Austin, TX",
      image: project1,
    },
    {
      type: "Storm Damage Repair",
      result: "Restored roof integrity after severe wind and hail.",
      location: "Tampa, FL",
      image: project2,
    },
    {
      type: "Architectural Upgrade",
      result: "Installed premium architectural shingles for maximum curb appeal.",
      location: "Denver, CO",
      image: project3,
    },
    {
      type: "Emergency Leak Repair",
      result: "Stopped active leaking and repaired damaged decking.",
      location: "Dallas, TX",
      image: project4,
    },
    {
      type: "Gutter System Installation",
      result: "Added seamless gutters with leaf guards for proper drainage.",
      location: "Phoenix, AZ",
      image: project5,
    },
    {
      type: "Commercial Flat Roof",
      result: "Repaired membrane roofing on local warehouse building.",
      location: "Atlanta, GA",
      image: project6,
    },
  ];

  return (
    <section id="projects" className="py-24 bg-soft-gray">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-heading font-bold text-navy mb-4"
          >
            Recent Roofing Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate"
          >
            See how professional roofing work improves curb appeal, protection, and peace of mind.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-20">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-warm-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow group flex flex-col"
            >
              <div className="relative h-[220px] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.type}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center text-xs font-semibold text-copper mb-3 tracking-wide uppercase bg-copper/10 w-fit px-2 py-1 rounded">
                  <MapPin className="w-3 h-3 mr-1" />
                  {project.location}
                </div>
                <h3 className="text-xl font-bold text-navy mb-2">{project.type}</h3>
                <p className="text-slate leading-relaxed flex-1">{project.result}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="max-w-5xl mx-auto border-t border-slate/20 pt-16">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-navy">
              See the Difference a Quality Roof Makes
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-lg overflow-hidden shadow-md"
            >
              <div className="absolute top-4 left-4 z-10 bg-navy text-warm-white font-bold px-4 py-1 rounded shadow-sm text-sm">
                Before
              </div>
              <img
                src={project2}
                alt="Roof before repair"
                className="w-full h-[300px] md:h-[400px] object-cover grayscale brightness-75 contrast-125"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-lg overflow-hidden shadow-md"
            >
              <div className="absolute top-4 right-4 z-10 bg-clay text-warm-white font-bold px-4 py-1 rounded shadow-sm text-sm">
                After
              </div>
              <img
                src={project1}
                alt="Roof after repair"
                className="w-full h-[300px] md:h-[400px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
