"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Bot, ListTodo, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const routes = {
  personal: [
    {
      name: "Profile",
      href: "/dashboard/user-profile",
      icon: <User />,
    },
  ],
  workspace: [
    {
      name: "Chatbot",
      href: "/dashboard/workspace/chatbot",
      icon: <Bot />,
    },
    {
      name: "Tasks",
      href: "/dashboard/workspace/tasks",
      icon: <ListTodo />,
    }
  ],
};

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <nav className="w-full max-w-48">
      {Object.entries(routes).map(([sectionName, sectionContent]) => (
        <div key={sectionName}>
          <h3 className="px-3 py-2 font-medium uppercase text-xs text-[#7C8087]">
            {sectionName}
          </h3>
          <ul>
            {sectionContent.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>
                  <Button
                    variant="ghost"
                    className={cn(
                      "w-full justify-start",
                      pathname === item.href
                        ? "bg-accent text-accent-foreground"
                        : "text-muted-foreground"
                    )}
                  >
                    {item.icon}
                    <span className="ml-2">{item.name}</span>
                  </Button>
                </Link>
              </li>
            ))}
          </ul>
          <Separator className="my-2" />
        </div>
      ))}
    </nav>
  );
};

export default Sidebar;
