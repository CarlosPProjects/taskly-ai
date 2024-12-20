import Container from "@/components/Container";
import React from "react";
import Logo from "./Logo";
import User from "./User";
import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import Menu from "./Menu";

const Header = () => {
  return (
    <header className="border-b border-border py-3">
      <Container className="flex flex-row justify-between items-center">
        <div className="block lg:hidden">
        <Menu />
        </div>
        <div className="hidden lg:block">
          <Logo />
        </div>
        <div className="flex items-center gap-2">
          <ModeToggle />
          <Button variant="ghost" size="icon" className="border border-border">
            <Bell className="text-muted-foreground" />
          </Button>
          <User />
        </div>
      </Container>
    </header>
  );
};

export default Header;
