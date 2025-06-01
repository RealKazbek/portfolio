"use client";

import Link from "next/link";
import React from "react";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";

interface HeaderLink extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  className?: string;
  children: ReactNode;
}

function HeaderLink({ href, children, className, ...props }: HeaderLink) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`transition-all ${
        isActive
          ? "text-white font-medium"
          : "text-[var(--gray)] hover:text-white"
      } ${className}`}
      {...props}
    >
      <span className="text-[var(--primary)]">#</span>
      {children}
    </Link>
  );
}

export default HeaderLink;
