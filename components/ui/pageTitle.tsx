import React from "react";

interface PageTitleProps {
  title: string;
  subTitle: string;
}

function PageTitle({ title, subTitle }: PageTitleProps) {
  return (
    <div className="flex flex-col justify-center text-white gap-3 my-15">
      <div className="font-semibold text-3xl">
        <span className="text-[var(--primary)]">/</span>
        <span>{title}</span>
      </div>
      <span>{subTitle}</span>
    </div>
  );
}

export default PageTitle;
