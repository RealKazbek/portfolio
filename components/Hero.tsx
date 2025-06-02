import { headerContent } from "@/data";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import Dots from "./ui/decoration/dots";

function Hero() {
  return (
    <section className="flex flex-col items-center sm:flex-row min-h-50 mt-0 mb-15 sm:mt-15 gap-8">
      {/* Content */}
      <div className="flex flex-col justify-center items-start w-full min-h-50 sm:w-1/2">
        <h1 className="text-3xl text-white font-semibold leading-[156%]">
          {headerContent.title.default}
          <span className="text-[var(--primary)]">
            {headerContent.title.highlight}
          </span>
        </h1>

        <p className="my-8">{headerContent.subtitle}</p>

        <Link href={headerContent.ctaButton.link} tabIndex={-1}>
          <Button>{headerContent.ctaButton.text}</Button>
        </Link>
      </div>

      {/* Images */}
      <div className="flex flex-col items-center justify-end w-full h-full min-h-50 sm:w-1/2">
        <div className="relative h-full border-b border-[var(--primary)]">
          <Image
            src={"/images/icons/logooutline.svg"}
            alt=""
            width={155}
            height={155}
            className="absolute -z-1 top-7 left-3"
          />
          <Dots className="bottom-20 right-15" size={7} gap={10} />
          <Image
            src={"/images/sections/hero.png"}
            alt=""
            width={443}
            height={379}
          />
        </div>

        <div className="flex items-center gap-2 border border-t-0 border-[var(--gray)] p-2">
          <span className="w-4 h-4 border border-[var(--primary)] bg-[rgba(199,120,221,0.3)]"></span>
          <span className="text-white">{headerContent.status}</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
