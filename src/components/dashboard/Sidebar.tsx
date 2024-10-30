"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SignOutButton } from "@clerk/nextjs";
import {
  Bot,
  LayoutDashboard,
  ListTodo,
  LogOut,
  LucideIcon,
  User,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";

type Route = {
  name: string;
  href: string;
  icon: LucideIcon;
};

const routes: Route[] = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Chatbot",
    href: "/dashboard/chatbot",
    icon: Bot,
  },
  {
    name: "Tasks",
    href: "/dashboard/tasks",
    icon: ListTodo,
  },
  {
    name: "Settings",
    href: "/dashboard/user-profile",
    icon: User,
  },
];

interface Props {
  closeSheet?: () => void;
}

const Sidebar: FC<Props> = ({ closeSheet }) => {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col justify-between gap-2 w-full lg:w-fit xl:w-full pr-8 lg:border-r border-border">
      <ul className="flex flex-col gap-2">
        {routes.map((e) => (
          <li key={e.name}>
            <Link href={e.href} onClick={closeSheet}>
              <Button
                variant="ghost"
                className="w-full lg:w-fit xl:w-full justify-start font-medium text-muted-foreground h-auto text-base py-3"
              >
                <e.icon
                  className={cn(
                    "!size-5",
                    pathname === e.href && "text-primary"
                  )}
                />
                <span
                  className={cn(
                    "block lg:hidden xl:block",
                    pathname === e.href && "text-primary"
                  )}
                >
                  {e.name}
                </span>
              </Button>
            </Link>
          </li>
        ))}
      </ul>
      <SignOutButton>
        <Button
          variant="ghost"
          className="w-full justify-start font-normal text-muted-foreground h-auto text-base py-3"
        >
          <LogOut />
          <span className="block lg:hidden xl:block">Log out</span>
        </Button>
      </SignOutButton>
    </nav>
  );
};

export default Sidebar;
