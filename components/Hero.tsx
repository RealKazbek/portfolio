import { headerContent } from "@/data";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import Dots from "./ui/decoration/dots";

function Hero() {
  return (
    <section className="flex my-15 h-106">
      {/* Content */}
      <div className="flex flex-col justify-center items-start w-1/2">
        <h1 className="text-3xl text-white font-semibold leading-[156%]">
          {headerContent.title.default}
          <span className="text-[var(--primary)]">{headerContent.title.highlight}</span>
        </h1>

        <p className="mt-8 mb-6">{headerContent.subtitle}</p>

        <Link href={headerContent.ctaButton.link} tabIndex={-1}>
          <Button>{headerContent.ctaButton.text}</Button>
        </Link>
      </div>

      {/* Images */}
      <div className="flex flex-col justify-center items-center w-1/2">
        <div className="relative w-full border-b-2 border-[var(--primary)]">
          <Image
            src="/images/hero.png"
            alt=""
            width={457}
            height={386}
            className="z-15 w-full"
          />
          <Dots className="bottom-25 right-10" size={8} />
          <Image
            src={"/images/icons/logooutline.svg"}
            alt=""
            width={155}
            height={155}
            className="z-10 absolute top-25 left-15"
          />
        </div>
        <div className="border border-t-0 p-2 flex items-center gap-2 z-40 bg-[var(--color-background)]">
          <span className="w-4 h-4 border border-[var(--primary)] bg-[rgba(199,120,221,0.3)]"></span>
          <p>{headerContent.status}</p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
