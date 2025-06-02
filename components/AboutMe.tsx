import React from "react";
import SectionTitle from "./ui/sectionTitle";
import { aboutContent } from "@/data";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import Dots from "./ui/decoration/dots";

function AboutMe() {
  return (
    <div className="flex flex-col justify-center gap-4 lg:gap-8">
      <SectionTitle title="about-me" maxWidth={150} />

      <div className="flex w-full justify-between items-center gap-15">
        <div className="flex flex-col gap-5 w-full flex-1 leading-[156%]">
          {aboutContent.message.split("\n").map((line, i) => (
            <p key={i}>{line}</p>
          ))}
          <Link href={"/contacts"}>
            <Button>{"Read More ->"}</Button>
          </Link>
        </div>

        <div className="hidden md:flex">
          <div className="relative flex h-full border-b border-[var(--primary)]">
            <Image
              src={"/images/icons/logooutline.svg"}
              alt=""
              width={155}
              height={155}
              className="absolute -z-1 top-7 left-3"
            />
            <Dots className="bottom-20 right-15" size={7} gap={10} />
            <Image
              src={"/images/sections/about.png"}
              alt=""
              width={339}
              height={507}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
