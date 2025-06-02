import Icon from "../Icon";
import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  icon: string;
  shape: "circle" | "square";
  size?: number;
  iconSize?: number;
  iconColor?: string;
  className?: string;
  children?: ReactNode;
}

const IconHolder = ({
  icon,
  shape,
  size = 50,
  iconSize = 20,
  iconColor = "#fff",
  className,
  children,
  ...props
}: Props) => {
  return (
    <div
      className={cn(
        `bg-accent ${
          shape === "circle"
            ? "rounded-full before:rounded-full"
            : "rounded-[15px] before:rounded-[15px]"
        } flex items-center justify-center cursor-pointer relative overflow-hidden isolate before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-0 before:h-0 hover:before:w-full hover:before:h-full before:bg-primary before:z-[-1] transition-all before:duration-300`,
        className
      )}
      style={{
        width: size + "px",
        height: size + "px",
        minWidth: size + "px",
        minHeight: size + "px",
      }}
      {...props}
    >
      <Icon svg={icon} width={iconSize} height={iconSize} color={iconColor} />
      {children}
    </div>
  );
};

export default IconHolder;
