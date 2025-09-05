"use client"

import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full border-t bg-muted/40">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid gap-8 lg:grid-cols-4 md:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl">
              <img src="/Icons/Bain/Bain-icon.png" alt="Bain-logo" className="h-6 w-6 text-primary" />
              <span>BCN PEG Suite</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Connecting global teams with expert solutions to drive success and innovation
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/industries" className="text-sm text-muted-foreground hover:text-primary">
                  BCN PEG Industry
                </Link>
              </li>
              <li>
                <Link href="/capabilities" className="text-sm text-muted-foreground hover:text-primary">
                  BCN PEG Products
                </Link>
              </li>
              <li>
                <Link href="/peg-tools" className="text-sm text-muted-foreground hover:text-primary">
                  PEG Tools / Solutions
                </Link>
              </li>
              <li>
                <Link href="/capabilities/survey-analytics/survey-vendors" className="text-sm text-muted-foreground hover:text-primary">
                  Survey vendor directory
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-primary"
                  onClick={(e) => {
                    e.preventDefault()
                    window.location.href = "mailto:BCNPEGStaffing@Bain.com?subject=BCN Support for Project {Project name} {Case code}"
                  }}
                >
                  Request BCN PEG Staffing
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">BCN PEG Industries</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/industries/financial-services" className="text-sm text-muted-foreground hover:text-primary">
                  Financial Services
                </Link>
              </li>
              <li>
                <Link href="/industries/healthcare" className="text-sm text-muted-foreground hover:text-primary">
                  Healthcare
                </Link>
              </li>
              <li>
                <Link href="/industries/consumer-products" className="text-sm text-muted-foreground hover:text-primary">
                  Consumer products / Retail
                </Link>
              </li>
              <li>
                <Link
                  href="/industries/technology"
                  className="text-sm text-muted-foreground hover:text-primary">
                  Technology
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">BCN PEG Products</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/capabilities/survey-analytics" className="text-sm text-muted-foreground hover:text-primary">
                  Survey Analytics
                </Link>
              </li>
              <li>
                <Link
                  href="/capabilities/workforce-analytics"
                  className="text-sm text-muted-foreground hover:text-primary">
                  Workforce Analytics
                </Link>
              </li>
              <li>
                <Link
                  href="/capabilities/digital"
                  className="text-sm text-muted-foreground hover:text-primary">
                  Digital diagnostics
                </Link>
              </li>
              <li>
                <Link
                  href="/capabilities/esg"
                  className="text-sm text-muted-foreground hover:text-primary">
                  ESG / Carbon assessment
                </Link>
              </li>
              <li>
                <Link
                  href="/capabilities/sector-scan"
                  className="text-sm text-muted-foreground hover:text-primary">
                  Sector scan / Target screening
                </Link>
              </li>
              <li>
                <Link
                  href="/capabilities/gen-ai"
                  className="text-sm text-muted-foreground hover:text-primary">
                  Gen AI DD
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-sm text-muted-foreground">BCNPEGStaffing@Bain.com</span>
              </li>
              {/* <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-sm text-muted-foreground">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary mt-1" />
                <span className="text-sm text-muted-foreground">
                  123 Business Avenue, Suite 400
                  <br />
                  Corporate City, BZ 10001
                </span>
              </li> */}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} BCN PEG Suite. All rights reserved.
            </p>
            {/* <div className="flex items-center gap-4">
              <Link href="/privacy-policy" className="text-sm text-muted-foreground hover:text-primary">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-sm text-muted-foreground hover:text-primary">
                Terms of Service
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  )
}

