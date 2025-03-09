import { ChevronDown, Plus, Settings } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Channel, DirectMessage } from "./types"

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
  channels: Channel[]
  directMessages: DirectMessage[]
  activeChannel: string
  onChannelSelect: (id: string) => void
}

export default function Sidebar({ isOpen, onClose, channels, directMessages, activeChannel, onChannelSelect }: SidebarProps) {
  return (
    <div className={`
      fixed inset-y-0 left-0 z-50 w-72 bg-app-chatBg shadow-lg transform transition-transform duration-300 ease-in-out
      ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
      md:relative md:translate-x-0 md:w-64 lg:w-72
    `}>
      <div className="flex flex-col h-full">
        <div className="p-4 flex items-center justify-between bg-app-primary ">
          <h1 className="font-bold text-xl text-indigo-600">ChatSphere</h1>
          <div className="flex gap-2">
            <Button variant="ghost" size="icon" className="hover:bg-app-secondary">
              <Settings className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden" onClick={onClose}>
              <ChevronDown className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <ScrollArea className="flex-1 bg-app-primary">
          <div className="p-3 space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-app-textPrimary">Rooms</span>
                <Button variant="ghost" size="icon" className="text-app-textPrimary hover:bg-app-secondary">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              {channels.map((channel) => (
                <Button
                  key={channel.id}
                  variant="ghost"
                  className={`w-full justify-start px-3 py-2 text-app-textPrimary hover:bg-app-secondary rounded-lg ${activeChannel === channel.id ? 'bg-indigo-100 text-indigo-700' : ''} ${channel.unread ? 'font-semibold' : ''}`}
                  onClick={() => onChannelSelect(channel.id)}
                >
                  <span className="truncate">{channel.name}</span>
                  {channel.unread && <span className="ml-auto w-2 h-2 bg-indigo-500 rounded-full"></span>}
                </Button>
              ))}
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-app-textPrimary">Messages</span>
                <Button variant="ghost" size="icon" className="text-app-textPrimary hover:bg-app-secondary">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              {directMessages.map((dm) => (
                <Button
                  key={dm.id}
                  variant="ghost"
                  className={`w-full justify-start px-3 py-2 text-app-textPrimary hover:bg-app-secondary rounded-lg ${dm.unread ? 'font-semibold' : ''}`}
                  onClick={() => onChannelSelect(dm.id)}
                >
                  <div className="relative mr-2">
                    <Avatar className={`h-6 w-6 ${dm.user.color}`}>
                      <AvatarImage src={dm.user.avatar} />
                      <AvatarFallback>{dm.user.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    {dm.user.isOnline && <span className="absolute bottom-0 right-0 w-2 h-2 bg-green-400 rounded-full border-2 border-white"></span>}
                  </div>
                  <span className="truncate">{dm.user.name}</span>
                  {dm.unread && <span className="ml-auto w-2 h-2 bg-indigo-500 rounded-full"></span>}
                </Button>
              ))}
            </div>
          </div>
        </ScrollArea>

        <div className="p-4 bg-app-primary">
          <div className="flex items-center gap-2">
            <Avatar className="h-9 w-9 bg-red-500">
              <AvatarImage src="/placeholder.svg?height=40&width=40" />
              <AvatarFallback>YA</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium text-app-textPrimary">Your Name</p>
              <p className="text-xs text-app-textPrimary">Online</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}