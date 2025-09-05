"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import SearchDropdown from "@/components/search-dropdown"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <span>BCN PEG Suite</span>
          </Link>
        </div>

        {/* Search box - visible on desktop */}
        <div className="hidden md:flex relative max-w-sm">
          <SearchDropdown />
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium hover:text-primary">
            Home
          </Link>

          {/* By Sector Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium hover:text-primary">
              By Sector
              <ChevronDown className="h-3 w-3" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56">
              <DropdownMenuItem asChild>
                <Link href="/sectors" className="w-full">
                  All Sectors
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/sectors/financial-services" className="w-full">
                  Financial Services
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/sectors/healthcare" className="w-full">
                  Healthcare
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/sectors/technology" className="w-full">
                  Technology
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/sectors/manufacturing" className="w-full">
                  Manufacturing
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/sectors/retail" className="w-full">
                  Retail
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/sectors/travel-hospitality" className="w-full">
                  Travel & Hospitality
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* By Capability Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium hover:text-primary">
              By Capability
              <ChevronDown className="h-3 w-3" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56">
              <DropdownMenuItem asChild>
                <Link href="/capabilities" className="w-full">
                  All Capabilities
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/capabilities/data-analysis" className="w-full">
                  Data Analysis
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/capabilities/project-management" className="w-full">
                  Project Management
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/capabilities/strategic-planning" className="w-full">
                  Strategic Planning
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/capabilities/technical-support" className="w-full">
                  Technical Support
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/capabilities/research-analysis" className="w-full">
                  Research & Analysis
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/capabilities/knowledge-management" className="w-full">
                  Knowledge Management
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Other Offerings Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium hover:text-primary">
              Other Offerings
              <ChevronDown className="h-3 w-3" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56">
              <DropdownMenuItem asChild>
                <Link href="/other-offerings" className="w-full">
                  All Offerings
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/due-diligence" className="w-full">
                  Due Diligence
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/firm-strategy" className="w-full">
                  Firm Strategy
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/post-acquisition" className="w-full">
                  Post-acquisition
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        <div className="flex items-center gap-4">
          <Button
            asChild
            variant="outline"
            className="hidden md:flex"
            onClick={(e) => {
              e.preventDefault()
              window.location.href = "mailto:bcn-support@example.com?subject=BCN Support Project Request"
            }}
          >
            <Link href="#">Request Staffing</Link>
          </Button>
          <Button asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-6 pt-6">
                <Link href="/" className="flex items-center gap-2 font-bold text-xl" onClick={() => setIsOpen(false)}>
                  <span>BCN PEG Suite</span>
                </Link>

                {/* Search box - visible in mobile menu */}
                <SearchDropdown />

                <nav className="flex flex-col gap-4">
                  <Link href="/" className="text-lg font-medium hover:text-primary" onClick={() => setIsOpen(false)}>
                    Home
                  </Link>
                  <Link
                    href="/sectors"
                    className="text-lg font-medium hover:text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    By Sector
                  </Link>
                  <Link
                    href="/capabilities"
                    className="text-lg font-medium hover:text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    By Capability
                  </Link>
                  <Link
                    href="/other-offerings"
                    className="text-lg font-medium hover:text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    Other Offerings
                  </Link>
                </nav>
                <div className="flex flex-col gap-2">
                  <Button
                    asChild
                    variant="outline"
                    className="w-full"
                    onClick={(e) => {
                      setIsOpen(false)
                      e.preventDefault()
                      window.location.href = "mailto:bcn-support@example.com?subject=BCN Support Project Request"
                    }}
                  >
                    <Link href="#">Request Staffing</Link>
                  </Button>
                  <Button asChild className="w-full">
                    <Link href="/contact" onClick={() => setIsOpen(false)}>
                      Contact Us
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
