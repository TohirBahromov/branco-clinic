"use client";

import { cn } from "@/lib/utils";
import { useState, useRef, useEffect } from "react";
import Icon from "./Icon";
import * as motion from "motion/react-client";
import { Fade } from "@/lib/settings/motion";

interface Props {
  before: string;
  after: string;
  className?: string;
}

const Compare = ({ before, after, className }: Props) => {
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging || !containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - containerRect.left;
    const percentage = Math.min(
      Math.max((x / containerRect.width) * 100, 0),
      100
    );
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging || !containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const x = e.touches[0].clientX - containerRect.left;
    const percentage = Math.min(
      Math.max((x / containerRect.width) * 100, 0),
      100
    );
    setSliderPosition(percentage);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchend", handleMouseUp);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchend", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging]);

  return (
    <motion.div
      variants={Fade}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 2, ease: "backInOut" }}
      viewport={{ once: true }}
      ref={containerRef}
      className={cn(
        "relative w-full h-full xl:aspect-video xl:h-auto rounded-[40px] overflow-hidden",
        className
      )}
    >
      {/* Bottom image (before) */}
      <div
        className="absolute inset-0 w-full h-full bg-no-repeat bg-center bg-cover"
        style={{ backgroundImage: `url(${before})` }}
      ></div>

      {/* Top image (after) - fixed position with clip */}
      <div className="absolute inset-0 w-full h-full">
        <div
          className="absolute inset-0 h-full bg-no-repeat bg-center bg-cover"
          style={{
            clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
            backgroundImage: `url(${after})`,
          }}
        ></div>
      </div>

      {/* Dragger line */}
      <div
        className="absolute top-0 h-full w-1 bg-white/50 cursor-ew-resize"
        style={{ left: `${sliderPosition}%` }}
      >
        {/* Dragger circle */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full border-[3px] border-white flex items-center justify-center bg-primary cursor-grab active:cursor-grabbing"
          onMouseDown={handleMouseDown}
          onTouchStart={handleMouseDown}
        >
          <Icon
            svg="/svg/icons/left-right.svg"
            width={20}
            height={20}
            color="#fff"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Compare;
