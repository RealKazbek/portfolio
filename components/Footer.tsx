import React from "react";
import { footerContent } from "@/data";
import Logo from "./ui/logo";
import Link from "next/link";

function Footer() {
  return (
    <footer className="pt-8 w-full pb-4 border-t-1 border-[var(--gray)]">
      <div className="flex flex-col gap-12 lg:w-full max-w-5xl mx-4 px-0 lg:px-4 lg:mx-auto ">
        <div className="flex justify-between">
          <div className="flex flex-col gap-4">
            <div className="flex gap-6">
              <Logo />
              <Link
                href={`mailto:${footerContent.email}`}
                className="hover:text-white transition-all"
              >
                {footerContent.email}
              </Link>
            </div>
            <p className="text-white">{footerContent.description}</p>
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-white">Media</p>
            <div className="flex gap-2 h-8">
              {footerContent.socialLinks.map((item, index) => (
                <Link href={item.url} key={index}>
                  <item.icon />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center">
          {footerContent.copyright}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
