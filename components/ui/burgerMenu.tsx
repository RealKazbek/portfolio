import React from "react";

type BurgerMenuProps = {
  isOpen: boolean;
  toggleMenu: () => void;
};

function BurgerMenu({ isOpen, toggleMenu }: BurgerMenuProps) {
  return (
    <button
      onClick={toggleMenu}
      className="lg:hidden w-10 h-10 flex flex-col items-center justify-center relative"
    >
      <span
        className={`block h-1 w-7 rounded bg-[var(--gray)] absolute transition-all duration-300 
          ${isOpen ? "rotate-45 top-1/2" : "-translate-y-2"}`}
      ></span>
      <span
        className={`block h-1 w-7 rounded bg-[var(--gray)] transition-all duration-300 
          ${isOpen ? "opacity-0" : "opacity-100"}`}
      ></span>
      <span
        className={`block h-1 w-7 rounded bg-[var(--gray)] absolute transition-all duration-300 
          ${isOpen ? "-rotate-45 top-1/2" : "translate-y-2"}`}
      ></span>
    </button>
  );
}

export default BurgerMenu;
