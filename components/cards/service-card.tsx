import Image from "next/image";
import Icon from "../Icon";
import Flexbox from "../ui/box";
import IconHolder from "../ui/icon-holder";
import Link from "next/link";
import * as motion from "motion/react-client";
import { SlideTop } from "@/lib/settings/motion";

interface Props {
  title: string;
  desc: string;
  icon: string;
  img: string;
  link: string;
  index: number;
}

const ServiceCard = ({ title, desc, icon, img, link, index }: Props) => {
  return (
    <motion.article
      className="border border-divider bg-white p-10 xl:p-[30px] md:p-5 flex flex-col gap-5 rounded-[40px] group"
      variants={SlideTop}
      transition={{
        duration: 1,
        ease: "easeInOut",
        delay: 0.08 * index,
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <Flexbox className="pb-5 border-b border-divider">
        <IconHolder
          icon={icon}
          iconColor="#fff"
          shape="square"
          size={50}
          className="mr-4 group-hover:before:w-full group-hover:before:h-full"
          iconSize={40}
        />
        <Link href={link} className="text-md font-semibold text-primary">
          {title}
        </Link>
        <Icon
          svg="/svg/icons/left.svg"
          className="duration-300 rotate-[135deg] group-hover:rotate-180 ml-[10px]"
          width={34}
          height={34}
          color="#5E5EEE"
        />
      </Flexbox>

      <Flexbox align="col" center={false} gap={8}>
        <p className="text-sm text-textColor">{desc}</p>

        <div className="relative overflow-hidden w-full aspect-video rounded-[30px]">
          <Image
            src={img}
            alt="Service section image"
            fill
            objectFit="cover"
            className="duration-300 rounded-[30px] group-hover:scale-110"
          />
        </div>
      </Flexbox>
    </motion.article>
  );
};

export default ServiceCard;
