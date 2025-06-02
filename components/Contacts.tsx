import React from "react";
import SectionTitle from "./ui/sectionTitle";
import { contactContent } from "@/data";
import Link from "next/link";

function Contacts() {
  return (
    <div className="flex flex-col gap-4 lg:gap-8">
      <SectionTitle title="contacts" maxWidth={350} />

      <div className="flex flex-col sm:flex-row justify-between gap-6 sm:gap-30 items-start">
        <p>{contactContent.hobby}</p>

        <div className="flex flex-col border border-[var(--gray)] p-4 gap-2">
          <span className="font-semibold text-white">Message me here</span>
          <div className="flex flex-col gap-2">
            {contactContent.contact.map((item, index) => (
              <Link
                href={item.url}
                key={index}
                className="flex items-center gap-2 hover:text-white transition-all"
              >
                <item.icon size={8} />
                <span>{item.text}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
