'use client'

import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignLeft} from "lucide-react";
import Logo from "./Logo";
import Sidebar from "../../Sidebar";

const Menu = () => {

  const [isOpen, setIsOpen] = useState(false); 

  const closeSheet = () => {
    setIsOpen(false);
  }

  return (
    <>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <AlignLeft className="size-6 cursor-pointer text-muted-foreground" />
        </SheetTrigger>
        <SheetContent className="border-border" side="left">
          <SheetHeader>
            <SheetTitle className="py-12 flex justify-center">
              <Logo />
            </SheetTitle>
          </SheetHeader>
          <Sidebar closeSheet={closeSheet} />
        </SheetContent>
      </Sheet>
    </>
  );
};

export default Menu;
