"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
}

export function Button({ href, children, variant = "primary" }: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium tracking-wide transition-all duration-300";
  const styles = {
    primary: "bg-neutral-900 text-white hover:bg-neutral-700",
    ghost:
      "border border-neutral-300 text-neutral-700 hover:border-neutral-900 hover:text-neutral-900",
  };

  const handleClick = (e: React.MouseEvent) => {
    if (href.startsWith("/#")) {
      e.preventDefault();
      document.getElementById(href.slice(2))?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
      <Link href={href} onClick={handleClick} className={`${base} ${styles[variant]} group`}>
        {children}
        <ArrowRight
          size={14}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </Link>
    </motion.div>
  );
}
