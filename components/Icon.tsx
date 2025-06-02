import { cn } from "@/lib/utils";

type CustomIconProps = {
  svg: string;
  width?: number;
  height?: number;
  className?: string;
  color?: string;
} & React.HTMLAttributes<HTMLDivElement>;

const Icon = ({
  svg,
  width = 50,
  height = 50,
  className,
  color = "#666666",
  ...props
}: CustomIconProps) => {
  return (
    <div
      className={cn(``, className)}
      style={{
        width: width,
        height: height,
        mask: `url(${svg}) no-repeat center`,
        backgroundColor: color,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        maskSize: "contain",
      }}
      {...props}
    ></div>
  );
};

export default Icon;
