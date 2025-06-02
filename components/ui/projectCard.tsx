import Image from "next/image";
import React from "react";
import { Button } from "./button";
import Link from "next/link";

interface ButtonItem {
  href: string;
  text: string;
  variant: "default" | "secondary" | null | undefined;
}

interface ProjectCardProps {
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
  ...props
}: ProjectCardProps) {
  return (
    <div className="border border-[var(--gray)] overflow-hidden" {...props}>
      <Image
        src={img}
        alt={title}
        width={600}
        height={300}
        className="w-full h-auto object-cover"
      />

      <div className="border-y border-[var(--gray)] px-4 py-2 flex flex-wrap gap-2 text-sm text-gray-300">
        {stacks.map((item, index) => (
          <span key={index} className="bg-white/10 px-2 py-1">
            {item}
          </span>
        ))}
      </div>

      <div className="flex flex-col gap-4 p-4">
        <h3 className="font-semibold text-white text-xl">{title}</h3>
        <p className="text-gray-400 text-sm">{description}</p>
        <div className="flex flex-wrap gap-3">
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
