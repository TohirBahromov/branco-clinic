"use client";

import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

interface Props {
  className?: string;
  end: number;
}

const Counter = ({ className, end }: Props) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  return (
    <div ref={ref} className={cn(``, className)}>
      {inView && <CountUp end={end} />}
    </div>
  );
};

export default Counter;
