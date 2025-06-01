import Link from "next/link";
import React from "react";
import { ReactNode } from "react";

interface MediaProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: ReactNode;
}

function Media({ href, children, ...props }: MediaProps) {
  return (
    <Link
      href={href}
      {...props}
      className="flex gap-[5px] text-[var(--gray)] fill-[var(--gray)] hover:text-white hover:fill-white transition-all"
    >
      {children}
    </Link>
  );
}

export default Media;
