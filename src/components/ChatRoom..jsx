import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../features/chatSlice';

const ChatRoom = () => {
  const [text, setText] = useState('');
  const messages = useSelector((state) => state.chat.messages);
  const dispatch = useDispatch();

  const sendMessage = () => {
    if (text.trim()) {
      dispatch(addMessage({ text, sender: 'User', timestamp: new Date().toLocaleTimeString() }));
      setText('');
    }
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Messages Section */}
      <div className="flex-grow bg-gray-100 p-4 overflow-y-auto">
        {messages.map((msg, index) => (
          <div key={index} className="mb-4">
            <p className="font-bold">{msg.sender}</p>
            <p className="text-gray-700">{msg.text}</p>
            <p className="text-sm text-gray-500">{msg.timestamp}</p>
          </div>
        ))}
      </div>

      {/* Input Section */}
      <div className="flex items-center p-4 bg-gray-200">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type a message..."
          className="flex-grow px-4 py-2 rounded-lg border border-gray-300 focus:outline-none"
        />
        <button
          onClick={sendMessage}
          className="ml-4 bg-blue-500 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-600 transition"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatRoom;
