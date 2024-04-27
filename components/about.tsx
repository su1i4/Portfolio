"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>Обо мне</SectionHeading>
      <p className="mb-3">
        Привет! Меня зовут Сулайман. Я начал свой путь в мире программирования на курсах в Makers Incubator. Во время обучения я погрузился в изучение различных языков программирования и технологий, и это вызвало у меня огромный интерес к созданию программного обеспечения.

        После завершения обучения я получил возможность стажироваться в одной из IT-компаний, где я смог применить свои знания на практике и освоиться в профессиональной среде. Это был захватывающий опыт, который помог мне углубить свои навыки и развиться как разработчик.

        Сейчас я работаю в компании Aksoft в качестве Frontend разработчика. Здесь я продолжаю расширять свои знания и опыт, работая с технологиями, такими как React, Next Js, Node.js и MongoDB. Я увлечен созданием инновационных решений и стремлюсь к постоянному росту как специалист в области разработки программного обеспечения."
      </p>

      <p>
        Когда я не программирую, мне нравится писать пет проекты разных задач и уровня . Я также люблю изучать новые вещи и играть в бильярд. В настоящее время я изучаю Docker and Aws.
      </p>
    </motion.section>
  );
}
