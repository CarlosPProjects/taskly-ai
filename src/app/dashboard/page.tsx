'use client'

import { useChat } from 'ai/react';

const Dashboard = () => {

  const { messages, input, handleSubmit, handleInputChange, isLoading } =
    useChat();

  return (
    <div>
      {messages.map(message => (
        <div key={message.id}>
          <div>{message.role}</div>
          <div>{message.content}</div>
        </div>
      ))}

      <form onSubmit={handleSubmit}>
        <input
          value={input}
          placeholder="Send a message..."
          onChange={handleInputChange}
          disabled={isLoading}
        />
      </form>
    </div>
  );
};

export default Dashboard;
