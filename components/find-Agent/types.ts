export interface MenuItem {
    id: string
    label: string
    icon?: string
  }
  
  export interface Agent {
    id: string
    name: string
    role: string
    image: string
    stats?: {
      projects?: number
      clients?: number
    }
    by: string
    category: string // Added category for filtering
  }
  
  