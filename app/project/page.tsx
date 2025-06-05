import Projects from "@/components/Projects";
import PageTitle from "@/components/ui/pageTitle";
import SectionTitle from "@/components/ui/sectionTitle";
import { projects, smallProjects } from "@/data";

export default function Project() {
  return (
    <div>
      <PageTitle title="projects" subTitle="List of my projects" />

      <section className="mb-20">
        <SectionTitle title="complete-apps" maxWidth={0} />

        <Projects projects={projects} />
      </section>

      <section className="mb-30">
        <SectionTitle title="small-projects" maxWidth={0} />

        <Projects projects={smallProjects} />
      </section>
    </div>
  );
}
