"use client";

import * as React from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";

import { cn } from "~/lib/utils";

type SeparatorProps = React.ElementRef<typeof SeparatorPrimitive.Root>;

const Separator = React.forwardRef<
  SeparatorProps,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
>(
  (
    { className, orientation = "horizontal", decorative = true, ...props },
    ref,
  ) => (
    <SeparatorPrimitive.Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "shrink-0 bg-border",
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        className,
      )}
      {...props}
    />
  ),
);
Separator.displayName = SeparatorPrimitive.Root.displayName;

const SeparatorWithText: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => {
  return (
    <div className={cn("my-5 flex select-none items-center", className)}>
      <div className="w-1/2 pr-2">
        <Separator />
      </div>
      {children}
      <div className="w-1/2 pl-2">
        <Separator />
      </div>
    </div>
  );
};

export { Separator, SeparatorWithText };
