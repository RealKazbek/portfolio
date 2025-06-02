import Link from "next/link";
import React from "react";

interface SectionTitle {
  title: string;
  maxWidth?: number;
  link?: string;
}

function SectionTitle({ title, maxWidth = 300, link }: SectionTitle) {
  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex items-center text-3xl font-medium flex-1">
        <span className="text-[var(--primary)]">#</span>
        <span className="text-white">{title}</span>
        <span
          className="h-px bg-[var(--primary)] mx-4 w-0 sm:w-full"
          style={{ maxWidth }}
        ></span>
      </div>

      {link && (
        <Link
          href={link}
          className="text-white hover:text-[var(--primary)] transition-all"
        >
          {"View All ~~>"}
        </Link>
      )}
    </div>
  );
}

export default SectionTitle;
