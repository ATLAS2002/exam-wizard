import * as React from "react";

import { cn } from "~/lib/utils";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, children, id, ...props }, ref) => {
    return (
      <div className="relative h-full w-full bg-stone-400">
        <input
          id={id}
          type={type}
          className={cn(
            "absolute flex h-10 w-full rounded-md bg-background px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
            className,
          )}
          ref={ref}
          {...props}
        />
        {children && (
          <label
            htmlFor={id}
            className="absolute right-0 h-full w-fit cursor-text"
          >
            {children}
          </label>
        )}
      </div>
    );
  },
);
Input.displayName = "Input";

export { Input };
