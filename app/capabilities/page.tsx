"use client"

import Link from "next/link"
import { ArrowRight, BarChart3, Presentation, FileText, Database, Lightbulb, Wrench, Users, TrendingUp, Search, Cpu, Leaf, Rocket, TabletSmartphone, Target, BrainCircuit, TextSearch, Briefcase, Brain, Workflow } from "lucide-react";
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import CapabilityFilter from "@/components/capability-filter"
import ScrollingTestimonials from "@/components/scrolling-testimonials"
import { getTestimonialsByOffering } from "@/lib/testimonials-data"

const testimonials = getTestimonialsByOffering("generalTestimonials")


const cardData = [
  {
    title: "Survey analytics",
    icon: <BarChart3 className="h-5 w-5 text-primary" />,
    description: "End-to-end support from survey coding to analytics",
    items: [
      "Project scoping and panel coordination",
      "Survey coding and launch",
      "Survey analytics and insights",
      "And more...",
    ],
    link: "/capabilities/survey-analytics",
  },
  {
    title: "Workforce analytics",
    icon: <Users className="h-5 w-5 text-primary" />,
    description: "Analyzing talent trends and market benchmarks",
    items: [
      "Organizational talent diagnostics",
      "Employee sentiment analysis",
      "External market signals",
      "And more...",
    ],
    link: "/capabilities/workforce-analytics",
  },
  {
    title: "Digital diagnostics",
    icon: <TabletSmartphone className="h-5 w-5 text-primary" />,
    description: "Optimizing digital levers through performance insights",
    items: [
      "Web-traffic and search marketing",
      "Social media",
      "E-commerce acceleration",
      "And more...",
    ],
    link: "/capabilities/digital",
  },
  {
    title: "ESG / Carbon assessment",
    icon: <Leaf className="h-5 w-5 text-primary" />,
    description: "ESG diligence from rapid scan to deep dive",
    items: [
      "ESG diagnostic",
      "ESG One Day Assessment (ODA)",
      "ESG Due Diligence (DD)",
      "And more...",
    ],
    link: "/capabilities/esg",
  },
  {
    title: "Sector scan / Target screening",
    icon: <Target className="h-5 w-5 text-primary" />,
    description: "Identify and evaluate high-potential sectors and targets",
    items: [
      "SnapScreen",
      "Long listing",
      "Deep dive scan",
      "And more...",
    ],
    link: "/capabilities/sector-scan",
  },
  {
    title: "Gen AI DD",
    icon: <Brain className="h-5 w-5 text-primary" />,
    description: "End-to-end Gen AI Due Diligence (DD)",
    items: [
      "AI impact and adoption",
      "Competitive scan and benchmarking",
      "AI tech replicability",
      "And more...",
    ],
    link: "/capabilities/gen-ai",
  },
  {
    title: "Industry PoV / Market models",
    icon: <TrendingUp className="h-5 w-5 text-primary" />,
    description: "",
    items: [],
    link: "",
    comingSoon: true,
  },
  {
    title: "Primary research / Expert interviews",
    icon: <TextSearch className="h-5 w-5 text-primary" />,
    description: "",
    items: [],
    link: "",
    comingSoon: true,
  },
  {
    title: "Firm strategy",
    icon: <Briefcase className="h-5 w-5 text-primary" />,
    description: "",
    items: [],
    link: "",
    comingSoon: true,
  },
];

export default function CapabilitiesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 bg-gradient-to-r from-primary/15 via-primary/5 to-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Explore by Products</h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explore functional expertise and capabilities
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section
      <section className="w-full py-6 border-b">
        <div className="container px-4 md:px-6">
          <CapabilityFilter />
        </div>
      </section> */}

      {/* Capabilities Grid */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cardData.map((card, index) => (
              <div key={index} className="relative">
                <Card className="overflow-hidden relative h-full flex flex-col min-h-[300px]">
                  <div className="h-2 bg-primary" />
                  <CardHeader>
                    <div className="flex items-center gap-2 min-h-[30px]">
                      {card.icon}
                      <CardTitle>{card.title}</CardTitle>
                    </div>
                    <CardDescription>{card.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <ul className="space-y-2">
                      {card.items.map((item, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <ArrowRight className="h-4 w-4 text-primary" /> {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="outline" className="w-full" disabled={card.comingSoon}>
                      <Link href={card.link}>
                        {card.comingSoon ? "Coming soon" : "View details"}{" "}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>

                  {/* "Coming Soon" Overlay */}
                  {card.comingSoon && (
                    <div className="absolute inset-0 bg-white/90 border border-gray-200 shadow-md rounded-sm flex items-center justify-center">
                      <div className="text-center px-4">
                        <p className="text-xl md:text-2xl font-semibold">
                          Coming soon
                        </p>
                        <p className="text-sm mt-1 text-muted-foreground">
                          We are expanding our coverage to serve you better
                        </p>
                      </div>
                    </div>
                  )}
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <ScrollingTestimonials testimonials={testimonials} />

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 bg-primary/5">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Need a more tailored solution?
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We offer a range of specialized solutions. Contact us to discuss your specific requirements.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <a
                  href="mailto:BCNPEGStaffing@Bain.com?subject=BCN Support for Project [Project name] [Case code]"
                >
                  Request BCN PEG Staffing <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/industries">View by Industry</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

