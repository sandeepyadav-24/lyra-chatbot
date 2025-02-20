import type { Agent, MenuItem } from "./types"
import johnCarterImage from "../../assets/3.jpg";

export const menuItems: MenuItem[] = [
  { id: "all", label: "All Agents" },
  { id: "agent-lists", label: "Agent Lists" },
  { id: "starter", label: "Starter" },
  { id: "ecommerce", label: "Ecommerce" },
  { id: "blog", label: "Blog" },
  { id: "edge-functions", label: "Edge Functions" },
  { id: "edge-middleware", label: "Edge Middleware" },
  { id: "edge-config", label: "Edge Config" },
  { id: "portfolio", label: "Portfolio" },
  { id: "saas", label: "SaaS" },
  { id: "cms", label: "CMS" },
  { id: "coin", label: "Coin" },
  { id: "multi-tenant", label: "Multi-Tenant Apps" },
  { id: "marketing", label: "Marketing" },
]

export const agents: Agent[] = [
  {
    id: "1",
    name: "John Carter",
    role: "Web Developer",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk0dptDo0laY421idLF9pOGYQnhg0xvFgnHA&s",
    stats: {
      projects: 12,
      clients: 150,
    },
    by: "designerth",
    category: "portfolio",
  },
  {
    id: "2",
    name: "Sarah Wilson",
    role: "UI/UX Designer",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR6UmXLMXlr119z_yxANem0qL5uW3AtHPIdw&s",
    by: "john",
    category: "starter",
  },
  {
    id: "3",
    name: "Mike Parker",
    role: "Designer Portfolio",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcPu0uG5ILtYC6q83b-LoI_dcHKw21ntkBhw&s",
    by: "stickPortfolio",
    category: "portfolio",
  },
  {
    id: "4",
    name: "John Schmidt",
    role: "Architecture Portfolio",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm6hfdW6pqiSgr8IzE26hgjitY0l8JUFG-iA&s",
    by: "jackschmit",
    category: "portfolio",
  },
  // Added more sample data for different categories
  {
    id: "5",
    name: "Emma Thompson",
    role: "E-commerce Specialist",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5Ge_CJa3FJ7vyawyd36MepAnwmiLPhFr1nA&s",
    by: "emmaT",
    category: "ecommerce",
  },
  {
    id: "6",
    name: "Alex Johnson",
    role: "Marketing Expert",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBcfo6Y5vL5SIGjjGAzu4NxFgTc2W6GbR_9g&s",
    by: "alexJ",
    category: "marketing",
  },
]

