"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const routes = [
  {
    name: "Dashboard",
    href: "/dashboard",
  },
  {
    name: "Projects",
    href: "/projects",
  },
  {
    name: "Tasks",
    href: "/tasks",
  },
];

const Navigator = () => {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <nav className="">
      <ul className="flex flex-col md:flex-row gap-2">
        {routes.map((e) => (
          <li key={e.name}>
            <Link href={e.href}>
              <Button
                variant="ghost"
                className={cn(
                  "py-[10px] h-auto text-muted-foreground w-full",
                  isActive(e.href) &&
                    "font-semibold bg-accent text-accent-foreground"
                )}
              >
                {e.name}
              </Button>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigator;
