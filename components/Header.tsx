"use client";

import React, { useState } from "react";

import { navigation } from "@/data";
import HeaderLink from "./ui/headerLink";
import SwitcherLang from "./ui/switcherLang";
import BurgerMenu from "./ui/burgerMenu";
import Logo from "./ui/logo";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 mx-4 px-0 lg:px-4 lg:mx-auto lg:w-full max-w-5xl bg-[var(--color-background)] pt-4 lg:pt-6 pb-2">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Logo responsive />

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          <nav>
            <ul className="flex items-center gap-8">
              {navigation.map((item) => (
                <li key={item.path}>
                  <HeaderLink href={item.path}>{item.title}</HeaderLink>
                </li>
              ))}
            </ul>
          </nav>

          <SwitcherLang desktop />
        </div>

        {/* Mobile burger */}
        <BurgerMenu isOpen={isOpen} toggleMenu={toggleMenu} />
      </div>

      {/* Mobile menu */}
      {/* {isOpen && (
        <div className="flex flex-col mt-5 lg:hidden max-w-5xl mx-auto">
          <nav>
            <ul className="flex flex-col gap-8">
              {navigation.map((item) => (
                <li key={item.path}>
                  <HeaderLink href={item.path} className="text-3xl">
                    {item.title}
                  </HeaderLink>
                </li>
              ))}
            </ul>
          </nav>

          <SwitcherLang />

          <div className="flex justify-center items-center gap-4 h-16 mt-6">
            {developerInfo.socialLinks.map((item, index) => (
              <Link href={item.url} key={index}>
                <item.icon size={16} />
              </Link>
            ))}
          </div>
        </div>
      )} */}
    </header>
  );
}

export default Header;
