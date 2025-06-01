import Image from "next/image";
import React from "react";
import { Button } from "./button";
import Link from "next/link";

interface ButtonItem {
  href: string;
  text: string;
  variant: "default" | "secondary" | null | undefined;
}

interface ProjectCard {
  img: string;
  stacks: Array<string>;
  title: string;
  description: string;
  buttons: Array<ButtonItem>;
}

function ProjectCard({
  img,
  stacks,
  title,
  description,
  buttons,
}: ProjectCard) {
  return (
    <div className="border border-[var(--gray)]">
      <Image src={img} alt={title} width={150} height={150} className="" />

      <span className="border-y-1 border-[var(--gray)] p-2 flex flex-wrap gap-2">
        {stacks.map((item, index) => (
          <span key={index}>{item}</span>
        ))}
      </span>

      <div className="flex flex-col gap-4 m-4">
        <h3 className="font-medium text-white text-2xl">{title}</h3>
        <p>{description}</p>
        <div className="flex flex-wrap gap-4">
          {buttons.map((item, index) => (
            <Link key={index} href={item.href}>
              <Button variant={item.variant}>{item.text}</Button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
