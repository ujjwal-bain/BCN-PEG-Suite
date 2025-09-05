"use client"

import Link from "next/link"
import {
  ArrowRight,
  CircleDollarSign,
  Microscope,
  Cpu,
  ShoppingBag,
  Factory,
  Flame,
  Rocket,
  LineChart
} from "lucide-react"; import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import SectorFilter from "@/components/sector-filter"
import ScrollingTestimonials from "@/components/scrolling-testimonials"
import { getTestimonialsByOffering } from "@/lib/testimonials-data"

const testimonials = getTestimonialsByOffering("generalTestimonials")


const sectorsData = [
  {
    title: "Financial services",
    icon: <LineChart className="h-5 w-5 text-primary" />,
    description: "In-depth FS modeling with trusted forecasts",
    items: [
      "Global specialty insurance brokerage",
      "Wealth management",
      "Fund administration, T&CS",
      "And more...",
    ],
    link: "/industries/financial-services",
  },
  {
    title: "Healthcare",
    icon: <Microscope className="h-5 w-5 text-primary" />,
    description: "Targeted due diligence across healthcare segments",
    items: ["Providers due diligence", "Suppliers due diligence", "Payers due diligence", "And more..."],
    link: "/industries/healthcare",
  },
  {
    title: "Consumer products / Retail",
    icon: <ShoppingBag className="h-5 w-5 text-primary" />,
    description: "End-to-end support from product sourcing to after-sales",
    items: ["Bain Brand Accelerator (BBA)", "Primary / Secondary research", "Disruption assessment", "And more..."],
    link: "/industries/consumer-products",
  },
  {
    title: "Technology",
    icon: <Cpu className="h-5 w-5 text-primary" />,
    description: "End-to-end tech diligence uncovering risk and upside",
    items: [
      "Commercial Due Diligence (CDD)",
      "Technology Due Diligence (TDD)",
      "And more...",
    ],
    link: "/industries/technology",
  },
  {
    title: "Advanced manufacturing and services",
    icon: <Factory className="h-5 w-5 text-primary" />,
    description: "",
    items: [],
    link: "/industries/advanced-manufacturing",
    comingSoon: true,

  },
  // {
  //   title: "And more...",
  //   icon: <Rocket className="h-5 w-5 text-primary" />,
  //   description: "New industry solutions launching soon!",
  //   items: ["Coming soon...", "Coming soon...", "Coming soon...", "Coming soon..."],
  //   link: "#",
  //   comingSoon: true, // Flag to indicate "Coming Soon"
  // },
];

export default function SectorsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 bg-gradient-to-r from-primary/15 via-primary/5 to-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Explore by Industry</h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Find services tailored to specific business industries
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section
      <section className="w-full py-6 border-b">
        <div className="container px-4 md:px-6">
          <SectorFilter />
        </div>
      </section> */}

      {/* Industries Grid */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sectorsData.map((sector, index) => (
              <div key={index} className="relative">
                <Card className="overflow-hidden relative h-full flex flex-col min-h-[300px]">
                  <div className="h-2 bg-primary" />
                  <CardHeader>
                    <div className="flex items-center gap-2 min-h-[30px]">
                      {sector.icon}
                      <CardTitle>{sector.title}</CardTitle>
                    </div>
                    <CardDescription>{sector.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <ul className="space-y-2">
                      {sector.items.map((item, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <ArrowRight className="h-4 w-4 text-primary" /> {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="outline" className="w-full" disabled={sector.comingSoon}>
                      <Link href={sector.link}>
                        {sector.comingSoon ? "Coming soon" : "View details"}{" "}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>

                  {/* "Coming Soon" Overlay */}
                  {sector.comingSoon && (
                    <div className="absolute inset-0 bg-white/90 border border-gray-200 shadow-md rounded-sm flex items-center justify-center">
                      <div className="text-center px-4">
                        <p className="text-xl md:text-2xl font-semibold text-gray-900">
                          Coming soon
                        </p>
                        <p className="text-sm text-gray-700 mt-1">
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
                <Link href="/capabilities">View by Product</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

