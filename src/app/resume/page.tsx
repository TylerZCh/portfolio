"use client";

import { ArrowLeft, Download } from "lucide-react";
import Link from "next/link";

export default function ResumePage() {
  return (
    <main className="min-h-screen flex flex-col pt-16">
      {/* Toolbar */}
      <div className="sticky top-16 z-40 bg-white/80 backdrop-blur-md border-b border-neutral-100 px-6 md:px-12 h-12 flex items-center justify-between">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors duration-200 group"
        >
          <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-0.5" />
          Back
        </Link>

        <a
          href="/resume_ZeyuCheng.pdf"
          download
          className="inline-flex items-center gap-2 text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors duration-200"
        >
          <Download size={14} />
          Download PDF
        </a>
      </div>

      {/* PDF embed */}
      <div className="flex-1 bg-neutral-100 flex justify-center py-8 px-4">
        <div className="w-full max-w-5xl shadow-lg rounded-lg overflow-hidden">
          <iframe
            src="/resume_ZeyuCheng.pdf"
            className="w-full h-[calc(100vh-8rem)]"
            title="Zeyu Cheng — Resume"
          />
        </div>
      </div>
    </main>
  );
}
