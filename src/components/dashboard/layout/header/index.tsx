import Container from "@/components/Container";
import React from "react";
import Logo from "./Logo";
import User from "./User";

const Header = () => {
  return (
    <header className="border-b border-border py-3">
      <Container className="flex flex-row-reverse md:flex-row justify-between items-center">
        <div className="hidden md:block">
          <Logo />
        </div>
        <User />
      </Container>
    </header>
  );
};

export default Header;
