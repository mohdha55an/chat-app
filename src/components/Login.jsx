import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../features/authSlice';

const Login = () => {
  const dispatch = useDispatch();

  const handleLogin = () => {
    const user = { username: 'JohnDoe', id: 1 };
    dispatch(login(user));
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Welcome to Chat App</h1>
      <button
        onClick={handleLogin}
        className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-600 transition"
      >
        Login
      </button>
    </div>
  );
};

export default Login;
