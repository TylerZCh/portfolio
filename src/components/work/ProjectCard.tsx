"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/projects";

export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: index * 0.08 }}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
        !isEven ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      {/* Image */}
      <div className={`relative rounded-2xl overflow-hidden bg-gradient-to-br ${project.color} aspect-[4/3] group`}>
        {"image" in project && project.image ? (
          <>
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
          </>
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
            <span className="text-xs font-medium tracking-widest uppercase text-neutral-400">Confidential</span>
            <span className="text-xs text-neutral-300">Screenshots omitted — available to discuss in interview</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col gap-5">
        <div className="flex items-center gap-3">
          <span className={`w-2 h-2 rounded-full ${project.accent}`} />
          <span className="text-xs font-medium text-neutral-400 tracking-widest uppercase">
            {project.tag}
          </span>
          <span className="text-xs text-neutral-300">{project.year}</span>
        </div>

        <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-neutral-900 leading-snug">
          {project.title}
        </h3>

        <p className="text-neutral-500 leading-relaxed">{project.description}</p>

        <ul className="flex flex-col gap-2">
          {project.highlights.map((h) => (
            <li key={h} className="flex items-start gap-2 text-sm text-neutral-500">
              <span className="mt-1.5 w-1 h-1 rounded-full bg-neutral-300 shrink-0" />
              {h}
            </li>
          ))}
        </ul>

        <p className="text-sm font-medium text-neutral-700 border-l-2 border-neutral-200 pl-3">
          {project.outcome}
        </p>

        <Link
          href={`/work/${project.slug}`}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-neutral-900 text-white text-sm font-medium hover:bg-neutral-700 transition-colors duration-200 group w-fit"
        >
          Read case study
          <ArrowUpRight
            size={14}
            className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </Link>
      </div>
    </motion.div>
  );
}
