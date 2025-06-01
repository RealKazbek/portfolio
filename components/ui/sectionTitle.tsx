import Link from "next/link";
import React from "react";

interface SectionTitle {
  title: string;
  width?: number;
  link?: string;
}

function SectionTitle({ title, width = 500, link }: SectionTitle) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center text-3xl font-medium">
        <span className="text-[var(--primary)]">#</span>
        <span className="text-white">{title}</span>
        <span
          className="h-0.5 bg-[var(--primary)] ml-4"
          style={{ width: width }}
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
