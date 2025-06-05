import { GitHub } from "@/components/ui/icons/github";
import { Telegram } from "@/components/ui/icons/telegram";
import { Instagram } from "@/components/ui/icons/instagram";
import { Gmail } from "@/components/ui/icons/gmail";

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
  { title: "home", path: "/" },
  { title: "projects", path: "/project" },
  { title: "about-me", path: "/about" },
  { title: "contacts", path: "/contact" },
];

// ========== Header ==========
export const headerContent = {
  title: {
    default: `${developerInfo.name} is a `,
    highlight: "web designer and front-end developer",
  },
  subtitle: "He crafts responsive websites where technologies meet creativity",
  ctaButton: {
    text: "Contact ME =>",
    link: "/contact",
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
  img?: string;
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
  {
    img: "/images/projects/project4.png",
    stacks: ["HTML", "CSS", "JS"],
    title: "Kotik Bot",
    description: "Multi-functional discord bot",
    buttons: [
      {
        href: "/",
        text: "Live <=>",
        variant: "default",
      },
    ],
  },
  {
    img: "/images/projects/project5.png",
    stacks: ["Vue", "TS", "Less"],
    title: "Portfolio",
    description: "You’re using it rn",
    buttons: [
      {
        href: "/",
        text: "Github <=>",
        variant: "default",
      },
    ],
  },
];

// ========== Small Projects ==========
export const smallProjects: Array<ProjectCard> = [
  {
    stacks: ["Discord.js", "TS", "JS"],
    title: "Bot boilerplate",
    description:
      "Start creating scalable discord.js bot with typescript in seconds",
    buttons: [
      {
        href: "/",
        text: "Github <~>",
        variant: "default",
      },
    ],
  },
  {
    stacks: ["Vue", "CSS", "JS"],
    title: "My blog",
    description: "Front-end of my future blog website written in vue",
    buttons: [
      {
        href: "/",
        text: "Github <~>",
        variant: "default",
      },
    ],
  },
  {
    stacks: ["Figma"],
    title: "Chess pro",
    description:
      "Figma landing page about service for viewing chess tournaments",
    buttons: [
      {
        href: "/",
        text: "Figma <~>",
        variant: "default",
      },
    ],
  },
  {
    stacks: ["Figma"],
    title: "Crash protect website",
    description:
      "Figma template for website about anti-raid, anti-crash discord bot",
    buttons: [
      {
        href: "/",
        text: "Figma <~>",
        variant: "default",
      },
    ],
  },
  {
    stacks: ["HTML", "CSS"],
    title: "CSS expirements",
    description: "Collection of my different little projects in css",
    buttons: [
      {
        href: "/",
        text: "Live <~>",
        variant: "default",
      },
    ],
  },
  {
    stacks: ["Lua", "NeoVim"],
    title: "Web Dev nvim config",
    description: "Config for neovim perfect for web developer",
    buttons: [
      {
        href: "/",
        text: "Github <~>",
        variant: "default",
      },
    ],
  },
  {
    stacks: ["Python", "Quart", "HTML"],
    title: "Ooku",
    description: "Simple link shortener with auth",
    buttons: [
      {
        href: "/",
        text: "Live <~>",
        variant: "default",
      },
    ],
  },
  {
    stacks: ["Figma"],
    title: "School website",
    description: "Figma template website for my school",
    buttons: [
      {
        href: "/",
        text: "Figma <~>",
        variant: "default",
      },
    ],
  },
];

// ========== Skills ==========
export const skillsContent = [
  {
    stack: "Languages",
    skills: ["TypeScript", "Lua", "Python", "JavaScript"],
  },
  {
    stack: "Databases",
    skills: ["SQLite", "PostgreSQL", "MongoDB"],
  },
  {
    stack: "Tools",
    skills: [
      "VSCode",
      "Neovim",
      "Linux",
      "Figma",
      "XFCE",
      "Arch",
      "Git",
      "Font",
      "Awesome",
    ],
  },
  {
    stack: "Other",
    skills: ["HTML", "CSS", "EJS", "SCSS", "REST", "Jinja"],
  },
  {
    stack: "Frameworks",
    skills: ["React", "Vue", "Disnake", "Discord.js", "Flask", "Express.js"],
  },
];

// ========== Contacts ==========
export const contactContent = {
  hobby:
    "I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me",
  contact: [
    {
      icon: Gmail,
      text: "37765@iitu.edu.kz",
      url: "/",
    },
    {
      icon: Telegram,
      text: "RealKazbek",
      url: "/",
    },
  ],
};

// ========== About Me ==========
export const aboutContent = {
  message:
    "Hello, i’m Elias!\nI’m a self-taught front-end developer based in Kyiv, Ukraine. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences.\nTransforming my creativity and knowledge into a websites has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.",
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
