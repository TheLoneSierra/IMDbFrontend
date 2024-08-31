import React from 'react';
import { FaAmazon, FaImdb, FaGoogle, FaApple } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { useNavigate } from 'react-router-dom';

const SignInModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/signup');
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-2">
      <div className="bg-white rounded-lg shadow-lg p-4 w-full max-w-xs sm:max-w-md">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-lg font-semibold">Sign In</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-800 text-xl">
            <RxCross2 />
          </button>
        </div>
        <div className="flex flex-col space-y-3">
          <button className="w-full text-gray-800 font-bold py-1.5 flex items-center rounded border border-gray-500">
            <FaImdb className="mr-2" />
            IMDb
          </button>
          <button className="w-full text-gray-800 font-bold py-1.5 flex items-center rounded border border-gray-500">
            <FaAmazon className="mr-2" />
            Amazon
          </button>
          <button className="w-full text-gray-800 font-bold py-1.5 flex items-center rounded border border-gray-500">
            <FaGoogle className="mr-2" />
            Google
          </button>
          <button className="w-full text-gray-800 font-bold py-1.5 flex items-center rounded border border-gray-500">
            <FaApple className="mr-2" />
            Apple
          </button>
          <button className="text-blue-500 font-medium flex items-center justify-center">
            Show more
            <MdKeyboardArrowDown className="ml-1" />
          </button>
          <div className="text-center">
            <span className="text-gray-700">-----------or-----------</span>
            <a onClick={handleNavigate} className="block w-full cursor-pointer bg-yellow-600 text-black py-2 mt-2 rounded text-sm">
              Create a New Account
            </a>
            <p className="text-gray-600 text-xs font-thin mt-4 leading-tight">
              By signing in, you agree to IMDb's Conditions of Use and Privacy Policy.
            </p>
          </div>
        </div>
        <div className="mt-4 text-black text-xs leading-tight">
          <p className="font-bold mb-2">Benefits of your free IMDb account</p>
          <p className="font-semibold">Personalized Recommendations</p>
          <p className="font-normal mb-2">Discover shows you'll love.</p>
          <p className="font-semibold">Your Watchlist</p>
          <p className="font-normal mb-2">Track everything you want to watch.</p>
          <p className="font-semibold">Your Ratings</p>
          <p className="font-normal mb-2">Rate and remember everything you've seen.</p>
          <p className="font-semibold">Contribute to IMDb</p>
          <p className="font-normal">Add data that will be seen by millions of people.</p>
        </div>
      </div>
    </div>
  );
};

export default SignInModal;
