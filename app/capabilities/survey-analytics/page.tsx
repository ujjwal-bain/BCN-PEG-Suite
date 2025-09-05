"use client"

import Link from "next/link"
import { ArrowRight, BarChart3, PieChart, LineChart, Mail, Phone, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import FlipCard from "@/components/FlipCard"
import ExpertCard from "@/components/expert-card"
import Pill from "@/components/Pill"
import ScrollingTestimonials from "@/components/scrolling-testimonials"
import { getTestimonialsByOffering } from "@/lib/testimonials-data"
import { valueChainSteps } from "@/lib/survey-analytics"
import { surveyExperts } from "@/lib/survey-analytics"
import VendorCard, { Vendor } from "@/components/VendorCard";
import { ExecSummary } from "@/components/execSummary"

const testimonials = getTestimonialsByOffering("generalTestimonials")

function chunkArray<T>(arr: T[], size: number): T[][] {
  return Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size)
  );
}


export default function SurveyAnalyticsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 bg-gradient-to-r from-primary/15 via-primary/5 to-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Survey analytics</h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Elevate your research with our end-to-end survey analytics solutions, offering everything from questionnaire design and panel coordination to advanced analytics and polished insights for both B2C and B2B surveys across industries
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Summary */}
      <ExecSummary
        src="/Decks/Survey/ExecSummary.png"
        alt="Survey Executive Summary"
      />

      {/* Product Catalog */}
      <section className="w-full py-12 md:py-24 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            {/* Left Column - Heading & Description */}
            <div className="space-y-4 text-left">
              <h2 className="text-3xl font-bold tracking-tighter">BCN PEG product catalog</h2>
              <p className="max-w-lg text-muted-foreground text-sm md:text-base lg:text-lg">
                Explore BCN PEG's survey analytics solutions, designed to enhance insights for B2C and B2B surveys across sectors. Using advanced methodologies, we extract key patterns and trends, providing actionable intelligence for market research, customer experience, and product feedback analysis
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
                  <CardTitle>BCN PEG survey overview</CardTitle>
                </div>
                <CardDescription>Download the latest product catalog for surveys at BCN</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow overflow-hidden">
                <div className="relative w-full h-0 pb-[125%] md:pb-[75%]"> {/* Aspect ratio container */}
                  <iframe
                    src="/Decks/Survey/SurveyProductDeck.pdf#toolbar=0&navpanes=0&scrollbar=0&page=1&view=FitH"
                    className="absolute inset-0 w-full h-full rounded-md border"
                  />
                </div>
              </CardContent>
              <CardFooter className="mt-auto border-t pt-4">
                <Button asChild className="w-full">
                  <Link href="/Decks/Survey/SurveyProductDeck.pdf" target="_blank" rel="noopener noreferrer">
                    Open deck <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

          </div>
        </div>
      </section>

      {/* Bot Detection */}
      <section id="agentMotion" className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            {/* Left Column - PDF Preview Card */}
            <Card className="overflow-hidden flex flex-col h-[500px]">
              <div className="h-2 bg-primary" />
              <CardHeader>
                <div className="flex items-center gap-2">
                  <CardTitle>Survey BDPs catalog</CardTitle>
                </div>
                <CardDescription>Download the latest QC BDPs in surveys</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow overflow-hidden">
                <div className="relative w-full h-0 pb-[125%] md:pb-[75%]"> {/* Aspect ratio container */}
                  <iframe
                    src="/Decks/Survey/BCN PEG Surveys - QC BDPs.pdf#toolbar=0&navpanes=0&scrollbar=0&page=1&view=FitH"
                    className="absolute inset-0 w-full h-full rounded-md border"
                  />
                </div>
              </CardContent>
              <CardFooter className="mt-auto border-t pt-4">
                <Button asChild className="w-full">
                  <Link href="/Decks/Survey/BCN PEG Surveys - QC BDPs.pdf" target="_blank" rel="noopener noreferrer">
                    Open deck <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Right Column - Heading & Description */}
            <div className="space-y-4 pl-20 text-left">
              <h2 className="text-3xl font-bold tracking-tighter">Survey BDPs</h2>
              <p className="max-w-lg text-muted-foreground text-sm md:text-base lg:text-lg">
                Implementing robust QC checks and flags to ensure only valid respondents are included in survey data. By proactively placing checks and flags for patterns like repeated text, off-language responses, and unusual brand mentions, these safeguards help filter out bots and low-quality participants early in the process—protecting the integrity of the survey from the start
              </p>
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

      {/* Self-service Tools Section */}
      <section className="w-full py-12 md:py-24 bg-muted/50">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter mb-8">Self-service tools</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="overflow-hidden flex flex-col min-h-[380px]">
              <div className="h-2 bg-primary" />
              <CardHeader>
                <div className="flex items-center gap-2">
                  <img src="/Icons/Survey/openai_pic.png" alt="AI Survey  Builder logo" className="h-8 w-8" />
                  <CardTitle>AI Survey Builder</CardTitle>
                </div>
                <CardDescription>AI-based survey designing tool</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow overflow-auto flex flex-col justify-between">
                <p className="text-muted-foreground">
                  Generate an AI driven first draft of a survey questionnaire in minutes. Trained on best in class sub-sector specific survey templates the platform can generate both B2B and B2C surveys with required nuances and enables you to use AI for customizing each question/section for your needs.
                </p>
                <div className="self-end pt-4">
                  <Pill text="No fees" className="px-3 py-1 text-xs" />
                </div>
              </CardContent>
              <CardFooter className="mt-auto border-t pt-4">
                <Button asChild className="w-full">
                  <a href="https://surveyai.bain.dev/ " target="_blank" rel="noopener noreferrer">
                    Access tool <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardFooter>
            </Card>

            <Card className="overflow-hidden flex flex-col min-h-[380px]">
              <div className="h-2 bg-primary" />
              <CardHeader>
                <div className="flex items-center gap-2">
                  <img src="/Icons/Survey/nova-favicon.png" alt="NOVA logo" className="h-8" />
                  <CardTitle>NOVA</CardTitle>
                </div>
                <CardDescription>SaaS-based survey analytics platform</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow overflow-auto flex flex-col justify-between">
                <p className="text-muted-foreground">
                  Unlock actionable insights with our SaaS-based survey analytics platform. Case teams can upload data and generate instant analytics with one click, using advanced filtering and segmentation for deeper analysis and faster decisions.
                </p>
                <div className="self-end pt-4">
                  <Pill text="$2.2K to $3.6K / survey (one time access fees)" className="px-3 py-1 text-xs" />
                </div>
              </CardContent>
              <CardFooter className="mt-auto border-t pt-4">
                <Button asChild className="w-full">
                  <a href="https://nova-qa.339713029942.aws.bain.dev/project/ " target="_blank" rel="noopener noreferrer">
                    Access tool <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Offerings Section with Flip Cards and Gradient Lines */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter mb-8">
            BCN PEG Survey analytics value chain
          </h2>

          <div className="grid gap-6 lg:grid-cols-6">
            {/* First Group */}
            <div className="col-span-full lg:col-span-4 px-4">
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="flex-grow h-px bg-gradient-to-l from-gray-300 to-transparent"></span>
                <h3 className="text-lg" style={{ color: '#C00000' }}>
                  Pre launch set up
                </h3>
                <span className="flex-grow h-px bg-gradient-to-r from-gray-300 to-transparent"></span>
              </div>
              <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
                {valueChainSteps.slice(0, 4).map((offering) => (
                  <FlipCard
                    key={offering.id}
                    title={offering.title}
                    detailedInfo={offering.detailedInfo}
                    logoSrc={offering.logoSrc}
                  // link={offering.link}
                  // className="w-full"
                  />
                ))}
              </div>
            </div>

            {/* Second Group */}
            <div className="col-span-full lg:col-span-2 px-4">
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="flex-grow h-px bg-gradient-to-l from-gray-300 to-transparent"></span>
                <h3 className="text-lg" style={{ color: '#C00000' }}>
                  Analytics and insights
                </h3>
                <span className="flex-grow h-px bg-gradient-to-r from-gray-300 to-transparent"></span>
              </div>
              <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
                {valueChainSteps.slice(4, 6).map((offering) => (
                  <FlipCard
                    key={offering.id}
                    title={offering.title}
                    detailedInfo={offering.detailedInfo}
                    logoSrc={offering.logoSrc}
                  // link={offering.link}
                  // className="w-full"
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-6 mt-8 px-4">
            {/* Button for first two cards */}
            <div className="flex justify-center col-span-2 md:pr-2">
              <Button asChild className="w-[410px]">
                <Link href="/capabilities/survey-analytics/survey-design">
                  Learn more about project scoping and vendors <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Button for second two cards */}
            <div className="flex justify-center col-span-2 md:pr-6">
              <Button asChild className="w-[410px]">
                <Link href="/capabilities/survey-analytics/survey-coding">
                  Learn more about survey coding and soft launch <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Spacer for alignment, so last button goes right under last 2 cards */}
            {/* <div className="hidden md:block md:col-span-2" /> */}

            {/* Button under last two cards */}
            <div className="flex md:col-span-2 md:pl-8">
              <Button asChild className="w-[420px]">
                <Link href="/capabilities/survey-analytics/survey-analysis">
                  Learn more about survey analytics <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

        </div>
      </section>

      {/* Presentations Section */}
      <section className="w-full py-12 md:py-24  bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">Case studies</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Sample case studies from BCN PEG
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <Card className="overflow-hidden flex flex-col h-[370px]">
              <div className="h-2 bg-primary" />
              <CardHeader>
                <div className="flex items-center gap-2">
                  <CardTitle>Survey deck 1</CardTitle>
                </div>
                {/* <CardDescription>Short description</CardDescription> */}
              </CardHeader>
              <CardContent className="flex-grow overflow-hidden">
                <div className="relative w-full h-0 pb-[125%] md:pb-[75%]">
                  <iframe
                    src="/Decks/Survey/Survey 1_Sample Output.pdf#toolbar=0&navpanes=0&scrollbar=0&page=1&view=FitH"
                    className="absolute inset-0 w-full h-full rounded-md border"
                  />
                </div>
              </CardContent>
              <CardFooter className="mt-auto border-t pt-4">
                <Button asChild className="w-full">
                  <Link href="/Decks/Survey/Survey 1_Sample Output.pdf" target="_blank" rel="noopener noreferrer">
                    Open deck <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="overflow-hidden flex flex-col h-[370px]">
              <div className="h-2 bg-primary" />
              <CardHeader>
                <div className="flex items-center gap-2">
                  <CardTitle>Survey deck 2</CardTitle>
                </div>
                {/* <CardDescription>Short description</CardDescription> */}
              </CardHeader>
              <CardContent className="flex-grow overflow-hidden">
                <div className="relative w-full h-0 pb-[125%] md:pb-[75%]">
                  <iframe
                    src="/Decks/Survey/Survey 2_Sample Output.pdf#toolbar=0&navpanes=0&scrollbar=0&page=1&view=FitH"
                    className="absolute inset-0 w-full h-full rounded-md border"
                  />
                </div>
              </CardContent>
              <CardFooter className="mt-auto border-t pt-4">
                <Button asChild className="w-full">
                  <Link href="/Decks/Survey/Survey 2_Sample Output.pdf" target="_blank" rel="noopener noreferrer">
                    Open deck <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="overflow-hidden flex flex-col h-[370px]">
              <div className="h-2 bg-primary" />
              <CardHeader>
                <div className="flex items-center gap-2">
                  <CardTitle>Survey deck 3</CardTitle>
                </div>
                {/* <CardDescription>Short description</CardDescription> */}
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
            </Card>

          </div>
        </div>
      </section>


      {/* <section className="w-full py-8 md:py-12 pb-0">
        <div className="container px-4 md:px-6 mb-0">
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
            {valueChainSteps.map((step, index) => (
              <div key={index} className="flex items-center">
                <div className="flex flex-col items-center text-center max-w-[150px]">
                  <div className="h-20 w-20 flex items-center justify-center">
                    <img src={step.image} alt={step.title} className="max-h-full max-w-full object-contain" />
                  </div>
                  <div className="mt-2">
                    <p className="text-sm font-medium whitespace-normal">{step.title}</p>
                  </div>
                </div>

                {index < valueChainSteps.length - 1 && (
                  <div className="h-10 mx-5">
                    <img src="/bain-arrow.png" alt="Arrow" className="h-full w-auto" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section> */}


      {/* Main Offerings Section
      <section className="w-full pt-6 md:pt-12 pb-24">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter mb-8">Our Survey Analytics Offerings</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="overflow-hidden flex flex-col h-[350px]">
              <div className="h-2 bg-primary" />
              <CardHeader>
                <div className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-primary" />
                  <CardTitle>Pre-coding / Panel</CardTitle>
                </div>
                <CardDescription>Advanced statistical methods and techniques</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow overflow-auto">
                <p className="text-muted-foreground">
                  Our statistical analysis services help you extract meaningful insights from complex datasets using
                  advanced statistical methods and techniques.
                </p>
              </CardContent>
              <CardFooter className="mt-auto border-t pt-4">
                <Button asChild className="w-full">
                  <Link href="/capabilities/survey-analytics/pre-coding">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="overflow-hidden flex flex-col h-[350px]">
              <div className="h-2 bg-primary" />
              <CardHeader>
                <div className="flex items-center gap-2">
                  <PieChart className="h-5 w-5 text-primary" />
                  <CardTitle>Launch / Survey Insights</CardTitle>
                </div>
                <CardDescription>Compelling visual representations of data</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow overflow-auto">
                <p className="text-muted-foreground">
                  Our data visualization services transform complex data into clear, compelling visual representations
                  that facilitate understanding and decision-making.
                </p>
              </CardContent>
              <CardFooter className="mt-auto border-t pt-4">
                <Button asChild className="w-full">
                  <Link href="/capabilities/survey-analytics/survey-insights">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="overflow-hidden flex flex-col h-[350px]">
              <div className="h-2 bg-primary" />
              <CardHeader>
                <div className="flex items-center gap-2">
                  <LineChart className="h-5 w-5 text-primary" />
                  <CardTitle>Slides & Automation</CardTitle>
                </div>
                <CardDescription>Forecast future trends and outcomes</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow overflow-auto">
                <p className="text-muted-foreground">
                  Our predictive modeling services use advanced algorithms and techniques to forecast future trends,
                  behaviors, and outcomes based on historical data.
                </p>
              </CardContent>
              <CardFooter className="mt-auto border-t pt-4">
                <Button asChild className="w-full">
                  <Link href="/capabilities/survey-analytics/slides-automation">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section> */}

      {/* Contact Section */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">Connect with experts</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Collaborate with a BCN PEG Survey team, and get your next case powered by experts!
              </p>
            </div>

            {/* Survey Experts Section */}
            <div className="py-2 md:py-6">
              <h3 className="text-xl font-semibold mb-4 text-center">BCN PEG Workforce experts</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-5">
                {surveyExperts.map((expert) => (
                  <ExpertCard key={expert.email} expert={expert} />
                ))}
              </div>
            </div>
            {/* Contact Vendors CTA */}
            <div className="w-full pt-16">
              <h3 className="text-lg font-semibold mb-4 text-center">Contact Survey vendors</h3>
              <div className="flex justify-center">
                <a
                  href="/capabilities/survey-analytics/survey-vendors"
                  className="flex items-center justify-between p-4 bg-white shadow-xs rounded-lg border hover:shadow-sm transition w-full max-w-md"
                >
                  <span className="font-medium text-base">View vendor directory</span>
                  <ArrowRight className="h-5 w-5 text-primary" />
                </a>
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

