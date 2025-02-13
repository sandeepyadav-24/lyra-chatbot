import type { Agent, MenuItem } from "./types"

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
    image: "/placeholder.svg?height=400&width=400",
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
    image: "/placeholder.svg?height=400&width=400",
    by: "john",
    category: "starter",
  },
  {
    id: "3",
    name: "Mike Parker",
    role: "Designer Portfolio",
    image: "/placeholder.svg?height=400&width=400",
    by: "stickPortfolio",
    category: "portfolio",
  },
  {
    id: "4",
    name: "John Schmidt",
    role: "Architecture Portfolio",
    image: "/placeholder.svg?height=400&width=400",
    by: "jackschmit",
    category: "portfolio",
  },
  // Added more sample data for different categories
  {
    id: "5",
    name: "Emma Thompson",
    role: "E-commerce Specialist",
    image: "/placeholder.svg?height=400&width=400",
    by: "emmaT",
    category: "ecommerce",
  },
  {
    id: "6",
    name: "Alex Johnson",
    role: "Marketing Expert",
    image: "/placeholder.svg?height=400&width=400",
    by: "alexJ",
    category: "marketing",
  },
]

