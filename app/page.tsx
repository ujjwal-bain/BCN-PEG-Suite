"use client"

import Link from "next/link"
import React, { useEffect, useState } from 'react';
import { ArrowRight, Building2, Briefcase, Users, Globe, BarChart3, Shield, ChartNoAxesCombined, HandCoins, Lightbulb, LibraryBig, MessageSquareQuote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ScrollingTestimonials from "@/components/scrolling-testimonials"
import { getTestimonialsByOffering } from "@/lib/testimonials-data"
import KPIHighlights from "../components/kpi-highlights"
import { Coming_Soon } from "next/font/google"
import JigsawOfferings from "@/components/jigsaw-offerings";
import OrganicBubbleOfferings from "@/components/mekko";

// Add the KPI data
const kpiData = {
  global: {
    teams: 58,
    cases: 2000,
    nps: 95,
    offices: 46,
    retainers: 10,
  },
  americas: {
    teams: 26,
    cases: 1100,
    nps: 95,
    offices: 16,
    retainers: 10,
  },
}

const testimonials = getTestimonialsByOffering("generalTestimonials")

export default function Home() {
  const [imageLoaded, setImageLoaded] = useState(false)

  useEffect(() => {
    const preloadImage = (src: string): Promise<void> => {
      return new Promise((resolve, reject) => {
        const img = new Image()
        img.onload = () => resolve()
        img.onerror = () => reject()
        img.src = src
      })
    }

    const loadImages = async () => {
      try {
        await preloadImage("/Picture8.1.webp")
        setImageLoaded(true)
      } catch {
        try {
          await preloadImage("/Picture8.1.jpg")
          setImageLoaded(true)
        } catch {
          console.warn("Failed to load background images")
          setImageLoaded(true)
        }
      }
    }

    loadImages()
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-primary/15 via-primary/5 to-background">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid gap-12 lg:grid-cols-2 items-center">

            {/* Left Content */}
            <div className="space-y-6 text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-normal text-foreground">
                <span className="block leading-tight">One stop solution for</span>
                <span className="block leading-tight whitespace-nowrap">
                  <span className="text-[#C00000] font-bold">Bain</span> PEG teams
                </span>
              </h1>
              <p className="text-muted-foreground md:text-xl max-w-xl mx-auto lg:mx-0">
                Designed to simplify your workflow, <b>BCN PEG Suite</b> offers a centralized, intuitive hub where case teams can easily access insights, leverage powerful tools, and tap into BCN's full suite of PEG resources
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <Button asChild size="lg">
                  <Link href="/industries">
                    Explore BCN PEG Industry <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/capabilities">
                    Explore BCN PEG Products <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right Side Marketing Image */}
            <div className="flex justify-center mt-10 lg:mt-0">
              <img
                src="/Landing/supercharge3.png"
                alt="Marketing Screenshot"
                className="w-full h-auto max-w-[600px] object-contain"
              />
            </div>

          </div>
        </div>
      </section>


      {/* KPI Highlights Section */}
      <KPIHighlights
        global={kpiData.global}
        americas={kpiData.americas}
        className="w-full bg-gradient-to-b from-background to-muted/30"
      />

      {/* Image Screenshot Section */}
      {/* <section className="w-full py-12 md:py-20">
        <div className="container px-4 md:px-6">
          <div className="w-full max-w-6xl mx-auto">
            <img
              src="/Landing/valueProposition.png"
              alt="Platform Screenshot"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section> */}

      <OrganicBubbleOfferings />

      {/* How We Categorize Section */}
      {/* <section className="w-full py-12 md:py-24 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Explore by category
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                BCN PEG offerings structured in three ways to help you quickly find the resources you need
              </p>
            </div>
          </div>

          <div className="mx-auto grid max-w-6xl items-center gap-6 py-12 lg:grid-cols-2 xl:grid-cols-3 lg:gap-12">
            {[
              {
                title: "Industry",
                description: "Find services tailored to specific business industries",
                icon: Building2,
                items: [
                  { name: "Financial services", link: "/industries/financial-services", external: false },
                  { name: "Healthcare", link: "/industries/healthcare", external: false },
                  { name: "Consumer products / Retail", link: "/industries/consumer-products", external: false },
                  { name: "Technology", link: "/industries/technology", external: false },
                  { name: "Adv. manufacturing (Coming soon)", link: "/industries/manufacturing", external: false, Coming_Soon: true },
                  // { name: "And more...", link: "/industries", external: false }
                ],
                link: "/industries",
                buttonText: "View Industry offerings"
              },
              {
                title: "Products",
                description: "Explore functional expertise and capabilities",
                icon: Briefcase,
                items: [
                  { name: "Survey analytics", link: "/capabilities/survey-analytics", external: false },
                  { name: "Workforce analytics", link: "/capabilities/workforce-analytics", external: false },
                  { name: "Digital diagnostics", link: "/capabilities/digital", external: false },
                  { name: "ESG / Carbon assessment", link: "/capabilities/esg", external: false },
                  { name: "Sector scan / Target screening", link: "/capabilities/target-screening", external: false },
                  { name: "Gen AI", link: "/capabilities/gen-ai", external: false },
                  { name: "Industry PoV (Coming soon)", link: "/capabilities/market-models", external: false, Coming_Soon: true },
                  { name: "Expert interviews (Coming soon)", link: "/capabilities/market-models", external: false, Coming_Soon: true },
                  { name: "Firm strategy (Coming soon)", link: "/capabilities/market-models", external: false, Coming_Soon: true },
                  // { name: "And more...", link: "/capabilities", external: false }
                ],
                link: "/capabilities",
                buttonText: "View Product offerings"
              },
              {
                title: "Tools",
                description: "Discover specialized tools and resources",
                icon: Globe,
                items: [
                  { name: "Expert network outreach tool", link: "/peg-tools/#bain-peg-tools", external: false },
                  { name: "PEXC", link: "/peg-tools/#bain-peg-tools", external: false },
                  // { name: "PE Pulse", link: "/peg-tools/#bcn-peg-tools", external: false },
                  { name: "Glassdoor reviews", link: "/peg-tools/#employee-reviews", external: false },
                  { name: "Geo coding", link: "/peg-tools/#geo-scrapers", external: false },
                  { name: "Google company reviews", link: "/peg-tools/#company-reviews", external: false },
                  { name: "Amazon product reviews", link: "/peg-tools/#product-reviews", external: false },
                  // { name: "HG insights", link: "/peg-tools/#customer-analysis", external: false },
                  { name: "And more...", link: "/peg-tools", external: false }

                ],
                link: "/peg-tools",
                buttonText: "View PEG tools"
              }
            ].map((card, index) => (
              <Card key={index} className="border-2 border-primary/20 shadow-lg min-h-[430px] flex flex-col">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <card.icon className="h-6 w-6 text-primary" /> {card.title}
                  </CardTitle>
                  <CardDescription>{card.description}</CardDescription>
                </CardHeader> */}

                {/* Ensures content expands to maintain consistent layout */}
                {/* <CardContent className="flex-grow">
                  <ul className="space-y-2">
                    {card.items.map((item, i) => (
                      <li key={i}>
                        {item.external ? (
                          item.Coming_Soon ? (
                            <span className="flex items-center gap-2 text-muted-foreground">
                              <ArrowRight className="h-4 w-4" /> {item.name}
                            </span>
                          ) : (
                            <a
                              href={item.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 hover:text-[#C00000] transition-all duration-200 underline-offset-4 hover:underline"
                            >
                              <ArrowRight className="h-4 w-4 text-primary" /> {item.name}
                            </a>
                          )
                        ) : item.Coming_Soon ? (
                          <span className="flex items-center gap-2 text-muted-foreground">
                            <ArrowRight className="h-4 w-4 text-primary" /> {item.name}
                          </span>
                        ) : (
                          <Link
                            href={item.link}
                            className="flex items-center gap-2 hover:text-[#C00000] transition-all duration-200 underline-offset-4 hover:underline"
                          >
                            <ArrowRight className="h-4 w-4 text-primary" /> {item.name}
                          </Link>
                        )}

                      </li>
                    ))}
                  </ul>
                </CardContent> */}

                {/* Ensures button stays at the bottom */}
                {/* <CardFooter className="mt-auto border-t pt-4">
                  <Button asChild className="w-full">
                    <Link href={card.link}>{card.buttonText}</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Key Benefits Section */}
      {/* <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Why Work With Us</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our department is committed to delivering exceptional value to global teams.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="rounded-full bg-primary/10 p-2">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Global Expertise</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Access to specialists with deep knowledge of regional markets and practices.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="rounded-full bg-primary/10 p-2">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Proven Results</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Track record of delivering measurable outcomes and business impact.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="rounded-full bg-primary/10 p-2">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Quality Assurance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Rigorous standards and processes to ensure consistent high-quality deliverables.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}

      {/* Testimonials Section */}
      <ScrollingTestimonials testimonials={testimonials} />

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 bg-primary/5">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to connect?</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Reach out to BCN PEG to discuss your specific needs
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              {/* <Button asChild size="lg">
                <Link href="/contact">
                  Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link
                  href="#"
                  onClick={(e) => {
                    e.preventDefault()
                    window.location.href = "mailto:BCNPEGStaffing@Bain.com?subject=BCN Support for Project {Project Name} {Case code}"
                  }}
                >
                  Request Staffing
                </Link>
              </Button> */}
              <Button asChild size="lg">
                <Link
                  href="#"
                  onClick={(e) => {
                    e.preventDefault()
                    window.location.href = "mailto:BCNPEGStaffing@Bain.com?subject=BCN Support for Project {Project name} {Case code}"
                  }}
                >
                  Request BCN PEG Staffing <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
