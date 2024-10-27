"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Bot, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const routes = {
  personal: {
    name: "Profile",
    href: "/dashboard/user-profile",
    icon: <User />,
  },
  workspace: [
    {
      name: "Chatbot",
      href: "/dashboard/workspace/chatbot",
      icon: <Bot />,
    },
  ],
};

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <nav className="w-full max-w-48">
      {Object.entries(routes).map(([sectionName, sectionContent]) => (
        <div key={sectionName}>
          <h3 className="text-lg font-semibold capitalize mb-2">
            {sectionName}
          </h3>
          <ul>
            {Array.isArray(sectionContent) ? (
              sectionContent.map((item) => (
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
              ))
            ) : (
              <li>
                <Link href={sectionContent.href}>
                  <Button
                    variant="ghost"
                    className={cn(
                      "w-full justify-start",
                      pathname === sectionContent.href
                        ? "bg-accent text-accent-foreground"
                        : "text-muted-foreground"
                    )}
                  >
                    {sectionContent.icon}
                    <span className="ml-2">{sectionContent.name}</span>
                  </Button>
                </Link>
              </li>
            )}
          </ul>
        </div>
      ))}
    </nav>
  );
};

export default Sidebar;
