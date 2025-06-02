import { GitHub } from "@/components/ui/icons/github";
import { Telegram } from "@/components/ui/icons/telegram";
import { Instagram } from "@/components/ui/icons/instagram";

// ========== Developer Info ==========
export const developerInfo = {
  name: "Kazbek",
  email: "37765@iitu.edu.kz",
  role: "Front-end Developer",
  socialLinks: [
    { icon: GitHub, url: "https://github.com/RealKazbek" },
    { icon: Telegram, url: "https://t.me/RealKazbek" },
    { icon: Instagram, url: "https://www.instagram.com/realkazbek" },
  ],
};

// ========== Site Info ==========
export const siteInfo = {
  title: developerInfo.name,
  description: `Personal portfolio of ${
    developerInfo.name
  } — ${developerInfo.role.toLowerCase()}.`,
  currentYear: new Date().getFullYear(),
};

// ========== Navigation ==========
export const navigation = [
  { title: "Home", path: "/" },
  { title: "Projects", path: "/project" },
  { title: "About Me", path: "/about" },
  { title: "Contacts", path: "/contact" },
];

// ========== Header ==========
export const headerContent = {
  title: {
    default: "Elias is a ",
    highlight: "web designer & front-end developer",
  },
  subtitle: "He crafts responsive websites where technologies meet creativity",
  ctaButton: {
    text: "Contact me!",
    link: "/",
  },
  status: "Currently working on Portfolio",
};

// ========== Footer ==========
export const footerContent = {
  author: developerInfo.name,
  email: developerInfo.email,
  description: "Web designer and front-end developer",
  socialLinks: developerInfo.socialLinks,
  copyright: `© ${siteInfo.currentYear} — Made by ${developerInfo.name}`,
};

// ========== Fun Quote ==========
export const featuredQuote = {
  text: "With great power comes great electricity bill",
  author: "Dr. Who",
};
