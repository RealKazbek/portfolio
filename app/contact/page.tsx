import Contacts from "@/components/Contacts";
import PageTitle from "@/components/ui/pageTitle";
import SectionTitle from "@/components/ui/sectionTitle";
import { developerInfo } from "@/data";
import Link from "next/link";

export default function contact() {
  return (
    <>
      <PageTitle title="contacts" subTitle="Who am i?" />

      <Contacts />

      <section className="flex flex-col justify-center gap-5 mt-5">
        <SectionTitle title="all-media" maxWidth={0} />

        <div className="flex flex-wrap gap-5">
          {developerInfo.socialLinks.map((item, index) => (
            <Link
              key={index}
              href={item.url}
              className="flex items-center gap-2 hover:text-white hover:fill-white"
            >
              <item.icon />
              <span>{item.title}</span>
            </Link>
          ))}
        </div>
      </section>
    </> 
  );
}
