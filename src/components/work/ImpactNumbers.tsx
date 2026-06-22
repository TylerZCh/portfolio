"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  {
    value: 1,
    prefix: "$",
    suffix: "M+",
    label: "Annual revenue — from zero",
    description: "A booking platform that didn't exist became the company's primary way patients find and pay for care.",
  },
  {
    value: 50,
    prefix: "",
    suffix: "%",
    label: "Faster field operations",
    description: "Phone calls and paper notes replaced by a real-time mobile workflow used by 100+ field professionals.",
  },
  {
    value: 90,
    prefix: "",
    suffix: "%+",
    label: "Automated test coverage",
    description: "Jest + Playwright on web, RNTL + Detox on mobile — 15+ E2E scenarios covering scheduling, payments, logistics, and appointment management.",
  },
];

function useCountUp(target: number, duration = 1400, active: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    const start = performance.now();
    const frame = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(frame);
    };
    requestAnimationFrame(frame);
  }, [active, target, duration]);

  return count;
}

function StatCard({
  stat,
  index,
  active,
}: {
  stat: (typeof stats)[0];
  index: number;
  active: boolean;
}) {
  const count = useCountUp(stat.value, 1200 + index * 100, active);

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={active ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: index * 0.12 }}
      className="flex flex-col gap-3 p-8 rounded-2xl border border-neutral-100 bg-white hover:border-neutral-200 hover:shadow-sm transition-all duration-300"
    >
      <p className="text-5xl font-semibold tracking-tight text-neutral-900 tabular-nums">
        {stat.prefix}
        {count}
        {stat.suffix}
      </p>
      <div>
        <p className="text-sm font-medium text-neutral-700 mb-1">{stat.label}</p>
        <p className="text-sm text-neutral-400 leading-relaxed">{stat.description}</p>
      </div>
    </motion.div>
  );
}

export function ImpactNumbers() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="px-6 md:px-12 lg:px-24 py-24 max-w-5xl mx-auto">
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="text-xs font-medium text-neutral-400 tracking-widest uppercase mb-10"
      >
        Impact
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {stats.map((stat, i) => (
          <StatCard key={stat.label} stat={stat} index={i} active={inView} />
        ))}
      </div>
    </section>
  );
}
