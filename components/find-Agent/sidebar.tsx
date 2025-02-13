"use client"

import { menuItems } from "./data"
import { cn } from "@/lib/utils"

interface SidebarProps {
  activeItem: string
  onItemSelect: (id: string) => void
}

export default function Sidebar({ activeItem, onItemSelect }: SidebarProps) {
  return (
    <div className="w-64 bg-gray-50 h-screen p-4 border-r">
      <div className="mb-8">
        <h1 className="text-xl font-semibold mb-4">GE</h1>
        <p className="text-sm text-gray-500">Unit Expansions</p>
      </div>

      <div className="relative mb-6">
        <input
          type="text"
          placeholder="Search for templates like 'next-blog'"
          className="w-full px-4 py-2 rounded-md bg-gray-200 text-sm"
        />
      </div>

      <nav>
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onItemSelect(item.id)}
            className={cn(
              "w-full text-left px-4 py-2 rounded-md mb-1 transition-colors",
              activeItem === item.id ? "bg-primary text-primary-foreground" : "hover:bg-gray-200",
            )}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </div>
  )
}

