"use client";

import React, { useState } from "react";

import { navList, socialNetwork } from "@/data";
import HeaderLink from "./ui/headerLink";
import SwitcherLang from "./ui/switcherLang";
import BurgerMenu from "./ui/burgerMenu";
import Logo from "./ui/logo";
import Link from "next/link";

// ! TODO FOOTER, OPEN ANIMATE AND FIX BURGER MENU ANIMATION

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header
      className={`${
        isOpen ? "h-full" : ""
      } fixed left-0 right-0 top-0 px-[15%] pt-4 md:pt-8 pb-2 items-center bg-[var(--color-background)] z-50`}
    >
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Logo responsive />

        {/* Desktop menu */}
        <div className="items-center gap-8 hidden md:flex">
          <nav>
            <ul className="flex items-center gap-8">
              {navList.map((item, index) => (
                <li key={index}>
                  <HeaderLink href={item.path}>{item.title}</HeaderLink>
                </li>
              ))}
            </ul>
          </nav>

          <SwitcherLang desktop />
        </div>

        {/* Mobile Toggle Button */}
        <BurgerMenu isOpen={isOpen} toggleMenu={toggleMenu} />
      </div>

      {isOpen && (
        <div className={`flex md:hidden flex-col mt-5`}>
          <div className="flex flex-col items-start gap-8">
            <nav>
              <ul className="flex flex-col justify-center gap-8">
                {navList.map((item, index) => (
                  <li key={index}>
                    <HeaderLink href={item.path} className="text-3xl">
                      {item.title}
                    </HeaderLink>
                  </li>
                ))}
              </ul>
            </nav>

            <SwitcherLang />
          </div>

          <div className="flex justify-center items-center gap-4 h-16 mt-15">
            {socialNetwork.map((item, index) => (
              <Link href={item.link} key={index}>
                <item.icon size={16} />
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
