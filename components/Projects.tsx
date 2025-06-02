import React from "react";
import { projects } from "@/data";
import ProjectCard from "./ui/projectCard";
import SectionTitle from "./ui/sectionTitle";

function Projects() {
  return (
    <div className="flex flex-col gap-4 lg:gap-8 mb-12">
      <SectionTitle title="projects" link="/projects" />

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-start">
        {projects.map((item, index) => (
          <ProjectCard
            key={index}
            img={item.img}
            stacks={item.stacks}
            title={item.title}
            description={item.description}
            buttons={item.buttons}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
