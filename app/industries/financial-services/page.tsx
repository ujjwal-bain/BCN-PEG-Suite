"use client"

import Link from "next/link"
import { ArrowUpRight, ArrowRight, ExternalLink, Landmark, CreditCard, BarChart3, PiggyBank, ShieldCheck, Briefcase, HandCoins, Hand, Settings, Scissors, } from "lucide-react"
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
import { marketMapSector } from "@/lib/financial-services"
import { marketMapGeo } from "@/lib/financial-services"
import MarketMapDropdownSection from "@/components/FSmarketDropdown"
import { FSofferings } from "@/lib/financial-services"
import { selfServeTools } from "@/lib/financial-services"
import { bainPracticeTeams } from "@/lib/financial-services"
import { bainExperts } from "@/lib/financial-services"
import { bcnExperts } from "@/lib/financial-services"
import { otherExperts } from "@/lib/financial-services"
import FSdropdown from "@/components/content-dropdown"
import { ExecSummary } from "@/components/execSummary"
const testimonials = getTestimonialsByOffering("generalTestimonials")


export default function financialServicesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 bg-gradient-to-r from-primary/15 via-primary/5 to-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Financial services</h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Unlock value in Financial Services with cutting-edge insights, proprietary data, and access to BCN PEG specialists and tools. Leverage deep sector knowledge to drive your next deal              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Summary */}
      <ExecSummary
        src="/Decks/Financial Services/ExecSummary.png"
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
                BCN PEG offers advanced market intelligence and deep sector expertise to support high-impact decision-making across the Financial Services deal lifecycle. Leveraging proprietary data assets, cutting-edge market models, and direct access to Financial Services specialists, this offering provides powerful insights into market dynamics, growth potential, and strategic positioning
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
                  <CardTitle>BCN PEG FS overview</CardTitle>
                </div>
                <CardDescription>Download the latest product catalog for FS at BCN</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow overflow-hidden">
                <div className="relative w-full h-0 pb-[125%] md:pb-[75%]"> {/* Aspect ratio container */}
                  <iframe
                    src="/Decks/Financial Services/BCN PEG FS.pdf#toolbar=0&navpanes=0&scrollbar=0&page=1&view=FitH"
                    className="absolute inset-0 w-full h-full rounded-md border"
                  />
                </div>
              </CardContent>
              <CardFooter className="mt-auto border-t pt-4">
                <Button asChild className="w-full">
                  <Link href="/Decks/Financial Services/BCN PEG FS.pdf" target="_blank" rel="noopener noreferrer">
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


      <section className="w-full py-12 md:py-16">
        <div className="container px-4 md:px-6">
          {/* Heading and Subheading */}
          <div className="text-center mb-16 space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Market map</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto md:text-xl">
              BCN PEG Financial services teams have worked across a broad range of sub-sectors within the financial sector.
            </p>
          </div>

          {/* Market Map 2-column layout */}
          <div className="grid gap-6 md:grid-cols-2">
            {/* Sector Column */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
              <h3 className="text-2xl font-semibold text-[#C00000] mb-6 text-center">Sector</h3>
              <MarketMapDropdownSection data={marketMapSector} />
            </div>

            {/* Geography Column */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
              <h3 className="text-2xl font-semibold text-[#C00000] mb-6 text-center">Geography</h3>
              <MarketMapDropdownSection data={marketMapGeo} />
            </div>
          </div>

          {/* Disclaimer */}
          <p className="italic text-muted-foreground mt-6 text-center">
            *Offerings shown are not exhaustive
          </p>
        </div>
      </section>

      {/* <section className="w-full py-12 md:py-16 bg-muted/50">
        <div className="container px-4 md:px-6"> */}
      {/* Heading and Subheading */}
      {/* <div className="text-center mb-16 space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Market Map</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto md:text-xl">
              BCN PEG Financial Services teams have worked across a broad range of sub-sectors within the financial sector.
            </p>
          </div> */}

      {/* Market Map Grid - now 4 columns */}
      {/* --- By Sector --- */}
      {/* --- Sector Section in White Box --- */}
      {/* <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm mb-10">
            <h3 className="text-2xl font-semibold text-center mb-8">Sector</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {marketMapSector.map((sector, index) => (
                <div key={index}>
                  <h4 className="text-lg font-semibold mb-2 text-[#C00000]">{sector.category}</h4>
                  <div className="w-10 mx-auto mb-4 border-b-2 border-black"></div>
                  <ul className="space-y-2 text-muted-foreground">
                    {sector.items.map((item, i) => (
                      <li key={i} className="leading-snug">
                        {item.text}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div> */}

      {/* --- Geography Section in White Box --- */}
      {/* <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm">
            <h3 className="text-2xl font-semibold text-center mb-8">Geography</h3>
            <div className="grid grid-cols-2 text-center">
              {marketMapGeo.map((region, index) => (
                <div key={index}>
                  <h4 className="text-lg font-semibold mb-2 text-[#C00000]">{region.category}</h4>
                  <div className="w-10 mx-auto mb-4 border-b-2 border-black"></div>
                  <ul className="space-y-2 text-muted-foreground">
                    {region.items.map((item, i) => (
                      <li key={i} className="leading-snug">
                        {item.text}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <p className="italic text-muted-foreground mt-4 mb-5">
            *Offerings shown are not exhaustive
          </p>
        </div>
      </section> */}


      {/* FS Market Modelling */}
      <section id="marketModelling" className="w-full py-12 md:py-24  bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            {/* Left Column - Heading & Description */}
            <div className="space-y-4 text-left">
              <h2 className="text-3xl font-bold tracking-tighter">BCN PEG FS market modelling</h2>
              <p className="max-w-lg text-muted-foreground text-sm md:text-base lg:text-lg">
                Expertise in creating in-depth market size models containing precise current estimates and reliable future forecasts. Examples include:
              </p>
              <div className="space-y-4 pt-4 max-w-lg">
                {[
                  {
                    icon: <Briefcase className="h-6 w-6 text-primary" />,
                    title: "Global specialty insurance brokerage",
                    description: "Global GWP and brokerage revenue model split by LOBs",
                  },
                  {
                    icon: <HandCoins className="h-6 w-6 text-primary" />,
                    title: "Wealth management",
                    description: "Market size and revenue pool estimation in terms of AUMs split by channel and customer segment",
                  },
                  {
                    icon: <Landmark className="h-6 w-6 text-primary" />,
                    title: "Fund administration, Trust and Corporate Services (T&CS)",
                    description: "Market size estimation and forecasts split by geography, type of fund and jurisdiction",
                  },
                  {
                    icon: <Scissors className="h-6 w-6 text-primary" />,
                    title: "Custom analysis",
                    description: "Insurance workforce trends and broker/advisor movement across geographies and channels",
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
              {/* <div className="pt-2">
                <Button className="mt-4" asChild>
                  <Link href="mailto:BCNPEGStaffing@Bain.com?subject=BCN Support for Project {Project name} {Case code}" target="_blank" rel="noopener noreferrer">
                    Request BCN PEG Staffing <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div> */}
            </div>

            {/* Right Column - PDF Preview Card */}
            <Card className="overflow-hidden flex flex-col h-[500px]">
              <div className="h-2 bg-primary" />
              <CardHeader>
                <div className="flex items-center gap-2">
                  <CardTitle>Sample output</CardTitle>
                </div>
                <CardDescription>Download the latest output for market modelling at BCN</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow overflow-hidden">
                <div className="relative w-full h-0 pb-[125%] md:pb-[75%]"> {/* Aspect ratio container */}
                  <iframe
                    src="/Decks/Financial Services/BCN PEG FS.pdf#toolbar=0&navpanes=0&scrollbar=0&page=1&view=FitH"
                    className="absolute inset-0 w-full h-full rounded-md border"
                  />
                </div>
              </CardContent>
              <CardFooter className="mt-auto border-t pt-4">
                <Button asChild className="w-full">
                  <Link href="/Decks/Financial Services/BCN PEG FS.pdf" target="_blank" rel="noopener noreferrer">
                    Open deck <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

          </div>
        </div>
      </section>

      {/* Agent Motion */}
      <section id="agentMotion" className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2 items-center">
            {/* Left Column - PDF Preview Card */}
            <div className="flex flex-col h-[500px] relative">
              <img
                src="/Icons/Financial Services/agent motion vector.png"
                alt="Vector preview"
                className="absolute inset-0 w-full h-full object-contain"
              />
            </div>

            {/* <Card className="overflow-hidden flex flex-col h-[500px]">
              <div className="h-2 bg-primary" />
              <CardHeader>
                <div className="flex items-center gap-2">
                  <CardTitle>Sample output</CardTitle>
                </div>
                <CardDescription>Download the latest output for agent motion at BCN</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow overflow-hidden">
                <div className="relative w-full h-0 pb-[125%] md:pb-[75%]"> {/* Aspect ratio container */}
            {/* <iframe
                    src="/Decks/Financial Services/BCN PEG FS.pdf#toolbar=0&navpanes=0&scrollbar=0&page=1&view=FitH"
                    className="absolute inset-0 w-full h-full rounded-md border"
                  />
                </div>
              </CardContent>
              <CardFooter className="mt-auto border-t pt-4">
                <Button asChild className="w-full">
                  <Link href="/Decks/Financial Services/BCN PEG FS.pdf" target="_blank" rel="noopener noreferrer">
                    Open deck <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card> */}

            {/* Right Column - Heading & Description */}
            <div className="space-y-4 md:pl-20 text-left">
              <h2 className="text-3xl font-bold tracking-tighter">Agent motion</h2>
              <p className="max-w-lg text-muted-foreground text-sm md:text-base lg:text-lg">
                Web-based, Python-enabled platform tracking advisor movements across US Wealth Management industry sourced through regulatory filings
              </p>
              <br />
              <p className="text-muted-foreground italic">Reach out to BCN PEG Staffing for additional details and to request a sample dataset</p>
              {/* <div className="space-y-4 pt-4 max-w-lg">
                {[
                  {
                    icon: <Briefcase className="h-6 w-6 text-primary" />,
                    title: "Global specialty insurance brokerage",
                    description: "Global GWP and brokerage revenue model split by LOBs",
                  },
                  {
                    icon: <HandCoins className="h-6 w-6 text-primary" />,
                    title: "Wealth management",
                    description: "Market size and revenue pool estimation in terms of AUMs split by channel and customer segment",
                  },
                  {
                    icon: <Landmark className="h-6 w-6 text-primary" />,
                    title: "Fund administration, Trust and Corporate Services (T&CS)",
                    description: "Market size estimation and forecasts split by geography, type of fund and jurisdiction",
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
              </div> */}
              {/* <div className="pt-2">
                <Button className="mt-4" asChild>
                  <Link href="mailto:BCNPEGStaffing@Bain.com?subject=BCN Support for Project {Project name} {Case code}" target="_blank" rel="noopener noreferrer">
                    Request BCN PEG Staffing <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div> */}
            </div>

          </div>
        </div>
      </section>

      {/* Financial Services Offerings Section */}
      <section id="fsOtherOfferings" className="w-full py-12 md:py-24  bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-10 space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Custom analysis</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto md:text-xl">
              Engage BCN PEG to answer key questions on your FS case
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
            {FSofferings.map((item) => (
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
                        width={tool.id === "glassdoor" ? 40 : 70}
                        height={tool.id === "glassdoor" ? 40 : 70}
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
                Sample financial service cases from BCN PEG
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <Card className="overflow-hidden flex flex-col h-[380px]">
              <div className="h-2 bg-primary" />
              <CardHeader>
                <div className="flex items-center gap-2">
                  <CardTitle>EMEA and UK specialty insurance</CardTitle>
                </div>
                {/* <CardDescription>Short description</CardDescription> */}
              </CardHeader>
              <CardContent className="flex-grow overflow-hidden">
                <div className="relative w-full h-0 pb-[125%] md:pb-[75%]">
                  <iframe
                    src="/Decks/Financial Services/case_study1.pdf#toolbar=0&navpanes=0&scrollbar=0&page=1&view=FitH"
                    className="w-full h-[350px] rounded-md border"
                  />
                </div>
              </CardContent>
              <CardFooter className="mt-auto border-t pt-4">
                <Button asChild className="w-full">
                  <Link href="/Decks/Financial Services/case_study1.pdf" target="_blank" rel="noopener noreferrer">
                    Open deck <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="overflow-hidden flex flex-col h-[380px]">
              <div className="h-2 bg-primary" />
              <CardHeader>
                <div className="flex items-center gap-2">
                  <CardTitle>SEA FS market scan</CardTitle>
                </div>
                {/* <CardDescription>Short description</CardDescription> */}
              </CardHeader>
              <CardContent className="flex-grow overflow-hidden">
                <div className="relative w-full h-0 pb-[125%] md:pb-[75%]">
                  <iframe
                    src="/Decks/Financial Services/case_study2.pdf#toolbar=0&navpanes=0&scrollbar=0&page=1&view=FitH"
                    className="w-full h-[350px] rounded-md border"
                  />
                </div>
              </CardContent>
              <CardFooter className="mt-auto border-t pt-4">
                <Button asChild className="w-full">
                  <Link href="/Decks/Financial Services/case_study2.pdf" target="_blank" rel="noopener noreferrer">
                    Open deck <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="overflow-hidden flex flex-col h-[380px]">
              <div className="h-2 bg-primary" />
              <CardHeader>
                <div className="flex items-center gap-2">
                  <CardTitle>FA market model and T&CS</CardTitle>
                </div>
                {/* <CardDescription>Short description</CardDescription> */}
              </CardHeader>
              <CardContent className="flex-grow overflow-hidden">
                <div className="relative w-full h-0 pb-[125%] md:pb-[75%]">
                  <iframe
                    src="/Decks/Financial Services/case_study3.pdf#toolbar=0&navpanes=0&scrollbar=0&page=1&view=FitH"
                    className="absolute inset-0 w-full h-full rounded-md border"
                  />
                </div>
              </CardContent>
              <CardFooter className="mt-auto border-t pt-4">
                <Button asChild className="w-full">
                  <Link href="/Decks/Financial Services/case_study3.pdf" target="_blank" rel="noopener noreferrer">
                    Open deck <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Bain Practice Teams Section */}
      <section className="w-full py-12 md:py-24  bg-muted/50">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter mb-8">Bain practice pages</h2>
          <div className="grid gap-6 px-4">
            {/* Headings and Cards in One Row */}
            {/* <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-6 items-start"> */}
            <div className="col-span-5 w-full">
              {/* <div className="flex items-center justify-center gap-2 mb-4">
                  <span className="flex-grow h-px bg-gradient-to-l from-gray-300 to-transparent"></span>
                  <h3 className="text-lg text-red-600">Bain Practice Teams</h3>
                  <span className="flex-grow h-px bg-gradient-to-r from-gray-300 to-transparent"></span>
                </div> */}
              <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-5">
                {bainPracticeTeams.map((category) => (
                  <div
                    key={category.name}
                    className="overflow-hidden flex flex-col h-[320px] border rounded-lg shadow-md"
                  >
                    <div className="h-2 bg-primary" />
                    <div className="p-6 flex flex-col items-center justify-center text-center flex-grow">
                      <div className="w-16 h-16 relative">
                        <Image src={category.logo} alt={`${category.name} logo`} fill className="object-contain" />
                      </div>
                      <h3 className="text-xl font-bold mt-4">{category.name}</h3>
                    </div>
                    <div className="mt-auto border-t pt-4 w-full p-4">
                      <Button asChild className="w-full">
                        <Link href={category.link} target="_blank" rel="noopener noreferrer">
                          Access Iris page <ExternalLink className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* <div className="col-span-1 w-full">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <span className="flex-grow h-px bg-gradient-to-l from-gray-300 to-transparent"></span>
                  <h3 className="text-lg text-red-600">BCN Products</h3>
                  <span className="flex-grow h-px bg-gradient-to-r from-gray-300 to-transparent"></span>
                </div>
                <div className="grid gap-4 grid-cols-1">
                  {categories.slice(5, 6).map((category) => (
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
                      <div className="absolute inset-0 bg-gray-200 opacity-50" /> {/* Grey overlay */}
            {/* </div> */}
            {/* ))} */}
            {/* </div> */}
            {/* </div> */}
            {/* </div> */}
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">Connect with experts</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Collaborate with a BCN PEG FS team, and get your next case powered by experts!
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

