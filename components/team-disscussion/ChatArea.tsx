import { Menu, Search, Paperclip, Send } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Message } from "./types"
import { useState } from "react"

interface ChatAreaProps {
  messages: Message[]
  activeChannel: string
  onSendMessage: (text: string) => void
  onToggleSidebar: () => void
}

export default function ChatArea({ messages, activeChannel, onSendMessage, onToggleSidebar }: ChatAreaProps) {
  const [newMessage, setNewMessage] = useState("")

  const handleSend = () => {
    onSendMessage(newMessage)
    setNewMessage("")
  }

  return (
    <div className="flex-1 flex flex-col">
     <header className="h-14 bg-app-secondary shadow-[0_2px_4px_0_rgba(255,255,255,0.5) flex items-center justify-between px-4  border-b border-gray-800">
     <div className="absolute bottom-0 left-0 right-0 h-[2px bg-white/50"></div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="md:hidden" onClick={onToggleSidebar}>
            <Menu className="h-5 w-5 text-app-textPrimary" />
          </Button>
          <h2 className="font-semibold text-lg text-indigo-600">{activeChannel}</h2>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative hidden sm:block">
            <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-app-textPrimary" />
            <Input
              placeholder="Search messages"
              className="pl-9 h-9 w-48 md:w-64 focus-visible:ring-indigo-500"
            />
          </div>
          {/* Fixed Avatar in header to use message.user.color from first message if available */}
          <Avatar className={`h-10 w-10 ${messages[0]?.user.color || ''}`}>
            <AvatarImage src={messages[0]?.user.avatar || "/placeholder.svg?height=40&width=40"} />
            <AvatarFallback>{messages[0]?.user.name.charAt(0) || 'YA'}</AvatarFallback>
          </Avatar>
        </div>
      </header>

      <ScrollArea className="flex-1 bg-app-secondary p-6">
        <div className="space-y-6 bg-app-secondary max-w-2xl mx-auto">
          {messages.map((message) => (
            <div 
              key={message.id} 
              className="flex items-start gap-3 group hover:bg-app-secondary p-3 rounded-xl transition-colors"
            >
              <Avatar className={`h-10 w-10 ${message.user.color}`}>
                <AvatarImage src={message.user.avatar} />
                <AvatarFallback>{message.user.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-app-textPrimary">{message.user.name}</span>
                  <span className="text-xs text-app-textPrimary">{message.timestamp}</span>
                </div>
                <p className="mt-1 text-app-textPrimary">{message.text}</p>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>

      <div className="p-4 bg-app-secondary">
        <div className="max-w-2xl mx-auto relative">
          <Input
            placeholder={`Message ${activeChannel}`}
            className="w-full pr-24 py-3 h-auto rounded-full bg-app-secondary focus-visible:ring-indigo-500"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault()
                handleSend()
              }
            }}
          />
          <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex gap-1">
            <Button variant="ghost" size="icon" className="h-9 w-9 text-app-textPrimary hover:bg-gray-200">
              <Paperclip className="h-5 w-5" />
            </Button>
            <Button
              size="icon"
              className="h-9 w-9 bg-indigo-600 hover:bg-indigo-700 rounded-full"
              onClick={handleSend}
            >
              <Send className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}