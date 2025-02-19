"use client"

import { Search } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface SearchBarProps {
  onSearch: (value: string) => void
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  return (
    <div className="flex gap-4 mb-8">
<div className="relative flex-1">
  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
  <input
    type="text"
    placeholder="Search for resources like 'portfolio'"
    className="w-full pl-10 pr-4 py-2 rounded-3xl bg-app-secondary text-app-textSecondary
    placeholder-gray-400 border-none focus:outline-none"
    onChange={(e) => onSearch(e.target.value)}
  />
</div>
      {/* <Select defaultValue="all">
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Filter by" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Templates</SelectItem>
          <SelectItem value="recent">Most Recent</SelectItem>
          <SelectItem value="popular">Most Popular</SelectItem>
        </SelectContent>
      </Select> */}
    </div>
  )
}

