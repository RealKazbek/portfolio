import React from "react";
import ProjectCard from "./ui/projectCard";
import SectionTitle from "./ui/sectionTitle";

interface ButtonItem {
  href: string;
  text: string;
  variant: "default" | "secondary" | null | undefined;
}

interface ProjectCardProps {
  img?: string;
  stacks: Array<string>;
  title: string;
  description: string;
  buttons: Array<ButtonItem>;
}

interface ProjectsProps {
  projects: ProjectCardProps[];
  withTitle?: boolean;
  minimal?: boolean;
}

function Projects({ projects, withTitle, minimal }: ProjectsProps) {
  const show = minimal ? projects.slice(0, 4) : projects;

  return (
    <div className="flex flex-col gap-4 lg:gap-8">
      {withTitle && (
        <SectionTitle title="projects" link="/projects" maxWidth={500} />
      )}

      <div
        className={`grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-start ${
          withTitle ? "" : "mt-8"
        }`}
      >
        {show.map((item, index) => (
          <ProjectCard
            key={index}
            img={item.img}
            stacks={item.stacks}
            title={item.title}
            description={item.description}
            buttons={item.buttons}
            className={` ${
              index === 3 && minimal ? "hidden md:block lg:hidden" : ""
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
