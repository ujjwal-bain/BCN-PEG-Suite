"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

interface FlipCardProps {
  title: string
  // description: string
  detailedInfo: string
  logoSrc: string
  link?: string
}

export default function FlipCard({ title, detailedInfo, logoSrc, link }: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div className="h-[400px] w-full perspective-1000 cursor-pointer" onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}>
      <div
        className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${isFlipped ? "rotate-y-180" : ""
          }`}
      >
        {/* Front of card */}
        <div className="absolute w-full h-full backface-hidden border rounded-lg shadow-md flex flex-col overflow-hidden">
          <div className="h-2 bg-primary w-full" />
          <div className="p-6 flex flex-col items-center text-center flex-grow">
            <div className="w-16 h-16 mt-12 relative">
              <Image src={logoSrc || "/placeholder.svg"} alt={`${title} logo`} fill className="object-contain" />
            </div>
            <h3 className="text-xl font-bold mt-4">{title}</h3>
            {/* <p className="text-muted-foreground text-sm flex-grow">{description}</p> */}
            {/* <p className="text-xs text-primary mt-auto">Hover to see details</p> */}
          </div>
        </div>

        {/* Back of card */}
        <div className="absolute w-full h-full backface-hidden border rounded-lg shadow-md flex flex-col overflow-hidden rotate-y-180">
          <div className="h-2 bg-primary w-full" />
          <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-xl font-bold mb-4">{title}</h3>
            <div className="overflow-auto flex-grow">
              <p className="text-muted-foreground text-sm">{detailedInfo}</p>
            </div>
            {/* <div className="mt-4 pt-4 border-t w-full" onClick={(e) => e.stopPropagation()}> */}
            <div className="mt-4 pt-4 w-full" onClick={(e) => e.stopPropagation()}>
              {link && (
                <Button asChild className="w-full">
                  <Link href={link}>
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

