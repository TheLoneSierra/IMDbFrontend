import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccessMessage('');

    try {
      const response = await axios.post('https://imdb-backend-two.vercel.app/auth/login', { email, password });
      const { token, name } = response.data;

      // Store JWT and user info in localStorage
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify({ name, email }));

      setSuccessMessage('User logged in successfully!');
      setTimeout(() => navigate('/'), 2000);
    } catch (error) {
      setError('Invalid credentials. Please try again.');
    }
  };

  const handleNavigate = () => {
    navigate('/signup');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-2">
  <img className="h-8 w-14 mb-4" src="https://th.bing.com/th/id/OIP.ltajFjUQtHvaTQFrRl-zgAAAAA?rs=1&pid=ImgDetMain" alt="IMDb Logo" />
  <div className="bg-white p-3 rounded-lg border border-gray-400 w-full max-w-xs sm:max-w-sm">
    <h2 className="text-2xl font-semibold mb-4 text-start">Sign In</h2>
    {error && <p className="text-red-500 mb-3 text-sm">{error}</p>}
    {successMessage && <p className="text-green-500 mb-3 text-sm">{successMessage}</p>}
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="block text-black mb-1 text-sm">Email</label>
        <input
          type="email"
          id="email"
          className="w-full px-2 py-1.5 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-200 text-sm"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label className="block text-black mb-1 text-sm">Password</label>
        <input
          type="password"
          placeholder="at least 4 characters"
          id="password"
          className="w-full px-2 py-1.5 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-200 text-sm"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="w-full bg-yellow-400 hover:bg-yellow-500 text-black py-1.5 rounded-lg font-semibold text-sm"
      >
        Sign In
      </button>
      <p className="mt-5 text-black text-sm text-center">New to IMDb? <a onClick={handleNavigate} className="text-blue-600 cursor-pointer">Create your IMDb account</a></p>
    </form>
  </div>
  <div className="flex flex-col items-center justify-center mt-5">
    <ul className="flex space-x-5 text-xs">
      <li className="text-blue-700 hover:text-red-500 hover:underline cursor-pointer">Help</li>
      <li className="text-blue-700 hover:text-red-500 hover:underline cursor-pointer">Conditions of Use</li>
      <li className="text-blue-700 hover:text-red-500 hover:underline cursor-pointer">Privacy Notice</li>
    </ul>
    <p className="text-xs mt-2 text-center">© 1996-2024, Amazon.com, Inc. or its affiliates</p>
  </div>
</div>
  )
};

export default Login;