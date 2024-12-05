import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
      <h1 className="text-4xl font-bold mb-8">Welcome to the Chat App</h1>
      <Link
        to="/chat"
        className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-600 transition"
      >
        Go to Chat
      </Link>
    </div>
  );
};

export default HomePage;
