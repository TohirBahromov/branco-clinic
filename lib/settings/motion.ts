export const Fade = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const SlideTop = {
  hidden: { opacity: 0, transform: "translateY(120px)" },
  visible: { opacity: 1, transform: "translateY(0px)" },
};

export const SlideBottom = {
  hidden: { opacity: 0, transform: "translateY(-120px)" },
  visible: { opacity: 1, transform: "translateY(0px)" },
};

export const SlideRight = {
  hidden: { opacity: 0, transform: "translateX(-120px)" },
  visible: { opacity: 1, transform: "translateX(0px)" },
};

export const SlideLeft = {
  hidden: { opacity: 0, transform: "translateX(120px)" },
  visible: { opacity: 1, transform: "translateX(0px)" },
};
