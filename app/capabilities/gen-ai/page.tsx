"use client"

import Link from "next/link"
import { Brain, LineChart, SlidersHorizontal, PhoneCall, Download, ExternalLink, AlertCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ScrollingTestimonials from "@/components/scrolling-testimonials"
import { getTestimonialsByOffering } from "@/lib/testimonials-data"
import ExpertCard from "@/components/expert-card"
import { bcnExperts } from "@/lib/genAI"
import { ExecSummary } from "@/components/execSummary";

const iconMap = {
  Brain,
  LineChart,
  SlidersHorizontal,
  PhoneCall,
};

const testimonials = getTestimonialsByOffering("generalTestimonials")

export default function GenAIpage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      {/* Hero Section with Coming Soon Badge */}
      <section className="w-full py-12 md:py-24 bg-gradient-to-r from-primary/15 via-primary/5 to-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            {/* <Badge variant="outline" className="mb-2 bg-yellow-50 text-yellow-700 border-yellow-200">
              <Clock className="h-3 w-3 mr-1" />
              Coming Soon
            </Badge> */}
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Gen AI DD</h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                End-to-end GenAI Due Diligence (DD) from scoping to delivery, using GenAI tools and expert insights to assess impact, identify disruptions, generate outputs, and prototype AI applications
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Alert */}
      {/* <section className="w-full pt-6">
        <div className="container px-4 md:px-6">
          <Alert className="border-yellow-200 bg-yellow-50">
            <AlertCircle className="h-4 w-4 text-yellow-600" />
            <AlertDescription className="text-yellow-800">
              Our Gen AI DD offerings are currently being finalized. Contact our experts below for early access
            </AlertDescription>
          </Alert>
        </div>
      </section> */}

      {/* Executive Summary */}
      <ExecSummary
        src="/Decks/Gen AI/ExecSummary.png"
        alt="GenAI Executive Summary"
        padding="pt-12 pb-12 md:pb-24"
      />

      {/* Product Catalog */}
      <section className="w-full py-12 md:pb-24 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            {/* Left Column - Heading & Description */}
            <div className="space-y-4 text-left">
              <h2 className="text-3xl font-bold tracking-tighter">BCN PEG product catalog</h2>
              <p className="max-w-lg text-muted-foreground text-sm md:text-base lg:text-lg">
                Leveraging AI-powered research and data synthesis tools to develop sharp perspectives on AI, enhanced by BCN’s deep expertise and learning curve. Approaches are tailored to the case context using adaptable AI tools, with targeted expert and customer/competitor calls conducted as needed to enrich insights
              </p>
              <div className="flex flex-wrap gap-x-8 py-2">
                <img src="/Icons/Gen AI/notebookLM2.png" alt="Notebook LM" className="h-6 w-auto object-contain" />
                <img src="/Icons/Gen AI/picture1.jpg" alt="Notebook LM" className="h-8 w-auto object-contain" />
                {/* <img src="/Icons/Gen AI/GeminiDeepResearch.png" alt="Notebook LM" className="h-10 w-auto object-contain" /> */}
                <img src="/Icons/Gen AI/lovable2.png" alt="Notebook LM" className="h-6 w-auto object-contain" />
              </div>
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
                  <CardTitle>Overview</CardTitle>
                </div>
                <CardDescription>Download the latest product catalog for Gen AI DD</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow overflow-hidden">
                <div className="relative w-full h-0 pb-[125%] md:pb-[75%]"> {/* Aspect ratio container */}
                  <iframe
                    src="/Decks/Gen AI/Gen AI_BCN_Product catalog.pdf#toolbar=0&navpanes=0&scrollbar=0&page=1&view=FitH"
                    className="absolute inset-0 w-full h-full rounded-md border"
                  />
                </div>
              </CardContent>
              <CardFooter className="mt-auto border-t pt-4">
                <Button asChild className="w-full">
                  <Link href="/Decks/Gen AI/Gen AI_BCN_Product catalog.pdf" target="_blank" rel="noopener noreferrer">
                    Open deck <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

          </div>
        </div>
      </section>

      {/* Presentations Section */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">Case studies</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Sample case studies from BCN PEG
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card className="overflow-hidden flex flex-col h-[480px]">
              <div className="h-2 bg-primary" />
              <CardHeader>
                <div className="flex items-center gap-2">
                  <CardTitle>Gen AI DD sample 1</CardTitle>
                </div>
                {/* <CardDescription>Short description</CardDescription> */}
              </CardHeader>
              <CardContent className="flex-grow overflow-hidden">
                <div className="relative w-full h-0 pb-[125%] md:pb-[75%]">
                  <iframe
                    src="/Decks/Gen AI/Project GenAI Sample 1.pdf#toolbar=0&navpanes=0&scrollbar=0&page=1&view=FitH"
                    className="absolute inset-0 w-full h-full rounded-md border"
                  />
                </div>
              </CardContent>
              <CardFooter className="mt-auto border-t pt-4">
                <Button asChild className="w-full">
                  <Link href="/Decks/Gen AI/Project GenAI Sample 1.pdf" target="_blank" rel="noopener noreferrer">
                    Open deck <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="overflow-hidden flex flex-col h-[480px]">
              <div className="h-2 bg-primary" />
              <CardHeader>
                <div className="flex items-center gap-2">
                  <CardTitle>Gen AI DD sample 2</CardTitle>
                </div>
                {/* <CardDescription>Short description</CardDescription> */}
              </CardHeader>
              <CardContent className="flex-grow overflow-hidden">
                <div className="relative w-full h-0 pb-[125%] md:pb-[75%]">
                  <iframe
                    src="/Decks/Gen AI/Project Sample 2 GenAI.pdf#toolbar=0&navpanes=0&scrollbar=0&page=1&view=FitH"
                    className="absolute inset-0 w-full h-full rounded-md border"
                  />
                </div>
              </CardContent>
              <CardFooter className="mt-auto border-t pt-4">
                <Button asChild className="w-full">
                  <Link href="/Decks/Gen AI/Project Sample 2 GenAI.pdf" target="_blank" rel="noopener noreferrer">
                    Open deck <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* <Card className="overflow-hidden flex flex-col h-[370px]">
              <div className="h-2 bg-primary" />
              <CardHeader>
                <div className="flex items-center gap-2">
                  <CardTitle>Survey deck 3</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex-grow overflow-hidden">
                <div className="relative w-full h-0 pb-[125%] md:pb-[75%]">
                  <iframe
                    src="/Decks/Survey/Survey 3_Sample Output.pdf#toolbar=0&navpanes=0&scrollbar=0&page=1&view=FitH"
                    className="absolute inset-0 w-full h-full rounded-md border"
                  />
                </div>
              </CardContent>
              <CardFooter className="mt-auto border-t pt-4">
                <Button asChild className="w-full">
                  <Link href="/Decks/Survey/Survey 3_Sample Output.pdf" target="_blank" rel="noopener noreferrer">
                    Open deck <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card> */}

          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24  bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">Connect with experts</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Collaborate with a BCN PEG team, and get your next case powered by experts!
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
