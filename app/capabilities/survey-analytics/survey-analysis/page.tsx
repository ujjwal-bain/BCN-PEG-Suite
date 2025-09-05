"use client"

import Link from "next/link"
import { ArrowRight, ExternalLink, Download, FileSearch, Mail, Phone, Clock, CircleDollarSign } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Pill from "@/components/Pill";
import ExpertCard from "@/components/expert-card"
import NavigationButtons from "@/components/NavigationButtons"

const surveyExperts = [
  {
    name: "Reuben Dantes",
    title: "Director, Warsaw BCN",
    initials: "RD",
    email: "Reuben.Dantes@Bain.com",
    profile: "/Profiles/ReubenDantes.jpg",
  },
  {
    name: "Antriksh Miya",
    title: "Senior Manager, New Delhi BCN",
    initials: "AM",
    email: "Antriksh.Miya@bain.com",
    profile: "/Profiles/AntrikshMiya.png",
  },
  {
    name: "Sumanyu Sawhney",
    title: "Senior Manager, Warsaw BCN",
    initials: "SS",
    email: "Sumanyu.Sawhney@Bain.com",
    profile: "/Profiles/SumanyuSawhney.png",
  },
  {
    name: "Aleksandra Swiercz",
    title: "Manager, Warsaw BCN",
    initials: "AS",
    email: "Aleksandra.Makolska-Swiercz@bain.com",
    profile: "/Profiles/Aleksandra_Makolska-Swiercz.jpeg",
  },
];

export default function SurveyAnalysisPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 bg-gradient-to-r from-primary/15 via-primary/5 to-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Survey analysis and insights</h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Automated cutter and self-serve platform (NOVA) to quickly analyze survey results complimented with slide output and insights
              </p>
            </div>
          </div>
        </div>
      </section>

      <NavigationButtons
        previousOffering={{ title: "Survey coding", path: "/capabilities/survey-analytics/survey-coding" }}
      // nextOffering={{ title: "Survey Coding", path: "/capabilities/survey-analytics/survey-coding" }}
      />

      {/* Self-service Tools Section */}
      <section className="w-full py-12 md:py-24 bg-muted/50">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter mb-8">Self-service tools</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="overflow-hidden flex flex-col min-h-[350px]">
              <div className="h-2 bg-primary" />
              <CardHeader>
                <div className="flex items-center gap-2">
                  <img src="/Icons/Survey/nova-favicon.png" alt="NOVA Icon" className="h-8" />
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

            {/* <Card className="overflow-hidden flex flex-col h-[280px]">
              <div className="h-2 bg-primary" />
              <CardHeader>
                <div className="flex items-center gap-2">
                  <img src="/pencil_icon.png" alt="Survey repo logo" className="h-8 w-8" />
                  <CardTitle>Survey Questionnaire Repository</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex-grow overflow-auto flex flex-col justify-between">
                <p className="text-muted-foreground">
                  Offers a comprehensive collection of survey templates for various sub-sectors
                </p>
                <div className="self-end pt-4">
                  <Pill icon={<></>} text="No Fees" className="px-3 py-1 text-xs" />
                </div>
              </CardContent>
              <CardFooter className="mt-auto border-t pt-4">
                <Button asChild className="w-full">
                  <a href="https://surveyai.bain.dev/ " target="_blank" rel="noopener noreferrer">
                    Access Tool <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardFooter>
            </Card> */}
          </div>
        </div>
      </section>


      {/* Overview Section */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-start">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">Key tools and methodologies</h2>
              {/* <p className="text-muted-foreground">
                Our Risk Assessment services provide financial institutions with comprehensive frameworks and
                methodologies to identify, evaluate, and mitigate various types of risks, including credit risk, market
                risk, operational risk, and compliance risk.
              </p>
              <p className="text-muted-foreground">
                We help you develop robust risk management strategies that align with your business objectives and
                regulatory requirements, enabling you to make informed decisions and protect your organization from
                potential threats.
              </p> */}

              <div className="pt-4">
                {/* <h3 className="text-xl font-semibold mb-2">Key Tools & Methodologies</h3> */}
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 text-primary mt-1" />
                    <div>
                      <span className="font-medium">Data structuring and modeling</span>
                      <p className="text-sm text-muted-foreground">
                        Structure key analytical cuts based on the investment thesis and overall storyline
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-medium">Dynamic excel model</span>
                      <p className="text-sm text-muted-foreground">
                        Develop a dynamic Excel-based model with intuitive navigation
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 text-primary mt-1" />
                    <div>
                      <span className="font-medium">Real-time data integration</span>
                      <p className="text-sm text-muted-foreground">
                        Integrate real-time data updates, flexible filters, and fraud detection mechanisms
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 text-primary mt-1" />
                    <div>
                      <span className="font-medium">Comprehensive CFR model</span>
                      <p className="text-sm text-muted-foreground">
                        Deliver an Excel-based CFR model
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 text-primary mt-1" />
                    <div>
                      <span className="font-medium">Final output and visualization</span>
                      <p className="text-sm text-muted-foreground">
                        Provide a comprehensive output via slides or a Tableau dashboard, including detailed analysis and visualizations
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="flex flex-wrap gap-x-8 py-2">
                <img src="/Icons/excel-icon.png" alt="Excel icon" className="h-10 w-auto object-contain" />
                <img src="/Icons/powerpoint-icon.png" alt="Powerpoint icon" className="h-10 w-auto object-contain" />
                <img src="/Icons/Survey/nova-icon2.png" alt="NOVA icon" className="h-8 w-auto object-contain" />
              </div>


              {/* Timeline & Fees Pills */}
              {/* <div className="flex flex-wrap gap-4 pt-4"> */}
              {/* <Pill icon={<Clock className="h-4 w-4" />} text="Timeline: 1-2 Days" /> */}
              {/* <Pill icon={<CircleDollarSign className="h-4 w-4" />} text="BCN fees: $3.1K / day / team" />
              </div> */}

              <div className="py-2">
                <p className="italic text-muted-foreground mt-4 mb-5">
                  BCN PEG is your trusted partner, offering comprehensive support across the entire survey value chain or tailored assistance for any specific segment within it
                </p>
                <Button asChild size="lg" className="py-3">
                  <Link
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.href =
                        "mailto:BCNPEGStaffing@Bain.com?subject=BCN Support for Project {Project name} {Case code}";
                    }}
                  >
                    Request BCN PEG Staffing <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>

            </div>

            <div className="space-y-6">
              <Card className="border-2 border-primary/20">
                <CardHeader>
                  <CardTitle>Sample output</CardTitle>
                  <CardDescription>Download our survey analysis sample output</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow overflow-hidden">
                  <div className="relative w-full h-[330px]">
                    <iframe
                      src="/Decks/Survey/BCN PEG Survey blanks.pdf#toolbar=0&navpanes=0&scrollbar=0&page=1&view=FitH"
                      className="absolute inset-0 w-full h-full rounded-md border"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <img src="/Icons/Survey/SurveyCutter1.png" alt="Survey Cutter Image 1" className="w-full rounded-md border" />
                    <img src="/Icons/Survey/SurveyCutter2.png" alt="Survey Cutter Image 2" className="w-full rounded-md border" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <Button asChild className="w-full">
                      <Link href="/Decks/Survey/Project Sample Survey Cutter.xlsx" target="_blank" rel="noopener noreferrer">
                        Download survey cutter <Download className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button asChild className="w-full">
                      <Link href="/Decks/Survey/BCN PEG Survey blanks.pptx" target="_blank" rel="noopener noreferrer">
                        Download survey blanks <Download className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>

                  </div>
                </CardContent>
              </Card>

            </div>
          </div>
        </div>
      </section >

      {/* Contact Section */}
      <section className="w-full py-12 md:py-24 bg-muted/50">
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

      <Footer />
    </div >
  )
}

