"use client"

import Link from "next/link"
import { Globe, Users, Leaf, Search, Route, ShieldCheck, Layers, Code, ArrowRight, ExternalLink, Download, type LucideIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Image from "next/image";
import ScrollingTestimonials from "@/components/scrolling-testimonials"
import { getTestimonialsByOffering } from "@/lib/testimonials-data"
import test from "node:test"
import ExpertCard from "@/components/expert-card"
import { bcnExperts } from "@/lib/technology"
import { ExecSummary } from "@/components/execSummary"
import { selfServiceTools } from "@/lib/technology"
import { techOfferings } from "@/lib/technology"
import Pill from "@/components/Pill"
const testimonials = getTestimonialsByOffering("generalTestimonials")

const iconMap: Record<string, LucideIcon> = {
  Globe,
  Users,
  Leaf,
  Search,
  Route,
  ShieldCheck,
  Layers,
  Code,
  ArrowRight,
  ExternalLink,
  Download
};

export default function technologyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 bg-gradient-to-r from-primary/15 via-primary/5 to-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Technology</h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                End-to-end tech diligence uncovering risks, opportunities, and investment needs—spanning architecture, code, security, talent, and ESG—to drive clear, actionable value
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Summary */}
      <ExecSummary
        src="/Decks/Technology/ExecSummary.png"
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
                Uncover potential risk pertaining to product, technical condition, tech stack and organizational structure and gain deep understanding of target’s platform, architecture, cybersecurity, development processes and engineering talent for better decision making
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
                  <CardTitle>Technology overview</CardTitle>
                </div>
                <CardDescription>Download the latest deck for technology</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow overflow-hidden">
                <div className="relative w-full h-0 pb-[125%] md:pb-[75%]"> {/* Aspect ratio container */}
                  <iframe
                    src="/Decks/Technology/BCN_Software Assessment Product.pdf#toolbar=0&navpanes=0&scrollbar=0&page=1&view=FitH"
                    className="absolute inset-0 w-full h-full rounded-md border"
                  />
                </div>
              </CardContent>
              <CardFooter className="mt-auto border-t pt-4">
                <Button asChild className="w-full">
                  <Link href="/Decks/Technology/BCN_Software Assessment Product.pdf" target="_blank" rel="noopener noreferrer">
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
          <div className="grid gap-6 md:grid-cols-3">
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

      {techOfferings.map((product, index) => {
        const isRight = index % 2 === 0;
        return (
          <section
            key={product.name}
            id={product.name.replace(/\s+/g, '')}
            className={`w-full py-12 md:py-24 ${index % 2 === 0 ? 'bg-muted/50' : ''}`}
          >
            <div className="container px-4 md:px-6">
              <div className="grid gap-12 md:grid-cols-2 items-center">
                {isRight ? (
                  <>
                    {/* Left Column - Content */}
                    <div className="space-y-4 text-left">
                      <h2 className="text-3xl font-bold tracking-tighter">{product.name}</h2>
                      <p className="max-w-lg text-muted-foreground text-sm md:text-base lg:text-lg">
                        {product.description}
                        <br /><br /> Key areas include:
                      </p>
                      <div className="space-y-4 pt-4 max-w-lg">
                        {product.keyPoints.map((point, idx) => {
                          const Icon = iconMap[point.icon];
                          return (
                            <div key={idx} className="flex items-start gap-3">
                              <div className="pt-1"><Icon className="h-5 w-5 text-primary" /></div>
                              <div className="text-muted-foreground">{point.text}</div>
                            </div>
                          );
                        })}
                      </div>

                      {/* Logo Row */}
                      <div className="flex flex-wrap items-center gap-10 pt-6 max-w-md">
                        {product.tools.map((tool, idx) => {
                          const isTaller = ["G2", "Glassdoor", "S&P Global"].includes(tool.name);
                          return (
                            <img
                              key={idx}
                              src={tool.icon}
                              alt={tool.name}
                              className={isTaller ? "h-6" : "h-4"}
                            />
                          );
                        })}
                      </div>
                    </div>

                    {/* Right Column - PDF Preview */}
                    <Card className="overflow-hidden flex flex-col h-[500px]">
                      <div className="h-2 bg-primary" />
                      <CardHeader>
                        <div className="flex items-center gap-2">
                          <CardTitle>Sample output</CardTitle>
                        </div>
                        <CardDescription>Download the latest output for {product.name}</CardDescription>
                      </CardHeader>
                      <CardContent className="flex-grow overflow-hidden">
                        <div className="relative w-full h-0 pb-[125%] md:pb-[75%]">
                          <iframe
                            src={`${product.pdf}#toolbar=0&navpanes=0&scrollbar=0&page=1&view=FitH`}
                            className="absolute inset-0 w-full h-full rounded-md border"
                          />
                        </div>
                      </CardContent>
                      <CardFooter className="mt-auto border-t pt-4">
                        <Button asChild className="w-full">
                          <Link href={product.ppt} target="_blank" rel="noopener noreferrer">
                            Download blanks <Download className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  </>
                ) : (
                  <>
                    {/* Left Column - PDF Preview */}
                    <Card className="overflow-hidden flex flex-col h-[500px]">
                      <div className="h-2 bg-primary" />
                      <CardHeader>
                        <div className="flex items-center gap-2">
                          <CardTitle>Sample output</CardTitle>
                        </div>
                        <CardDescription>Download the latest output for {product.name}</CardDescription>
                      </CardHeader>
                      <CardContent className="flex-grow overflow-hidden">
                        <div className="relative w-full h-0 pb-[125%] md:pb-[75%]">
                          <iframe
                            src={`${product.pdf}#toolbar=0&navpanes=0&scrollbar=0&page=1&view=FitH`}
                            className="absolute inset-0 w-full h-full rounded-md border"
                          />
                        </div>
                      </CardContent>
                      <CardFooter className="mt-auto border-t pt-4">
                        <Button asChild className="w-full">
                          <Link href={product.ppt} target="_blank" rel="noopener noreferrer">
                            Download blanks <Download className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>

                    {/* Right Column - Content */}
                    <div className="space-y-4 text-left">
                      <h2 className="text-3xl font-bold tracking-tighter">{product.name}</h2>
                      <p className="max-w-lg text-muted-foreground text-sm md:text-base lg:text-lg">
                        {product.description}
                        <br /><br /> Key areas include:
                      </p>
                      <div className="space-y-4 pt-4 max-w-lg">
                        {product.keyPoints.map((point, idx) => {
                          const Icon = iconMap[point.icon];
                          return (
                            <div key={idx} className="flex items-start gap-3">
                              <div className="pt-1"><Icon className="h-5 w-5 text-primary" /></div>
                              <div className="text-muted-foreground">{point.text}</div>
                            </div>
                          );
                        })}
                      </div>

                      {/* Logo Row */}
                      <div className="flex flex-wrap items-center gap-10 pt-6">
                        {product.tools.map((tool, idx) => {
                          const isTaller = ["G2", "Glassdoor", "S&P Global"].includes(tool.name);
                          return (
                            <img
                              key={idx}
                              src={tool.icon}
                              alt={tool.name}
                              className={isTaller ? "h-9" : "h-5"}
                            />
                          );
                        })}
                      </div>

                    </div>
                  </>
                )}
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
                Sample Technology cases from BCN PEG
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <Card className="overflow-hidden flex flex-col h-[380px]">
              <div className="h-2 bg-primary" />
              <CardHeader>
                <div className="flex items-center gap-2">
                  <CardTitle>Technology DD</CardTitle>
                </div>
                {/* <CardDescription>Short description</CardDescription> */}
              </CardHeader>
              <CardContent className="flex-grow overflow-hidden">
                <div className="relative w-full h-0 pb-[125%] md:pb-[75%]">
                  <iframe
                    src="/Decks/Technology/Technology DD.pdf#toolbar=0&navpanes=0&scrollbar=0&page=1&view=FitH"
                    className="w-full h-[350px] rounded-md border"
                  />
                </div>
              </CardContent>
              <CardFooter className="mt-auto border-t pt-4">
                <Button asChild className="w-full">
                  <Link href="/Decks/Technology/Technology DD.pdf" target="_blank" rel="noopener noreferrer">
                    Open deck <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="overflow-hidden flex flex-col h-[380px]">
              <div className="h-2 bg-primary" />
              <CardHeader>
                <div className="flex items-center gap-2">
                  <CardTitle>TDD workforce</CardTitle>
                </div>
                {/* <CardDescription>Short description</CardDescription> */}
              </CardHeader>
              <CardContent className="flex-grow overflow-hidden">
                <div className="relative w-full h-0 pb-[125%] md:pb-[75%]">
                  <iframe
                    src="/Decks/Technology/TDD workforce.pdf#toolbar=0&navpanes=0&scrollbar=0&page=1&view=FitH"
                    className="w-full h-[350px] rounded-md border"
                  />
                </div>
              </CardContent>
              <CardFooter className="mt-auto border-t pt-4">
                <Button asChild className="w-full">
                  <Link href="/Decks/Technology/TDD workforce.pdf" target="_blank" rel="noopener noreferrer">
                    Open deck <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="overflow-hidden flex flex-col h-[380px]">
              <div className="h-2 bg-primary" />
              <CardHeader>
                <div className="flex items-center gap-2">
                  <CardTitle>Feature benchmarking</CardTitle>
                </div>
                {/* <CardDescription>Short description</CardDescription> */}
              </CardHeader>
              <CardContent className="flex-grow overflow-hidden">
                <div className="relative w-full h-0 pb-[125%] md:pb-[75%]">
                  <iframe
                    src="/Decks/Technology/Feature benchmarking.pdf#toolbar=0&navpanes=0&scrollbar=0&page=1&view=FitH"
                    className="absolute inset-0 w-full h-full rounded-md border"
                  />
                </div>
              </CardContent>
              <CardFooter className="mt-auto border-t pt-4">
                <Button asChild className="w-full">
                  <Link href="/Decks/Technology/Feature benchmarking.pdf" target="_blank" rel="noopener noreferrer">
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
                Collaborate with a BCN PEG Technology team, and get your next case powered by experts!
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

