"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

interface CaseStudyHeroProps {
  tag: string;
  title: string;
  description: string;
  stats: { label: string; value: string }[];
  gradient: string;
}

export function CaseStudyHero({ tag, title, description, stats, gradient }: CaseStudyHeroProps) {
  return (
    <section className={`pt-32 pb-20 px-6 md:px-12 lg:px-24 bg-gradient-to-b ${gradient} to-white`}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-200 text-sm font-medium text-neutral-600 hover:border-neutral-900 hover:text-neutral-900 transition-all duration-200 mb-10 group"
          >
            <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-0.5" />
            All work
          </Link>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-xs font-medium text-neutral-400 tracking-widest uppercase mb-4"
        >
          {tag}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900 leading-tight mb-6"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.18 }}
          className="text-lg text-neutral-500 leading-relaxed max-w-2xl mb-14"
        >
          {description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-neutral-200"
        >
          {stats.map(({ label, value }) => (
            <div key={label}>
              <p className="text-xl font-semibold text-neutral-900">{value}</p>
              <p className="text-xs text-neutral-400 mt-1">{label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
