import React from 'react';
import { FaAmazon } from "react-icons/fa";
import { FaImdb } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { useNavigate } from 'react-router-dom';

const SignInModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const navigate = useNavigate();

  const handleNavigate = () =>{
    navigate('/signup')
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 ">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-4xl max-h-5xl w-full">
        <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Sign In</h2>

          <button onClick={onClose} className="text-gray-500 hover:text-gray-800 text-2xl">
          <RxCross2 />
          </button>
        </div>
        <div className=' flex flex-row'>


        <div className="space-y-4 w-[40%]">
          
          <button className="w-full text-gray-800 font-bold py-2 justify-center flex items-center rounded border border-gray-500">
         <span className='mr-7 mb-0'><FaImdb /></span>
            Sign in with IMDb
          </button>
          <button className="w-full text-gray-800 font-bold py-2 justify-center flex items-center rounded border border-gray-500">
          <span className='mr-7 mt-2'><FaAmazon /></span>
            Sign in with Amazon
          </button>
          <button className="w-full text-gray-800 font-bold py-2 justify-center flex items-center rounded border border-gray-500">
          <span className='mr-8 mt-2'><FaGoogle /></span>
            Sign in with Google
          </button>
          <button className="w-full text-gray-800 font-bold py-2 justify-center flex items-center rounded border border-gray-500">
          <span className='mr-8 mt-2'><FaApple/></span>
            Sign in with Apple
          </button>
          <div className="mt-4 text-center">
          <button className="text-blue-500 font-medium text-center ml-20 flex items-center">
  Show more options
  <MdKeyboardArrowDown className="ml-1" />
</button>        </div>
        <div className=" text-center">
          <span className="text-gray-700">-----------or-----------</span>

          <a onClick={handleNavigate} className="block w-full cursor-pointer bg-yellow-600 text-black py-2 mt-2 rounded">
            Create a New Account
          </a>
          <p className=' text-gray-600 text-xs font-thin mt-6'>By signing in, you agree to IMDb's Conditions of Use and Privacy Policy.</p>
        </div>
        </div>
        <div className='w-[60%] ml-24 text-black'>
<p className=' text-xl font-bold mb-4'>Benefits of your free IMDb account</p>
<p className='text-lg font-semibold mb-0 pb-0'>Personalized Recommendations</p>
<p className='text-sm font-normal mt-0 pt-0'>Discover shows you'll love.</p>
<p className=' text-lg font-semibold mb-0 pb-0 mt-2'>Your Watchlist</p>
<p className='text-sm font-normal mt-0 pt-0'>Track everything you want to watch and receive e-mail when movies open in theaters.</p>
<p className='text-lg font-semibold mb-0 pb-0 mt-2'>Your Ratings</p>
<p className='text-sm font-normal mt-0 pt-0'>Rate and remember everything you've seen.</p>

<p className='text-lg font-semibold mb-0 pb-0 mt-2'>Contribute to IMDb</p>
<p className='text-sm font-normal mt-0 pt-0'>Add data that will be seen by millions of people and get cool badges.</p>
        </div>
        </div>
        
      </div>
    </div>
  );
};

export default SignInModal;