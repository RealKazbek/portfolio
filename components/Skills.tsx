import React from "react";
import SectionTitle from "./ui/sectionTitle";
import SkillsCard from "./ui/skillsCard";
import { skillsContent } from "@/data";
import Dots from "./ui/decoration/dots";
import Rectangle from "./ui/decoration/rectangle";
import Image from "next/image";

function Skills() {
  return (
    <div className="flex flex-col justify-center gap-4">
      <SectionTitle title="skills" maxWidth={200} />

      <div className="flex w-full">
        <div className="relative w-0 hidden md:flex md:w-1/3">
          <Dots className="top-7 left-3" />
          <Rectangle className="right-9 top-1" width={75} height={75} />
          <Image
            src={"/images/icons/logooutline.svg"}
            alt=""
            width={99}
            height={99}
            className="absolute top-31 left-32"
          />
          <Dots className="bottom-23 right-13" />
          <Rectangle className="left-3 bottom-27" width={145} height={145} />
        </div>

        <div className="grid w-full md:w-2/3 gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start">
          {skillsContent.map((item, index) => (
            <SkillsCard key={index} stack={item.stack} skills={item.skills} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
