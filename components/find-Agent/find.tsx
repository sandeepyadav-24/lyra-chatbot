"use client";

import { useState } from "react";
import Sidebar from "@/components/find-Agent/sidebar";
import AgentCard from "@/components/find-Agent/agent-card";
import SearchBar from "@/components/find-Agent/search-bar";
import { agents } from "@/components/find-Agent/data";

export default function find() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredAgents = agents.filter((agent) => {
    const matchesCategory =
      activeCategory === "all" || agent.category === activeCategory;
    const matchesSearch =
      agent.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      agent.role.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="flex min-h-screen">
      <Sidebar activeItem={activeCategory} onItemSelect={setActiveCategory} />
      <main className="flex-1 p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Find Your Agent</h1>
          <SearchBar onSearch={setSearchQuery} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredAgents.map((agent) => (
              <AgentCard key={agent.id} agent={agent} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
