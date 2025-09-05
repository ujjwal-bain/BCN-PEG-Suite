// components/ResponsiveImageSection.tsx

import React from "react";
import { cn } from "@/lib/utils"; // utility to combine classNames

interface ExecSummaryProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  padding?: string; // override default spacing
}

export const ExecSummary: React.FC<ExecSummaryProps> = ({
  src,
  alt,
  className = "",
  containerClassName = "",
  padding = "py-12 md:py-24"
}) => {
  return (
    <section className={cn("w-full", padding)}>
      <div className={cn("container px-4 md:px-6", containerClassName)}>
        <div className="w-full flex justify-center">
          <img
            src={src}
            alt={alt}
            className={cn(
              "w-full max-w-full sm:max-w-3xl md:max-w-5xl lg:max-w-6xl h-auto rounded-lg shadow-xl",
              className
            )}
          />
        </div>
      </div>
    </section>
  );
};
