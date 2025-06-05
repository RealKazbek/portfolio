import AboutMe from "@/components/AboutMe";
import Skills from "@/components/Skills";
import FunFacts from "@/components/ui/funFacts";
import PageTitle from "@/components/ui/pageTitle";
import SectionTitle from "@/components/ui/sectionTitle";

export default function About() {
  return (
    <>
      <PageTitle title="about-me" subTitle="Who am i?" />

      <AboutMe />

      <section className="mt-28 flex flex-col gap-12">
        <SectionTitle title="skills" maxWidth={0} />

        <Skills />
      </section>

      <section className="mt-20 flex flex-col gap-5 mb-40">
        <SectionTitle title="my-fun-facts" maxWidth={0} />

        <FunFacts />
      </section>
    </>
  );
}
