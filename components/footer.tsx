"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <>
      <footer className="mb-10 px-4 text-center text-gray-500 bg-red-200">
        <small className="mb-2 block text-xs">&copy; {t("rights")}</small>
        <p className="text-xs">
          <span className="font-semibold">{t("site")}:</span> {t("infoSite")}
        </p>
      </footer>
      <Image
        width={800}
        height={500}
        alt="sulaiman"
        src="https://unibook-bucket.s3.eu-central-1.amazonaws.com/1708245078275_menspace bishkek.jpg"
        className="w-full h-[500px]"
      />
    </>
  );
}
