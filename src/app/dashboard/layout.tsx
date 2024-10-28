import Container from "@/components/Container";
import Sidebar from "@/components/dashboard/Sidebar";
import Header from "@/components/dashboard/layout/header";
import React, { FC } from "react";

interface Props {
  children: React.ReactNode;
}

const DashboardLayout: FC<Props> = ({ children }) => {
  return (
    <section className="flex flex-col min-h-screen">
      <Header />
      <Container className="flex flex-1 h-full py-6 lg:py-16 gap-8">
        <div className="hidden lg:flex w-full max-w-60">
          <Sidebar />
        </div>
        <div className="flex justify-center flex-1">{children}</div>
      </Container>
    </section>
  );
};

export default DashboardLayout;
