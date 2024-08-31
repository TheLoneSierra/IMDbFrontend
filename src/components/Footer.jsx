import React from "react";
import { FaTiktok } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center">
          <a
            href="#"
            className="bg-yellow-400 text-black py-2 px-4 rounded-lg hover:bg-yellow-500"
          >
            Sign in for more access
          </a>
        </div>

        <div className="flex flex-col md:flex-row justify-center md:space-x-4 mt-4">
          <div className="bg-black border border-gray-900 text-white font-semibold text-xl p-4 rounded-lg flex flex-col items-center md:w-1/2 lg:w-96 h-24 md:h-auto mb-4 md:mb-0">
            <p>Follow IMDb on social</p>
            <div className="flex space-x-4 mt-3 md:space-x-6">
              <a href="https://in.tiktok.com/"><FaTiktok /></a>
              <a href="https://www.instagram.com"><FaInstagram /></a>
              <a href="https://x.com/"><FaXTwitter /></a>
              <a href="https://www.facebook.com/"><FaFacebookF /></a>
              <a href="https://www.youtube.com"><FaYoutube /></a>
            </div>
          </div>
          <div className="bg-black border border-gray-900 text-white font-semibold text-xl p-4 rounded-lg flex flex-col items-center md:w-1/2 lg:w-96 h-24 md:h-auto">
            <p>Get the IMDb app</p>
            <p className="text-gray-500 font-semibold">for Android and IOS</p>
          </div>
        </div>

        <div className="mt-4 border-t border-gray-700 pt-4">
          <ul className="flex flex-wrap justify-center space-x-4">
            <li><a href="#" className="text-gray-400 hover:text-white">Help</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Site Index</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">IMDbPro</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Box Office Mojo</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">License IMDb Data</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Press Room</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Advertising</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Jobs</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Conditions of Use</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Your Ads Privacy Choices</a></li>
          </ul>
        </div>

        <div className="mt-4 text-center text-gray-400">
          <p>
            An <img className="inline h-5 mt-1 w-10" src="../src/assets/amazonlogo.png" alt="Amazon Logo" /> company
          </p>
          <p className="mb-0 p-0">© 1990-2024 by IMDb.com, Inc.</p>
        </div>
      </div>
    </footer>
  );
}