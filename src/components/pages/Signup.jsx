import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import SignupForm from './auth/SignupForm';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });
  const [error, setError] = useState(null);

  const handleSubmit = async () => {
    setError(null);
    try {
      await axios.post('https://imdb-backend-two.vercel.app/auth/signup', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true // Include credentials in the request
      });
      navigate('/login');
    } catch (error) {
      console.error(error);
      setError("Failed to create an account. Please try again.");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNavigate = () => {
    navigate('/login');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-2">
  <img className="h-8 w-14 mb-4" src='https://th.bing.com/th/id/OIP.ltajFjUQtHvaTQFrRl-zgAAAAA?rs=1&pid=ImgDetMain' alt="IMDb Logo" />
  <div className="bg-white p-4 rounded-lg border border-gray-400 w-full max-w-xs sm:max-w-sm">
    <h2 className="text-xl font-bold mb-4 text-center">Create Account</h2>
    {error && <p className="text-red-500 mb-3 text-sm">{error}</p>}
    <SignupForm
      formData={formData}
      handleInputChange={handleInputChange}
      handleSubmit={handleSubmit}
      handleNavigate={handleNavigate}
    />
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

export default Signup;