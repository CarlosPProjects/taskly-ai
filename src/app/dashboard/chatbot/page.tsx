"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useUser } from "@clerk/shared/react/index";
import { useChat } from "ai/react";
import { PaperclipIcon, Send, User, LucideIcon } from "lucide-react";

import React from "react";

type SuggestCard = {
  id: number;
  icon: LucideIcon;
  description: string;
};

const suggestCards: SuggestCard[] = [
  {
    id: 1,
    icon: User,
    description: "Write a to-do list for a personal project or task",
  },
  {
    id: 2,
    icon: User,
    description: "Generate an email to reply to a job offer",
  },
  {
    id: 3,
    icon: User,
    description: "Summarise this article or text for me in one paragraph",
  },
  {
    id: 4,
    icon: User,
    description: "How does AI work in a technical capacity",
  },
];

const Chatbot = () => {
  const user = useUser();
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div className="flex bg-background">
      <div className="flex-1 px-4 py-8 md:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="space-y-2 text-start">
            <h1 className="text-4xl font-semibold">
              Hi there,{" "}
              <span className="bg-gradient-to-r from-foreground to-red-500 bg-clip-text text-transparent">
                {user.user?.firstName}
              </span>
            </h1>
            <h2 className="text-2xl">
              What{" "}
              <span className="bg-gradient-to-r from-foreground to-red-500 bg-clip-text text-transparent">
                would you like to{" "}
              </span>
              <span className="bg-gradient-to-r from-foreground to-red-500 bg-clip-text text-transparent">
                know?
              </span>
            </h2>
            <p className="text-sm text-muted-foreground">
              Use one of the most common prompts below or use your own to begin
            </p>
          </div>

          {/* Suggestion Cards */}
          <div className="mt-8 grid gap-2 sm:grid-cols-4">
            {suggestCards.map((e) => (
              <React.Fragment key={e.id}>
                <Card className="p-4 hover:bg-muted/50">
                  <div className="flex flex-col h-full items-start justify-between gap-4 ">
                    <div className="space-y-1">
                      <p className="text-sm">{e.description}</p>
                    </div>

                    <e.icon className="size-4" strokeWidth={1.5} />
                  </div>
                </Card>
              </React.Fragment>
            ))}
          </div>

          {/* Input Area */}
          <form className="mt-8" onSubmit={handleSubmit}>
            <div className="relative">
              <Input
                className="pr-24 rounded-xl py-6"
                placeholder="Ask whatever you want..."
                type="text"
                value={input}
                onChange={handleInputChange}
              />
              <div className="absolute inset-y-0 right-0 flex items-center gap-2 pr-3">
                <Button
                  size="icon"
                  className="h-8 w-8 rounded-lg bg-primary text-primary-foreground"
                >
                  <Send className="h-4 w-4" />
                  <span className="sr-only">Send message</span>
                </Button>
              </div>
            </div>
            <div className="mt-2 flex gap-2">
              <Button
                variant="ghost"
                size="sm"
                className="text-muted-foreground"
              >
                <PaperclipIcon className="mr-2 h-4 w-4" />
                Add Attachment
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
