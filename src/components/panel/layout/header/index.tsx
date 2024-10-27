import Container from "@/components/Container";
import React from "react";
import Logo from "./Logo";
import Navigator from "./Navigator";
import User from "./User";

const Header = () => {
  return (
    <header className="border-b border-border py-3">
      <Container className="flex justify-between items-center">
        <Logo />
        <Navigator />
        <User />
      </Container>
    </header>
  );
};

export default Header;
