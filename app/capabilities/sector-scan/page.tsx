"use client"

import Link from "next/link"
import { Download, FileText, Mail, Phone, Clock, AlertCircle, ExternalLink, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ScrollingTestimonials from "@/components/scrolling-testimonials"
import { getTestimonialsByOffering } from "@/lib/testimonials-data"
import ExpertCard from "@/components/expert-card"
import { bcnExperts } from "@/lib/sector-scan"

const testimonials = getTestimonialsByOffering("generalTestimonials")

export default function HealthcarePage() {
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
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Sector scan / Target screening</h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Identify high-potential acquisition targets with tailored scans and deep-dive profiles, powered by proprietary tools and AI-driven insights
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Alert */}
      <section className="w-full py-6">
        <div className="container px-4 md:px-6">
          <Alert className="border-yellow-200 bg-yellow-50">
            <AlertCircle className="h-4 w-4 text-yellow-600" />
            <AlertDescription className="text-yellow-800">
              Our Sector scan / Target screening offerings are currently being finalized. Contact our experts below for early access
            </AlertDescription>
          </Alert>
        </div>
      </section>

      {/* Product Catalog */}
      <section className="w-full py-12 md:pb-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            {/* Left Column - Heading & Description */}
            <div className="space-y-4 text-left">
              <h2 className="text-3xl font-bold tracking-tighter">BCN PEG product catalog</h2>
              <p className="max-w-lg text-muted-foreground text-sm md:text-base lg:text-lg">
                Designed to identify high-potential acquisition opportunities, BCN PEG’s sector scan and target screening solutions help funds and corporates evaluate targets across key sectors and geographies. Using proprietary tools, AI insights, and leading databases, we deliver accurate, tailored target lists and deep-dive profiles
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
                  <CardTitle>Overview</CardTitle>
                </div>
                <CardDescription>Download the latest product catalog for sector scan/ target screening</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow overflow-hidden">
                <div className="relative w-full h-0 pb-[125%] md:pb-[75%]"> {/* Aspect ratio container */}
                  <iframe
                    src="/Decks/Healthcare/sector-scans.pdf#toolbar=0&navpanes=0&scrollbar=0&page=1&view=FitH"
                    className="absolute inset-0 w-full h-full rounded-md border"
                  />
                </div>
              </CardContent>
              <CardFooter className="mt-auto border-t pt-4">
                <Button asChild className="w-full">
                  <Link href="/Decks/Healthcare/sector-scans.pdf" target="_blank" rel="noopener noreferrer">
                    Open deck <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

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
