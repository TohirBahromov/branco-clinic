import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import * as motion from "motion/react-client";

import { cn } from "@/lib/utils";
import { HTMLMotionProps } from "motion/react";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[100px] text-sm font-bold transition-colors disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 relative duration-500 ease-in-out overflow-hidden isolate hover:delay-200",
  {
    variants: {
      variant: {
        default:
          "bg-accent border border-accent hover:border-primary text-white before:duration-800 before:ease-in-out before:w-full before:h-0 hover:before:h-[1000%] before:bg-transparent hover:before:bg-primary before:rotate-45 before:z-[-1] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 hover:bg-transparent",
        outline:
          "bg-transparent border border-white text-white before:duration-800 before:ease-in-out before:w-full before:h-0 hover:before:h-[1000%] before:bg-transparent hover:before:bg-primary before:rotate-45 before:z-[-1] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 hover:bg-transparent",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-[57px] px-[30px] lg:h-[50px]",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends HTMLMotionProps<"button">,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    return (
      <motion.button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      ></motion.button>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
