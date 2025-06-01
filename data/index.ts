import { GitHub } from "@/components/ui/icons/github";
import { Telegram } from "@/components/ui/icons/telegram";
import { Instagram } from "@/components/ui/icons/instagram";

export const info = {
  currentYear: "2025",
};

// Советую только три
export const socialNetwork = [
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
  socialNetwork,
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

export const header = {
  title: {
    default: "Elias is a ",
    primary: "web designer & front-end developer",
  },
  description:
    "He crafts responsive websites where technologies meet creativity",
  button: {
    text: "Contact me!!",
    link: "/",
  },
  textSubImage: "Currently working on Portfolio",
};

export const footer = {
  name: developerInfo.name,
  mail: developerInfo.mail,
  footerAbout: "Web designer and front-end developer",
  socialNetwork,
  copyRight: `© Copyright ${info.currentYear}. Made by ${developerInfo.name}`,
};

export const quote = {
  quote: "With great power comes great electricity bill",
  author: "Dr. Who",
};
