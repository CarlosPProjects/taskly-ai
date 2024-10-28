import Container from "@/components/Container";
import Sidebar from "@/components/panel/dashboard/Sidebar";
import Header from "@/components/panel/layout/header";
import React, { FC } from "react";

interface Props {
  children: React.ReactNode;
}

const DashboardLayout: FC<Props> = ({ children }) => {
  return (
    <section className="flex flex-col min-h-screen">
      <Header />
      <Container className="flex flex-col lg:flex-row flex-1 py-8 md:py-16 lg:gap-10 xl:gap-28">
        <Sidebar />
        <div className="flex flex-1 justify-center w-full mx-auto">{children}</div>
      </Container>
    </section>
  );
};

export default DashboardLayout;
