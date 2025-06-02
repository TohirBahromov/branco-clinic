"use client";

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import Icon from "./Icon";

import testimonials from "@/lang/testimonial.json";
import { AppLang } from "@/lib/types";
import Flexbox from "./ui/box";
import DoctorButton from "./DoctorButton";
import * as motion from "motion/react-client";
import { SlideTop } from "@/lib/settings/motion";

interface Props {
  lang: AppLang;
}

export default function TestimonialCarousel({ lang }: Props) {
  return (
    <>
      <motion.div
        className="p-[100px] xl:p-[50px] lg:p-[30px] rounded-[40px] bg-white relative shadow-custom3 border border-divider"
        variants={SlideTop}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "backInOut" }}
      >
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          navigation={{
            prevEl: ".prev-btn-carousel",
            nextEl: ".next-btn-carousel",
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          {testimonials.testimonials.map((item, index) => (
            <SwiperSlide key={index} className="lg:pb-[70px]">
              <Icon
                svg="/svg/icons/quote.svg"
                color="#5E5EEE"
                width={50}
                height={50}
              />

              <div className="text-md md:text-sm text-textColor leading-[1.8em] mb-[50px] mt-[30px]">
                {item.message[lang]}
              </div>

              <DoctorButton
                img={item.image}
                name={item.name}
                position={item.position[lang]}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <Flexbox className="absolute bottom-[110px] right-[110px] xl:bottom-[60px] xl:right-[60px] lg:bottom-[30px] lg:left-1/2 lg:-translate-x-1/2 lg:w-max bg-white !gap-[30px] z-[2]">
          <button className="prev-btn-carousel bg-accent hover:bg-primary duration-300 flex items-center justify-center w-[40px] h-[40px] rounded-lg">
            <Icon
              svg="/svg/icons/left.svg"
              width={20}
              height={20}
              color="#fff"
            />
          </button>
          <button className="next-btn-carousel bg-accent hover:bg-primary duration-300 rotate-180 flex items-center justify-center w-[40px] h-[40px] rounded-lg">
            <Icon
              svg="/svg/icons/left.svg"
              width={20}
              height={20}
              color="#fff"
            />
          </button>
        </Flexbox>
      </motion.div>
    </>
  );
}
