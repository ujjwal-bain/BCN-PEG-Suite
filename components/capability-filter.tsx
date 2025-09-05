"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Filter } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function CapabilityFilter() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
      <div className="relative w-full sm:w-auto flex-1 max-w-sm">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search capabilities..."
          className="w-full pl-8"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="flex items-center gap-2 w-full sm:w-auto">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              <span>Filter</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuCheckboxItem checked>Data Analysis</DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem checked>Project Management</DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem checked>Strategic Planning</DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem checked>Technical Support</DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem checked>Research & Analysis</DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem checked>Knowledge Management</DropdownMenuCheckboxItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">Sort</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuCheckboxItem checked>Alphabetical (A-Z)</DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem>Alphabetical (Z-A)</DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem>Most Popular</DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem>Recently Updated</DropdownMenuCheckboxItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}

