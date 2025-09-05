"use client"

import Link from "next/link"
import { ArrowUpRight, ArrowRight, ExternalLink, Search, Globe, Briefcase, Map, ChartLine, Users, UserSearch, TrendingUp, DollarSign, HandCoins, UserCog, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Coming_Soon } from "next/font/google"
import ScrollingTestimonials from "@/components/scrolling-testimonials"
import { getTestimonialsByOffering } from "@/lib/testimonials-data"
import test from "node:test"
import ExpertCard from "@/components/expert-card"
import VendorCard from "@/components/VendorCard"
import { selfServiceTools } from "@/lib/digital"
import { bcnExperts } from "@/lib/digital"
import { otherExperts } from "@/lib/digital"
import Pill from "@/components/Pill"
import { digitalOfferings } from "@/lib/digital"
import { Global } from "recharts"
import { ExecSummary } from "@/components/execSummary"

const testimonials = getTestimonialsByOffering("generalTestimonials")


export default function DigitalPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 bg-gradient-to-r from-primary/15 via-primary/5 to-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Digital diagnostics</h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Digital diagnostic helps discern digital performance and opportunities to optimize across growth levers, for all types of businesses while also providing drill-downs on specific digital levers – from an outside-in perspective
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Summary */}
      <ExecSummary
        src="/Decks/Digital/execSumm.png"
        alt="Digital Executive Summary"
      />

      {/* Product Catalog */}
      <section className="w-full py-12 md:py-24 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            {/* Left Column - PDF Preview Card */}
            <Card className="overflow-hidden flex flex-col h-[500px]">
              <div className="h-2 bg-primary" />
              <CardHeader>
                <div className="flex items-center gap-2">
                  <CardTitle>BCN PEG Digital diagnostics overview</CardTitle>
                </div>
                <CardDescription>Download the latest product catalog for digital diagnostics at BCN</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow overflow-hidden">
                <div className="relative w-full h-0 pb-[125%] md:pb-[75%]"> {/* Aspect ratio container */}
                  <iframe
                    src="/Decks/Digital/2023 BCN PEG - Digital Diagnostic.pdf#toolbar=0&navpanes=0&scrollbar=0&page=1&view=FitH"
                    className="absolute inset-0 w-full h-full rounded-md border"
                  />
                </div>
              </CardContent>
              <CardFooter className="mt-auto border-t pt-4">
                <Button asChild className="w-full">
                  <Link href="/Decks/Digital/2023 BCN PEG - Digital Diagnostic.pdf" target="_blank" rel="noopener noreferrer">
                    Open deck <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Right Column - Heading & Description */}
            <div className="space-y-4 pl-20 text-left">
              <h2 className="text-3xl font-bold tracking-tighter">BCN PEG product catalog</h2>
              <p className="max-w-lg text-muted-foreground text-sm md:text-base lg:text-lg">
                Explore BCN PEG’s workforce analytics solutions, built to deliver high-quality, data-driven insights for talent benchmarking and workforce planning. Access granular and reliable data powered by advanced tools and gain targeted insights on both target and peer sets
              </p>
              <div className="pt-2">
                <Button className="mt-4" asChild>
                  <Link href="mailto:BCNPEGStaffing@Bain.com?subject=BCN Support for Project {Project name} {Case code}" target="_blank" rel="noopener noreferrer">
                    Request BCN PEG Staffing <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>


          </div>
        </div>
      </section>

      {/* Self-service Tools Section */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter mb-8">Self-service tools</h2>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
            {selfServiceTools.map((tool, index) => (
              <Card key={index} className="overflow-hidden flex flex-col min-h-[350px]">
                <div className="h-2 bg-primary" />
                <CardHeader>
                  <div className="flex items-center gap-2 min-h-[50px]">
                    <img src={tool.logo} alt={`${tool.title} logo`} className="h-8" />
                    <CardTitle>{tool.title}</CardTitle>
                  </div>
                  {/* <CardDescription className="min-h-[40px]">{tool.subheading}</CardDescription> */}
                </CardHeader>
                <CardContent className="flex-grow overflow-auto flex flex-col justify-between">
                  <p className="text-muted-foreground">{tool.description}</p>
                  {(tool.pill || tool.via) && (
                    <div className="flex items-center justify-between pt-7">
                      {tool.via ? (
                        <img
                          src={tool.via}
                          alt="RAVE logo"
                          className="h-6"
                        />
                      ) : <div />} {/* placeholder to maintain layout */}

                      {tool.pill && (
                        <Pill text={tool.pill} className="px-3 py-1 text-xs ml-2" />
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

      {digitalOfferings.map((offering, idx) => {
        const isEven = idx % 2 === 0;
        const bgClass = isEven ? "bg-muted/50" : "bg-white";
        return (
          <section
            key={offering.id}
            id={offering.id}
            className={`w-full py-12 md:py-24 ${bgClass}`}
          >
            <div className="container px-4 md:px-6">
              <div className="grid gap-12 md:grid-cols-2 items-center">
                {/* Conditional content ordering */}
                <div className={`${isEven ? "" : "order-last"} space-y-4 text-left`}>
                  <h2 className="text-3xl font-bold tracking-tighter">{offering.title}</h2>
                  <p className="max-w-lg text-muted-foreground text-sm md:text-base lg:text-lg">
                    {offering.description}
                  </p>

                  {/* Logos */}
                  <div className="flex flex-wrap gap-4 pt-4">
                    {offering.logos.map((logo, logoIdx) => {
                      const customHeight =
                        logo.includes("ClassifAI.png")
                          ? "h-12"
                          : logo.includes("similarweb.png")
                            ? "h-5"
                            : logo.includes("semrush.png")
                              ? "h-5"
                              : logo.includes("jungleScout.png")
                                ? "h-8"
                                : "h-7"; // default height

                      return (
                        <img
                          key={logoIdx}
                          src={logo}
                          alt={logo.replace(".png", "")}
                          className={`${customHeight} w-auto`}
                        />
                      );
                    })}
                  </div>

                  {/* Button */}
                  {/* <div className="pt-2">
                    <Button className="mt-4" asChild>
                      <Link
                        href={`mailto:BCNPEGStaffing@Bain.com?subject=BCN Support for Project {Project name} {Case code}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Request BCN PEG Staffing <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div> */}
                </div>

                {/* PDF Preview Card */}
                <Card className="overflow-hidden flex flex-col h-[500px]">
                  <div className="h-2 bg-primary" />
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <CardTitle>Sample output</CardTitle>
                    </div>
                    <CardDescription>Download the latest output for {offering.title.toLowerCase()}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow overflow-hidden">
                    <div className="relative w-full h-full">
                      <iframe
                        src={`${offering.pdf}#toolbar=0&navpanes=0&scrollbar=0&page=1&view=fitH`}
                        className="absolute inset-0 w-full h-full rounded-md border"
                      />
                    </div>
                  </CardContent>
                  <CardFooter className="mt-auto border-t pt-4">
                    <Button asChild className="w-full">
                      <Link href={offering.blanks} passHref>
                        Download blanks <Download className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>

                {/* Vector image */}
                {/* <div>
                  <img
                    src={offering.vector}
                    alt={`${offering.title} vector`}
                    className="w-[800px] h-auto"
                  />
                </div> */}
              </div>
            </div>
          </section>
        );
      })}

      {/* Case studies Section */}
      <section className="w-full py-12 md:py-24 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">Case studies</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Sample Digital cases from BCN PEG
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">

            <Card className="overflow-hidden flex flex-col h-[380px]">
              <div className="h-2 bg-primary" />
              <CardHeader>
                <div className="flex items-center gap-2">
                  <CardTitle>Digital diagnostic</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex-grow overflow-hidden">
                <div className="relative w-full h-0 pb-[125%] md:pb-[75%]">
                  <iframe
                    src="/Decks/Digital/Digital 6_Sample Output_Digital Diagnostic.pdf#toolbar=0&navpanes=0&scrollbar=0&page=1&view=FitH"
                    className="w-full h-[350px] rounded-md border"
                  />
                </div>
              </CardContent>
              <CardFooter className="mt-auto border-t pt-4">
                <Button asChild className="w-full">
                  <Link href="/Decks/Digital/Digital 6_Sample Output_Digital Diagnostic.pdf" target="_blank" rel="noopener noreferrer">
                    Open deck <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="overflow-hidden flex flex-col h-[380px]">
              <div className="h-2 bg-primary" />
              <CardHeader>
                <div className="flex items-center gap-2">
                  <CardTitle>Consumer sentiment and digital diagnostic</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex-grow overflow-hidden">
                <div className="relative w-full h-0 pb-[125%] md:pb-[75%]">
                  <iframe
                    src="/Decks/Digital/Digital 7_Sample Output_Consumer sentiment and digital diagnostic.pdf#toolbar=0&navpanes=0&scrollbar=0&page=1&view=FitH"
                    className="w-full h-[350px] rounded-md border"
                  />
                </div>
              </CardContent>
              <CardFooter className="mt-auto border-t pt-4">
                <Button asChild className="w-full">
                  <Link href="/Decks/Digital/Digital 7_Sample Output_Consumer sentiment and digital diagnostic.pdf" target="_blank" rel="noopener noreferrer">
                    Open deck <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="overflow-hidden flex flex-col h-[380px]">
              <div className="h-2 bg-primary" />
              <CardHeader>
                <div className="flex items-center gap-2">
                  <CardTitle>Consumer sentiment</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex-grow overflow-hidden">
                <div className="relative w-full h-0 pb-[125%] md:pb-[75%]">
                  <iframe
                    src="/Decks/Digital/Digital 5_Sample Output_Consumer Sentiment.pdf#toolbar=0&navpanes=0&scrollbar=0&page=1&view=FitH"
                    className="w-full h-[350px] rounded-md border"
                  />
                </div>
              </CardContent>
              <CardFooter className="mt-auto border-t pt-4">
                <Button asChild className="w-full">
                  <Link href="/Decks/Digital/Digital 5_Sample Output_Consumer Sentiment.pdf" target="_blank" rel="noopener noreferrer">
                    Open deck <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">Connect with experts</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Collaborate with a BCN PEG Digital diagnostics team, and get your next case powered by experts!
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-5">
              {/* Survey Experts */}
              {bcnExperts.map((expert) => (
                <ExpertCard key={expert.email} expert={expert} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <ScrollingTestimonials testimonials={testimonials} />
      <Footer />
    </div>
  )
}

