"use client";

import faqs from "@/lang/faqs.json";
import { useState } from "react";
import Flexbox from "./ui/box";
import { AppLang } from "@/lib/types";
import Icon from "./Icon";
import * as motion from "motion/react-client";
import { SlideLeft, SlideRight } from "@/lib/settings/motion";
import { callNumber } from "@/lib/constants";
import Link from "next/link";

interface Props {
  lang: AppLang;
}

const FAQs = ({ lang }: Props) => {
  const [active, setActive] = useState<number>(0);

  const handleActive = (newActive: number) => {
    newActive === active ? setActive(0) : setActive(newActive);
  };

  return (
    <Flexbox
      align="col"
      center={false}
      gap={6}
      className="w-1/2 xl:w-full overflow-hidden"
    >
      {faqs.faqs.map((item, index) => {
        const isActive = active === index + 1;
        const duration = `duration-300`;

        return (
          <motion.article
            key={index}
            className="duration-300"
            variants={index % 2 ? SlideRight : SlideLeft}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, ease: "backInOut" }}
            viewport={{ once: true }}
          >
            {/* Question */}
            <Flexbox
              className={`justify-between p-5 cursor-pointer border-b relative ${duration} ${
                isActive
                  ? "rounded-t-[20px] bg-accent border-b-darkDivider"
                  : "rounded-[20px] bg-white border-b-white"
              }`}
              onClick={() => handleActive(index + 1)}
            >
              <h1
                className={`text-[20px] lg:text-[18px] font-bold pointer-events-none ${duration} ${
                  isActive ? "text-white" : "text-primary"
                }`}
              >
                {item.question[lang]}
              </h1>
              <Icon
                svg="/svg/icons/minus.svg"
                width={20}
                height={20}
                color="#fff"
                className={`ml-2 ${isActive ? "block" : "hidden"}`}
              />
              <Icon
                svg="/svg/icons/plus.svg"
                width={20}
                height={20}
                color="#0B0B38"
                className={`ml-2 ${isActive ? "hidden" : "block"}`}
              />
              {/* Div to disable pointer effects */}
              <div className="absolute left-0 top-0 inset-0 rounded-[20px] bg-transparent z-[3]"></div>
            </Flexbox>

            {/* Answer */}
            <div
              className={`px-5 ${duration} ${
                isActive
                  ? "bg-accent max-h-[10000px] py-5 rounded-b-[20px] h-full"
                  : "bg-white max-h-0 py-0 h-0"
              }`}
            >
              <span
                className={`text-white ${duration} ${
                  isActive ? "opacity-100 block" : "inopacity-0 hidden"
                }`}
              >
                {item.answer[lang]}
              </span>
            </div>
          </motion.article>
        );
      })}
      <Flexbox
        gap={6}
        center={false}
        className="p-[40px] xl:p-[30px] lg:p-5 lg:w-full rounded-[40px] bg-white w-max hidden lg:flex"
        variants={SlideLeft}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1, ease: "easeInOut" }}
        viewport={{ once: true }}
      >
        <Icon
          svg="/svg/icons/operator.svg"
          width={60}
          height={60}
          color="#5E5EEE"
          className="lg:!w-[50px] lg:h-[50px]"
        />

        <Flexbox align="col" center={false} className="!gap-[10px]">
          <p className="text-sm text-textColor">{faqs.call.desc[lang]}</p>
          <h1 className="text-[22px] lg:text-md leading-[1.2em] font-semibold">
            {faqs.call.title[lang]}
          </h1>
          <Link href={`tel:${callNumber}`} className="text-sm text-textColor">
            {callNumber}
          </Link>
        </Flexbox>
      </Flexbox>
    </Flexbox>
  );
};

export default FAQs;
