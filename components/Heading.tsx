"use client";

import { useState } from "react";
import * as motion from "motion/react-client";
import { cn } from "@/lib/utils";

interface Props {
  heading: string;
  className?: string;
}

const Heading = ({ heading, className }: Props) => {
  const [letters, setLetters] = useState<string[][]>(() => {
    const words = heading.split(" ");
    return words.map((item) => item.split(""));
  });

  return (
    <div className="flex flex-wrap gap-2">
      {letters.length ? (
        letters.map((word, index1) => {
          return (
            <div
              key={index1}
              className={cn(
                `text-black flex items-center gap-[1px]`,
                className
              )}
            >
              {word.map((letter, index2) => {
                return (
                  <motion.p
                    key={index2}
                    initial={{ opacity: 0, transform: "translateX(50px)" }}
                    whileInView={{ opacity: 1, transform: "translateX(0px)" }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1,
                      ease: "backInOut",
                      delay: index1 * 0.1 + index2 * 0.01,
                    }}
                    className="text-2xl xl:text-1xl lg:text-[28px] font-bold"
                  >
                    {letter}
                  </motion.p>
                );
              })}
            </div>
          );
        })
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Heading;
