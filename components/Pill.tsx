"use client";

import React from "react";
import { Info } from "lucide-react";

export interface PillProps {
  icon?: React.ReactNode;
  text: string;
  className?: string;
}

const Pill: React.FC<PillProps> = ({ icon, text, className = "" }) => {
  return (
    <div className={`px-4 py-2 bg-gray-200 text-black text-xs rounded-full flex items-center gap-2 ${className}`}>
      {icon || <Info className="h-4 w-4" />}
      {text}
    </div>
  );
};

export default Pill;
