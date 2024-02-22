import * as React from "react";
import Link from "next/link";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "~/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./tooltip";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        solid:
          "text-md w-full bg-white font-bold mb-6 text-slate-950 transition duration-300 hover:bg-white hover:opacity-70 active:scale-90",
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "text-md mb-6 h-fit w-full border-2 bg-transparent font-bold text-slate-50 transition duration-300 hover:bg-transparent hover:opacity-70 active:scale-90",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        spring:
          "border-b-4 text-white font-regular text-xl relative transition hover:brightness-90 active:border-0 active:pb-7 active:mt-1 motion-safe:duration-300",
        none: "",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
        none: "w-fit",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  href?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, asChild = false, children, href, ...props },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";
    if (href) {
      return (
        <Link href={href}>
          <Comp
            className={cn(buttonVariants({ variant, size, className }))}
            ref={ref}
            {...props}
          >
            {children}
          </Comp>
        </Link>
      );
    }

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </Comp>
    );
  },
);
Button.displayName = "Button";

interface SmartButtonProps extends ButtonProps {
  hoverText?: React.ReactNode;
  tooltipStyles?: string;
  side?: "top" | "left" | "right" | "bottom";
}

const SmartButton: React.FC<SmartButtonProps> = ({
  children,
  tooltipStyles,
  hoverText,
  variant,
  size,
  className,
  side = "top",
  ...props
}) => {
  return (
    <TooltipProvider>
      <Tooltip disableHoverableContent delayDuration={1200}>
        <TooltipTrigger
          className={cn(buttonVariants({ variant, size, className }))}
          {...props}
        >
          {children}
        </TooltipTrigger>
        {hoverText && (
          <TooltipContent
            side={side}
            className={cn("h-fit w-fit px-2 py-0 lowercase", tooltipStyles)}
          >
            <code className="text-[70%]">{hoverText}</code>
          </TooltipContent>
        )}
      </Tooltip>
    </TooltipProvider>
  );
};

export { Button, SmartButton, buttonVariants };
