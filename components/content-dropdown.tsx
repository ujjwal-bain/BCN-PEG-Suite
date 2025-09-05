"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronDown, ExternalLink, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import type { FSoffering } from "@/lib/financial-services"
import { cn } from "@/lib/utils"

interface FSdropdownProps {
  offerings: FSoffering[]
  className?: string
}

export default function FSdropdown({ offerings, className }: FSdropdownProps) {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({})

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  return (
    <div className={cn("space-y-4", className)}>
      {offerings.map((offering) => (
        <Collapsible
          key={offering.id}
          open={openItems[offering.id]}
          onOpenChange={() => toggleItem(offering.id)}
          className="border rounded-lg overflow-hidden"
        >
          <CollapsibleTrigger className="flex items-start justify-between w-full p-4 text-left hover:bg-muted/50 transition-colors">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 relative flex-shrink-0 mt-1">
                <Image
                  src={
                    offering.logoSrc || `/placeholder.svg?height=48&width=48&text=${encodeURIComponent(offering.title)}`
                  }
                  alt={`${offering.title} logo`}
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold mt-3">{offering.title}</h3>
                {/* <p className="text-muted-foreground line-clamp-2 text-sm mt-1">{offering.description}</p> */}
              </div>
            </div>
            <ChevronDown
              className={`h-5 w-5 text-muted-foreground flex-shrink-0 transition-transform duration-200 ${openItems[offering.id] ? "rotate-180" : ""
                }`}
            />
          </CollapsibleTrigger>
          <CollapsibleContent>
            <div className="p-4 pt-0 mt-0 pl-20">
              <div className="mb-6 mt-1">
                <p className="text-muted-foreground">{offering.description}</p>
              </div>

              <div className="mb-2">
                <h4 className="text-sm font-medium mb-2">Tools & Databases</h4>
                <div className="flex flex-wrap gap-x-4 gap-y-0 items-center">
                  {offering.tools.map((tool) => (
                    <div
                      key={tool.id}
                      // className="w-16 h-16 relative flex items-center justify-center p-2 bg-white rounded-md shadow-sm hover:shadow-md transition-all duration-200"
                      className="w-20 h-20 relative flex items-center justify-center"
                      title={tool.name}
                    >
                      <Image
                        src={
                          tool.logoSrc || `/placeholder.svg?height=64&width=64&text=${encodeURIComponent(tool.name)}`
                        }
                        alt={`${tool.name} logo`}
                        fill
                        className="object-contain p-1"
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-wrap gap-6">
                <Button asChild>
                  <a href={offering.learnMoreUrl} target="_blank" rel="noopener noreferrer">
                    Learn More <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>
      ))}
    </div>
  )
}
