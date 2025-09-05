"use client"

import Link from "next/link"
import { ArrowRight, ArrowUpRight, Download, FileSearch, Mail, Phone, ExternalLink, Binoculars, ScanSearch, Microscope, Stethoscope, Users, ShieldCheck, Briefcase } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Coming_Soon } from "next/font/google"
import NestedOfferingsAccordion from "@/components/nested-offerings-accordion"
import { healthcareOfferings } from "@/lib/healthcare-data"
import Image from "next/image";
import ScrollingTestimonials from "@/components/scrolling-testimonials"
import { getTestimonialsByOffering } from "@/lib/testimonials-data"
import test from "node:test"
import ExpertCard from "@/components/expert-card"
import { ExecSummary } from "@/components/execSummary"
import { categories } from "@/lib/healthcare-data"
import { bainExperts } from "@/lib/healthcare-data"
import { bcnExperts } from "@/lib/healthcare-data"
import { otherExperts } from "@/lib/healthcare-data"

const testimonials = getTestimonialsByOffering("generalTestimonials")

export default function HealthcarePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 bg-gradient-to-r from-primary/15 via-primary/5 to-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Healthcare</h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Healthcare focused analyses and insights to turbocharge your next PEG case. Includes key sector insights, BCN-driven DDs/ODAs, case studies, and direct access to tools and PEG healthcare experts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Summary */}
      <ExecSummary
        src="/Decks/Healthcare/execSumm.png"
        alt="Healthcare Executive Summary"
      />

      {/* Product Deck Section */}
      <section className="w-full py-12 md:py-24 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">BCN PEG product catalog</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explore Healthcare solutions offered by BCN
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <Card className="overflow-hidden flex flex-col h-[380px]">
              <div className="h-2 bg-primary" />
              <CardHeader>
                <div className="flex items-center gap-2">
                  <CardTitle>Healthcare playbook</CardTitle>
                </div>
                {/* <CardDescription>Short description</CardDescription> */}
              </CardHeader>
              <CardContent className="flex-grow overflow-hidden">
                <div className="relative w-full h-0 pb-[125%] md:pb-[75%]">
                  <iframe
                    src="/Decks/Healthcare/Sample DD Deck.pdf#toolbar=0&navpanes=0&scrollbar=0&page=1&view=FitH"
                    className="absolute inset-0 w-full h-full rounded-md border"
                  />
                </div>
              </CardContent>
              <CardFooter className="mt-auto border-t pt-4">
                <Button asChild className="w-full">
                  <Link href="/Decks/Healthcare/Sample DD Deck.pdf" target="_blank" rel="noopener noreferrer">
                    Open deck <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="overflow-hidden flex flex-col h-[380px]">
              <div className="h-2 bg-primary" />
              <CardHeader>
                <div className="flex items-center gap-2">
                  <CardTitle>Quick diagnostic</CardTitle>
                </div>
                {/* <CardDescription>Short description</CardDescription> */}
              </CardHeader>
              <CardContent className="flex-grow overflow-hidden">
                <div className="relative w-full h-0 pb-[125%] md:pb-[75%]">
                  <iframe
                    src="/Decks/Healthcare/Sample ODA - Copy.pdf#toolbar=0&navpanes=0&scrollbar=0&page=1&view=FitH"
                    className="absolute inset-0 w-full h-full rounded-md border"
                  />
                </div>
              </CardContent>
              <CardFooter className="mt-auto border-t pt-4">
                <Button asChild className="w-full">
                  <Link href="/Decks/Healthcare/Sample ODA - Copy.pdf" target="_blank" rel="noopener noreferrer">
                    Open deck <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="overflow-hidden flex flex-col h-[380px]">
              <div className="h-2 bg-primary" />
              <CardHeader>
                <div className="flex items-center gap-2">
                  <CardTitle>Ops DD solution for hospitals</CardTitle>
                </div>
                {/* <CardDescription>Short description</CardDescription> */}
              </CardHeader>
              <CardContent className="flex-grow overflow-hidden">
                <div className="relative w-full h-0 pb-[125%] md:pb-[75%]">
                  <iframe
                    src="/Decks/Healthcare/Hospital Ops DD diagnostic.pdf#toolbar=0&navpanes=0&scrollbar=0&page=1&view=FitH"
                    className="absolute inset-0 w-full h-full rounded-md border"
                  />
                </div>
              </CardContent>
              <CardFooter className="mt-auto border-t pt-4">
                <Button asChild className="w-full">
                  <Link href="/Decks/Healthcare/Hospital Ops DD diagnostic.pdf" target="_blank" rel="noopener noreferrer">
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
          <div className="grid gap-6 px-4">
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-start">
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
                    <div className="text-center text-gray-500">Coming soon</div>
                  </div>
                  <div className="absolute inset-0 bg-gray-200 opacity-50" /> {/* Grey overlay */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Nested Offerings Section */}
      <section className="w-full py-12 md:py-24 bg-muted/50">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter mb-8">BCN PEG Healthcare offerings</h2>
          <NestedOfferingsAccordion categories={healthcareOfferings} />
        </div>
      </section>

      {/* Main Offerings Section */}
      {/* <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter mb-8">BCN Healthcare Offerings</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="overflow-hidden">
              <div className="h-2 bg-primary" />
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Binoculars className="h-5 w-5 text-primary" />
                  <CardTitle>Due Diligence</CardTitle>
                </div>
                <CardDescription>Comprehensive risk evaluation frameworks</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Healthcare diligence across the value chain - click here to check out offerings specific to Healthcare Providers, Suppliers, and Payers
                </p>
                <div className="flex items-center gap-4">
                  <img src="/Decks/Healthcare/IQVIA.png" alt="Logo 1" className="h-4 object-contain" />
                  <img src="/Decks/Healthcare/Clarivate.png" alt="Logo 2" className="h-8 object-contain" />
                  <img src="/Decks/Healthcare/GlobalData.png" alt="Logo 3" className="h-5 object-contain" />
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="/Decks/Healthcare/sectors/healthcare/due-diligence">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="overflow-hidden">
              <div className="h-2 bg-primary" />
              <CardHeader>
                <div className="flex items-center gap-2">
                  <ScanSearch className="h-5 w-5 text-primary" />
                  <CardTitle>One Day Assessment</CardTitle>
                </div>
                <CardDescription>Comprehensive risk evaluation frameworks</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Quick Diagnostic covering investment considerations, business/market overview, and competitive landscape
                </p>
                <div className="flex items-center gap-4">
                  <img src="/Decks/Healthcare/IQVIA.png" alt="Logo 1" className="h-4 object-contain" />
                  <img src="/Decks/Healthcare/Clarivate.png" alt="Logo 2" className="h-8 object-contain" />
                  <img src="/Decks/Healthcare/GlobalData.png" alt="Logo 3" className="h-5 object-contain" />
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="/Decks/Healthcare/sectors/healthcare/due-diligence">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card> */}

      {/* <Card className="overflow-hidden">
              <div className="h-2 bg-primary" />
              <CardHeader>
                <CardTitle>Investment Strategy</CardTitle>
                <CardDescription>Strategic investment planning and analysis</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Our investment strategy services provide financial institutions with data-driven insights and
                  recommendations to optimize investment decisions and portfolio performance.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="/Decks/Healthcare/sectors/financial-services/investment-strategy">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card> */}
      {/* </div>
        </div>
      </section> */}


      {/* Tools & Databases */}
      {/* <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2 items-center"> */}
      {/* Left Column - Heading & Description */}

      {/* <div className="space-y-4 text-left">
              <h2 className="text-3xl font-bold tracking-tighter">BCN PEG Healthcare tools and databases</h2>

              <p className="max-w-lg text-muted-foreground text-sm md:text-base lg:text-lg">
                Our teams integrate the most advanced healthcare tools and databases to provide comprehensive insights into pharmaceuticals, med-tech, biotechnology, and hospital/provider data.
              </p>

              <div className="pt-2">
                <ul className="space-y-4">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 text-primary mt-1" />
                    <div>
                      <span className="font-medium">Pharma and clinical data</span>
                      <p className="text-muted-foreground">
                        Clarivate DRG, AIOCD, Citeline, IQVIA, Evaluate
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 text-primary mt-1" />
                    <div>
                      <span className="font-medium">MedTech and market intelligence</span>
                      <p className="text-muted-foreground">
                        GlobalData, Fitch solutions
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 text-primary mt-1" />
                    <div>
                      <span className="font-medium">Hospitals and providers</span>
                      <p className="text-muted-foreground">
                        Definitive healthcare, AHD, AHA DataQuery
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <p className="max-w-lg text-muted-foreground text-sm md:text-base lg:text-lg">
                Our integrated approach ensures comprehensive market intelligence for healthcare cases.
              </p>
            </div> */}

      {/* Right Column - Logo Grid */}
      {/* <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 justify-items-center">
              {[
                '/Icons/Healthcare/IQVIA.png',
                '/Icons/Healthcare/evaluate.png',
                '/Icons/Healthcare/Clarivate.png',
                '/Icons/Healthcare/GlobalData.png',
                '/Icons/Healthcare/definitiv-hc.svg',
                '/Icons/Healthcare/org-hc.png',
                '/Icons/Healthcare/aio-hc.png',
                '/Icons/Healthcare/citeline.png',
                '/Icons/Healthcare/fitch-hc.png',
                '/Icons/Healthcare/ahd-hc.png',
                '/Icons/Healthcare/pharma-projects.png',
                '/Icons/Healthcare/aha-hc.png',
              ].map((src, idx) => (
                <div key={idx} className="w-24 h-24 flex items-center justify-center">
                  <img
                    src={src}
                    alt={`Logo ${idx + 1}`}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* Tools & Databases */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          {/* Centered Heading and Description */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold tracking-tighter mb-2">BCN PEG Healthcare tools and databases</h2>
            <p className="max-w-[900px] mx-auto text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We leverage the most advanced healthcare tools and databases to provide comprehensive insights into pharmaceuticals, med-tech, biotechnology, and hospital/provider data
            </p>
          </div>

          {/* Three Columns with Short Vertical Lines and Aligned Headings/Logos */}
          <div className="relative flex flex-col md:flex-row md:items-start md:justify-center gap-8 text-center md:pt-6">
            {/* Column 1 */}
            <div className="flex-1 flex flex-col items-center">
              <h3 className="text-2xl font-semibold mb-6 mt-0 flex items-center justify-center min-h-[2.5rem]">
                Pharma and clinical data
              </h3>
              <div className="flex flex-wrap justify-center gap-x-8 gap-y-8 items-start md:mt-4">
                <img src="/Icons/Healthcare/Clarivate.png" alt="Clarivate" className="h-10 object-contain" />
                <img src="/Icons/Healthcare/aio-hc.png" alt="AIOCD" className="h-12 object-contain" />
                <img src="/Icons/Healthcare/citeline.png" alt="Citeline" className="h-14 object-contain" />
                <img src="/Icons/Healthcare/IQVIA.png" alt="IQVIA" className="h-5 mt-2 object-contain" />
                <img src="/Icons/Healthcare/evaluate.png" alt="Evaluate" className="h-7 object-contain" />
                <img src="/Icons/Healthcare/org-hc.png" alt="DRG" className="h-9 object-contain" />
              </div>
            </div>
            {/* Short Vertical Line */}
            <div className="hidden md:flex flex-col items-center justify-start">
              <div className="w-1 bg-[#C00000] rounded-full" style={{ height: "120px", marginTop: "4rem" }} />
            </div>
            {/* Column 2 */}
            <div className="flex-1 flex flex-col items-center">
              <h3 className="text-2xl font-semibold mb-6 mt-0 flex items-center justify-center min-h-[2.5rem]">
                MedTech and market intelligence
              </h3>
              <div className="flex flex-wrap justify-center gap-x-8 gap-y-8 items-start md:mt-4">
                <img src="/Icons/Healthcare/GlobalData.png" alt="GlobalData" className="h-8 mt-2 object-contain" />
                <img src="/Icons/Healthcare/fitch-hc.png" alt="Fitch Solutions" className="h-14 object-contain" />
              </div>
            </div>
            {/* Short Vertical Line */}
            <div className="hidden md:flex flex-col items-center justify-start">
              <div className="w-1 bg-[#C00000] rounded-full" style={{ height: "120px", marginTop: "4rem" }} />
            </div>
            {/* Column 3 */}
            <div className="flex-1 flex flex-col items-center">
              <h3 className="text-2xl font-semibold mb-6 mt-0 flex items-center justify-center min-h-[2.5rem]">
                Hospitals and providers
              </h3>
              <div className="flex flex-wrap justify-center gap-x-8 gap-y-8 items-start md:mt-4">
                <img src="/Icons/Healthcare/definitiv-hc.svg" alt="Definitive Healthcare" className="mt-1 h-6 object-contain" />
                <img src="/Icons/Healthcare/ahd-hc.png" alt="AHD" className="h-8 object-contain" />
                <img src="/Icons/Healthcare/aha-hc.png" alt="AHA DataQuery" className="h-10 object-contain" />
              </div>
            </div>
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
                Sample Healthcare cases from BCN PEG
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">

            <Card className="overflow-hidden flex flex-col h-[380px]">
              <div className="h-2 bg-primary" />
              <CardHeader>
                <div className="flex items-center gap-2">
                  <CardTitle>Sample ODA 1</CardTitle>
                </div>
                {/* <CardDescription>Short description</CardDescription> */}
              </CardHeader>
              <CardContent className="flex-grow overflow-hidden">
                <div className="relative w-full h-0 pb-[125%] md:pb-[75%]">
                  <iframe
                    src="/Decks/Healthcare/Healthcare 1_Sample Output_ODA 1.pdf#toolbar=0&navpanes=0&scrollbar=0&page=1&view=FitH"
                    className="w-full h-[350px] rounded-md border"
                  />
                </div>
              </CardContent>
              <CardFooter className="mt-auto border-t pt-4">
                <Button asChild className="w-full">
                  <Link href="/Decks/Healthcare/Healthcare 1_Sample Output_ODA 1.pdf" target="_blank" rel="noopener noreferrer">
                    Open deck <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="overflow-hidden flex flex-col h-[380px]">
              <div className="h-2 bg-primary" />
              <CardHeader>
                <div className="flex items-center gap-2">
                  <CardTitle>Sample ODA 2</CardTitle>
                </div>
                {/* <CardDescription>Short description</CardDescription> */}
              </CardHeader>
              <CardContent className="flex-grow overflow-hidden">
                <div className="relative w-full h-0 pb-[125%] md:pb-[75%]">
                  <iframe
                    src="/Decks/Healthcare/Healthcare 2_Sample Output_ODA 2.pdf#toolbar=0&navpanes=0&scrollbar=0&page=1&view=FitH"
                    className="absolute inset-0 w-full h-full rounded-md border"
                  />
                </div>
              </CardContent>
              <CardFooter className="mt-auto border-t pt-4">
                <Button asChild className="w-full">
                  <Link href="/Decks/Healthcare/Healthcare 2_Sample Output_ODA 2.pdf" target="_blank" rel="noopener noreferrer">
                    Open deck <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="overflow-hidden flex flex-col h-[380px]">
              <div className="h-2 bg-primary" />
              <CardHeader>
                <div className="flex items-center gap-2">
                  <CardTitle>Healthcare deck 3</CardTitle>
                </div>
                {/* <CardDescription>Short description</CardDescription> */}
              </CardHeader>
              <CardContent className="flex-grow overflow-hidden">
                <div className="relative w-full h-0 pb-[125%] md:pb-[75%]">
                  <iframe
                    src="/Decks/Healthcare/Healthcare 3_Sample Output_Initial Perspectives.pdf#toolbar=0&navpanes=0&scrollbar=0&page=1&view=FitH"
                    className="w-full h-[350px] rounded-md border"
                  />
                </div>
              </CardContent>
              <CardFooter className="mt-auto border-t pt-4">
                <Button asChild className="w-full">
                  <Link href="/Decks/Healthcare/Healthcare 3_Sample Output_Initial Perspectives.pdf" target="_blank" rel="noopener noreferrer">
                    Open deck <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Bain Practice Teams Section */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter mb-8">Bain practice teams</h2>
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
                {categories.slice(0, 5).map((category) => (
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

      {/* Connect with experts */}
      <section className="w-full py-12 md:py-24  bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">Connect with experts</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Collaborate with practice teams, engage a BCN PEG Healthcare team, and get your next Healthcare case powered by experts!
              </p>
            </div>
          </div>

          {/* Three Column Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Column 1: Bain Practice Teams */}
            <div>
              <h3 className="text-lg font-semibold mb-3 text-center">Bain Healthcare and Life Sciences practice team</h3>
              <div className="space-y-3">
                {bainExperts.map((category, index) => (
                  <a
                    key={index}
                    href={category.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 bg-white shadow-xs rounded-lg border hover:shadow-sm transition"
                  >
                    {/* Category Name */}
                    <span className="font-medium text-base">{category.name}</span>

                    {/* Up-Right Arrow on the Right */}
                    <ExternalLink className="h-5 w-5 text-primary" />
                  </a>
                ))}
              </div>
            </div>

            {/* Column 2: BCN Experts */}
            <div>
              <h3 className="text-lg font-semibold mb-3 text-center">BCN PEG Healthcare experts</h3>
              <div className="space-y-4">
                {bcnExperts.map((expert, index) => (
                  <ExpertCard
                    key={index}
                    expert={{
                      name: expert.name,
                      title: expert.title,
                      initials: expert.initials,
                      email: expert.email,
                      profile: expert.profile
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Column 3: Other Experts */}
            <div>
              <h3 className="text-lg font-semibold mb-3 text-center">Healthcare tools and experts</h3>
              <div className="space-y-3">
                {otherExperts.map((expert, index) => (
                  <a
                    key={index}
                    href={expert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 bg-white shadow-xs rounded-lg border hover:shadow-sm transition"
                  >
                    <div className="max-w-xs">
                      <span className="font-medium text-base">{expert.name}</span>

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

