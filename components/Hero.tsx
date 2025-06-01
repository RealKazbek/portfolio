import { header } from "@/data";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";

function Hero() {
  return (
    <section className="flex my-15 h-106">
      {/* Content */}
      <div className="flex flex-col justify-center">
        <h1 className="text-3xl text-white font-semibold">
          {header.title.default}
          <span className="text-[var(--primary)]">{header.title.primary}</span>
        </h1>

        <p className="mt-8 mb-6">{header.description}</p>

        <Link href={header.button.link}>
          <Button>{header.button.text}</Button>
        </Link>
      </div>

      {/* Images */}
      <div className="flex flex-col justify-center items-center w-full">
        <Image
          src={"/images/hero.png"}
          alt=""
          width={350}
          height={250}
          className="object-contain"
        />
        <div className="border p-2 flex items-center gap-2 z-40 bg-[var(--color-background)]">
          <span className="w-4 h-4 border border-[var(--primary)] bg-[rgba(199,120,221,0.3)]"></span>
          <p>{header.textSubImage}</p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
