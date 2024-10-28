import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { SignOutButton } from "@clerk/nextjs";
import { Bot, LayoutDashboard, ListTodo, LogOut, User } from "lucide-react";
import Link from "next/link";

const routes = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: <LayoutDashboard className="size-6" />,
  },
  {
    name: "Chatbot",
    href: "/dashboard/chatbot",
    icon: <Bot />,
  },
  {
    name: "Tasks",
    href: "/dashboard/tasks",
    icon: <ListTodo />,
  },
  {
    name: "Settings",
    href: "/dashboard/user-profile",
    icon: <User />,
  },
];

const Sidebar = () => {
  return (
    <nav className="flex flex-col justify-between gap-2 w-full max-w-48">
      <ul className="flex flex-col gap-2">
        {routes.map((e) => (
          <li key={e.name}>
            <Link href={e.href}>
              <Button
                variant="ghost"
                className="w-full justify-start font-normal text-muted-foreground h-auto"
              >
                {e.icon}
                <span>{e.name}</span>
              </Button>
            </Link>
          </li>
        ))}
      </ul>
      <SignOutButton>
        <Button
          variant="ghost"
          className="w-full justify-start font-normal text-muted-foreground h-auto"
        >
          <LogOut/>
          <span>Log out</span>
        </Button>
      </SignOutButton>
    </nav>
  );
};

export default Sidebar;
