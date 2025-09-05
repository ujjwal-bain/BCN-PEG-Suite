"use client";

import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface OfferingLink {
  title: string;
  path: string;
}

interface NavigationButtonsProps {
  previousOffering?: OfferingLink | null;
  nextOffering?: OfferingLink | null;
}

export default function NavigationButtons({ previousOffering, nextOffering }: NavigationButtonsProps) {
  return (
    <div className="container px-4 md:px-6 py-4 border-b">
      <div className="flex justify-between items-center">
        {/* Previous Offering */}
        {previousOffering ? (
          <Button variant="ghost" asChild className="flex items-center gap-2">
            <Link href={previousOffering.path}>
              <ChevronLeft className="h-4 w-4" />
              <span className="hidden sm:inline">Previous:</span> {previousOffering.title}
            </Link>
          </Button>
        ) : (
          <div className="w-32" /> // Keeps layout consistent
        )}

        {/* Next Offering */}
        {nextOffering ? (
          <Button variant="ghost" asChild className="flex items-center gap-2">
            <Link href={nextOffering.path}>
              <span className="hidden sm:inline">Next:</span> {nextOffering.title}
              <ChevronRight className="h-4 w-4" />
            </Link>
          </Button>
        ) : (
          <div className="w-32" /> // Keeps layout consistent
        )}
      </div>
    </div>
  );
}
