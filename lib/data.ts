import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import Aplha from '@/public/Alpha.png'
import Cheber from "@/public/Cheber.png"
import Bssmart from '@/public/bismart.png'
import Logistic from '@/public/logistic.png'
import DentApp from '@/public/dentapp.png'

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
    location: "Бишкек, Makers",
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
    link: 'https://apps.bsmart.kg/',
    key: 'bsmart',
    title: 'BS Smart',
    tags: ["React", "Typescript", "styled-components", "Mobx", "React Query", "antd", "react-i18next", "axios", "chart.js"],
    imageUrl: Bssmart
  },
  {
    link: 'https://dentapp.online/prices',
    key: 'dentapp',
    title: "DentApp", 
    tags: ["React", "Tailwind", "styled-components", "Redux", "Rtk Query", "MUI", "Full Calendar"],
    imageUrl: DentApp,
  },
  {
    link: 'https://cheber.org/',
    key: 'cheber',
    title: "Cheber",
    tags: ["TypeScript", "Next.js", "Tailwind", "Redux", "Rtk Query", "React Query", "MUI", "eslint"],
    imageUrl: Cheber,
  },
  {
    link: 'https://www.alpha-cargo.kg/',
    key: 'alphacargo',
    title: "Alpha Cargo",
    tags: ["TypeScript", "Next.js", "Tailwind", "Framer"],
    imageUrl: Aplha,
  },
  {
    link: 'https://logistickg.com/',
    key: 'logistic',
    title: "Logistic",
    tags: ["NextJs", "NodeJs", "Next Ui", "Framer", "Tailwind"],
    imageUrl: Logistic
  }
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
