"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

interface MarketMapCategory {
  category: string
  items: { text: string; bold?: boolean }[]
}

interface MarketMapDropdownSectionProps {
  data: MarketMapCategory[]
}

export default function MarketMapDropdownSection({ data }: MarketMapDropdownSectionProps) {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({})

  const toggleItem = (category: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [category]: !prev[category],
    }))
  }

  return (
    <div className="space-y-4">
      {data.map((group) => (
        <Collapsible
          key={group.category}
          open={openItems[group.category]}
          onOpenChange={() => toggleItem(group.category)}
          className="border rounded-lg"
        >
          <CollapsibleTrigger className="flex justify-between w-full p-4 text-left hover:bg-muted/50 transition-colors">
            <h3 className="text-lg font-semibold">{group.category}</h3>
            <ChevronDown
              className={`h-5 w-5 text-muted-foreground transition-transform duration-200 ${
                openItems[group.category] ? "rotate-180" : ""
              }`}
            />
          </CollapsibleTrigger>

          <CollapsibleContent>
            <ul className="pl-6 pr-4 pb-4 space-y-2">
              {group.items.map((item, index) => (
                <li key={index} className={item.bold ? "font-semibold" : "text-muted-foreground"}>
                  {item.text}
                </li>
              ))}
            </ul>
          </CollapsibleContent>
        </Collapsible>
      ))}
    </div>
  )
}
