"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useClientContext } from "@clerk/shared/react/index";
import { useChat } from "ai/react";
import { PaperclipIcon, RefreshCw, Send } from "lucide-react";
import React from "react";

const Chatbot = () => {
  const user = useClientContext();
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div className="flex min-h-screen bg-background">
      <div className="flex-1 px-4 py-8 md:px-8">
        <div className="mx-auto max-w-2xl">
          <div className="space-y-2 text-center">
            <h1 className="text-4xl font-semibold">
              Hi there,{" "}
              <span className="bg-gradient-to-r from-foreground to-red-500 bg-clip-text text-transparent">
                John
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
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <Card className="p-4 hover:bg-muted/50">
              <div className="flex items-start gap-4">
                <div className="rounded-full border border-border p-2">👤</div>
                <div className="space-y-1">
                  <p className="font-medium">
                    Write a to-do list for a personal project or task
                  </p>
                </div>
              </div>
            </Card>
            <Card className="p-4 hover:bg-muted/50">
              <div className="flex items-start gap-4">
                <div className="rounded-full border border-border p-2">✉️</div>
                <div className="space-y-1">
                  <p className="font-medium">
                    Generate an email to reply to a job offer
                  </p>
                </div>
              </div>
            </Card>
            <Card className="p-4 hover:bg-muted/50">
              <div className="flex items-start gap-4">
                <div className="rounded-full border border-border p-2">📝</div>
                <div className="space-y-1">
                  <p className="font-medium ">
                    Summarise this article or text for me in one paragraph
                  </p>
                </div>
              </div>
            </Card>
            <Card className="p-4 hover:bg-muted/50">
              <div className="flex items-start gap-4">
                <div className="rounded-full border border-border p-2">🤖</div>
                <div className="space-y-1">
                  <p className="font-medium">
                    How does AI work in a technical capacity
                  </p>
                </div>
              </div>
            </Card>
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
                <span className="text-sm text-muted-foreground">0/1000</span>
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
