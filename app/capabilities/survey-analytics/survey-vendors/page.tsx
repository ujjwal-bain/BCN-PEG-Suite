import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ContactCard from "@/components/contact-card"
import { contactData, type Company } from "@/lib/survey-vendors"
import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Building2, Users, Stethoscope } from "lucide-react"

function getExpertiseStyle(expertise: Company["expertise"]) {
  switch (expertise) {
    case "B2B":
      return {
        variant: "secondary" as const,
        className: "bg-blue-50 text-blue-700 border-blue-200",
        icon: Building2,
      }
    case "B2C":
      return {
        variant: "secondary" as const,
        className: "bg-green-50 text-green-700 border-green-200",
        icon: Users,
      }
    case "Healthcare - Doctors/Nurses/Patients":
      return {
        variant: "secondary" as const,
        className: "bg-red-50 text-red-700 border-red-200",
        icon: Stethoscope,
      }
    default:
      return {
        variant: "secondary" as const,
        className: "bg-gray-50 text-gray-700 border-gray-200",
        icon: Building2,
      }
  }
}

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact survey vendors</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Connect with our trusted partners across different regions. Each contact represents specialized expertise
                in their respective markets and services.
              </p>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        {/* <section className="w-full py-12 md:py-24 bg-gradient-to-r from-primary/15 via-primary/5 to-background">
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
      </section> */}

        {/* Contacts Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="space-y-12">
            {contactData.map((company) => {
              const expertiseStyle = getExpertiseStyle(company.expertise)
              const IconComponent = expertiseStyle.icon

              return (
                <Card key={company.name} className="overflow-hidden">
                  <CardHeader className="bg-gray-50 border-b">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="flex-shrink-0">
                          <Image
                            src={company.logo || "/placeholder.svg"}
                            alt={`${company.name} logo`}
                            width={0} // required but irrelevant when layout is intrinsic
                            height={0} // required but overridden by style
                            style={{ height: company.logoHeight, width: "auto" }}
                            className="object-contain"
                            sizes="100vw"
                            priority
                          />
                        </div>
                        {/* <CardTitle className="text-2xl font-bold text-gray-900">{company.name}</CardTitle> */}
                      </div>
                      {/* Expertise Badge */}
                      <Badge
                        variant={expertiseStyle.variant}
                        className={`${expertiseStyle.className} flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium`}
                      >
                        <IconComponent className="h-4 w-4" />
                        {company.expertise}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="p-8">
                    {/* Fixed responsive grid - cards won't stretch */}
                    <div className="flex flex-wrap gap-6">
                      {company.contacts.map((contact) => (
                        <div key={contact.id} className="flex-1 min-w-[300px] max-w-[400px]">
                          <ContactCard contact={contact} />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Footer Note */}
        <div className="bg-white border-t mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="text-center">
              <p className="text-gray-600">
                Need help finding the right PoC? Reach out to any of the experts above, and they will connect you with
                the appropriate specialist
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}