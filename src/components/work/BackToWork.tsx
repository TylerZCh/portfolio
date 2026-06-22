import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export function BackToWork() {
  return (
    <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-24 py-16 border-t border-neutral-100 flex justify-between items-center">
      <Link
        href="/#work"
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-neutral-200 text-sm font-medium text-neutral-600 hover:border-neutral-900 hover:text-neutral-900 transition-all duration-200 group"
      >
        <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-0.5" />
        Back to all work
      </Link>
    </div>
  );
}
