"use client"

import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import type { ContactPerson } from "@/lib/survey-vendors"

interface ContactCardProps {
    contact: ContactPerson
}

export default function ContactCard({ contact }: ContactCardProps) {
    const handleReachOut = () => {
        const subject = encodeURIComponent("Business Inquiry")
        const body = encodeURIComponent(
            `Hello ${contact.name},\n\nI would like to discuss potential business opportunities.\n\nBest regards,`,
        )

        let mailtoUrl = `mailto:${contact.toEmail}?subject=${subject}&body=${body}`

        if (contact.ccEmail) {
            mailtoUrl += `&cc=${contact.ccEmail}`
        }

        window.location.href = mailtoUrl
    }

    return (
        <Card className="hover:shadow-lg transition-shadow duration-200">
            <CardContent className="p-4"> {/* Adjust padding to match grid gaps */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-base">
                            {contact.initials}
                        </div>
                        <div>
                            <h3 className="font-semibold text-base truncate">{contact.name}</h3>
                            <p className="text-sm text-muted-foreground truncate">{contact.region}</p>
                        </div>
                    </div>
                    <Button onClick={handleReachOut} variant="outline" size="sm" className="flex-shrink-0">
                        Reach out
                        <ArrowUpRight className="h-4 w-4 ml-1" />
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}
