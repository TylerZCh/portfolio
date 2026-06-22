"use client";

import { motion, type Variants } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { SocialLinks } from "@/components/ui/SocialLinks";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

export function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 max-w-5xl mx-auto">
      {/* Availability badge */}
      <motion.div
        custom={0}
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="mb-10"
      >
        <span className="inline-flex items-center gap-2 text-xs font-medium text-neutral-500 tracking-widest uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Open to new opportunities
        </span>
      </motion.div>

      {/* Headline */}
      <motion.h1
        custom={0.1}
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-neutral-900 leading-[1.1] mb-6"
      >
        Frontend Engineer
        <br />
        <span className="text-neutral-400">who owns the product,</span>
        <br />
        <span className="italic font-light">not just the code.</span>
      </motion.h1>

      {/* Description */}
      <motion.p
        custom={0.2}
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="text-base md:text-lg text-neutral-500 max-w-xl leading-relaxed mb-10"
      >
        I take ambiguous problems from zero to production — across web and mobile,
        from UX to architecture, independently. At{" "}
        <span className="text-neutral-700 font-medium">Zymebalanz</span>, three
        platforms I built from scratch now drive{" "}
        <span className="text-neutral-700 font-medium">$1M+ in annual revenue</span>.
      </motion.p>

      {/* CTA + Social */}
      <motion.div
        custom={0.3}
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
      >
        <Button href="/#work">View Work</Button>
        <Button href="/resume" variant="ghost">
          Resume
        </Button>
        <div className="h-px sm:h-5 sm:w-px bg-neutral-200 hidden sm:block" />
        <SocialLinks />
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        custom={0.5}
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-neutral-300"
      >
        <motion.div
          className="w-px h-12 bg-neutral-300 origin-top"
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
