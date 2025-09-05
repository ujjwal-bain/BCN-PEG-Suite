// components/VendorCard.tsx
"use client";

import React from "react";
import Link from "next/link";
import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

export interface Vendor {
  logo: string;
  name: string;
  //   title: string;
  email?: string;
  description?: string;
}

interface VendorCardProps {
  vendor: Vendor;
  imageHeight?: number;
  imageWidth?: number;
}

const VendorCard: React.FC<VendorCardProps> = ({ vendor, imageHeight = 50, imageWidth = 50 }) => {
  return (
    <Card className="flex flex-col md:flex-row items-center justify-between p-5 border shadow-xs hover:shadow-sm transition gap-4 max-w-lg w-full">
      <div className="flex items-center gap-4 flex-1 min-w-0 w-full">
        <div className="flex-shrink-0">
          <img
            src={vendor.logo}
            alt={vendor.name}
            height={imageHeight}
            width={imageWidth}
            style={{ height: imageHeight, width: imageWidth }}
            className="object-contain"
          />
        </div>
        <div className="text-left flex-1 min-w-0">
          <CardTitle className="text-base truncate">{vendor.name}</CardTitle>
          <CardDescription className="text-sm text-muted-foreground">
            {vendor.description}
          </CardDescription>
        </div>
      </div>

      {vendor.email && (
        <Button
          asChild
          className="text-sm px-3 py-1 flex items-center gap-2 w-full md:w-auto justify-center"
        >
          <Link
            href={`mailto:${vendor.email}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Reach out <ArrowUpRight className="h-4 w-4" />
          </Link>
        </Button>
      )}
    </Card>
  );
};

export default VendorCard;