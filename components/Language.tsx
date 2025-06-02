"use client";

import { AppLang } from "@/lib/types";
import Flexbox from "./ui/box";
import Image from "next/image";
import { useRouter } from "next/navigation";
import IconHolder from "./ui/icon-holder";
import { useState } from "react";

interface Props {
  lang: AppLang;
  pathname: string;
}

const Language = ({ lang, pathname }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const changeLanguage = (newLang: AppLang) => {
    const newPath = pathname.replace(lang, newLang);

    if (pathname !== newPath) {
      router.push(newPath);
    }
  };
  return (
    <IconHolder
      icon="/svg/icons/globe.svg"
      shape="circle"
      size={40}
      iconSize={25}
      className="overflow-visible"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div
        className={`duration-300 ease-in-out absolute left-1/2 -translate-x-1/2 flex flex-col w-max border border-divider rounded-lg ${
          isOpen
            ? "opacity-100 visible top-[calc(100%+10px)]"
            : "opacity-0 invisible top-[calc(100%+30px)]"
        }`}
      >
        <Flexbox
          gap={2}
          className={`p-2 rounded-t-lg ${
            lang === "uz" ? "bg-divider" : "bg-white"
          }`}
          onClick={() => changeLanguage("uz")}
        >
          <Image
            src="/svg/flags/uzbekistan.svg"
            alt="Uzbekistan flag"
            width={20}
            height={10}
          />
          <span className="text-xs">O'zbek</span>
        </Flexbox>
        <Flexbox
          gap={2}
          className={`p-2 rounded-b-lg ${
            lang === "ru" ? "bg-divider" : "bg-white"
          }`}
          onClick={() => changeLanguage("ru")}
        >
          <Image
            src="/svg/flags/russia.svg"
            alt="Uzbekistan flag"
            width={20}
            height={10}
          />
          <span className="text-xs">Русский</span>
        </Flexbox>
      </div>
    </IconHolder>
  );
};

export default Language;
