"use client";

import { motion } from "framer-motion";

const skills = [
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Redux Toolkit", "Tailwind CSS"] },
  { category: "Mobile", items: ["React Native", "Expo", "Background Location", "Push Notifications", "Deep Linking"] },
  { category: "Testing & Infra", items: ["Jest", "Detox (E2E)", "GitHub Actions", "Lighthouse CI", "Webpack"] },
  { category: "Design", items: ["Figma", "UX Design", "Component Systems", "Accessibility", "Performance"] },
];

const timeline = [
  {
    year: "2022 – Now",
    role: "Software Engineer",
    company: "Zymebalanz LLC",
    note: "2 platforms built 0→1, 1 rebuilt from the ground up",
  },
  {
    year: "2023",
    role: "Google UX Design Certificate",
    company: "Google / Coursera",
    note: "Deepened design system & user research fundamentals",
  },
  {
    year: "2021",
    role: "B.S. Software Engineering",
    company: "San Jose State University",
    note: "",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="px-6 md:px-12 lg:px-24 py-24 max-w-5xl mx-auto">
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-xs font-medium text-neutral-400 tracking-widest uppercase mb-10"
      >
        About
      </motion.p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left: text */}
        <div className="flex flex-col gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-5 text-neutral-500 leading-relaxed"
          >
            <p className="text-xl font-medium text-neutral-900 leading-snug">
              Good software is invisible. Users don&apos;t notice the interface —
              they just accomplish what they came to do.
            </p>
            <p>
              For the past 4 years at Zymebalanz, I&apos;ve owned the entire frontend across
              a three-platform healthcare logistics ecosystem — patient web app, phlebotomist
              field app, internal operations portal. Two built from scratch, one rebuilt from
              the ground up. Every one in production, used daily.
            </p>
            <p>
              My process usually starts before any code is written. I join requirements meetings
              with the manager, draft an initial prototype in Figma, hand it to the designer to
              refine, then review and discuss it together before we present to stakeholders. I
              hold a Google UX Design certificate not because I want to be a designer, but because
              I believe the best frontend engineers think in user intentions, not component trees.
            </p>
            <p>
              I&apos;m looking for a team that argues about the right abstraction and the right
              interaction in the same breath — where shipping something isn&apos;t just technically
              correct, but genuinely better for the person using it.
            </p>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col gap-4 pt-8 border-t border-neutral-100"
          >
            {timeline.map(({ year, role, company, note }) => (
              <div key={role} className="flex gap-6">
                <span className="text-xs text-neutral-400 w-24 shrink-0 pt-0.5 tabular-nums">{year}</span>
                <div>
                  <p className="text-sm font-medium text-neutral-800">{role}</p>
                  <p className="text-sm text-neutral-400">{company}</p>
                  {note && <p className="text-xs text-neutral-400 mt-0.5">{note}</p>}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: skills grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {skills.map(({ category, items }) => (
            <div key={category} className="flex flex-col gap-3">
              <p className="text-xs font-medium text-neutral-400 tracking-widest uppercase">{category}</p>
              <ul className="flex flex-col gap-1.5">
                {items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-neutral-600">
                    <span className="w-1 h-1 rounded-full bg-neutral-300 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
