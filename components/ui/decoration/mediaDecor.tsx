import { developerInfo } from "@/data";
import Link from "next/link";
import React from "react";

function MediaDecor() {
  return (
    <div className="fixed hidden min-[1130px]:flex flex-col items-center justify-center z-150 top-0 left-5 gap-3">
      <span className="w-0.5 h-50 bg-[var(--gray)]"></span>
      {developerInfo.socialLinks.map((item, index) => (
        <Link key={index} href={item.url}>
          <item.icon />
        </Link>
      ))}
    </div>
  );
}

export default MediaDecor;
