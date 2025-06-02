import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import * as motion from "motion/react-client";
import { HTMLMotionProps } from "motion/react";

type Props = {
  children: ReactNode;
  align?: "row" | "col";
  center?: boolean;
  gap?: number;
  className?: string;
} & HTMLMotionProps<"div">;

const Flexbox = ({
  children,
  align = "row",
  center = true,
  gap = 0,
  className,
  ...props
}: Props) => {
  return (
    <motion.div
      className={cn(
        `flex ${align == "col" ? "flex-col" : ""} ${
          center ? "items-center" : ""
        }`,
        className
      )}
      style={{ gap: `${4 * gap}px` }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Flexbox;
