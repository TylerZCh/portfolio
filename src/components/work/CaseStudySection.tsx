"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface CaseStudySectionProps {
  label: string;
  title: string;
  children: React.ReactNode;
}

export function CaseStudySection({ label, title, children }: CaseStudySectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="max-w-4xl mx-auto px-6 md:px-12 lg:px-24 py-16 border-t border-neutral-100"
    >
      <p className="text-xs font-medium text-neutral-400 tracking-widest uppercase mb-3">{label}</p>
      <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 mb-8">{title}</h2>
      {children}
    </motion.section>
  );
}

export function ScreenshotGrid({ images }: { images: { src: string; caption: string }[] }) {
  return (
    <div className={`grid gap-4 ${images.length === 1 ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2"}`}>
      {images.map(({ src, caption }) => (
        <figure key={src} className="flex flex-col gap-2">
          <div className="relative rounded-xl overflow-hidden border border-neutral-100 bg-neutral-50 aspect-[16/10]">
            <Image
              src={src}
              alt={caption}
              fill
              className="object-cover object-top"
              sizes="(max-width: 640px) 100vw, 50vw"
            />
          </div>
          <figcaption className="text-xs text-neutral-400 text-center">{caption}</figcaption>
        </figure>
      ))}
    </div>
  );
}

export function MobileScreenshotGrid({ images }: { images: { src: string; caption: string }[] }) {
  return (
    <div className="flex flex-wrap justify-center gap-6">
      {images.map(({ src, caption }) => (
        <figure key={src} className="flex flex-col items-center gap-2 w-[180px]">
          <div className="relative rounded-2xl overflow-hidden border border-neutral-100 bg-neutral-50 w-full aspect-[9/19]">
            <Image
              src={src}
              alt={caption}
              fill
              className="object-cover object-top"
              sizes="180px"
            />
          </div>
          <figcaption className="text-xs text-neutral-400 text-center">{caption}</figcaption>
        </figure>
      ))}
    </div>
  );
}

export function DecisionCard({ decision, why, tradeoff }: { decision: string; why: string; tradeoff: string }) {
  return (
    <div className="rounded-xl border border-neutral-100 p-6 flex flex-col gap-3 hover:border-neutral-200 transition-colors">
      <p className="font-medium text-neutral-900">{decision}</p>
      <p className="text-sm text-neutral-500 leading-relaxed">
        <span className="font-medium text-neutral-700">Why: </span>{why}
      </p>
      <p className="text-sm text-neutral-400 leading-relaxed">
        <span className="font-medium text-neutral-500">Tradeoff: </span>{tradeoff}
      </p>
    </div>
  );
}
