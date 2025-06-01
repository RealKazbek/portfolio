import { socialNetwork } from "@/data";
import Link from "next/link";
import React from "react";

function MediaDecor() {
  return (
    <div className="fixed hidden md:flex flex-col items-center justify-center z-150 top-0 left-10 gap-3">
      <span className="w-0.5 h-50 bg-[var(--gray)]"></span>
      {socialNetwork.map((item, index) => (
        <Link key={index} href={item.link}>
          <item.icon />
        </Link>
      ))}
    </div>
  );
}

export default MediaDecor;
