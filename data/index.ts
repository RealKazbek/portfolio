import { GitHub } from "@/components/ui/icons/github";
import { Telegram } from "@/components/ui/icons/telegram";
import { Instagram } from "@/components/ui/icons/instagram";

export const info = {
  currentYear: "2025",
};

export const threeSocialNetwork = [
  {
    icon: GitHub,
    link: "https://github.com/RealKazbek",
  },
  {
    icon: Telegram,
    link: "https://t.me/RealKazbek",
  },
  {
    icon: Instagram,
    link: "https://www.instagram.com/realkazbek",
  },
];

export const developerInfo = {
  name: "Kazbek",
  mail: "37765@iitu.edu.kz",
  threeSocialNetwork,
};

export const navList = [
  {
    title: "home",
    path: "/",
  },
  {
    title: "projects",
    path: "/project",
  },
  {
    title: "about-me",
    path: "/about",
  },
  {
    title: "contacts",
    path: "/contact",
  },
];

export const footer = {
  name: developerInfo.name,
  mail: developerInfo.mail,
  footerAbout: "Web designer and front-end developer",
  threeSocialNetwork,
  copyRight: `© Copyright ${info.currentYear}. Made by ${developerInfo.name}`,
};
