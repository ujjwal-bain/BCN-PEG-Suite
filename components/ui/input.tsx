import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "w-full pl-10 py-2 rounded-full bg-background text-sm placeholder:text-muted-foreground border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#C00000] focus:ring-inset focus:border-transparent",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };