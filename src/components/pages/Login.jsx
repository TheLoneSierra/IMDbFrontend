import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../firebase';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  const navigate = useNavigate();  //for navigating

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);  // error state
    setSuccessMessage('');  // success message state

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setSuccessMessage('User logged in successfully!');
      
      // Storing user info in localStorage if needed
      localStorage.setItem("user", JSON.stringify({
        fullName: userCredential.user.displayName || "Unknown", 
        email: userCredential.user.email
      }));

      setTimeout(() => navigate('/'), 2000);  // Redirect after 2 seconds
    } catch (error) {
      setError('Invalid credentials. Please try again.');
    }
  };

  const handleNavigate = () => {
    navigate('/signup');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <img className="h-10 w-16 mb-6" src='../src/assets/IMDbLogo.png' alt="IMDb Logo"/>      
      <div className="bg-white p-4 rounded-lg border border-gray-400 w-full max-w-md">
        <h2 className="text-3xl font-semibold mb-5 text-start">Sign In</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        {successMessage && <p className="text-green-500 mb-4">{successMessage}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="block text-black mb-2" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="w-full px-2 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-black mb-2" htmlFor="password">Password</label>
            <input
              type="password"
              placeholder='at least 8 characters'
              id="password"
              className="w-full px-2 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-black py-1 rounded-lg font-semibold"
          >
            Sign In
          </button>
          <p className=' mt-7 text-black font-light'>New to IMDb?  <a onClick={handleNavigate} className=' text-blue-600 font-light cursor-pointer'>Create your IMDb account</a></p>
        </form>
      </div>
      <div className="flex flex-col items-center justify-center mt-7">
        <ul className="flex space-x-10 text-sm">
          <li className="text-blue-700 hover:text-red-500 hover:underline cursor-pointer">Help</li>
          <li className="text-blue-700 hover:text-red-500 hover:underline cursor-pointer">Condition of use</li>
          <li className="text-blue-700 hover:text-red-500 hover:underline cursor-pointer">Privacy Notice</li>
        </ul>
        <p className=' text-sm mt-3'>© 1996-2024, Amazon.com, Inc. or its affiliates</p>
      </div>
    </div>
  );
};

export default Login;
