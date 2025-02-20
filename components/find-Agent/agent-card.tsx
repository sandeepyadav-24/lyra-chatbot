import { Heart } from "lucide-react";
import type { Agent } from "./types";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface AgentCardProps {
  agent: Agent;
}

export default function AgentCard({ agent }: AgentCardProps) {
  return (
    <div className="rounded-3xl border border-gray-700 bg-app-secondary  text-white shadow-lg overflow-hidden transition-transform hover:scale-105 hover:shadow-xl">
      <div className="relative aspect-[4/3] p-3 ">
        <img
          src={agent.image}
          alt={agent.name}
          className="object-cover w-full h-full rounded-[50px]"
        />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-app-textPrimary font-semibold">{agent.name}</h3>
       
          </div>
          {/* {agent.stats && (
            <div className="text-sm text-gray-400">
              <span className="font-semibold text-white">{agent.stats.projects}</span>
              <span className="mx-2">·</span>
              <span className="font-semibold text-white">{agent.stats.clients}</span>
            </div>
          )} */}
        </div>
        <div className="flex items-center justify-between">     <p className="text-sm text-app-textSecondary">{agent.role}</p>
          <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
            <Heart className="h-5 w-5" />
          </Button>
        </div>
 
      </div>
    </div>
  );
}