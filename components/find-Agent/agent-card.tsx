import { Heart } from "lucide-react"
import Image from "next/image"
import type { Agent } from "./types"
import { Button } from "@/components/ui/button"

interface AgentCardProps {
  agent: Agent
}

export default function AgentCard({ agent }: AgentCardProps) {
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden">
      <div className="relative aspect-[4/3]">
        <Image src={agent.image || "/placeholder.svg"} alt={agent.name} fill className="object-cover" />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="font-semibold text-lg">{agent.name}</h3>
            <p className="text-sm text-muted-foreground">{agent.role}</p>
          </div>
          {agent.stats && (
            <div className="text-sm">
              <span className="font-semibold">{agent.stats.projects}</span>
              <span className="mx-2">·</span>
              <span className="font-semibold">{agent.stats.clients}</span>
            </div>
          )}
        </div>
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">by {agent.by}</p>
          <Button variant="ghost" size="icon">
            <Heart className="h-4 w-4" />
          </Button>
        </div>
        <Button variant="outline" className="w-full mt-4">
          Visit the Portfolio
        </Button>
      </div>
    </div>
  )
}

