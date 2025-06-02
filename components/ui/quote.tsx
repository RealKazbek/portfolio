import { featuredQuote } from "@/data";
import React from "react";

function Quote() {
  return (
    <div className="w-full flex justify-center items-center mb-16">
      <div className="flex flex-col justify-center items-end">
        <blockquote className="relative text-white border border-[var(--gray)] font-medium p-8 text-2xl">
          <span className="absolute text-7xl text-[var(--gray)] left-3 -top-4 select-none h-[20%] bg-[var(--color-background)]">
            {'"'}
          </span>
          {featuredQuote.text}
          <span className="absolute text-7xl text-[var(--gray)] right-3 -bottom-1 select-none h-[20%] bg-[var(--color-background)]">
            {'"'}
          </span>
        </blockquote>
        <p className="border border-[var(--gray)] border-t-0 p-2 text-right text-lg">
          – {featuredQuote.author}
        </p>
      </div>
    </div>
  );
}

export default Quote;
