"use client";

import React from "react";
import Link from "next/link";
import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

export interface Expert {
  profile?: string;
  name: string;
  title: string;
  initials?: string;
  email: string;
}

interface ExpertCardProps {
  expert: Expert;
}

const ExpertCard: React.FC<ExpertCardProps> = ({ expert }) => {
  return (
    <Card className="flex flex-col md:flex-row items-center justify-between p-5 border shadow-xs hover:shadow-sm transition gap-4 w-full">
      {/* Profile Picture + Name & Title */}
      <div className="flex items-center gap-3 flex-1 min-w-0 w-full">
        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center overflow-hidden">
          {expert.profile ? (
            <img
              src={expert.profile}
              alt={expert.name}
              className="h-full w-full object-cover"
            />
          ) : (
            <span className="font-bold text-primary">{expert.initials}</span>
          )}
        </div>
        <div className="text-left flex-1 min-w-0">
          <CardTitle className="text-base truncate">{expert.name}</CardTitle>
          <CardDescription className="text-sm text-muted-foreground truncate">
            {expert.title.split(",")[0]}
            {expert.title.includes(",") && (
              <>
                <br />
                {expert.title.split(",")[1].trim()}
              </>
            )}
          </CardDescription>
        </div>
      </div>

      {/* Button */}
      <Button
        asChild
        className="text-sm px-3 py-1 flex items-center gap-2 w-full md:w-auto justify-center"
      >
        <Link
          href={`mailto:BCNPEGStaffing@Bain.com?cc=${expert.email}&subject=Staffing Request for {Project name} {Case code}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Reach out <ArrowUpRight className="h-4 w-4" />
        </Link>
      </Button>
    </Card>
  );
};

export default ExpertCard;