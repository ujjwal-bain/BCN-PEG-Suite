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
import VendorCard, { Vendor } from "@/components/VendorCard";

const vendors: Vendor[] = [
  {
    logo: "/Icons/Survey/IncQuery.svg",
    name: "Sam Gullotti",
    // title: "Client Success Director",
    email: "sam@incquery.com",
  },
  {
    logo: "/Icons/Survey/dynata.png",
    name: "Anastacia Schuttenberg",
    // title: "Client Success Director",
    email: "Anastacia.Schuttenberg@Dynata.com",
  },
  {
    logo: "/Icons/Survey/roirocket.jpeg",
    name: "Noah Seaton",
    // title: "Client Success Director",
    email: "noah.seton@roirocket.com",
  },
  {
    logo: "/Icons/Survey/alphaSights.png",
    name: "George Carrie",
    // title: "Client Success Director",
    email: "george.carrie@alphasights.com",
  },
  {
    logo: "/Icons/Survey/glg.png",
    name: "Sam McCoy",
    // title: "Client Success Director",
    email: "smccoy@glgroup.com",
  },
];

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

export default function SurveyCodingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 bg-gradient-to-r from-primary/15 via-primary/5 to-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Survey coding and testing</h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Test initial survey link / soft launch data to ensure accurate logic flows followed by course correction
              </p>
            </div>
          </div>
        </div>
      </section>

      <NavigationButtons
        previousOffering={{ title: "Survey design", path: "/capabilities/survey-analytics/survey-design" }}
        nextOffering={{ title: "Survey analysis", path: "/capabilities/survey-analytics/survey-analysis" }}
      />

      {/* Self-service Tools Section */}
      {/* <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter mb-8">Self-service Tools</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="overflow-hidden flex flex-col h-[280px]">
              <div className="h-2 bg-primary" />
              <CardHeader>
                <div className="flex items-center gap-2">
                  <img src="/openai_pic.png" alt="AI Survey  Builder logo" className="h-8 w-8" />
                  <CardTitle>AI Survey Builder</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex-grow overflow-auto flex flex-col justify-between">
                <p className="text-muted-foreground">
                  Generate an AI-enabled instant first draft of the survey questionnaire
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
            </Card>

            <Card className="overflow-hidden flex flex-col h-[280px]">
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
            </Card>
          </div>
        </div>
      </section> */}


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
                      <span className="font-medium">Panel quota verification</span>
                      <p className="text-sm text-muted-foreground">
                        Verify and set quotas for panel respondents to ensure a representative sample
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-medium">Survey link testing</span>
                      <p className="text-sm text-muted-foreground">
                        Test the initial survey link using a predefined checklist to confirm logic flows correctly
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 text-primary mt-1" />
                    <div>
                      <span className="font-medium">Soft launch execution</span>
                      <p className="text-sm text-muted-foreground">
                        Conduct a soft launch to assess whether respondents interpret questions accurately
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 text-primary mt-1" />
                    <div>
                      <span className="font-medium">Feedback analysis and adjustments</span>
                      <p className="text-sm text-muted-foreground">
                        Analyze soft launch feedback and make necessary adjustments before full deployment
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="container mx-auto px-4 max-w-2xl">
                <div className="flex flex-wrap items-center gap-x-5 justify-start">
                  {[
                    '/Icons/Survey/IncQuery.svg',
                    '/Icons/Survey/Dialectica.png',
                    '/Icons/Survey/qualtrics.svg',
                    '/Icons/Survey/roirocket.jpeg',
                    '/Icons/Survey/thirdBridge.jpeg',
                    '/Icons/Survey/dynata.png',
                    '/Icons/Survey/Atheneum.png',
                    '/Icons/Survey/alphaSights.png',
                    '/Icons/Survey/glg.png',
                  ].map((src, idx) => (
                    <div
                      key={idx}
                      className="w-20 h-20 flex items-center justify-center"
                    >
                      <img
                        src={src}
                        alt={`Logo ${idx + 1}`}
                        className="object-contain max-w-full max-h-full"
                      />
                    </div>
                  ))}
                </div>
              </div>


              {/* Timeline & Fees Pills */}
              {/* <div className="flex flex-wrap gap-4 pt-4"> */}
              {/* <Pill icon={<Clock className="h-4 w-4" />} text="Timeline: 1-2 Days" /> */}
              {/* <Pill icon={<CircleDollarSign className="h-4 w-4" />} text="BCN Fees: $3.1K / day / team" />
              </div> */}

              <div className="py-3">
                <p className="italic text-muted-foreground mt-4 mb-5">
                  BCN PEG is your trusted partner, offering comprehensive support across the entire survey value chain or tailored assistance for any specific segment within it
                </p>
                {/* <div className="flex justify-center"> */}
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
                {/* </div> */}
              </div>

            </div>

            <div className="space-y-6">
              <Card className="border-2 border-primary/20">
                <CardHeader>
                  <CardTitle>Sample output</CardTitle>
                  <CardDescription>Download our sample survey testing output</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow overflow-hidden">
                  <img src="/Icons/Survey/survey-testing1.png" alt="Sample output image 1" className="mb-8" />
                  <img src="/Icons/Survey/survey-testing2.png" alt="Sample output image 2" />
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link href="/Decks/Survey/survey-testing-sample.xlsx" target="_blank" rel="noopener noreferrer">
                      Download sample file <Download className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
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

