"use client"

import { useState } from "react"
import Sidebar from "./Sidebar"
import ChatArea from "./ChatArea"
import { Message, Channel, DirectMessage } from "./types"

// Define some preset colors for avatars
const avatarColors = [
  "bg-blue-500",
  "bg-green-500",
  "bg-purple-500",
  "bg-red-500",
  "bg-yellow-500",
  "bg-indigo-500",
]

export default function ChatApp() {
  const [activeChannel, setActiveChannel] = useState("general")
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      user: { 
        name: "Sarah Johnson", 
        avatar: "/placeholder.svg?height=40&width=40", 
        isOnline: true,
        color: avatarColors[0] // Blue
      },
      text: "Hey team! Just a reminder that we have our weekly meeting tomorrow at 10am.",
      timestamp: "11:45 AM",
    },
    {
      id: "2",
      user: { 
        name: "Mike Chen", 
        avatar: "/placeholder.svg?height=40&width=40", 
        isOnline: false,
        color: avatarColors[1] // Green
      },
      text: "Thanks for the reminder! I've prepared the slides for the presentation.",
      timestamp: "11:47 AM",
    },
    {
      id: "3",
      user: { 
        name: "Alex Rodriguez", 
        avatar: "/placeholder.svg?height=40&width=40", 
        isOnline: true,
        color: avatarColors[2] // Purple
      },
      text: "Great work, Mike! Looking forward to seeing them.",
      timestamp: "11:50 AM",
    },
  ])

  const [channels, setChannels] = useState<Channel[]>([
    { id: "general", name: "General", unread: false },
    { id: "random", name: "Random", unread: true },
    { id: "announcements", name: "Announcements", unread: false },
    { id: "project-alpha", name: "Project Alpha", unread: true },
  ])

  const [directMessages, setDirectMessages] = useState<DirectMessage[]>([
    {
      id: "dm1",
      user: { 
        name: "Sarah Johnson", 
        avatar: "/placeholder.svg?height=40&width=40", 
        isOnline: true,
        color: avatarColors[0] // Blue
      },
      unread: false,
    },
    {
      id: "dm2",
      user: { 
        name: "Mike Chen", 
        avatar: "/placeholder.svg?height=40&width=40", 
        isOnline: false,
        color: avatarColors[1] // Green
      },
      unread: true,
    },
    {
      id: "dm3",
      user: { 
        name: "Alex Rodriguez", 
        avatar: "/placeholder.svg?height=40&width=40", 
        isOnline: true,
        color: avatarColors[2] // Purple
      },
      unread: false,
    },
  ])

  const handleSendMessage = (text: string) => {
    if (text.trim() === "") return
    const newMsg: Message = {
      id: Date.now().toString(),
      user: { 
        name: "You", 
        avatar: "/placeholder.svg?height=40&width=40", 
        isOnline: true,
        color: avatarColors[3] // Red for current user
      },
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    }
    setMessages([...messages, newMsg])
  }

  return (
    <div className="flex h-screen bg-gradient-to-br from-indigo-50 to-purple-50">
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        channels={channels}
        directMessages={directMessages}
        activeChannel={activeChannel}
        onChannelSelect={(id) => {
          setActiveChannel(id)
          setIsSidebarOpen(false)
        }}
      />
      <ChatArea
        messages={messages}
        activeChannel={activeChannel}
        onSendMessage={handleSendMessage}
        onToggleSidebar={() => setIsSidebarOpen(true)}
      />
    </div>
  )
}