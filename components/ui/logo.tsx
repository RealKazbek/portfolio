"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { developerInfo } from "@/data";

function Logo({ responsive }: { responsive?: boolean }) {
  const pathname = usePathname();
  const isActive = pathname === "/";

  return (
    <Link
      href="/"
      className={`flex items-center ${
        responsive ? "gap-3" : "gap-2"
      } lg:gap-2 text-[var(--gray)] ${
        isActive ? "text-white" : "hover:text-white"
      }`}
    >
      <Image
        src="/images/icons/logodefault.svg"
        alt="Site logo"
        width={24}
        height={24}
        className={`${responsive ? "h-6 w-6" : "h-4 w-4"} lg:h-4 lg:w-4`}
      />
      <h3
        className={`font-bold ${
          responsive ? "text-2xl" : "text-base"
        } lg:text-base`}
      >
        {developerInfo.name}
      </h3>
    </Link>
  );
}

export default Logo;
