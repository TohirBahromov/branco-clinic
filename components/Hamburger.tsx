"use client";

import { useEffect } from "react";
import IconHolder from "./ui/icon-holder";
import { useMobileStore } from "@/store/mobile";

const Hamburger = () => {
  const { isOpen, open, close } = useMobileStore();

  const handleOpen = () => {
    if (isOpen) {
      close();
    } else {
      open();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [isOpen]);

  return (
    <IconHolder
      icon="/svg/icons/menu.svg"
      shape="circle"
      size={40}
      onClick={handleOpen}
      className="hidden xl:flex"
    />
  );
};

export default Hamburger;
