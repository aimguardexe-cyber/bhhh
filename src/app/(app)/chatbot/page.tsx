
"use client"

import { useState, useRef, useEffect, FormEvent } from "react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"
import { Bot, Send, User } from "lucide-react"

type Message = {
  id: string
  text: string
  sender: "user" | "bot"
}

const predefinedAnswers: Record<string, string> = {
  "hello": "Hi there! How can I help you today?",
  "hi": "Hi there! How can I help you today?",
  "products": "You can find all our products on the 'Products' page. We have an Android Control Panel, a Desktop Control Panel, and Modern Code Snippets.",
  "pricing": "The Android panel is ₹499, the Desktop panel is ₹999, and the Code Snippets are ₹299.",
  "library": "Your purchased products are available in your Library. You can find credentials and download links there.",
  "support": "If you need further assistance, please contact our support team at support@coderyn.com.",
  "bye": "Goodbye! Have a great day.",
}

const getBotResponse = (message: string): string => {
  const lowerCaseMessage = message.toLowerCase()
  for (const keyword in predefinedAnswers) {
    if (lowerCaseMessage.includes(keyword)) {
      return predefinedAnswers[keyword]
    }
  }
  return "I'm sorry, I don't understand that. You can ask me about products, pricing, or your library."
}

export default function ChatbotPage() {
  const [messages, setMessages] = useState<Message[]>([
    { id: "1", text: "Hello! I'm the Coderyn assistant. Ask me about our products, pricing, or your account.", sender: "bot" }
  ])
  const [input, setInput] = useState("")
  const scrollAreaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // @ts-ignore
    scrollAreaRef.current?.scrollTo({ top: scrollAreaRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages])

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: "user",
    }
    setMessages((prev) => [...prev, userMessage])

    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(input),
        sender: "bot",
      }
      setMessages((prev) => [...prev, botResponse])
    }, 500)

    setInput("")
  }

  return (
    <div className="flex flex-col h-[calc(100vh-8rem)]">
      <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>
        <div className="space-y-6">
          {messages.map((message) => (
            <div
              key={message.id}
              className={cn(
                "flex items-start gap-4",
                message.sender === "user" ? "justify-end" : ""
              )}
            >
              {message.sender === "bot" && (
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="bg-primary text-primary-foreground">
                    <Bot className="h-5 w-5" />
                  </AvatarFallback>
                </Avatar>
              )}
              <div
                className={cn(
                  "max-w-md rounded-lg p-3",
                  message.sender === "user"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted"
                )}
              >
                <p className="text-sm">{message.text}</p>
              </div>
               {message.sender === "user" && (
                <Avatar className="h-8 w-8">
                  <AvatarFallback>
                    <User className="h-5 w-5" />
                  </AvatarFallback>
                </Avatar>
              )}
            </div>
          ))}
        </div>
      </ScrollArea>
      <div className="border-t p-4">
        <form onSubmit={handleSubmit} className="flex items-center gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            autoComplete="off"
          />
          <Button type="submit" size="icon">
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </div>
    </div>
  )
}
