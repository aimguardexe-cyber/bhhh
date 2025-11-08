"use client"

import { useState } from "react"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { MessageCircle, Send } from "lucide-react"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback } from "./ui/avatar"

// Easily editable question and answer pairs
const qaPairs = [
  {
    question: "What is Coderyn?",
    answer: "Coderyn is a modern, responsive dashboard layout for a software platform that helps you manage your products and purchases.",
  },
  {
    question: "How do I find my purchased products?",
    answer: "You can find all your purchased products on the 'Library' page, accessible from the sidebar.",
  },
  {
    question: "How can I change my password?",
    answer: "To change your password, go to the 'Profile' page and click on the 'Change Password' button.",
  },
  {
    question: "Is there a premium plan?",
    answer: "Yes, you can upgrade to our Premium plan from your profile page to unlock more features.",
  },
]

type ChatMessage = {
  type: "question" | "answer"
  text: string
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([])

  const handleQuestionClick = (question: string, answer: string) => {
    setMessages([
      ...messages,
      { type: "question", text: question },
      { type: "answer", text: answer },
    ])
  }

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="fixed bottom-8 right-8 h-14 w-14 rounded-full shadow-lg"
        >
          <MessageCircle className="h-6 w-6" />
          <span className="sr-only">Open Chat</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent
        side="top"
        align="end"
        className="w-80 rounded-lg border-2 p-0"
        sideOffset={16}
      >
        <div className="flex h-[28rem] flex-col">
          <div className="flex-1 p-4">
            <div className="flex items-start gap-3">
              <Avatar className="h-10 w-10 border">
                <AvatarFallback>
                  <MessageCircle />
                </AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-semibold">Help Assistant</h3>
                <p className="text-sm text-muted-foreground">
                  Click a question below to see the answer.
                </p>
              </div>
            </div>
          </div>
          <ScrollArea className="flex-grow border-t">
            <div className="p-4 space-y-4">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex gap-2 ${
                    msg.type === "question" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg px-3 py-2 text-sm ${
                      msg.type === "question"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
          <div className="border-t p-2">
            <ScrollArea className="h-32">
              <div className="p-2 space-y-2">
                {qaPairs.map((qa, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="w-full justify-start h-auto whitespace-normal"
                    onClick={() => handleQuestionClick(qa.question, qa.answer)}
                  >
                    <Send className="mr-2 h-4 w-4 flex-shrink-0" />
                    {qa.question}
                  </Button>
                ))}
              </div>
            </ScrollArea>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}
