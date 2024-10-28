import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignLeft} from "lucide-react";
import Logo from "./Logo";
import Sidebar from "../../Sidebar";

const Menu = () => {
  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <AlignLeft className="size-6 cursor-pointer text-muted-foreground" />
        </SheetTrigger>
        <SheetContent className="border-border" side="left">
          <SheetHeader>
            <SheetTitle className="py-12 flex justify-center">
              <Logo />
            </SheetTitle>
          </SheetHeader>
          <Sidebar />
        </SheetContent>
      </Sheet>
    </>
  );
};

export default Menu;
