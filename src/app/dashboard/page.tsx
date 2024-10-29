import React from "react";
import { generatePrompt } from "../actions/chat";

const Dashboard = async() => {

  const response = await generatePrompt();

  console.log(response.content);

  if(response.content) {
    return (
      <div>
        <p>{response.content}</p>
      </div>
    )
  }
};

export default Dashboard;
