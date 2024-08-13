import React from "react";
import { CiBookmarkPlus } from "react-icons/ci";
import { IoIosArrowForward } from "react-icons/io";

export default function Watchlist() {  //watchlist section

    return (

        <div className="bg-black text-white p-4 mx-20">

            <div className=" flex flex-row space-x-4">
                <h2 className=" font-bold text-2xl my-4">From your watchlist</h2>
                <span className=" text-2xl font-bold my-5"><IoIosArrowForward /></span>
            </div>
            <div className=" flex justify-center flex-col items-center">
                <span className=" text-5xl text-gray-600 my-2">< CiBookmarkPlus /></span>
                <p className=" font-bold text-base my-1">Sign in to access your Watchlist</p>
                <p className=" font-medium">Save shows and movies to keep track of what you want to watch.</p>
                <button className=" w-48 bg-gray-900 text-blue-700 hover:bg-gray-800 my-6 rounded-md font-semibold p-2 ">Sign in to IMDb</button>
            </div>
        </div>
    )
}