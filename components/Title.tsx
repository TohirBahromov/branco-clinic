import React from "react";
import Flexbox from "./ui/box";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface Props {
  title: string;
  className?: string;
}

const Title = ({ title, className }: Props) => {
  return (
    <Flexbox gap={2} className={cn(`text-accent`, className)}>
      <Image
        src="/svg/icons/title-decorator.svg"
        alt="title icon"
        width={18}
        height={18}
      />

      <h1 className="text-title uppercase">{title}</h1>
    </Flexbox>
  );
};

export default Title;
