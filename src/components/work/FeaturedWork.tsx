"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/projects";
import { ProjectCard } from "./ProjectCard";

export function FeaturedWork() {
  return (
    <section id="work" className="px-6 md:px-12 lg:px-24 py-24 max-w-5xl mx-auto">
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-xs font-medium text-neutral-400 tracking-widest uppercase mb-16"
      >
        Selected Work
      </motion.p>

      <div className="flex flex-col gap-28">
        {projects.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
