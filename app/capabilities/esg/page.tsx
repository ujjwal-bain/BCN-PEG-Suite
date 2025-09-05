"use client"

import Link from "next/link"
import { ArrowUpRight, ArrowRight, ExternalLink, Landmark, CreditCard, BarChart3, PiggyBank, ShieldCheck, Briefcase, HandCoins, Hand, Settings, Scissors, Crosshair, Move, ChartNoAxesColumn, ChartNoAxesCombined, Lightbulb, ScrollText, PencilRuler, } from "lucide-react"
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
import VendorCard from "@/components/VendorCard"
import { bcnExperts } from "@/lib/esg"
import { otherExperts } from "@/lib/esg"
import FSdropdown from "@/components/content-dropdown"
import { ExecSummary } from "@/components/execSummary"
import { selfServiceTools } from "@/lib/esg"
import Pill from "@/components/Pill"
const testimonials = getTestimonialsByOffering("generalTestimonials")


export default function esgPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 bg-gradient-to-r from-primary/15 via-primary/5 to-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">ESG / Carbon assessment</h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                ESG analysis helps gain insights into material ESG issues for the industry and benchmark company maturity and capabilities on key ESG issues from an outside-in perspective
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Summary */}
      <ExecSummary
        src="/Decks/ESG/ExecSummary.png"
        alt="ESG Executive Summary"
      />

      {/* Product Deck Section */}
      {/* <section className="w-full py-12 md:py-24 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">BCN PEG Product Catalog</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explore ESG solutions offered by BCN
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <Card className="overflow-hidden flex flex-col h-[380px]">
              <div className="h-2 bg-primary" />
              <CardHeader>
                <div className="flex items-center gap-2">
                  <CardTitle>ESG Diagnostic</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex-grow overflow-hidden">
                <div className="relative w-full h-0 pb-[125%] md:pb-[75%]">
                  <iframe
                    src="/Decks/ESG/ESG Diagnostics_Product deck.pdf#toolbar=0&navpanes=0&scrollbar=0&page=1&view=FitH"
                    className="absolute inset-0 w-full h-full rounded-md border"
                  />
                </div>
              </CardContent>
              <CardFooter className="mt-auto border-t pt-4">
                <Button asChild className="w-full">
                  <Link href="/Decks/ESG/ESG Diagnostics_Product deck.pdf" target="_blank" rel="noopener noreferrer">
                    Open Deck <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="overflow-hidden flex flex-col h-[380px]">
              <div className="h-2 bg-primary" />
              <CardHeader>
                <div className="flex items-center gap-2">
                  <CardTitle>ESG ODA</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex-grow overflow-hidden">
                <div className="relative w-full h-0 pb-[125%] md:pb-[75%]">
                  <iframe
                    src="/Decks/ESG/ESG ODA_Product deck.pdf#toolbar=0&navpanes=0&scrollbar=0&page=1&view=FitH"
                    className="absolute inset-0 w-full h-full rounded-md border"
                  />
                </div>
              </CardContent>
              <CardFooter className="mt-auto border-t pt-4">
                <Button asChild className="w-full">
                  <Link href="/Decks/ESG/ESG ODA_Product deck.pdf" target="_blank" rel="noopener noreferrer">
                    Open Deck <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="overflow-hidden flex flex-col h-[380px]">
              <div className="h-2 bg-primary" />
              <CardHeader>
                <div className="flex items-center gap-2">
                  <CardTitle>ESG DD</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex-grow overflow-hidden">
                <div className="relative w-full h-0 pb-[125%] md:pb-[75%]">
                  <iframe
                    src="/Decks/ESG/ESG DD_Product deck.pdf#toolbar=0&navpanes=0&scrollbar=0&page=1&view=FitH"
                    className="absolute inset-0 w-full h-full rounded-md border"
                  />
                </div>
              </CardContent>
              <CardFooter className="mt-auto border-t pt-4">
                <Button asChild className="w-full">
                  <Link href="/Decks/ESG/ESG DD_Product deck.pdf" target="_blank" rel="noopener noreferrer">
                    Open Deck <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

          </div>
        </div>
      </section> */}

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

      {/* ESG Diagnostic */}
      <section id="marketModelling" className="w-full py-12 md:py-24 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div className="space-y-4 text-left">
              <h2 className="text-3xl font-bold tracking-tighter">ESG diagnostic</h2>
              <p className="max-w-lg text-muted-foreground text-sm md:text-base lg:text-lg">
                Provides a quick view into the material ESG issues pertaining to Target’s industry, as well as exploring key DD questions to drive conversations during proposals
              </p>
              <div className="space-y-4 pt-4 max-w-lg">
                {[
                  {
                    icon: <Crosshair className="h-6 w-6 text-primary" />,
                    title: "Material issues",
                    description: "Quick view of key ESG themes sand their level of materiality impacting Target’s industry",
                  },
                  {
                    icon: <Move className="h-6 w-6 text-primary" />,
                    title: "Due diligence approach",
                    description: "Outlines critical questions across highly material themes that will shape ESG diligence",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="pt-1">{item.icon}</div>
                    <div>
                      <div className="font-semibold text-gray-900">{item.title}</div>
                      <div className="text-muted-foreground text-sm">{item.description}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="pt-6 flex flex-wrap gap-8 items-center">
                {[
                  "/Icons/PrimarySec Research/sasb2.png",
                  "/Icons/PrimarySec Research/msci2.png",
                  "/Icons/PrimarySec Research/ecovadis2.png",
                ].map((src, idx) => (
                  <Image
                    key={idx}
                    src={src}
                    alt={`ESG logo ${idx + 1}`}
                    width={100}
                    height={100}
                    className="object-contain"
                  />
                ))}
              </div>
            </div>

            {/* Right Column - PDF Preview Card */}
            <Card className="overflow-hidden flex flex-col h-[500px]">
              <div className="h-2 bg-primary" />
              <CardHeader>
                <div className="flex items-center gap-2">
                  <CardTitle>Product catalog</CardTitle>
                </div>
                <CardDescription>Download the latest deck for ESG diagnostic</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow overflow-hidden">
                <div className="relative w-full h-0 pb-[125%] md:pb-[75%]"> {/* Aspect ratio container */}
                  <iframe
                    src="/Decks/ESG/ESG Diagnostics_Product deck.pdf#toolbar=0&navpanes=0&scrollbar=0&page=1&view=FitH"
                    className="absolute inset-0 w-full h-full rounded-md border"
                  />
                </div>
              </CardContent>
              <CardFooter className="mt-auto border-t pt-4">
                <Button asChild className="w-full">
                  <Link href="/Decks/ESG/ESG Diagnostics_Product deck.pdf" target="_blank" rel="noopener noreferrer">
                    Open deck <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

          </div>
        </div>
      </section>

      {/* ESG ODA */}
      <section id="agentMotion" className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            {/* Left Column - PDF Preview Card */}
            <Card className="overflow-hidden flex flex-col h-[500px]">
              <div className="h-2 bg-primary" />
              <CardHeader>
                <div className="flex items-center gap-2">
                  <CardTitle>Product catalog</CardTitle>
                </div>
                <CardDescription>Download the latest deck for ESG one day assessment</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow overflow-hidden">
                <div className="relative w-full h-0 pb-[125%] md:pb-[75%]"> {/* Aspect ratio container */}
                  <iframe
                    src="/Decks/ESG/ESG ODA_Product deck.pdf#toolbar=0&navpanes=0&scrollbar=0&page=1&view=FitH"
                    className="absolute inset-0 w-full h-full rounded-md border"
                  />
                </div>
              </CardContent>
              <CardFooter className="mt-auto border-t pt-4">
                <Button asChild className="w-full">
                  <Link href="/Decks/ESG/ESG ODA_Product deck.pdf" target="_blank" rel="noopener noreferrer">
                    Open deck <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Right Column - Heading & Description */}
            <div className="space-y-4 text-left md:pl-20">
              <h2 className="text-3xl font-bold tracking-tighter">ESG One Day Assessment (ODA)</h2>
              <p className="max-w-lg text-muted-foreground text-sm md:text-base lg:text-lg">
                Provides a one-day answer on Target’s performance on key ESG benchmarks in comparison to relevant peers on material ESG themes for the industry. Additionally provides initial answer on potential value creation opportunities for Target to improve its ESG performance
              </p>
              <div className="space-y-4 pt-4 max-w-lg">
                {[
                  {
                    icon: <Crosshair className="h-6 w-6 text-primary" />,
                    title: "Material issues",
                    description: "Key material ESG themes, level of materiality",
                  },
                  {
                    icon: <ChartNoAxesCombined className="h-6 w-6 text-primary" />,
                    title: "Benchmarks",
                    description: "Quick view of Target’s performance vs peers on key ESG benchmarks",
                  },
                  {
                    icon: <Lightbulb className="h-6 w-6 text-primary" />,
                    title: "Value creation Levers",
                    description: "Initial view on potential value creation levers to improve Target’s performance",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="pt-1">{item.icon}</div>
                    <div>
                      <div className="font-semibold text-gray-900">{item.title}</div>
                      <div className="text-muted-foreground text-sm">{item.description}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="pt-6 flex flex-wrap gap-8 items-center">
                {[
                  "/Icons/PrimarySec Research/sasb2.png",
                  "/Icons/PrimarySec Research/msci2.png",
                  "/Icons/PrimarySec Research/ecovadis2.png",
                ].map((src, idx) => (
                  <Image
                    key={idx}
                    src={src}
                    alt={`ESG logo ${idx + 1}`}
                    width={100}
                    height={100}
                    className="object-contain"
                  />
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ESG DD */}
      <section id="marketModelling" className="w-full py-12 md:py-24  bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div className="space-y-4 text-left">
              <h2 className="text-3xl font-bold tracking-tighter">ESG Due Diligence (DD)</h2>
              <p className="max-w-lg text-muted-foreground text-sm md:text-base lg:text-lg">
                In-depth assessment on the importance of ESG in Target’s industry, comprehensive view of comparative view of Target’s performance on ESG benchmarks for identified material themes, risk exposure of Target on controversies and potential opportunities for Target to improve its relative position
              </p>
              <div className="space-y-4 pt-4 max-w-lg">
                {[
                  {
                    icon: <Crosshair className="h-6 w-6 text-primary" />,
                    title: "Material themes",
                    description: "Key themes material to Target’s industry and drivers of materiality",
                  },
                  {
                    icon: <ScrollText className="h-6 w-6 text-primary" />,
                    title: "Regulatory landscape",
                    description: "Scan of key regulations driving ESG reporting and performance",
                  },
                  {
                    icon: <ChartNoAxesCombined className="h-6 w-6 text-primary" />,
                    title: "ESG benchmarks",
                    description: "Comparative view of Target’s performance on ESG benchmarks",
                  },
                  {
                    icon: <Lightbulb className="h-6 w-6 text-primary" />,
                    title: "Value creation Levers",
                    description: "Potential levers for Target to improve its performance on ESG benchmarks",
                  },
                  {
                    icon: <PencilRuler className="h-6 w-6 text-primary" />,
                    title: "Custom analysis",
                    description: "Customized analysis such as customer sentiment, decarbonization assessment and ESG target screening",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="pt-1">{item.icon}</div>
                    <div>
                      <div className="font-semibold text-gray-900">{item.title}</div>
                      <div className="text-muted-foreground text-sm">{item.description}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="pt-6 flex flex-wrap gap-8 items-center">
                {[
                  "/Icons/PrimarySec Research/sasb2.png",
                  "/Icons/PrimarySec Research/msci2.png",
                  "/Icons/PrimarySec Research/ecovadis2.png",
                ].map((src, idx) => (
                  <Image
                    key={idx}
                    src={src}
                    alt={`ESG logo ${idx + 1}`}
                    width={100}
                    height={100}
                    className="object-contain"
                  />
                ))}
              </div>
            </div>

            {/* Right Column - PDF Preview Card */}
            <Card className="overflow-hidden flex flex-col h-[500px]">
              <div className="h-2 bg-primary" />
              <CardHeader>
                <div className="flex items-center gap-2">
                  <CardTitle>Product catalog</CardTitle>
                </div>
                <CardDescription>Download the latest deck for ESG due diligence</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow overflow-hidden">
                <div className="relative w-full h-0 pb-[125%] md:pb-[75%]"> {/* Aspect ratio container */}
                  <iframe
                    src="/Decks/ESG/ESG DD_Product deck.pdf#toolbar=0&navpanes=0&scrollbar=0&page=1&view=FitH"
                    className="absolute inset-0 w-full h-full rounded-md border"
                  />
                </div>
              </CardContent>
              <CardFooter className="mt-auto border-t pt-4">
                <Button asChild className="w-full">
                  <Link href="/Decks/ESG/ESG DD_Product deck.pdf" target="_blank" rel="noopener noreferrer">
                    Open deck <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

          </div>
        </div>
      </section>

      {/* Self-service Tools Section */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter mb-8">Self-service tools</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {selfServiceTools.map((tool, index) => (
              <Card key={index} className="overflow-hidden flex flex-col min-h-[350px]">
                <div className="h-2 bg-primary" />
                <CardHeader>
                  <div className="flex items-center gap-2 min-h-[50px]">
                    <img src={tool.logo} alt={`${tool.title} logo`} className="h-8" />
                    <CardTitle>{tool.title}</CardTitle>
                  </div>
                  <CardDescription>{tool.subheading}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow overflow-auto flex flex-col justify-between">
                  <p className="text-muted-foreground">{tool.description}</p>
                  {(tool.pill || tool.via) && (
                    <div className="flex items-center justify-between pt-7">
                      {tool.via ? (
                        <img
                          src={tool.via}
                          alt="RAVE logo"
                          className="h-7"
                        />
                      ) : <div />} {/* placeholder to maintain layout */}

                      {tool.pill && (
                        <Pill text={tool.pill} className="px-3 py-1 text-xs" />
                      )}
                    </div>
                  )}
                </CardContent>
                <CardFooter className="mt-auto border-t pt-4">
                  <Button asChild className="w-full">
                    <a href={tool.link} target="_blank" rel="noopener noreferrer">
                      Access tool <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case studies Section */}
      <section className="w-full py-12 md:py-24  bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">Case studies</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Sample ESG cases from BCN PEG
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <Card className="overflow-hidden flex flex-col h-[380px]">
              <div className="h-2 bg-primary" />
              <CardHeader>
                <div className="flex items-center gap-2">
                  <CardTitle>ESG diagnostics</CardTitle>
                </div>
                {/* <CardDescription>Short description</CardDescription> */}
              </CardHeader>
              <CardContent className="flex-grow overflow-hidden">
                <div className="relative w-full h-0 pb-[125%] md:pb-[75%]">
                  <iframe
                    src="/Decks/ESG/ESG Diagnostic_Sample loop.pdf#toolbar=0&navpanes=0&scrollbar=0&page=1&view=FitH"
                    className="w-full h-[350px] rounded-md border"
                  />
                </div>
              </CardContent>
              <CardFooter className="mt-auto border-t pt-4">
                <Button asChild className="w-full">
                  <Link href="/Decks/ESG/ESG Diagnostic_Sample loop.pdf" target="_blank" rel="noopener noreferrer">
                    Open deck <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="overflow-hidden flex flex-col h-[380px]">
              <div className="h-2 bg-primary" />
              <CardHeader>
                <div className="flex items-center gap-2">
                  <CardTitle>ESG ODA</CardTitle>
                </div>
                {/* <CardDescription>Short description</CardDescription> */}
              </CardHeader>
              <CardContent className="flex-grow overflow-hidden">
                <div className="relative w-full h-0 pb-[125%] md:pb-[75%]">
                  <iframe
                    src="/Decks/ESG/ESG ODA_Sample loop.pdf#toolbar=0&navpanes=0&scrollbar=0&page=1&view=FitH"
                    className="w-full h-[350px] rounded-md border"
                  />
                </div>
              </CardContent>
              <CardFooter className="mt-auto border-t pt-4">
                <Button asChild className="w-full">
                  <Link href="/Decks/ESG/ESG ODA_Sample loop.pdf" target="_blank" rel="noopener noreferrer">
                    Open deck <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="overflow-hidden flex flex-col h-[380px]">
              <div className="h-2 bg-primary" />
              <CardHeader>
                <div className="flex items-center gap-2">
                  <CardTitle>ESG DD</CardTitle>
                </div>
                {/* <CardDescription>Short description</CardDescription> */}
              </CardHeader>
              <CardContent className="flex-grow overflow-hidden">
                <div className="relative w-full h-0 pb-[125%] md:pb-[75%]">
                  <iframe
                    src="/Decks/ESG/ESG DD_Sample loop.pdf#toolbar=0&navpanes=0&scrollbar=0&page=1&view=FitH"
                    className="absolute inset-0 w-full h-full rounded-md border"
                  />
                </div>
              </CardContent>
              <CardFooter className="mt-auto border-t pt-4">
                <Button asChild className="w-full">
                  <Link href="/Decks/ESG/ESG DD_Sample loop.pdf" target="_blank" rel="noopener noreferrer">
                    Open deck <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Connect with experts */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">Connect with experts</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Collaborate with a BCN PEG ESG team, and get your next case powered by experts!
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-5">
              {/* Survey Experts */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold mb-2">BCN PEG ESG experts</h3>
                {bcnExperts.map((expert) => (
                  <ExpertCard key={expert.email} expert={expert} />
                ))}
              </div>

              {/* Vendor Contacts */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold mb-2">ESG tools and experts</h3>
                {otherExperts.map((expert, index) => (
                  <a
                    key={index}
                    href={expert.email}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 bg-white shadow-xs rounded-lg border hover:shadow-sm transition"
                  >
                    <div className="max-w-xs text-left">
                      <span className="font-semibold text-base">{expert.name}</span>

                      <CardDescription className="text-xs text-muted-foreground block pt-1">
                        {expert.description}
                      </CardDescription>
                    </div>

                    {/* Up-Right Arrow on the Right */}
                    <ExternalLink className="h-5 w-5 text-primary flex-shrink-0" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <ScrollingTestimonials testimonials={testimonials} />
      <Footer />
    </div>
  )
}

