import Container from "@/components/Container";
import Header from "@/components/panel/layout/header";
import React from "react";

const Dashboard = () => {
  return (
    <section className="flex flex-col min-h-screen">
      <Header />
      <Container className="flex flex-1 bg-red-50">
        <p>Hello world</p>
      </Container>
    </section>
  );
};

export default Dashboard;
