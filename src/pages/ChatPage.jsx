import React from 'react';
import ChatRoom from '../components/ChatRoom.';
const ChatPage = () => {
  return (
    <div className="h-screen bg-gray-100">
      <header className="bg-blue-500 text-white p-4 shadow">
        <h1 className="text-xl">Chat Room</h1>
      </header>
      <ChatRoom />
    </div>
  );
};

export default ChatPage;
