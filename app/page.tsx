import AboutMe from "@/components/AboutMe";
import Contacts from "@/components/Contacts";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Quote from "@/components/ui/quote";

import { projects } from "@/data";

export default function Home() {
  return (
    <>
      <Hero />
      <Quote />
      <Projects projects={projects} withTitle minimal />
      <Skills />
      <AboutMe />
      <Contacts />
    </>
  );
}
