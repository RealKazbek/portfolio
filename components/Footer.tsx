import React from "react";
import { footer } from "@/data";
import Logo from "./ui/logo";
import Link from "next/link";

function Footer() {
  return (
    <footer className="flex flex-col gap-12 pt-8 pb-4 px-[15%] border-t-1 border-[var(--gray)]">
      <div className="flex justify-between">
        <div className="flex flex-col gap-4">
          <div className="flex gap-6">
            <Logo />
            <Link
              href={`mailto:${footer.mail}`}
              className="hover:text-white transition-all"
            >
              {footer.mail}
            </Link>
          </div>
          <p className="text-white">{footer.footerAbout}</p>
        </div>

        <div className="flex flex-col gap-3">
          <p className="text-white">Media</p>
          <div className="flex gap-2 h-8">
            {footer.socialNetwork.map((item, index) => (
              <Link href={item.link} key={index}>
                <item.icon />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center">{footer.copyRight}</div>
    </footer>
  );
}

export default Footer;
