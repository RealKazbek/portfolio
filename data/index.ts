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
    highlight: "web designer and front-end developer",
  },
  subtitle: "He crafts responsive websites where technologies meet creativity",
  ctaButton: {
    text: "Contact ME =>",
    link: "/",
  },
  status: "Currently working on Portfolio",
};

// ========== Projects ==========
interface ButtonItem {
  href: string;
  text: string;
  variant: "default" | "secondary" | null | undefined;
}

interface ProjectCard {
  img: string;
  stacks: Array<string>;
  title: string;
  description: string;
  buttons: Array<ButtonItem>;
}

export const projects: Array<ProjectCard> = [
  {
    img: "/images/projects/project1.jpg",
    stacks: ["HTML", "SCSS", "Python", "Flask"],
    title: "ChertNodes",
    description: "Minecraft servers hosting",
    buttons: [
      {
        href: "/",
        text: "Live <=>",
        variant: "default",
      },
      {
        href: "/",
        text: "Cached",
        variant: "secondary",
      },
    ],
  },
  {
    img: "/images/projects/project2.png",
    stacks: ["React", "Express", "Discord.js", "Node.js", "HTML", "SCSS"],
    title: "ProtectX",
    description: "Discord anti-crash bot",
    buttons: [
      {
        href: "/",
        text: "Live <=>",
        variant: "default",
      },
    ],
  },
  {
    img: "/images/projects/project3.png",
    stacks: ["CSS", "Express", "Node.js"],
    title: "Kahoot Answers Viewer",
    description: "Get answers to your kahoot quiz",
    buttons: [
      {
        href: "/",
        text: "Live <=>",
        variant: "default",
      },
    ],
  },
];

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
