import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Navigator from "./Navigator";
import { Button } from "@/components/ui/button";
import { MenuIcon } from "lucide-react";

const Menu = () => {
  return (
    <>
      <div className="hidden md:block">
        <Navigator />
      </div>
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" className="md:hidden" variant="secondary">
            <MenuIcon className="size-5" />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Are you absolutely sure?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>
          <div className="mt-12">
            <Navigator />
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default Menu;
