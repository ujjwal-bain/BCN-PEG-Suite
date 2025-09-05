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
import { selfServiceTools } from "@/lib/workforce-analytics"
import { bcnExperts } from "@/lib/workforce-analytics"
import { otherExperts } from "@/lib/workforce-analytics"
import Pill from "@/components/Pill"
import { Global } from "recharts"
import { ExecSummary } from "@/components/execSummary"

const testimonials = getTestimonialsByOffering("generalTestimonials")


export default function workforceAnalyticsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 bg-gradient-to-r from-primary/15 via-primary/5 to-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Workforce analytics</h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Drive strategic decisions with comprehensive workforce analytics – track headcount trends, org. structure, hiring and retention metrics. Elevate your talent strategy with powerful insights into employee sentiment, market pay trends, job postings, and productivity benchmarks
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Summary */}
      <ExecSummary
        src="/Decks/Workforce/ExecSum5.png"
        alt="Workforce Executive Summary"
      />

      {/* Product Catalog */}
      <section className="w-full py-12 md:py-24  bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            {/* Left Column - PDF Preview Card */}
            <Card className="overflow-hidden flex flex-col h-[500px]">
              <div className="h-2 bg-primary" />
              <CardHeader>
                <div className="flex items-center gap-2">
                  <CardTitle>BCN PEG Workforce analytics overview</CardTitle>
                </div>
                <CardDescription>Download the latest product catalog for workforce analytics at BCN</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow overflow-hidden">
                <div className="relative w-full h-0 pb-[125%] md:pb-[75%]"> {/* Aspect ratio container */}
                  <iframe
                    src="/Decks/Workforce/BCN PEG Workforce analytics product deck 2025.pdf#toolbar=0&navpanes=0&scrollbar=0&page=1&view=FitH"
                    className="absolute inset-0 w-full h-full rounded-md border"
                  />
                </div>
              </CardContent>
              <CardFooter className="mt-auto border-t pt-4">
                <Button asChild className="w-full">
                  <Link href="/Decks/Workforce/BCN PEG Workforce analytics product deck 2025.pdf" target="_blank" rel="noopener noreferrer">
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

      {/* Workforce Offerings Section */}
      {/* <section className="w-full py-12 md:py-24 bg-muted/10 border-y">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <h2 className="text-3xl font-bold tracking-tight"> BCN PEG Workforce Analytics Offerings </h2>
            <p className="text-muted-foreground max-w-[700px]">
              Engage BCN PEG to answer key questions on your workforce case
            </p>
          </div>
        </div>
      </section> */}

      {/* Organizational Talent Diagnostics */}
      <section id="orgTalentDiagnostics" className="w-full py-12 md:py-24 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            {/* Left Column - Heading & Description */}
            <div className="space-y-4 text-left">
              <h2 className="text-3xl font-bold tracking-tighter">Organizational talent diagnostics</h2>
              <p className="max-w-lg text-muted-foreground text-sm md:text-base lg:text-lg">
                Analyze the structure and dynamics of an organization’s workforce. From headcount changes to functional composition, this module highlights critical insights across key talent dimensions to develop a strategy and support targeted interventions.
                <br /> <br /> Key KPIs include:
              </p>
              <div className="space-y-4 pt-4 max-w-lg">
                {[
                  {
                    icon: <Users className="H-5 W-5 text-primary" />,
                    title: "FTE growth, tenure, and attrition trends",
                    // description: "Global GWP and Brokerage revenue model split by LOBs",
                  },
                  {
                    icon: < Globe className="H-5 W-5 text-primary" />,
                    title: "Functional and geographic distribution",
                    // description: "Market size and revenue pool estimation in terms of AUMs split by channel and customer segment",
                  },
                  {
                    icon: <Briefcase className="H-5 W-5 text-primary" />,
                    title: "Education background, sources and destination of talent",
                    // description: "Market size estimation and forecasts split by geography, type of fund and jurisdiction",
                  },
                  {
                    icon: <UserSearch className="H-5 W-5 text-primary" />,
                    title: "DE&I lens: gender and ethnicity - based tenure, attrition, etc.",
                    // description: "Market size estimation and forecasts split by geography, type of fund and jurisdiction",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div>{item.icon}</div>
                    <div>
                      <div className="text-muted-foreground">{item.title}</div>
                      {/* <div className="text-muted-foreground text-sm">{item.description}</div> */}
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
                <CardDescription>Download the latest output for organizational talent diagnostics</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow overflow-hidden">
                <div className="relative w-full h-0 pb-[125%] md:pb-[75%]">
                  <iframe
                    src="/Decks/Workforce/Workforce 2_Sample Output_Talent Diagnostics.pdf#toolbar=0&navpanes=0&scrollbar=0&page=1&view=FitH"
                    className="absolute inset-0 w-full h-full rounded-md border"
                  />
                </div>
              </CardContent>
              <CardFooter className="mt-auto border-t pt-4">
                <Button asChild className="w-full">
                  <Link href="/Decks/Workforce/Workforce 2_Sample Output_Talent Diagnostics.pptx" target="_blank" rel="noopener noreferrer">
                    Download blanks <Download className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            {/* <div>
              <img src="/Icons/Workforce/talentDiagVector.png" alt="Talent Diagnostics Image" />
            </div> */}

          </div>
        </div>
      </section>

      {/* Employee Sentiment Analysis */}
      <section id="sentimentAnalysis" className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            {/* Left Column - PDF Preview Card */}
            <Card className="overflow-hidden flex flex-col h-[500px]">
              <div className="h-2 bg-primary" />
              <CardHeader>
                <div className="flex items-center gap-2">
                  <CardTitle>Sample output</CardTitle>
                </div>
                <CardDescription>Download the latest output for employee sentiment analysis</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow overflow-hidden">
                <div className="relative w-full h-0 pb-[125%] md:pb-[75%]">
                  <iframe
                    src="/Decks/Workforce/Workforce 1_Sample Output_Sentiment analysis.pdf#toolbar=0&navpanes=0&scrollbar=0&page=1&view=FitH"
                    className="absolute inset-0 w-full h-full rounded-md border"
                  />
                </div>
              </CardContent>
              <CardFooter className="mt-auto border-t pt-4">
                <Button asChild className="w-full">
                  <Link href="/Decks/Workforce/Workforce 1_Sample Output_Sentiment analysis.pptx" target="_blank" rel="noopener noreferrer">
                    Download blanks <Download className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* <div>
              <img src="/Icons/Workforce/sentimentVector2.png" alt="Sentiment Analysis Image" />
            </div> */}

            {/* Right Column - Heading & Description */}
            <div className="space-y-4 text-left">
              <h2 className="text-3xl font-bold tracking-tighter">Employee sentiment analysis</h2>
              <p className="max-w-lg text-muted-foreground text-sm md:text-base lg:text-lg">
                Benchmark employee sentiment using review platforms like Glassdoor analyzing both quantitative ratings and qualitative themes. This module uncovers key strengths and areas of improvement across leadership, culture, and compensation - from the voice of the employee.
                <br /><br />Key areas of analysis:
              </p>
              <div className="space-y-4 pt-4 max-w-lg">
                {[
                  {
                    icon: <ChartLine className="H-5 W-5 text-primary" />,
                    title: "Overall Glassdoor ratings and trends over time",
                    // description: "Global GWP and Brokerage revenue model split by LOBs",
                  },
                  {
                    icon: <Search className="H-5 W-5 text-primary" />,
                    title: "Key positive and negative review themes (e.g., work-life balance, leadership)",
                    // description: "Market size and revenue pool estimation in terms of AUMs split by channel and customer segment",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div>{item.icon}</div>
                    <div>
                      <div className="text-muted-foreground">{item.title}</div>
                      {/* <div className="text-muted-foreground text-sm">{item.description}</div> */}
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

          </div>
        </div>
      </section>

      {/* External Market Signals */}
      <section id="extMarketSignals" className="w-full py-12 md:py-24 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            {/* Left Column - Heading & Description */}
            <div className="space-y-4 text-left">
              <h2 className="text-3xl font-bold tracking-tighter">External market signals</h2>
              <p className="max-w-lg text-muted-foreground text-sm md:text-base lg:text-lg">
                This module offers two distinct lenses into the external talent landscape: job postings analysis helps uncover in-demand skills and peer hiring trends, while compensation benchmarking provides a view into how pay structures vary by role, level, and region.
                <br /> <br /> Key components include:
              </p>
              <div className="space-y-4 pt-4 max-w-md">
                {[
                  {
                    icon: <Map className="H-5 W-5 text-primary" />,
                    title: "Active and historical job postings by region",
                    // description: "Global GWP and Brokerage revenue model split by LOBs",
                  },
                  {
                    icon: < Users className="H-5 W-5 text-primary" />,
                    title: "Insights into in-demand roles and peer activity",
                    // description: "Market size and revenue pool estimation in terms of AUMs split by channel and customer segment",
                  },
                  {
                    icon: <HandCoins className="H-5 W-5 text-primary" />,
                    title: "Compensation benchmarking across job roles and levels",
                    // description: "Market size estimation and forecasts split by geography, type of fund and jurisdiction",
                  },
                  {
                    icon: <UserCog className="H-5 W-5 text-primary" />,
                    title: "Productivity benchmarking to assess # of employees per dollar revenue",
                    // description: "Market size estimation and forecasts split by geography, type of fund and jurisdiction",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div>{item.icon}</div>
                    <div>
                      <div className="text-muted-foreground">{item.title}</div>
                      {/* <div className="text-muted-foreground text-sm">{item.description}</div> */}
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
                <CardDescription>Download the latest output for external market signals</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow overflow-hidden">
                <div className="relative w-full h-0 pb-[125%] md:pb-[75%]">
                  <iframe
                    src="/Decks/Workforce/Workforce 5_Sample Output_Job Postings and Compensation analysis.pdf#toolbar=0&navpanes=0&scrollbar=0&page=1&view=FitH"
                    className="absolute inset-0 w-full h-full rounded-md border"
                  />
                </div>
              </CardContent>
              <CardFooter className="mt-auto border-t pt-4">
                <Button asChild className="w-full">
                  <Link href="/Decks/Workforce/Workforce 5_Sample Output_Job Postings and Compensation analysis.pptx" target="_blank" rel="noopener noreferrer">
                    Download blanks <Download className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* <div>
              <img src="/Icons/Workforce/externalMarketVector2.png" alt="External Market Signals Image" />
            </div> */}

          </div>
        </div>
      </section>

      {/* Datalake AI */}
      <section id="agentMotion" className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2 items-center">
            {/* Left Column - PDF Preview Card */}
            <div className="flex flex-col min-h-[500px] relative">
              <img
                src="/Icons/Workforce/Datalake_vector.png"
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
              <h2 className="text-3xl font-bold tracking-tighter">DataLake AI</h2>
              <p className="max-w-lg text-muted-foreground text-sm md:text-base lg:text-lg">
                A cutting-edge digital platform fueled by vast datasets and next-gen AI, empowering users to generate valuable workforce insights. Unlock the power of your talent data with modules that effortlessly map job titles by role and seniority, standardize location information, and convert raw data from Aura / LinkedIn into dynamic, interactive dashboards
              </p>
              <br />
              <p className="text-muted-foreground italic">Reach out to BCN PEG Staffing for additional details and get your next case powered by DataLake AI</p>
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


      {/* Case studies Section */}
      <section className="w-full py-12 md:py-24 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">Case studies</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Sample Workforce cases from BCN PEG
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <Card className="overflow-hidden flex flex-col h-[380px]">
              <div className="h-2 bg-primary" />
              <CardHeader>
                <div className="flex items-center gap-2">
                  <CardTitle>Talent diagnostics</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex-grow overflow-hidden">
                <div className="relative w-full h-0 pb-[125%] md:pb-[75%]">
                  <iframe
                    src="/Decks/Workforce/Workforce 2_Sample Output_Talent Diagnostics.pdf#toolbar=0&navpanes=0&scrollbar=0&page=1&view=FitH"
                    className="w-full h-[350px] rounded-md border"
                  />
                </div>
              </CardContent>
              <CardFooter className="mt-auto border-t pt-4">
                <Button asChild className="w-full">
                  <Link href="/Decks/Workforce/Workforce 2_Sample Output_Talent Diagnostics.pdf" target="_blank" rel="noopener noreferrer">
                    Open deck <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="overflow-hidden flex flex-col h-[380px]">
              <div className="h-2 bg-primary" />
              <CardHeader>
                <div className="flex items-center gap-2">
                  <CardTitle>Workforce analysis 1</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex-grow overflow-hidden">
                <div className="relative w-full h-0 pb-[125%] md:pb-[75%]">
                  <iframe
                    src="/Decks/Workforce/Workforce 3_Sample Output_Workforce analysis.pdf#toolbar=0&navpanes=0&scrollbar=0&page=1&view=FitH"
                    className="w-full h-[350px] rounded-md border"
                  />
                </div>
              </CardContent>
              <CardFooter className="mt-auto border-t pt-4">
                <Button asChild className="w-full">
                  <Link href="/Decks/Workforce/Workforce 3_Sample Output_Workforce analysis.pdf" target="_blank" rel="noopener noreferrer">
                    Open deck <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="overflow-hidden flex flex-col h-[380px]">
              <div className="h-2 bg-primary" />
              <CardHeader>
                <div className="flex items-center gap-2">
                  <CardTitle>Workforce analysis 2</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex-grow overflow-hidden">
                <div className="relative w-full h-0 pb-[125%] md:pb-[75%]">
                  <iframe
                    src="/Decks/Workforce/Workforce 4_Sample Output_Workforce analysis.pdf#toolbar=0&navpanes=0&scrollbar=0&page=1&view=FitH"
                    className="w-full h-[350px] rounded-md border"
                  />
                </div>
              </CardContent>
              <CardFooter className="mt-auto border-t pt-4">
                <Button asChild className="w-full">
                  <Link href="/Decks/Workforce/Workforce 4_Sample Output_Workforce analysis.pdf" target="_blank" rel="noopener noreferrer">
                    Open deck <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* <section className="w-full py-12 md:py-24 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">Connect with experts</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Collaborate with a BCN PEG Workforce team, and get your next case powered by experts!
              </p>
            </div>
          </div>

          {/* BCN PEG Workforce experts */}
      {/* <div className="mb-10">
            <h3 className="text-xl font-semibold mb-4 text-center">BCN PEG Workforce experts</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {bcnExperts.map((expert) => (
                <ExpertCard key={expert.email} expert={expert} />
              ))}
            </div>
          </div> */}

      {/* Workforce tools and experts */}
      {/* <div>
            <h3 className="text-xl font-semibold mb-4 text-center">Workforce tools and experts</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-22">
              {otherExperts.map((vendor) => (
                <VendorCard key={vendor.email} vendor={vendor} imageHeight={30} imageWidth={30} />
              ))}
            </div>
          </div>
        </div> */}
      {/* </section>  */}

      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">Connect with experts</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Collaborate with a BCN PEG FS team, and get your next case powered by experts!
              </p>
            </div>

            <div className="py-2 md:py-6">
              <h3 className="text-xl font-semibold mb-4 text-center">BCN PEG Workforce experts</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-5">
                {bcnExperts.map((expert) => (
                  <ExpertCard key={expert.email} expert={expert} />
                ))}
              </div>
            </div>

            <div className="py-2 md:py-6">
              <h3 className="text-xl font-semibold mb-4 text-center">Workforce tools and experts</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-5">
                {otherExperts.map((vendor) => (
                <VendorCard key={vendor.email} vendor={vendor} imageHeight={30} imageWidth={30} />
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

