import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  ru: {
    translation: {
      "intro": "Привет, я Сулайман. Я фронтенд-разработчик с 1.5-летним опытом. Мне нравится создавать сайты и приложения. Мой основной инструмент - React (Next.js).",
      "textMe": 'Напишите мне',
      "resume": 'Скачать резюме',
      "aboutMe": 'Обо мне',
      "projects": "Проекты",
      "projectsList": {
        "bsmart": {
          "title": "Buisiness smart",
          "description": 'Business Smart — это мощная система для управления бизнесом, которая предоставляет все необходимые инструменты для автоматизации учета, финансов, логистики и управления персоналом. Платформа позволяет работать с реальными налоговыми документами, обеспечивая соответствие требованиям законодательства и упрощая взаимодействие с государственными органами. Идеально подходит для предприятий любого размера, предоставляя гибкие решения для оптимизации процессов и аналитики в реальном времени.'
        },
        "dentapp": {
          "title": "DentApp",
          "description": 'DentApp: (CRM) помогает стоматологам эффективно планировать расписание приема пациентов в течение дня.'
        },
        "cheber": {
          "title": 'Cheber',
          "description": 'Уникальный сервис онлайн записи для барбершопов, салонов красоты и медицинских центров'
        },
        "alphacargo": {
          "title": 'AlphaCargo',
          "description": 'AlphaCargo — это международная логистическая компания, специализирующаяся на перевозке товаров и грузов между странами. Мы предлагаем надежные и эффективные решения для транспортировки, обеспечивая безопасность и своевременную доставку'
        },
        "logistic": {
          "title": 'logistic',
          "description": 'Logistic — это инновационная платформа, которая помогает перевозчикам находить грузы для транспортировки. Мы объединяем грузовладельцев и транспортные компании, предлагая удобные инструменты для поиска актуальных предложений на рынке перевозок.'
        }
      }
    }
  },
  en: {
    translation: {
      "intro": "Hi, I'm Sulaiman. I'm a frontend developer with 1.5 years of experience. I like to create websites and applications. My main tool is React (Next.js).",
      "textMe": 'Text me',
      "resume": 'Download resume',
      "aboutMe": 'About me',
      "projects": 'Projects',
      "projectsList": {
        "bsmart": {
          "title": "Buisiness smart",
          "description": 'Business Smart is a powerful business management system that provides all the necessary tools for automating accounting, finance, logistics and personnel management. The platform allows you to work with real tax documents, ensuring compliance with legal requirements and simplifying interaction with government agencies. Ideal for businesses of any size, providing flexible solutions for process optimization and real-time analytics.'
        },
        "dentapp": {
          "title": "DentApp",
          "description": 'DentApp: (CRM) helps dentists efficiently schedule patient appointments throughout the day.'
        },
        "cheber": {
          "title": 'Cheber',
          "description": 'Unique online booking service for barbershops, beauty salons and medical centers'
        },
        "alphacargo": {
          "title": 'AlphaCargo',
          "description": 'AlphaCargo is an international logistics company specializing in the transportation of goods and cargo between countries. We offer reliable and efficient transportation solutions, ensuring safe and timely delivery'
        },
        "logistic": {
          "title": 'logistic',
          "description": 'Logistic is an innovative platform that helps carriers find cargo for transportation. We unite cargo owners and transport companies, offering convenient tools for finding current offers on the transportation market.'
        }
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    interpolation: {
      escapeValue: false
    }
  });

  export default i18n;