"use client";

import React, { useState } from "react";
import i18n from "../context/i18n";
import UsFlag from "../public/usa.png";
import RuFlag from "../public/russia.png";
import Image from "next/image";

const LanguageSwitcher = () => {
  const [currentLanguage, setCurrentLanguage] = useState("en");

  const handleLanguageChange = (lang: any) => {
    i18n.changeLanguage(lang);
    setCurrentLanguage(lang);
  };

  return (
    <button
      className="fixed bottom-20 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950"
      onClick={() => handleLanguageChange(currentLanguage === "en" ? "ru" : "en")}
    >
      {currentLanguage === "en" ? (
        <Image src={UsFlag} alt="USA Flag" className="h-6 w-6" />
      ) : (
        <Image src={RuFlag} alt="Russian Flag" className="h-6 w-[25px]" />
      )}
    </button>
  );
};

export default LanguageSwitcher;