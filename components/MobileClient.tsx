"use client";

import { useMobileStore } from "@/store/mobile";
import { ReactNode, useState } from "react";
import Flexbox from "./ui/box";
import Icon from "./Icon";
import Link from "next/link";
import { AppLang } from "@/lib/types";

interface Props {
  children: ReactNode;
}

interface DropdownProps {
  lang: AppLang;
  text: string;
  dropdownUrl: string;
  items: {
    title: {
      uz: string;
      ru: string;
      url: string;
    };
  }[];
}

const MobileClientProvider = ({ children }: Props) => {
  const { isOpen } = useMobileStore();

  return (
    <section
      className={`fixed z-30 duration-300 bg-primary h-[calc(100vh-89.8px)] md:h-[calc(100vh-80px)] w-[80%] top-[89.8px] md:top-20 ${
        isOpen ? "left-0" : "-left-[200%]"
      }`}
    >
      {children}
    </section>
  );
};

const MobileClientDropdown = ({
  text,
  items,
  lang,
  dropdownUrl,
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };
  return (
    <>
      <Flexbox align="col" center={false} className="w-full">
        <button
          className="!m-0 text-sm leading-[1.6em] font-medium flex items-center gap-2 justify-between w-full relative p-[13px] mx-[5px] group bg-white text-accent rounded-xl"
          onClick={toggleDropdown}
        >
          {text}

          <Icon
            svg="/svg/icons/chevron-down.svg"
            width={18}
            height={18}
            className={`duration-300 ${isOpen ? "rotate-180" : ""}`}
          />
        </button>
        <ul
          className={`w-full flex flex-col gap-2 text-white rounded-lg max-h-[4000px] ${
            isOpen ? "h-full p-4 visible" : "h-0 p-0 invisible"
          }`}
        >
          {items.map((item, index) => (
            <Link
              key={index}
              href={`/${lang + dropdownUrl}/${item.title.url}`}
              onClick={handleLinkClick}
              className="w-full bg-accent px-4 rounded-xl"
            >
              <li className="py-2" key={index}>
                {item.title[lang]}
              </li>
            </Link>
          ))}
        </ul>
      </Flexbox>
    </>
  );
};

export { MobileClientProvider, MobileClientDropdown };
