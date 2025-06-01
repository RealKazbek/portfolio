import React from "react";

type BurgerMenuProps = {
  isOpen: boolean;
  toggleMenu: () => void;
};

function BurgerMenu({ isOpen, toggleMenu }: BurgerMenuProps) {
  return (
    <button
      onClick={() => toggleMenu()}
      className={`md:hidden w-10 h-10 flex flex-col items-center justify-center gap-2 transition-transform duration-500 ${
        isOpen ? "rotate-180" : ""
      }`}
    >
      <span
        className={`block h-1 rounded bg-[var(--gray)] transition-all duration-500 ${
          isOpen ? "absolute rotate-45 w-full" : "w-[70%]"
        }`}
      ></span>
      <span
        className={`block h-1 w-full rounded bg-[var(--gray)] transition-all duration-500 ${
          isOpen ? "scale-x-0" : "scale-x-100"
        }`}
      ></span>
      <span
        className={`block h-1 rounded bg-[var(--gray)] transition-all duration-500 ${
          isOpen ? "absolute -rotate-45 w-full" : "w-[70%]"
        }`}
      ></span>
    </button>
  );
}

export default BurgerMenu;
