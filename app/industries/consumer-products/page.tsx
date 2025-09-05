"use client"

import Link from "next/link"
import { TrendingUp, LayoutGrid, MapPin, BarChart4, Tag, LineChart, ListChecks, PackageOpen, Percent, BadgeDollarSign, Zap, LayoutDashboard, SlidersHorizontal, Download, ArrowRight, ExternalLink } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Coming_Soon } from "next/font/google"
import NestedOfferingsAccordion from "@/components/nested-offerings-accordion"
import Image from "next/image";
import ScrollingTestimonials from "@/components/scrolling-testimonials"
import { getTestimonialsByOffering } from "@/lib/testimonials-data"
import test from "node:test"
import ExpertCard from "@/components/expert-card"
import { consumerHeroProducts, consumerOfferings } from "@/lib/consumer-products"
import { selfServeTools } from "@/lib/financial-services"
import { bainExperts } from "@/lib/financial-services"
import { bcnExperts } from "@/lib/consumer-products"
import { otherExperts } from "@/lib/financial-services"
import FSdropdown from "@/components/content-dropdown"
import { ExecSummary } from "@/components/execSummary"
const testimonials = getTestimonialsByOffering("generalTestimonials")
const iconMap: Record<string, LucideIcon> = {
  TrendingUp,
  LayoutGrid,
  MapPin,
  BarChart4,
  Tag,
  LineChart,
  ListChecks,
  PackageOpen,
  Percent,
  BadgeDollarSign,
  Zap,
  LayoutDashboard,
  SlidersHorizontal,
  ArrowRight,
  ExternalLink,
  Download
};


export default function consumerProductsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 bg-gradient-to-r from-primary/15 via-primary/5 to-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Consumer products / Retail</h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Evaluate target company’s market position across brand, category, SKU, and workforce using pricing, sales, surveys, benchmarks, digital marketing metrics, and regulatory impact analysis
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Summary */}
      <ExecSummary
        src="/Decks/Consumer Products/ExecSummary.png"
        alt="FS Executive Summary"
      />

      {/* Product Catalog */}
      <section className="w-full py-12 md:py-24 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            {/* Left Column - Heading & Description */}
            <div className="space-y-4 text-left">
              <h2 className="text-3xl font-bold tracking-tighter">BCN PEG product catalog</h2>
              <p className="max-w-lg text-muted-foreground text-sm md:text-base lg:text-lg">
                Conduct a comprehensive evaluation of a target company’s market position across brand, category, and SKU levels through pricing, sales, and distribution metrics. Leverage surveys and customer reviews to evaluate brand awareness, satisfaction, and decision drivers. Also, benchmark workforce trends, compensation, and functional structures and assess competitive positioning, digital marketing effectiveness, and regulatory impacts
              </p>
              <div className="pt-2">
                <Button className="mt-4" asChild>
                  <Link href="mailto:BCNPEGStaffing@Bain.com?subject=BCN Support for Project {Project name} {Case code}" target="_blank" rel="noopener noreferrer">
                    Request BCN PEG Staffing <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right Column - PDF Preview Card */}
            <Card className="overflow-hidden flex flex-col h-[500px]">
              <div className="h-2 bg-primary" />
              <CardHeader>
                <div className="flex items-center gap-2">
                  <CardTitle>Consumer products playbook</CardTitle>
                </div>
                <CardDescription>Download the latest playbook for CP&R</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow overflow-hidden">
                <div className="relative w-full h-0 pb-[125%] md:pb-[75%]"> {/* Aspect ratio container */}
                  <iframe
                    src="/Decks/Consumer Products/BCN PEG CPR Sector Play Book.pdf#toolbar=0&navpanes=0&scrollbar=0&page=1&view=FitH"
                    className="absolute inset-0 w-full h-full rounded-md border"
                  />
                </div>
              </CardContent>
              <CardFooter className="mt-auto border-t pt-4">
                <Button asChild className="w-full">
                  <Link href="/Decks/Consumer Products/BCN PEG CPR Sector Play Book.pdf" target="_blank" rel="noopener noreferrer">
                    Open deck <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

          </div>
        </div>
      </section>

      {/* Self-service Tools Section */}
      {/* <section className="w-full py-12 md:py-24 bg-muted/50">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter mb-8">Self-service Tools</h2>
          <div className="grid gap-6 px-4">
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-start">
              {selfServeTools.map((category) => (
                <div
                  key={category.name}
                  className="overflow-hidden flex flex-col h-[320px] border rounded-lg shadow-md relative opacity-50"
                >
                  <div className="h-2 bg-primary" />
                  <div className="p-6 flex flex-col items-center justify-center text-center flex-grow">
                    <div className="w-16 h-16 relative">
                      <Image src={category.logo} alt={`${category.name} logo`} fill className="object-contain" />
                    </div>
                    <h3 className="text-xl font-bold mt-4">{category.name}</h3>
                  </div>
                  <div className="mt-auto border-t pt-4 w-full p-4">
                    <div className="text-center text-gray-500">Coming Soon</div>
                  </div>
                  <div className="absolute inset-0 bg-gray-200 opacity-50" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* Consumer Hero Products */}
      {consumerHeroProducts.map((assessment, index) => {
        const isRight = index % 2 === 0;
        return (
          <section
            key={assessment.name}
            id={assessment.name.replace(/\s+/g, '')}
            className={`w-full py-12 md:py-24 ${index % 2 === 1 ? 'bg-muted/50' : ''}`}
          >
            <div className="container px-4 md:px-6">
              <div className="grid gap-12 md:grid-cols-2 items-center">
                {isRight ? (
                  <>
                    {/* Left: Description */}
                    <div className="space-y-4 text-left">
                      <h2 className="text-3xl font-bold tracking-tighter">{assessment.name}</h2>
                      <p className="max-w-lg text-muted-foreground text-sm md:text-base lg:text-lg">
                        {assessment.description}
                        <br /><br /> Key components include:
                      </p>
                      <div className="space-y-4 pt-4 max-w-md">
                        {assessment.components.map((item, idx) => {
                          const IconComponent = iconMap[item.logo];
                          return (
                            <div key={idx} className="flex items-start gap-3">
                              <div className="pt-1"><IconComponent className="h-5 w-5 text-primary" /></div>
                              <div>
                                <div className="font-semibold text-gray-900">{item.heading}</div>
                                <div className="text-muted-foreground text-sm">{item.description}</div>
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      <p className="pt-6 text-muted-foreground text-sm">
                        <strong>Data requirements:</strong> {assessment.dataRequirements}
                      </p>
                    </div>

                    {/* Right: PDF Preview */}
                    <Card className="overflow-hidden flex flex-col h-[500px]">
                      <div className="h-2 bg-primary" />
                      <CardHeader>
                        <div className="flex items-center gap-2">
                          <CardTitle>{assessment.name.toLowerCase().includes("consumer pulse") ? "Sample output" : "Product catalog"}</CardTitle>
                        </div>
                        <CardDescription>Download the latest deck for {assessment.name.toLowerCase()}</CardDescription>
                      </CardHeader>
                      <CardContent className="flex-grow overflow-hidden">
                        <div className="relative w-full h-0 pb-[125%] md:pb-[75%]">
                          <iframe
                            src={`${assessment.pdf}#toolbar=0&navpanes=0&scrollbar=0&page=1&view=FitH`}
                            className="absolute inset-0 w-full h-full rounded-md border"
                          />
                        </div>
                      </CardContent>
                      <CardFooter className="mt-auto border-t pt-4">
                        <Button asChild className="w-full">
                          <Link href={assessment.ppt} target="_blank" rel="noopener noreferrer">
                            Open deck <ExternalLink className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  </>
                ) : (
                  <>
                    {/* Left: PDF Preview */}
                    <Card className="overflow-hidden flex flex-col h-[500px]">
                      <div className="h-2 bg-primary" />
                      <CardHeader>
                        <div className="flex items-center gap-2">
                          <CardTitle>{assessment.name.toLowerCase().includes("consumer pulse") ? "Sample output" : "Product catalog"}</CardTitle>
                        </div>
                        <CardDescription>Download the latest deck for {assessment.name.toLowerCase()}</CardDescription>
                      </CardHeader>
                      <CardContent className="flex-grow overflow-hidden">
                        <div className="relative w-full h-0 pb-[125%] md:pb-[75%]">
                          <iframe
                            src={`${assessment.pdf}#toolbar=0&navpanes=0&scrollbar=0&page=1&view=FitH`}
                            className="absolute inset-0 w-full h-full rounded-md border"
                          />
                        </div>
                      </CardContent>
                      <CardFooter className="mt-auto border-t pt-4">
                        <Button asChild className="w-full">
                          <Link href={assessment.ppt} target="_blank" rel="noopener noreferrer">
                            Open deck <ExternalLink className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>

                    {/* Right: Description */}
                    <div className="space-y-4 text-left">
                      <h2 className="text-3xl font-bold tracking-tighter">{assessment.name}</h2>
                      <p className="max-w-lg text-muted-foreground text-sm md:text-base lg:text-lg">
                        {assessment.description}
                        <br /><br /> Key components include:
                      </p>
                      <div className="space-y-4 pt-4 max-w-md">
                        {assessment.components.map((item, idx) => {
                          const IconComponent = iconMap[item.logo];
                          return (
                            <div key={idx} className="flex items-start gap-3">
                              <div className="pt-1"><IconComponent className="h-5 w-5 text-primary" /></div>
                              <div>
                                <div className="font-semibold text-gray-900">{item.heading}</div>
                                <div className="text-muted-foreground text-sm">{item.description}</div>
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      <p className="pt-6 text-muted-foreground text-sm">
                        <strong>Data requirements:</strong> {assessment.dataRequirements}
                      </p>
                    </div>
                  </>
                )}
              </div>
            </div>
          </section>
        );
      })}


      {/* Consumer Products Offerings Section */}
      <section id="fsOtherOfferings" className="w-full py-12 md:py-24 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-10 space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Custom analysis</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto md:text-xl">
              Engage BCN PEG to answer key questions on your CP&R case
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
            {consumerOfferings.map((item) => (
              <Card key={item.id} className="overflow-hidden flex flex-col min-h-[350px]">
                <div className="h-2 bg-primary" />

                <CardHeader>
                  <div className="flex items-center gap-2 min-h-[60px]">
                    <div className="w-10 h-10 relative">
                      <Image src={item.logoSrc} alt={`${item.title} logo`} fill className="object-contain" />
                    </div>
                    <CardTitle>{item.title}</CardTitle>
                  </div>
                  <CardDescription className="min-h-[120px]">{item.description}</CardDescription>
                </CardHeader>

                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-5">
                    {item.tools.slice(0, 3).map((tool) => (
                      <Image
                        key={tool.id}
                        src={tool.logoSrc}
                        alt={tool.name}
                        width={tool.id === "glassdoor" ? 40 : 80}
                        height={tool.id === "glassdoor" ? 40 : 80}
                        className="object-contain"
                      />
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="mt-auto border-t pt-4">
                  <Button asChild className="w-full">
                    <a href={item.learnMoreUrl} target="_blank" rel="noopener noreferrer">
                      Learn more <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Financial Services Offerings Section */}
      {/* <section id="fsOtherOfferings" className="w-full py-12 md:py-24 border-y">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-10 space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Custom Analysis</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto md:text-xl">
              Engage BCN PEG to answer key questions on your FS case
            </p>
          </div>
          <FSdropdown offerings={FSofferings} />
        </div>
      </section> */}

      {/* Case studies Section */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">Case studies</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Sample Consumer product cases from BCN PEG
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <Card className="overflow-hidden flex flex-col h-[380px]">
              <div className="h-2 bg-primary" />
              <CardHeader>
                <div className="flex items-center gap-2">
                  <CardTitle>Consumer products deck 1</CardTitle>
                </div>
                {/* <CardDescription>Short description</CardDescription> */}
              </CardHeader>
              <CardContent className="flex-grow overflow-hidden">
                <div className="relative w-full h-0 pb-[125%] md:pb-[75%]">
                  <iframe
                    src="/Decks/Consumer Products/Consumer products_Sample deck 1.pdf#toolbar=0&navpanes=0&scrollbar=0&page=1&view=FitH"
                    className="w-full h-[350px] rounded-md border"
                  />
                </div>
              </CardContent>
              <CardFooter className="mt-auto border-t pt-4">
                <Button asChild className="w-full">
                  <Link href="/Decks/Consumer Products/Consumer products_Sample deck 1.pdf" target="_blank" rel="noopener noreferrer">
                    Open deck <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="overflow-hidden flex flex-col h-[380px]">
              <div className="h-2 bg-primary" />
              <CardHeader>
                <div className="flex items-center gap-2">
                  <CardTitle>Consumer products deck 2</CardTitle>
                </div>
                {/* <CardDescription>Short description</CardDescription> */}
              </CardHeader>
              <CardContent className="flex-grow overflow-hidden">
                <div className="relative w-full h-0 pb-[125%] md:pb-[75%]">
                  <iframe
                    src="/Decks/Consumer Products/Consumer products_Sample deck 2.pdf#toolbar=0&navpanes=0&scrollbar=0&page=1&view=FitH"
                    className="w-full h-[350px] rounded-md border"
                  />
                </div>
              </CardContent>
              <CardFooter className="mt-auto border-t pt-4">
                <Button asChild className="w-full">
                  <Link href="/Decks/Consumer Products/Consumer products_Sample deck 2.pdf" target="_blank" rel="noopener noreferrer">
                    Open deck <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="overflow-hidden flex flex-col h-[380px]">
              <div className="h-2 bg-primary" />
              <CardHeader>
                <div className="flex items-center gap-2">
                  <CardTitle>Consumer products deck 3</CardTitle>
                </div>
                {/* <CardDescription>Short description</CardDescription> */}
              </CardHeader>
              <CardContent className="flex-grow overflow-hidden">
                <div className="relative w-full h-0 pb-[125%] md:pb-[75%]">
                  <iframe
                    src="/Decks/Consumer Products/Consumer products_Sample deck 3.pdf#toolbar=0&navpanes=0&scrollbar=0&page=1&view=FitH"
                    className="absolute inset-0 w-full h-full rounded-md border"
                  />
                </div>
              </CardContent>
              <CardFooter className="mt-auto border-t pt-4">
                <Button asChild className="w-full">
                  <Link href="/Decks/Consumer Products/Consumer products_Sample deck 3.pdf" target="_blank" rel="noopener noreferrer">
                    Open deck <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">Connect with experts</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Collaborate with a BCN PEG Consumer products team, and get your next case powered by experts!
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-5">
              {/* Survey Experts */}
              {/* <div className="space-y-4">
                <h3 className="text-xl font-semibold mb-2">BCN PEG FS Experts</h3> */}
              {bcnExperts.map((expert) => (
                <ExpertCard key={expert.email} expert={expert} />
              ))}
              {/* </div> */}
            </div>
          </div>
        </div>
      </section>


      <ScrollingTestimonials testimonials={testimonials} />
      <Footer />
    </div>
  )
}

