export interface Message {
  id: string
  user: { 
    name: string
    avatar: string
    isOnline: boolean
    color: string  // Added color property
  }
  text: string
  timestamp: string
}

export interface Channel {
  id: string
  name: string
  unread: boolean
}

export interface DirectMessage {
  id: string
  user: { 
    name: string
    avatar: string
    isOnline: boolean
    color: string  // Added color property
  }
  unread: boolean
}