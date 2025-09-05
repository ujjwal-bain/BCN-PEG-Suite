"use client"

import Link from "next/link"
import { ArrowRight, BookOpen, Lightbulb, FileText, Laptop, DatabaseIcon, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { PEGtools } from "@/lib/PEG-Tools"
import { PEGTool } from "@/lib/PEG-Tools"
import ScrollingTestimonials from "@/components/scrolling-testimonials"
import { getTestimonialsByOffering } from "@/lib/testimonials-data"
import Pill from "@/components/Pill"

const testimonials = getTestimonialsByOffering("generalTestimonials")

const groupedTools: Record<string, PEGTool[]> = PEGtools.reduce((acc, tool) => {
  if (!acc[tool.category]) acc[tool.category] = []
  acc[tool.category].push(tool)
  return acc
}, {} as Record<string, PEGTool[]>)

export default function PEGtoolsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 bg-gradient-to-r from-primary/15 via-primary/5 to-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">PEG Tools / Solutions</h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Discover specialized tools and resources
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bain PEG Tools Section */}
      {Object.entries(groupedTools)
        .filter(([category]) =>
          category === "BCN PEG tools" || category === "Other PEG tools"
        ).map(([category, tools], i) => {
          const sectionId = category.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]/g, "");

          return (
            <section
              key={category}
              id={sectionId}
              className={`w-full py-20 md:py-15 ${i % 2 === 0 ? 'bg-muted/50' : 'bg-background'}`}
            >
              <div className="container px-4 md:px-6">
                <h2 className="text-3xl font-bold tracking-tighter mb-8">{category}</h2>
                <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:gap-12">
                  {tools.map((tool, index) => (
                    <Card key={index} className="overflow-hidden flex flex-col min-h-[330px]">
                      <div className="h-2 bg-primary" />
                      <CardHeader>
                        <div className="flex items-center gap-2">
                          {typeof tool.icon === "string" ? (
                            <img src={tool.icon} alt={`${tool.title} icon`} className="w-6" />
                          ) : tool.icon ? (
                            <tool.icon className="h-5 w-5 text-primary" />
                          ) : null}
                          <CardTitle>{tool.title}</CardTitle>
                        </div>
                        <CardDescription>{tool.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="flex-grow overflow-auto flex flex-col justify-between">
                        <p className="text-muted-foreground">{tool.info}</p>
                        {tool.fees && (
                          <div className="self-end pt-4">
                            <Pill text={tool.fees} className="px-3 py-1 text-xs" />
                          </div>
                        )}
                      </CardContent>
                      <CardFooter className="mt-auto border-t pt-4">
                        <Button asChild className="w-full">
                          <a href={tool.link} target="_blank" rel="noopener noreferrer">
                            {tool.buttonText} <ExternalLink className="ml-2 h-4 w-4" />
                          </a>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </div>
            </section>
          );
        })}

      {/* Employee Reviews Section */}
      {Object.entries(groupedTools)
        .filter(([category]) => category === "Employee reviews")
        .map(([category, tools]) => {
          const sectionId = category.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]/g, "");

          return (
            <section
              key={category}
              id={sectionId}
              className="w-full py-20 md:py-15 bg-muted/50" // You can change background if needed
            >
              <div className="container px-4 md:px-6">
                <h2 className="text-3xl font-bold tracking-tighter mb-8">{category}</h2>
                {/* <p className="text-muted-foreground text-center mb-8">
                BCN PEG is your trusted partner, offering support leveraging this tool and delivering custom analysis tailored to your case needs
                </p> */}
                <div className="grid gap-6 md:grid-cols-2 lg:gap-12">
                  {tools.map((tool, index) => (
                    <Card key={index} className="overflow-hidden flex flex-col min-h-[330px]">
                      <div className="h-2 bg-primary" />
                      <CardHeader>
                        <div className="flex items-center gap-2">
                          {typeof tool.icon === "string" ? (
                            <img src={tool.icon} alt={`${tool.title} icon`} className="w-6" />
                          ) : tool.icon ? (
                            <tool.icon className="h-5 w-5 text-primary" />
                          ) : null}
                          <CardTitle>{tool.title}</CardTitle>
                        </div>
                        <CardDescription>{tool.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="flex-grow overflow-auto flex flex-col justify-between">
                        <p className="text-muted-foreground">{tool.info}</p>
                        <div className="flex items-center justify-between pt-4">
                          {tool.via ? (
                            <div className="flex items-center space-x-1 text-muted-foreground">
                              <span></span>
                              <img
                                src={tool.via}
                                alt="Via Logo"
                                className="h-8"
                              />
                            </div>
                          ) : <div />} {/* placeholder to keep spacing if via is missing */}
                          {tool.fees && (
                            <div className="self-end">
                              <Pill text={tool.fees} className="px-3 py-1 text-xs" />
                            </div>
                          )}
                        </div>
                      </CardContent>
                      <CardFooter className="mt-auto border-t pt-4">
                        <Button asChild className="w-full">
                          <a href={tool.link} target="_blank" rel="noopener noreferrer">
                            {tool.buttonText} <ExternalLink className="ml-2 h-4 w-4" />
                          </a>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>

                <div className="grid gap-12 md:grid-cols-2 items-center mt-20">
                  {/* Left Column - Heading & Description */}
                  <div className="space-y-4 text-left">
                    <h2 className="text-3xl font-bold tracking-tighter">Workforce Sentiment blanks (Glassdoor)</h2>
                    <p className="max-w-lg text-muted-foreground text-sm md:text-base lg:text-lg">
                      BCN PEG is your trusted partner, offering support leveraging this tool and delivering custom analysis tailored to your case needs
                    </p>
                    {/* Logos */}
                    <div className="flex items-center gap-6 pb-8">
                      <img src="/Icons/Workforce/rave.jpg" alt="RAVE Logo" className="h-6" />
                      <img src="/Icons/Workforce/glassdoor2.png" alt="Glassdoor Logo" className="h-8" />
                    </div>
                    {/* <p className="italic text-muted-foreground mt-4 mb-5">
                BCN is your trusted partner, offering support leveraging this tool and delivering custom analysis tailored to your case needs
              </p> */}
                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-4">
                      <Button size='default' asChild>
                        <Link href="mailto:BCNPEGStaffing@Bain.com?subject=BCN Support for Project {Project name} {Case code}">
                          <span className="flex items-center gap-2">
                            Engage BCN PEG team
                            <ArrowRight className="h-4 w-4" />
                          </span>
                        </Link>
                      </Button>
                      <Button variant="outline" className="p-5" asChild>
                        <Link href="https://rave.bain.com/glassdoor" target="_blank" rel="noopener noreferrer">
                          <span className="flex items-center gap-2">
                            Explore tool
                            <ExternalLink className="h-4 w-4" />
                          </span>
                        </Link>
                      </Button>
                    </div>
                  </div>


                  {/* Right Column - PDF Preview Card */}

                  <div className="space-y-6">
                    <Card className="border-2 border-primary/20">
                      <CardHeader>
                        <CardTitle>Sample output</CardTitle>
                        <CardDescription>Download the latest sample output for sentiment analysis via RAVE</CardDescription>
                      </CardHeader>
                      <CardContent className="flex-grow overflow-hidden">
                        <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/9] min-h-[300px]">
                          <iframe
                            src="/Decks/PEG Tools/glassdoor_example_slides.pdf#toolbar=0&navpanes=0&scrollbar=0&page=1&view=FitH"
                            className="absolute inset-0 w-full h-full rounded-md border"
                          />
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button asChild className="w-full">
                          <Link href="/Decks/PEG Tools/glassdoor_example_slides.pdf" target="_blank" rel="noopener noreferrer">
                            Open deck <ExternalLink className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>

                </div>
              </div>
            </section>
          );
        })}

      {/* Other Offerings Grid */}
      <div>
        <h2 className="pt-20 text-4xl font-bold text-center">Additional Web Data tools</h2>
        <div className="mt-2 flex items-center justify-center space-x-2 text-muted-foreground">
          <span>Supported by</span>
          <img src="/Icons/WebData.png" alt="Supporting Logo" className="h-10" />
        </div>
        {Object.entries(groupedTools)
          .filter(([category]) => category !== "BCN PEG tools" && category !== "Employee reviews" && category !== "Other PEG tools") // Exclude this category
          .map(([category, tools], i) => {
            const sectionId = category.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]/g, "");

            return (
              <section
                key={category}
                id={sectionId}
                // className={`w-full py-20 md:py-15 ${i % 2 === 1 ? 'bg-muted/50' : 'bg-background'}`}
                className={`w-full py-20 md:py-15`}

              >
                <div className="container px-4 md:px-6">
                  <h2 className="text-3xl font-bold tracking-tighter mb-8">{category}</h2>
                  <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:gap-12">
                    {tools.map((tool, index) => (
                      <Card key={index} className="overflow-hidden flex flex-col min-h-[330px]">
                        <div className="h-2 bg-primary" />
                        <CardHeader>
                          <div className="flex items-center gap-2">
                            {typeof tool.icon === "string" ? (
                              <img src={tool.icon} alt={`${tool.title} icon`} className="w-6" />
                            ) : tool.icon ? (
                              <tool.icon className="h-5 w-5 text-primary" />
                            ) : null}
                            <CardTitle>{tool.title}</CardTitle>
                          </div>
                          <CardDescription>{tool.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-grow overflow-auto flex flex-col justify-between">
                          <p className="text-muted-foreground">{tool.info}</p>
                          {tool.fees && (
                            <div className="self-end pt-4">
                              <Pill text={tool.fees} className="px-3 py-1 text-xs" />
                            </div>
                          )}
                        </CardContent>
                        <CardFooter className="mt-auto border-t pt-4">
                          <Button asChild className="w-full">
                            <a href={tool.link} target="_blank" rel="noopener noreferrer">
                              {tool.buttonText} <ExternalLink className="ml-2 h-4 w-4" />
                            </a>
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                </div>
              </section>
            );
          })}
        <p className="mb-10 text-center text-muted-foreground italic">
          Expanding our toolkit—new features coming soon!
        </p>
      </div>


      {/* <ScrollingTestimonials testimonials={testimonials} /> */}
      <Footer />
    </div >
  )
}

