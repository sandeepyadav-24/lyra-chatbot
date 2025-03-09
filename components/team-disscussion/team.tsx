// "use client"

// import { useState } from "react"
// import { Hash, Plus, ChevronDown, Settings, Search, AtSign, Smile, Paperclip, Send } from "lucide-react"
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { ScrollArea } from "@/components/ui/scroll-area"

// interface Message {
//   id: string
//   user: {
//     name: string
//     avatar: string
//     isOnline: boolean
//   }
//   text: string
//   timestamp: string
// }

// interface Channel {
//   id: string
//   name: string
//   unread: boolean
// }

// interface DirectMessage {
//   id: string
//   user: {
//     name: string
//     avatar: string
//     isOnline: boolean
//   }
//   unread: boolean
// }

// export default function SlackInterface() {
//   const [activeChannel, setActiveChannel] = useState("general")
//   const [messages, setMessages] = useState<Message[]>([
//     {
//       id: "1",
//       user: {
//         name: "Sarah Johnson",
//         avatar: "/placeholder.svg?height=40&width=40",
//         isOnline: true,
//       },
//       text: "Hey team! Just a reminder that we have our weekly meeting tomorrow at 10am.",
//       timestamp: "11:45 AM",
//     },
//     {
//       id: "2",
//       user: {
//         name: "Mike Chen",
//         avatar: "/placeholder.svg?height=40&width=40",
//         isOnline: false,
//       },
//       text: "Thanks for the reminder! I've prepared the slides for the presentation.",
//       timestamp: "11:47 AM",
//     },
//     {
//       id: "3",
//       user: {
//         name: "Alex Rodriguez",
//         avatar: "/placeholder.svg?height=40&width=40",
//         isOnline: true,
//       },
//       text: "Great work, Mike! Looking forward to seeing them.",
//       timestamp: "11:50 AM",
//     },
//   ])

//   const [channels, setChannels] = useState<Channel[]>([
//     { id: "general", name: "general", unread: false },
//     { id: "random", name: "random", unread: true },
//     { id: "announcements", name: "announcements", unread: false },
//     { id: "project-alpha", name: "project-alpha", unread: true },
//   ])

//   const [directMessages, setDirectMessages] = useState<DirectMessage[]>([
//     {
//       id: "dm1",
//       user: {
//         name: "Sarah Johnson",
//         avatar: "/placeholder.svg?height=40&width=40",
//         isOnline: true,
//       },
//       unread: false,
//     },
//     {
//       id: "dm2",
//       user: {
//         name: "Mike Chen",
//         avatar: "/placeholder.svg?height=40&width=40",
//         isOnline: false,
//       },
//       unread: true,
//     },
//     {
//       id: "dm3",
//       user: {
//         name: "Alex Rodriguez",
//         avatar: "/placeholder.svg?height=40&width=40",
//         isOnline: true,
//       },
//       unread: false,
//     },
//   ])

//   const [newMessage, setNewMessage] = useState("")

//   const handleSendMessage = () => {
//     if (newMessage.trim() === "") return

//     const newMsg: Message = {
//       id: Date.now().toString(),
//       user: {
//         name: "You",
//         avatar: "/placeholder.svg?height=40&width=40",
//         isOnline: true,
//       },
//       text: newMessage,
//       timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
//     }

//     setMessages([...messages, newMsg])
//     setNewMessage("")
//   }

//   return (
//     <div className="flex h-screen bg-gray-100">
//       {/* Sidebar - Hidden on mobile, toggleable */}
//       <div className={`
//         fixed inset-y-0 left-0 z-50 w-72 bg-gray-900 text-white transform transition-transform duration-300 ease-in-out
//         ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
//         md:relative md:translate-x-0 md:w-64 lg:w-72
//       `}>
//         <div className="flex flex-col h-full">
//           {/* Workspace Header */}
//           <div className="p-4 border-b border-gray-800 flex items-center justify-between">
//             <h1 className="font-bold text-xl truncate">Workspace</h1>
//             <div className="flex items-center gap-2">
//               <Button variant="ghost" size="icon" className="text-white hover:bg-gray-800">
//                 <Settings className="h-5 w-5" />
//               </Button>
//               <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setSidebarOpen(false)}>
//                 <ChevronDown className="h-5 w-5" />
//               </Button>
//             </div>
//           </div>

//           {/* Channels and DMs */}
//           <ScrollArea className="flex-1">
//             <div className="p-2 space-y-2">
//               {/* Channels */}
//               <div>
//                 <div className="flex items-center justify-between px-2 py-1">
//                   <div className="flex items-center gap-1 text-gray-400">
//                     <ChevronDown className="h-4 w-4" />
//                     <span className="text-sm font-medium">Channels</span>
//                   </div>
//                   <Button variant="ghost" size="icon" className="text-gray-400 hover:bg-gray-800">
//                     <Plus className="h-4 w-4" />
//                   </Button>
//                 </div>
//                 {channels.map((channel) => (
//                   <Button
//                     key={channel.id}
//                     variant="ghost"
//                     className={`w-full justify-start px-2 py-1 text-gray-300 hover:bg-gray-800 ${activeChannel === channel.id ? 'bg-gray-800 text-white' : ''} ${channel.unread ? 'font-semibold' : ''}`}
//                     onClick={() => {
//                       setActiveChannel(channel.id)
//                       setSidebarOpen(false)
//                     }}
//                   >
//                     <Hash className="h-4 w-4 mr-2" />
//                     <span className="truncate">{channel.name}</span>
//                     {channel.unread && <span className="ml-auto w-2 h-2 bg-blue-500 rounded-full"></span>}
//                   </Button>
//                 ))}
//               </div>

//               {/* Direct Messages */}
//               <div>
//                 <div className="flex items-center justify-between px-2 py-1">
//                   <div className="flex items-center gap-1 text-gray-400">
//                     <ChevronDown className="h-4 w-4" />
//                     <span className="text-sm font-medium">Direct Messages</span>
//                   </div>
//                   <Button variant="ghost" size="icon" className="text-gray-400 hover:bg-gray-800">
//                     <Plus className="h-4 w-4" />
//                   </Button>
//                 </div>
//                 {directMessages.map((dm) => (
//                   <Button
//                     key={dm.id}
//                     variant="ghost"
//                     className={`w-full justify-start px-2 py-1 text-gray-300 hover:bg-gray-800 ${dm.unread ? 'font-semibold' : ''}`}
//                   >
//                     <div className="relative mr-2">
//                       <Avatar className="h-6 w-6">
//                         <AvatarImage src={dm.user.avatar} />
//                         <AvatarFallback>{dm.user.name.charAt(0)}</AvatarFallback>
//                       </Avatar>
//                       {dm.user.isOnline && <span className="absolute bottom-0 right-0 w-2 h-2 bg-green-400 rounded-full border-2 border-gray-900"></span>}
//                     </div>
//                     <span className="truncate">{dm.user.name}</span>
//                     {dm.unread && <span className="ml-auto w-2 h-2 bg-blue-500 rounded-full"></span>}
//                   </Button>
//                 ))}
//               </div>
//             </div>
//           </ScrollArea>

//           {/* User Profile */}
//           <div className="p-4 border-t border-gray-800">
//             <div className="flex items-center gap-2">
//               <Avatar className="h-9 w-9">
//                 <AvatarImage src="/placeholder.svg?height=40&width=40" />
//                 <AvatarFallback>YA</AvatarFallback>
//               </Avatar>
//               <div className="flex-1 min-w-0">
//                 <p className="text-sm font-medium truncate">Your Name</p>
//                 <p className="text-xs text-gray-400">Active</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 flex flex-col">
//         {/* Channel Header */}
//         <header className="h-14 bg-white border-b border-gray-200 flex items-center justify-between px-4">
//           <div className="flex items-center gap-2">
//             <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setSidebarOpen(true)}>
//               <Hash className="h-5 w-5" />
//             </Button>
//             <h2 className="font-semibold text-gray-900">#{activeChannel}</h2>
//           </div>
//           <div className="flex items-center gap-3">
//             <div className="relative hidden sm:block">
//               <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//               <Input
//                 placeholder="Search"
//                 className="pl-9 h-9 w-48 md:w-64 bg-gray-100 border-gray-300 focus-visible:ring-blue-500"
//               />
//             </div>
//             <Avatar className="h-8 w-8">
//               <AvatarImage src="/placeholder.svg?height=40&width=40" />
//               <AvatarFallback>YA</AvatarFallback>
//             </Avatar>
//           </div>
//         </header>

//         {/* Messages */}
//         <ScrollArea className="flex-1 p-4 bg-white">
//           <div className="space-y-4 max-w-3xl mx-auto">
//             {messages.map((message) => (
//               <div key={message.id} className="flex items-start gap-3 hover:bg-gray-50 p-2 rounded">
//                 <Avatar className="h-9 w-9 mt-1">
//                   <AvatarImage src={message.user.avatar} />
//                   <AvatarFallback>{message.user.name.charAt(0)}</AvatarFallback>
//                 </Avatar>
//                 <div className="flex-1">
//                   <div className="flex items-baseline gap-2">
//                     <span className="font-semibold text-gray-900">{message.user.name}</span>
//                     <span className="text-xs text-gray-500">{message.timestamp}</span>
//                   </div>
//                   <p className="mt-1 text-gray-800">{message.text}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </ScrollArea>

//         {/* Message Input */}
//         <div className="p-4 bg-white border-t border-gray-200">
//           <div className="max-w-3xl mx-auto">
//             <div className="relative">
//               <Input
//                 placeholder={`Message #${activeChannel}`}
//                 className="w-full pr-12 pl-4 py-3 h-auto border-gray-300 rounded-lg focus-visible:ring-blue-500 bg-gray-50"
//                 value={newMessage}
//                 onChange={(e) => setNewMessage(e.target.value)}
//                 onKeyDown={(e) => {
//                   if (e.key === "Enter" && !e.shiftKey) {
//                     e.preventDefault()
//                     handleSendMessage()
//                   }
//                 }}
//               />
//               <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex gap-1">
//                 <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-500 hover:bg-gray-200">
//                   <Paperclip className="h-5 w-5" />
//                 </Button>
//                 <Button
//                   size="icon"
//                   className="h-8 w-8 bg-blue-600 hover:bg-blue-700 text-white"
//                   onClick={handleSendMessage}
//                 >
//                   <Send className="h-5 w-5" />
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
