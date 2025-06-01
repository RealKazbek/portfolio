"use client";

import { ChevronDown } from "lucide-react";
import React, { useState } from "react";

const languages = [{ code: "KZ" }, { code: "EN" }, { code: "RU" }];

function SwitcherLang({ desktop, ...props }: { desktop?: boolean }) {
  const [selectedLang, setSelectedLang] = useState("KZ");
  const [open, setOpen] = useState(false);

  const handleSelect = (code: string) => {
    setSelectedLang(code);
    setOpen(false);
  };

  return (
    <div
      className="relative inline-block text-left text-[var(--gray)]"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onClick={() => setOpen(!open)}
    >
      <button
        className={`flex items-center justify-center gap-1 bg-transparent ${
          open ? "text-white" : ""
        } ${desktop ? "" : "text-3xl"}`}
      >
        {selectedLang}
        <ChevronDown
          size={`${desktop ? 18 : 30}`}
          className={`transition-transform duration-300 ${
            open ? "rotate-180 text-white" : ""
          }`}
        />
      </button>

      {open && (
        <div className="absolute z-10 w-full border">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleSelect(lang.code)}
              className={`${
                desktop ? "" : "text-3xl"
              } block w-full text-center px-2 py-1 hover:text-white ${
                selectedLang === lang.code ? "font-semibold text-white" : ""
              }`}
              {...props}
            >
              {lang.code}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default SwitcherLang;
