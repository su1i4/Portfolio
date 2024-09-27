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
      "skill": 'Мой стэк',
      "experience": 'Опыт работы',
      "contact": 'Связаться Со Мной',
      "contactText": 'Пожалуйста, свяжитесь со мной напрямую по адресу sulaimanmind862@gmail.com или через эту форму.',
      "email": 'Ваш email',
      "message": 'Ваше сообщение',
      "submit": 'Отправить',
      "rights": '2024 su1i4. Все права защищены.',
      "site": 'Об этом сайте',
      "infoSite": 'создано с помощью React и Next.js (App Router и Server Actions), TypeScript, Tailwind CSS, Framer Motion, React Email & Resend, хостинга Vercel.',
      "projectsList": {
        "bsmart": {
          "title": "Buisiness smart",
          "description": 'Business Smart — это мощная система для управления бизнесом, которая предоставляет все необходимые инструменты для автоматизации учета, финансов'
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
          "description": 'AlphaCargo — это логистическая компания, специализирующаяся на перевозке товаров и грузов между странами. Мы предлагаем надежные и эффективные решения для транспортировки, обеспечивая безопасность и своевременную доставку'
        },
        "logistic": {
          "title": 'logistic',
          "description": 'Logistic — это инновационная платформа, которая помогает перевозчикам находить грузы для транспортировки. Мы объединяем грузовладельцев, предлагая удобные инструменты для поиска актуальных предложений на рынке перевозок.'
        }
      },
      "header": {
        "Home": 'Главная',
        "About": 'Обо мне',
        "Projects": 'Проекты',
        "Skills": 'Стэк',
        "Experience": 'Опыт',
        "Contact": 'Контакты'
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
      "skill": 'Skills',
      "experience": 'My Experience',
      "contact": 'Contact Me',
      "contactText": 'Please contact me directly at sulaimanmind862@gmail.com or through this form',
      "email": 'Your email',
      "message": 'Your message',
      "submit": 'Submit',
      "rights": '2024 su1i4. All rights reserved.',
      "site": 'About this website',
      "infoSite": 'built with React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS, Framer Motion, React Email & Resend, Vercel hosting.',
      "projectsList": {
        "bsmart": {
          "title": "Buisiness smart",
          "description": 'Business Smart is a business management system that provides all the necessary tools for automating accounting, finance'
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
      },
      "header": {
        "Home": 'Home',
        "About": 'About',
        "Projects": 'Project',
        "Skills": 'Skills',
        "Experience": 'Experience',
        "Contact": 'Contact'
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