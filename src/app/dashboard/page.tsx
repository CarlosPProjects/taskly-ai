import React from "react";
import { generatePrompt } from "../actions/chat";

const Dashboard = async() => {

  const response = await generatePrompt();

  console.log(response);

  return (
    <main>
      <p>Hello World</p>
    </main>
  );
};

export default Dashboard;
