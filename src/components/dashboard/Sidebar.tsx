import { Button } from "@/components/ui/button";
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
    <nav className="flex flex-col justify-between gap-2 w-full lg:w-fit xl:w-full pr-8 lg:border-r border-border">
      <ul className="flex flex-col gap-2">
        {routes.map((e) => (
          <li key={e.name}>
            <Link href={e.href}>
              <Button
                variant="ghost"
                className="w-full lg:w-fit xl:w-full justify-start font-normal text-muted-foreground h-auto text-base py-3"
              >
                {e.icon}
                <span className="block lg:hidden xl:block">{e.name}</span>
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
