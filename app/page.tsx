import ProjectCard from "@/components/ui/projectCard";
import SectionTitle from "@/components/ui/sectionTitle";

export default function Home() {
  return (
    <div>
      <SectionTitle title="Lorem" link="/home" />
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni reiciendis
      doloremque quam, aperiam debitis laborum illum delectus vel laudantium
      perspiciatis quia consequatur nihil sequi eveniet inventore neque dolorem
      recusandae qui accusamus molestias. Hic velit enim voluptatum totam, nisi
      ad in eveniet repellat tempore corporis delectus vel nobis, iste ullam
      ratione odit sapiente exercitationem corrupti nam maxime! Et ea adipisci
      accusantium natus cum in. Perspiciatis voluptate quod, accusamus rem fugit
      dolor expedita inventore dignissimos, a ad et dicta, iure quas? Explicabo
      fugit ab nam eius harum et libero quibusdam magnam inventore distinctio
      nisi omnis, quos sequi magni ratione aspernatur aliquam, aut blanditiis.
      Quod sequi enim explicabo ipsum ea doloremque adipisci soluta modi
      consequatur obcaecati porro consectetur sed animi facilis nam,
      exercitationem facere aliquid commodi nisi aut voluptatibus cumque
      corrupti? Rem odit sapiente, facilis nihil aut quisquam eaque impedit
      dicta? Consectetur qui cupiditate ipsa molestias cum cumque nemo quasi
      unde eius quos!
      <ProjectCard
        img="/images/icons/x.svg"
        stacks={["html", "css"]}
        title="html"
        description="title"
        buttons={[{ href: "href", text: "text", variant: "default" }, { href: "href", text: "text <~>", variant: "secondary" }]}
      />
    </div>
  );
}
