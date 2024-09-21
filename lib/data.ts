import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import Cheber from "@/public/Cheber.png"

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Обучение на курсах Makers Incubator",
    location: "Бишкек, Makers ",
    description:
      "На курсах нас обучали  HTML, CSS, REACT, NEXT JS, J QUERY, REST API, После окончания курсов сразу же устроился на стажировку Makers Incubator",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Стажер Front-End Developer",
    location: "Бишкек, Makers",
    description:
      "Я стажировался frontend Разработчиком где я научился Правильно выстраивать Архитектру Frontend приложения, Оптимизацию ",
    icon: React.createElement(CgWorkAlt),
    date: "2023",
  },
  {
    title: "Junior Front-End Developer",
    location: "Бишкек, Aksoft",
    description:
      "Сейчас я являюсь Junior разработчиком компании Aksoft, Принимал участие в проекте Cheber, где переписывал фронтенд с использованием Next.js для повышения оптимизацию. Dentapp Также Писал CRM для стоматологических клиник, представляющую собой платформу для онлайн-букинга. В процессе работы проводил CEO оптимизацию",
    icon: React.createElement(FaReact),
    date: "2023 - по наст время",
  },
] as const;

export const projectsData = [
  {
    title: "DentApp",
    description:
      "Dentapp: (CRM) помогает стоматологам эффективно планировать расписание приема пациентов в течение дня.",
    tags: ["React", "Tailwind", "styled-components", "Redux", "Rtk Query", "MUI", "Full Calendar"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Cheber",
    description:
      "Уникальный сервис онлайн записи для барбершопов, салонов красоты и медицинских центров в Бишкеке",
    tags: ["TypeScript", "Next.js", "Tailwind", "Redux", "Rtk Query", "React Query", "MUI", "eslint"],
    imageUrl: Cheber,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["TypeScript", "Next.js", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "JavaScript",
  "TypeScript",
  "React",
  "Redux",
  "Redux-Saga",
  "Redux-Toolkit",
  "Next.js",
  "Tailwind",
  "Node.js",
  "HTML",
  "CSS",
  "Git",
  "J Query",
  "Prisma",
  "MongoDB",
  "GraphQL",
  "Apollo",
  "Express",
  "React-Query",
  "RTK Query",
  "Vue Js",
  "AWS",
  "Bootstrap",
  "FireBase",
  "React Native",
  "Swiper",
  "Full Calendar",
  "styled-components",
  "Python",
  "Django",
  "Framer Motion",
] as const;
