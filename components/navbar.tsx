"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, ChevronDown, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import SearchDropdown from "@/components/search-dropdown";

// Industry, Capability, and Other Offerings lists
const industries = [
  { name: "Financial services", link: "/industries/financial-services" },
  { name: "Healthcare", link: "/industries/healthcare" },
  { name: "Consumer products / Retail", link: "/industries/consumer-products" },
  { name: "Technology", link: "/industries/technology" },
];

const capabilities = [
  { name: "Survey analytics", link: "/capabilities/survey-analytics" },
  { name: "Workforce analytics", link: "/capabilities/workforce-analytics" },
  { name: "Digital diagnostics", link: "/capabilities/digital" },
  { name: "ESG / Carbon assessment", link: "/capabilities/esg" },
  { name: "Sector scan / Target screening", link: "/capabilities/sector-scan" },
  { name: "Gen AI DD", link: "/capabilities/gen-ai" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoverDropdown, setHoverDropdown] = useState<null | "industry" | "capability" | "other">(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [capabilitiesOpen, setCapabilitiesOpen] = useState(false);
  const [screenSize, setScreenSize] = useState<"small" | "large">("large");

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 1200) {
        setScreenSize("small");
      } else {
        setScreenSize("large");
      }
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 lg:px-6">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl md:text-xl whitespace-nowrap">
            <img src="/Icons/Bain/bain-icon.png" alt="Bain-logo" className="h-6 w-6 text-primary" />
            <span>BCN PEG Suite</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        {screenSize === "large" && (
          <div className="hidden md:flex flex-1 justify-center items-center gap-6">
            <nav className="flex items-center gap-6 ml-4">
              <Link href="/" className="text-sm font-medium hover:text-primary">
                Home
              </Link>

              {/* Industry Dropdown */}
              <div
                className="relative group"
                onMouseEnter={() => setHoverDropdown("industry")}
                onMouseLeave={() => setHoverDropdown(null)}
              >
                <Link
                  href="/industries"
                  className={`text-sm font-medium flex items-center gap-1 px-3 py-2 rounded-md transition-colors group-hover:bg-gray-100 hover:text-primary`}
                >
                  BCN PEG Industry <ChevronDown className="h-4 w-4 transition-transform duration-200" />
                </Link>
                {hoverDropdown === "industry" && (
                  <div className="absolute top-full left-0 mt-0 w-56 bg-white shadow-md rounded-md border z-50 py-2 animate-fade-in">
                    <ul className="py-0">
                      {industries.map((industry, index) => (
                        <li key={index}>
                          <Link
                            href={industry.link}
                            className="block px-4 py-2 text-sm rounded-md transition-colors hover:bg-gray-100 hover:text-primary"
                          >
                            {industry.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Products Dropdown */}
              <div
                className="relative group"
                onMouseEnter={() => setHoverDropdown("capability")}
                onMouseLeave={() => setHoverDropdown(null)}
              >
                <Link
                  href="/capabilities"
                  className={`text-sm font-medium flex items-center gap-1 px-3 py-2 rounded-md transition-colors group-hover:bg-gray-100 hover:text-primary`}
                >
                  BCN PEG Products <ChevronDown className="h-4 w-4 transition-transform duration-200" />
                </Link>
                {hoverDropdown === "capability" && (
                  <div className="absolute top-full left-0 mt-0 w-56 bg-white shadow-md rounded-md border z-50 py-2 animate-fade-in">
                    <ul className="py-0">
                      {capabilities.map((capability, index) => (
                        <li key={index}>
                          <Link
                            href={capability.link}
                            className="block px-4 py-2 text-sm rounded-md transition-colors hover:bg-gray-100 hover:text-primary"
                          >
                            {capability.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div>
                <Link href="/peg-tools" className="text-sm font-medium hover:text-primary">
                  PEG Tools / Solutions
                </Link>
              </div>
            </nav>
          </div>
        )}

        {/* Search and CTA Button */}
        {screenSize === "large" && (
          <div className="flex items-center gap-4">
            <SearchDropdown className="hidden md:block" />
            <Button
              asChild
              className="px-4 py-2 rounded-md bg-primary text-white hover:bg-primary-dark transition-colors md:max-w-[150px] lg:max-w-none whitespace-nowrap"
              onClick={(e) => {
                e.preventDefault();
                window.location.href =
                  "mailto:BCNPEGStaffing@Bain.com?subject=BCN Support for Project {Project name} {Case code}";
              }}
            >
              <Link href="#">Request BCN PEG Staffing</Link>
            </Button>
          </div>
        )}

        {/* Mobile Menu Button */}
        {screenSize === "small" && (
          <button
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="sr-only">Toggle menu</span>
            {isMobileMenuOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
          </button>
        )}

        {/* Mobile Menu */}
        {isMobileMenuOpen && screenSize === "small" && (
          <div className="absolute top-16 left-0 right-0 bg-background/95 backdrop-blur border-b">
            <div className="w-full px-4 py-4 space-y-4">
              <nav className="flex flex-col space-y-4">
                <Link href="/" className="text-sm font-medium hover:text-primary">
                  Home
                </Link>

                {/* Industry Dropdown (Mobile) */}
                <div>
                  <div className="flex w-full">
                    <Link
                      href="/industries"
                      className="flex-1 text-sm font-medium hover:text-primary py-1"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      BCN PEG Industry
                    </Link>
                    <button
                      className="flex items-center px-2 focus:outline-none"
                      onClick={() => setIndustriesOpen((open) => !open)}
                      aria-label="Toggle Industry Dropdown"
                      type="button"
                    >
                      <ChevronDown
                        className={`h-4 w-4 ml-2 transition-transform ${industriesOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                  </div>
                  {industriesOpen && (
                    <div className="mt-2 ml-4 flex flex-col space-y-1">
                      {industries.map((industry, index) => (
                        <Link
                          key={index}
                          href={industry.link}
                          className="text-sm px-2 py-1 rounded hover:bg-gray-100 hover:text-primary"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {industry.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* Products Dropdown (Mobile) */}
                <div>
                  <div className="flex w-full">
                    <Link
                      href="/capabilities"
                      className="flex-1 text-sm font-medium hover:text-primary py-1"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      BCN PEG Products
                    </Link>
                    <button
                      className="flex items-center px-2 focus:outline-none"
                      onClick={() => setCapabilitiesOpen((open) => !open)}
                      aria-label="Toggle Products Dropdown"
                      type="button"
                    >
                      <ChevronDown
                        className={`h-4 w-4 ml-2 transition-transform ${capabilitiesOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                  </div>
                  {capabilitiesOpen && (
                    <div className="mt-2 ml-4 flex flex-col space-y-1">
                      {capabilities.map((capability, index) => (
                        <Link
                          key={index}
                          href={capability.link}
                          className="text-sm px-2 py-1 rounded hover:bg-gray-100 hover:text-primary"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {capability.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <Link href="/peg-tools" className="text-sm font-medium hover:text-primary">
                  PEG Tools / Solutions
                </Link>
              </nav>

              {/* Search Dropdown */}
              <SearchDropdown className="w-full"  forceFullWidth={true} />

              {/* CTA Button */}
              <Button
                asChild
                className="w-full px-4 py-2 rounded-md bg-primary text-white hover:bg-primary-dark transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href =
                    "mailto:BCNPEGStaffing@Bain.com?subject=BCN Support for Project {Project name} {Case code}";
                }}
              >
                <Link href="#">Request BCN PEG Staffing</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}