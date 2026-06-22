"use client";

import { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Work", href: "/#work", section: "work" },
  { label: "About", href: "/#about", section: "about" },
  { label: "Resume", href: "/resume", section: null },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const { scrollY } = useScroll();
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const unsub = scrollY.on("change", (v) => setScrolled(v > 40));
    return unsub;
  }, [scrollY]);

  // Track which section is in view
  useEffect(() => {
    if (!isHome) return;

    const sections = ["work", "about"];
    const observers: IntersectionObserver[] = [];

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });

    // Clear active when near the top
    const topObs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setActiveSection(null); },
      { rootMargin: "0px 0px -90% 0px" }
    );
    const hero = document.querySelector("main > section");
    if (hero) topObs.observe(hero);

    return () => {
      observers.forEach((o) => o.disconnect());
      topObs.disconnect();
    };
  }, [isHome]);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md border-b border-neutral-100 shadow-sm"
          : "bg-transparent"
      }`}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.8 }}
    >
      <nav className="max-w-5xl mx-auto px-6 md:px-12 lg:px-24 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-base font-semibold text-neutral-900 tracking-tight hover:text-neutral-500 transition-colors duration-200"
        >
          Zeyu Cheng
        </Link>

        {/* Links */}
        <ul className="flex items-center gap-8">
          {navLinks.map(({ label, href, section }) => {
            const isActive = isHome && section && activeSection === section;
            const handleClick = (e: React.MouseEvent) => {
              if (!section) return;
              e.preventDefault();
              if (isHome) {
                document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
              } else {
                window.location.href = href;
              }
            };
            return (
              <li key={label} className="relative">
                <Link
                  href={href}
                  onClick={handleClick}
                  className={`text-base transition-colors duration-200 ${
                    isActive
                      ? "text-neutral-900 font-medium"
                      : "text-neutral-500 hover:text-neutral-900"
                  }`}
                >
                  {label}
                </Link>
                {isActive && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute -bottom-[18px] left-0 right-0 h-px bg-neutral-900"
                    transition={{ type: "spring", stiffness: 400, damping: 35 }}
                  />
                )}
              </li>
            );
          })}
          <li>
            <Link
              href="mailto:zeyu.cheng@outlook.com"
              className="text-base font-medium px-5 py-1.5 rounded-full border border-neutral-200 text-neutral-700 hover:border-neutral-900 hover:text-neutral-900 transition-all duration-200"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </motion.header>
  );
}
