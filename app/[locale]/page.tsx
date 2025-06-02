import Icon from "@/components/Icon";
import Flexbox from "@/components/ui/box";
import { Button } from "@/components/ui/button";
import IconHolder from "@/components/ui/icon-holder";
import {
  Fade,
  SlideBottom,
  SlideLeft,
  SlideRight,
  SlideTop,
} from "@/lib/settings/motion";
import { AppLang } from "@/lib/types";
import { callNumber } from "@/lib/constants";
import Link from "next/link";
import Image from "next/image";
import Title from "@/components/Title";
import Heading from "@/components/Heading";
import DoctorButton from "@/components/DoctorButton";
import Counter from "@/components/Counter";
import ServiceCard from "@/components/cards/service-card";
import TestimonialCarousel from "@/components/Carousel";
import Compare from "@/components/Compare";
import FAQs from "@/components/Faqs";
import * as motion from "motion/react-client";

// localeuage content
import hero from "@/lang/hero.json";
import about from "@/lang/about.json";
import services from "@/lang/services.json";
import expertise from "@/lang/expertise.json";
import whyus from "@/lang/choose-us.json";
import testimonials from "@/lang/testimonial.json";
import result from "@/lang/result.json";
import faqs from "@/lang/faqs.json";

interface PageProps {
  params: {
    locale: AppLang;
  };
}

export default async function Home({ params }: PageProps) {
  const { locale } = params;
  return (
    <>
      {/* header */}
      <section
        className="h-screen lg:h-[calc(100vh-150px)] md:h-[calc(100vh-50px)] bg-[url('/images/background/hero-bg.jpg')] bg-fixed bg-no-repeat bg-center bg-cover relative before:absolute before:inset-0 before:top-0 before:left-0 before:bg-primary/60 before:z-[0]"
        id="header"
      >
        <div className="container flex items-center justify-center lg:items-start lg:pt-24 h-full">
          <Flexbox
            align="col"
            gap={5}
            className="max-w-[900px] text-center z-[2]"
          >
            <motion.h1
              className="text-hero xl:text-3xl lg:text-1xl font-bold text-white"
              variants={Fade}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              {hero.headline[locale]}
            </motion.h1>
            <motion.p
              className="text-sm text-divider"
              variants={SlideTop}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              {hero.description[locale]}
            </motion.p>
            <Flexbox className="justify-center md:!flex-col md:!gap-4" gap={2}>
              <Button
                className="md:w-full"
                variants={SlideRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <Icon
                  svg="/svg/icons/phone-call.svg"
                  width={20}
                  height={20}
                  color="#fff"
                />{" "}
                {hero.bookbtn[locale]}
              </Button>
              <Button
                variant="outline"
                className="md:w-full"
                variants={SlideLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <Icon
                  svg="/svg/icons/plus.svg"
                  width={24}
                  height={24}
                  color="#fff"
                  className="x"
                />{" "}
                {hero.call[locale]}
              </Button>
            </Flexbox>
          </Flexbox>
        </div>
      </section>

      {/* about-us */}
      <section className="container bg-background" id="about">
        <Flexbox
          gap={5}
          className="bg-white p-[50px] xl:p-[30px] lg:p-5 rounded-[40px] -mt-[85px] xl:-mt-[100px] lg:-mt-[138px] lg:!gap-[30px] isolate xl:!flex-col xl:!items-start shadow-custom border border-divider"
        >
          <Flexbox
            gap={5}
            className="flex-1 xl:w-full lg:!flex-col lg:!items-start lg:!gap-[30px]"
          >
            <Flexbox
              gap={4}
              className="flex-1 group border-r border-divider lg:border-none"
              variants={SlideTop}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, ease: "backInOut" }}
              viewport={{ once: true }}
            >
              <IconHolder
                icon="/svg/icons/phone-call.svg"
                shape="square"
                size={70}
                iconSize={34}
                className="xl:!w-[60px] xl:!h-[60px] xl:!min-h-[60px] xl:!min-w-[60px] group-hover:before:w-full group-hover:before:h-full"
              />
              <div>
                <h1 className="text-md font-semibold">
                  {about.top.phone[locale]}
                </h1>
                <Link href={"tel:" + callNumber} className="text-sm">
                  {callNumber}
                </Link>
              </div>
            </Flexbox>

            <Flexbox
              gap={4}
              className="flex-1 group border-r border-divider xl:border-none"
              variants={SlideTop}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, ease: "backInOut", delay: 0.2 }}
              viewport={{ once: true }}
            >
              <IconHolder
                icon="/svg/icons/clock.svg"
                shape="square"
                size={70}
                iconSize={34}
                className="xl:!w-[60px] xl:!h-[60px] xl:!min-h-[60px] xl:!min-w-[60px] group-hover:before:w-full group-hover:before:h-full"
              />
              <div>
                <h1 className="text-md font-semibold">
                  {about.top.workinghours[locale]}
                </h1>
                <p className="text-sm">{about.top.workinghours.desc[locale]}</p>
              </div>
            </Flexbox>
          </Flexbox>
          <Button
            className="xl:mx-auto"
            variants={SlideTop}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, ease: "backInOut", delay: 0.4 }}
            viewport={{ once: true }}
          >
            {about.top.button[locale]}
            <Icon
              svg="/svg/icons/plus.svg"
              width={24}
              height={24}
              color="#fff"
              className="x"
            />
          </Button>
        </Flexbox>

        <section className="py-[100px] flex items-center xl:flex-col-reverse gap-[50px]">
          <div className="relative rounded-2xl w-[565px] min-w-[565px] 2xl:w-[450px] 2xl:min-w-[450px] xl:w-full xl:min-w-full lg:h-[500px] h-[630px]">
            <Image
              src="/images/background/about-bg.jpg"
              alt="About section image"
              fill
              className="rounded-2xl"
              objectFit="cover"
            />

            <div className="absolute bottom-0 right-0 flex items-end justify-end rounded-tl-2xl bg-white w-[200px] h-[240px]">
              <div className="relative w-[90%] h-[90%] before:absolute before:bg-primary/60 before:inset-0 before:z-[2] before:rounded-2xl">
                <Image
                  src="/images/background/about-counter-bg.jpg"
                  alt="About section image"
                  fill
                  objectFit="cover"
                  className="rounded-2xl"
                />

                <Flexbox
                  align="col"
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 isolate z-[4]"
                >
                  <Flexbox className="text-white text-3xl font-bold">
                    <Counter end={10} />
                    <p>+</p>
                  </Flexbox>
                  <p className="text-white text-sm text-center">
                    {about.bottom.experience[locale]}
                  </p>
                </Flexbox>
              </div>
            </div>
          </div>
          <Flexbox
            align="col"
            center={false}
            gap={5}
            className="overflow-hidden"
          >
            <Title title={about.bottom.title[locale]} />
            <Heading heading={about.bottom.headline[locale]} />
            <motion.p
              variants={SlideTop}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="text-sm text-textColor"
            >
              {about.bottom.desc[locale]}
            </motion.p>
            <Flexbox
              className="my-2 py-[25px] border-y border-divider lg:!flex-col lg:!items-start"
              gap={7}
            >
              <Flexbox className="flex-1" gap={2}>
                <h1 className="text-[40px] leading-[48px] text-accent font-bold">
                  12k
                </h1>
                <p className="text-textColor">
                  {about.bottom.stats.customers[locale]}
                </p>
              </Flexbox>
              <Flexbox className="flex-1 justify-between" gap={2}>
                <h1 className="text-[40px] leading-[48px] text-accent font-bold">
                  100%
                </h1>
                <p className="text-textColor">
                  {about.bottom.stats.satisfaction[locale]}
                </p>
              </Flexbox>
            </Flexbox>
            <Flexbox
              variants={SlideBottom}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="!gap-[50px] md:!flex-col-reverse"
            >
              <DoctorButton
                img="/images/doctor-avatar.jpg"
                name="Dr Barno"
                position="CEO"
              />
            </Flexbox>
          </Flexbox>
        </section>
      </section>

      {/* services */}
      <section
        className="bg-gradient-to-b from-secondary to-white"
        id="services"
      >
        <div className="container pt-[100px] pb-[50px] flex flex-col gap-5">
          <Flexbox className="justify-between mb-10 lg:!flex-col lg:!items-start overflow-hidden">
            <Flexbox
              align="col"
              center={false}
              gap={5}
              className="max-w-[70%] lg:max-w-full"
            >
              <Title title={services.title[locale]} />
              <Heading heading={services.heading[locale]} />
            </Flexbox>
            <Button className="lg:mt-5">
              {services.button[locale]}{" "}
              <Icon
                svg="/svg/icons/plus.svg"
                color="#fff"
                width={24}
                height={24}
                className="x"
              />
            </Button>
          </Flexbox>

          <div className="grid grid-cols-3 gap-[30px] lg:grid-cols-2 md:grid-cols-1">
            {services.cards.map((item, index) => (
              <ServiceCard
                key={index}
                title={item.title[locale]}
                desc={item.desc[locale]}
                icon={item.icon}
                img="/images/background/service1-bg.jpg"
                link="/"
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* professionalizm */}
      <section className="container pt-[50px] pb-[100px]" id="professionalism">
        <Flexbox className="!gap-[10px] xl:!flex-col">
          <Flexbox
            align="col"
            center={false}
            gap={5}
            className="w-1/2 xl:w-full overflow-hidden"
          >
            <Title title={expertise.title[locale]} />
            <Heading heading={expertise.heading[locale]} />
            <motion.p
              className="text-textColor text-sm"
              variants={Fade}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 2, ease: "backInOut" }}
              viewport={{ once: true }}
            >
              {expertise.desc[locale]}
            </motion.p>
            <div className="w-full h-[1px] bg-divider my-5"></div>
            <Flexbox align="col" center={false} className="!gap-[30px]">
              {expertise.list.map((item, index) => (
                <Flexbox
                  center={false}
                  gap={5}
                  key={index}
                  variants={index % 2 ? SlideBottom : SlideTop}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 1, ease: "easeInOut" }}
                  viewport={{ once: true }}
                >
                  <Icon
                    svg="/svg/icons/checked.svg"
                    width={20}
                    height={20}
                    color="#5E5EEE"
                  />
                  <div>
                    <h1 className="text-md font-bold text-primary mb-5">
                      {item.title[locale]}
                    </h1>
                    <p className="text-sm text-textColor">
                      {item.desc[locale]}
                    </p>
                  </div>
                </Flexbox>
              ))}
            </Flexbox>
          </Flexbox>

          <Flexbox className="w-1/2 xl:w-[80%] lg:w-full h-[600px] justify-between p-[10px] lg:p-0 relative">
            <Flexbox className="h-full w-[48%] !items-start">
              <div className="relative w-full h-[60%] rounded-[40px]">
                <Image
                  src="/images/background/expertise1-bg.jpg"
                  alt="Expertise image"
                  fill
                  objectFit="cover"
                  className="rounded-[40px]"
                />
              </div>
            </Flexbox>
            <Flexbox className="h-full w-[48%] !items-end">
              <div className="relative w-full h-[60%] rounded-[40px]">
                <Image
                  src="/images/background/expertise2-bg.jpg"
                  alt="Expertise image"
                  fill
                  objectFit="cover"
                  className="rounded-[40px]"
                />
              </div>
            </Flexbox>

            {/* Purple background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-2xl z-[-1]">
              <Image
                src="/images/background/purple-decorator.png"
                alt="decorator bg"
                fill
                objectFit="cover"
                className="rounded-2xl"
              />
            </div>
            {/* Sliding animation */}
            <motion.div
              className="absolute bottom-0 left-0 w-[300px] p-6 rounded-2xl bg-white flex items-center gap-5 shadow-custom2 animate-in"
              animate={{
                x: [0, 40, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <IconHolder
                shape="circle"
                icon="/svg/icons/phone-call.svg"
                size={60}
                iconSize={30}
              />
              <div>
                <Flexbox className="text-md font-semibold mb-1">
                  <Counter end={20} /> <span>+</span>
                </Flexbox>
                <p className="text-sm text-textColor">
                  {expertise.stats[locale]}
                </p>
              </div>
            </motion.div>
          </Flexbox>
        </Flexbox>
      </section>

      {/* why choose us */}
      <section
        className="bg-primary text-white pt-[100px] bg-[url('/images/background/footer-bg.svg')] bg-left z-0"
        id="why-choose-us"
      >
        <div className="container">
          <Flexbox className="!items-end xl:!flex-col xl:!items-start">
            <Flexbox
              align="col"
              center={false}
              gap={5}
              className="w-1/3 p-[10px] xl:w-full xl:mb-[10px] overflow-hidden"
            >
              <Title title={whyus.title[locale]} className="text-white" />
              <Heading heading={whyus.heading[locale]} className="text-white" />
              <motion.p
                className="text-sm"
                variants={SlideTop}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeInOut" }}
              >
                {whyus.desc[locale]}
              </motion.p>
              <Button
                className="hover:border-white w-max mt-[30px]"
                variants={SlideTop}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeInOut" }}
              >
                {whyus.button[locale]}
                <Icon
                  svg="/svg/icons/plus.svg"
                  width={24}
                  height={24}
                  color="#fff"
                  className="x"
                />
              </Button>
            </Flexbox>

            <Flexbox className="flex-1 h-[550px] px-5 pt-2 relative xl:hidden">
              <Image
                src="/images/main-doctor.png"
                alt="main doctor image"
                fill
                objectFit="cover"
              />
            </Flexbox>

            <Flexbox
              align="col"
              center={false}
              gap={8}
              className="w-1/3 p-[10px] xl:w-full overflow-hidden"
            >
              {whyus.list.map((item, index) => (
                <motion.article
                  variants={index % 2 ? SlideRight : SlideLeft}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{
                    duration: 1,
                    ease: "easeInOut",
                    delay: 0.1 * index,
                  }}
                  key={index}
                  className="flex pb-[30px] border-b border-[#FFFFFF26] gap-5"
                >
                  <IconHolder icon={item.icon} iconSize={30} shape="square" />
                  <div>
                    <h1 className="text-md font-bold mb-1">
                      {item.title[locale]}
                    </h1>
                    <p className="text-sm">{item.desc[locale]}</p>
                  </div>
                </motion.article>
              ))}
            </Flexbox>

            <Flexbox className="hidden xl:flex xl:w-[370px] xl:mx-auto h-[550px] px-5 pt-2 relative">
              <Image
                src="/images/main-doctor.png"
                alt="main doctor image"
                fill
                objectFit="cover"
              />
            </Flexbox>
          </Flexbox>
        </div>
      </section>

      {/* testimonials */}
      <section
        className="bg-primary testimonial-linear bg-top pt-[100px] pb-[50px]"
        id="testimonial"
      >
        <div className="container">
          <Flexbox
            align="col"
            center={false}
            gap={5}
            className="pb-[60px] w-[70%] overflow-hidden"
          >
            <Title title={testimonials.title[locale]} className="text-white" />
            <Heading
              heading={testimonials.heading[locale]}
              className="text-white"
            />
          </Flexbox>

          <TestimonialCarousel lang={locale} />
        </div>
      </section>

      {/* result */}
      <section className="pt-[50px] pb-[100px]" id="result">
        <div className="container">
          <Flexbox
            align="col"
            center={false}
            gap={5}
            className="w-[70%] mb-10 lg:w-full overflow-hidden"
          >
            <Title title={result.title[locale]} />
            <Heading heading={result.heading[locale]} />
          </Flexbox>

          <Flexbox className="py-[10px] !gap-[30px] lg:!flex-col">
            <Compare
              before="/images/teeth-before.jpg"
              after="/images/teeth-after.jpg"
              className="w-full h-[390px]"
            />
            <Compare
              before="/images/teeth-before2.jpg"
              after="/images/teeth-after2.jpg"
              className="w-full h-[390px]"
            />
          </Flexbox>
        </div>
      </section>

      {/* faqs */}
      <section className="bg-secondary py-[100px]" id="faqs">
        <div className="container">
          <Flexbox className="xl:!flex-col xl:!items-start">
            <div className="w-1/2 xl:w-full xl:mb-5">
              <Flexbox
                align="col"
                center={false}
                gap={5}
                className="mb-[30px] overflow-hidden"
              >
                <Title title={faqs.title[locale]} />
                <Heading heading={faqs.heading[locale]} />
                <motion.p
                  className="text-sm text-textColor"
                  variants={SlideRight}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 1, ease: "easeInOut" }}
                  viewport={{ once: true }}
                >
                  {faqs.desc[locale]}
                </motion.p>
              </Flexbox>
              <Flexbox
                gap={6}
                center={false}
                className="p-[40px] xl:p-[30px] lg:p-5 lg:w-full rounded-[40px] bg-white w-max lg:hidden overflow-hidden"
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
                  <p className="text-sm text-textColor">
                    {faqs.call.desc[locale]}
                  </p>
                  <h1 className="text-[22px] lg:text-md leading-[1.2em] font-semibold">
                    {faqs.call.title[locale]}
                  </h1>
                  <Link
                    href={`tel:${callNumber}`}
                    className="text-sm text-textColor"
                  >
                    {callNumber}
                  </Link>
                </Flexbox>
              </Flexbox>
            </div>
            <FAQs lang={locale} />
          </Flexbox>
        </div>
      </section>

      {/* map */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.098203674853!2d69.28012677587546!3d41.328477871307385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b056ebc5bc3%3A0x7c1de5abb05cb17!2sBarno%20clinic!5e0!3m2!1sru!2s!4v1747379019543!5m2!1sru!2s"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="border-none w-full h-[500px]"
      ></iframe>
    </>
  );
}
