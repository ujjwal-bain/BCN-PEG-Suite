"use client"

import { useState } from "react"
import Image from "next/image"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import type { Category, Offering } from "@/lib/healthcare-data"

interface NestedOfferingsAccordionProps {
  categories: Category[]
}

export default function NestedOfferingsAccordion({ categories }: NestedOfferingsAccordionProps) {
  return (
    <div className="space-y-6">
      {categories.map((category) => (
        <CategorySection key={category.id} category={category} />
      ))}
    </div>
  )
}

function CategorySection({ category }: { category: Category }) {
  const [activeTab, setActiveTab] = useState(category.subCategories[0]?.id || "")

  return (
    <Card className="overflow-hidden">
      <div className="h-2 bg-primary w-full" />
      <CardHeader className="flex flex-row items-start gap-4 pb-2">
        {/* <div className="w-12 h-12 relative flex-shrink-0">
          <Image
            src={category.logoSrc || "/placeholder.svg?height=48&width=48"}
            alt={`${category.title} logo`}
            fill
            className="object-contain"
          />
        </div> */}
        <div className="flex-1">
          <CardTitle className="text-2xl">{category.title}</CardTitle>
          <CardDescription className="text-base mt-1">{category.description}</CardDescription>
        </div>
        {category.externalLink && (
          <Button variant="outline" size="sm" asChild className="flex-shrink-0">
            <a href={category.externalLink} target="_blank" rel="noopener noreferrer">
              Visit <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        )}
      </CardHeader>
      <CardContent>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="flex flex-col gap-2 mb-6 sm:grid sm:grid-cols-3 sm:gap-0">
            {category.subCategories.map((subCategory) => (
              <TabsTrigger key={subCategory.id} value={subCategory.id}>
                {subCategory.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {category.subCategories.map((subCategory) => (
            <TabsContent key={subCategory.id} value={subCategory.id} className="space-y-6">
              <div className="flex items-start gap-4 mb-6">
                {/* <div className="w-10 h-10 relative flex-shrink-0">
                  <Image
                    src={subCategory.logoSrc || "/placeholder.svg?height=40&width=40"}
                    alt={`${subCategory.title} logo`}
                    fill
                    className="object-contain"
                  />
                </div> */}
                <div className="flex-1">
                  <h3 className="text-xl font-semibold">{subCategory.title}</h3>
                  <p className="text-muted-foreground">{subCategory.description}</p>
                </div>
                {subCategory.externalLink && (
                  <Button variant="outline" size="sm" asChild className="flex-shrink-0">
                    <a href={subCategory.externalLink} target="_blank" rel="noopener noreferrer">
                      Learn more <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                )}
              </div>

              <Accordion type="multiple" className="w-full">
                {subCategory.offerings.map((offering) => (
                  <OfferingItem key={offering.id} offering={offering} />
                ))}
              </Accordion>
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  )
}

function OfferingItem({ offering }: { offering: Offering }) {
  return (
    <AccordionItem value={offering.id} className="border rounded-md mb-3 overflow-hidden">
      <AccordionTrigger className="px-4 py-3 hover:bg-muted/50 data-[state=open]:bg-muted/50">
        <div className="flex items-center gap-3 text-left">
          {/* <div className="w-8 h-8 relative flex-shrink-0">
            <Image
              src={offering.logoSrc || "/placeholder.svg?height=32&width=32"}
              alt={`${offering.title} logo`}
              fill
              className="object-contain"
            />
          </div> */}
          <span>{offering.title}</span>
        </div>
      </AccordionTrigger>
      <AccordionContent className="px-4 pt-2 pb-4">
        <div className="pl-11">
          <p className="text-muted-foreground mb-4">{offering.description}</p>
          {offering.externalLink && (
            <Button variant="outline" size="sm" asChild>
              <a href={offering.externalLink} target="_blank" rel="noopener noreferrer">
                Learn more <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          )}
        </div>
      </AccordionContent>
    </AccordionItem>
  )
}

