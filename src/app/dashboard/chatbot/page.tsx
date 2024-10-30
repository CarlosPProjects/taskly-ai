"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useUser } from "@clerk/shared/react/index";
import { useChat } from "ai/react";
import {
  PaperclipIcon,
  Send,
  LucideIcon,
  TrendingUp,
  Clock,
  List,
  CheckCircle,
  Bot,
} from "lucide-react";

import React from "react";
import Markdown from "react-markdown";

type SuggestCard = {
  id: number;
  icon: LucideIcon;
  description: string;
};

const suggestCards: SuggestCard[] = [
  {
    id: 1,
    icon: TrendingUp,
    description: "Suggest ways to optimize tasks for better efficiency",
  },
  {
    id: 2,
    icon: Clock,
    description: "Provide tips on how to manage project time effectively",
  },
  {
    id: 3,
    icon: List,
    description: "Summarize best practices for prioritizing tasks",
  },
  {
    id: 4,
    icon: CheckCircle,
    description: "How can I improve task flow and reduce time waste?",
  },
];

const Chatbot = () => {
  const { user } = useUser();
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  const [chatStarted, setChatStarted] = React.useState(false);
  const [showContent, setShowContent] = React.useState(true);

  const messagesEndRef = React.useRef(null);

  const scrollToBottom = () => {
    (messagesEndRef.current as unknown as HTMLDivElement)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  React.useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const ref = React.useRef<HTMLFormElement>(null);

  React.useEffect(() => {
    if (ref.current?.submit) {
      setChatStarted(true);
    }
  }, [chatStarted]);

  const handleSubmitWithHide = (e: React.FormEvent<HTMLFormElement>) => {
    setShowContent(false);
    handleSubmit(e);
  };

  const handleCardClick = (description: string) => {
    handleInputChange({
      target: { value: description },
    } as React.ChangeEvent<HTMLInputElement>);
    setTimeout(() => {
      if (ref.current) {
        ref.current.dispatchEvent(
          new Event("submit", { cancelable: true, bubbles: true })
        );
      }
    }, 0);
  };

  return (
    <div className="flex w-full bg-background">
      <div className="flex-1">
        <div className="flex flex-col justify-between max-h-[700px] h-full mx-auto max-w-3xl">
          {showContent ? (
            <div>
              <div className="space-y-2 text-start">
                <h1 className="text-4xl font-semibold">
                  Hi there,{" "}
                  <span className="bg-gradient-to-r from-foreground to-red-500 bg-clip-text text-transparent">
                    {user?.firstName}
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
                  Use one of the most common prompts below or use your own to
                  begin
                </p>
              </div>
              {/* Suggestion Cards */}
              <div className="mt-8 grid gap-2 sm:grid-cols-2 md:grid-cols-4">
                {suggestCards.map((e) => (
                  <React.Fragment key={e.id}>
                    <Card
                      className="p-4 hover:bg-muted/50 cursor-pointer"
                      onClick={() => handleCardClick(e.description)}
                    >
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
            </div>
          ) : (
            <div className="mt-8 flex flex-col gap-4 overflow-y-scroll __hideScrollBar">
              {messages.map((e) => (
                <div
                  key={e.id}
                  className={cn(
                    "flex items-center gap-3",
                    e.role === "user" && "flex-row-reverse"
                  )}
                >
                  {e.role === "assistant" && (
                    <div className="rounded-full border border-border p-2">
                      <Bot className="size-5" />
                    </div>
                  )}
                  <div className="rounded-md bg-muted py-3 px-6 max-w-xl">
                    <Markdown>{e.content}</Markdown>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
          )}

          {/* Input Area */}
          <form className="mt-8" onSubmit={handleSubmitWithHide} ref={ref}>
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
                  className="h-8 w-8 rounded-md bg-primary text-primary-foreground"
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
