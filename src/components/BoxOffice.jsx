import React from "react";
import { IoTicketSharp } from "react-icons/io5";
import { CiBookmarkPlus } from "react-icons/ci";
import { IoIosArrowForward } from "react-icons/io";


export default function TopBoxOffice() {
    const movies = [                                                 //some data as an array of objects
        { rank: 1, title: "Deadpool & Wolverine", earnings: "$97M" },
        { rank: 2, title: "Twisters", earnings: "$23M" },
        { rank: 3, title: "Trap", earnings: "$15M" },
        { rank: 4, title: "Despicable Me 4", earnings: "$11M" },
        { rank: 5, title: "Inside Out 2", earnings: "$6.8M" },
        { rank: 6, title: "Harold and the Purple Crayon", earnings: "$6M" },
    ];

    return (
        <div className="bg-black text-white p-4 mx-20">
            <div className="flex justify-between items-center mb-4">
                <div className=" flex flex-col">
                    <div className=" flex flex-row space-x-4">
                        <h2 className=" font-semibold text-3xl">Top box office (US) </h2>
                        <span className=" text-3xl font-semibold mt-2"><IoIosArrowForward /></span>

                    </div>

                    <p className="text-lg my-3 text-gray-500">Weekend of August 2-4</p>
                </div>

            </div>
            <div className="grid grid-cols-2 gap-4">
                <ul className="space-y-2">
                    {movies.slice(0, 3).map((movie, index) => (    //sliced movies so that 1-3 sequence movies show in a col and other 3 ie 4-6 sequence movies in another col
                        <li
                            key={index}
                            className="flex justify-between items-center bg-gray-950 p-3 rounded"
                        >
                            <div className="flex items-center">
                                <span className="text-xl font-bold w-8">
                                    {movie.rank}</span>
                                <div className="ml-4">
                                    <div className=" flex space-x-2 flex-row">
                                        <button className=" mt-4 text-4xl text-blue-700"><CiBookmarkPlus /></button>
                                        <p className="text-lg mt-3">{movie.title}</p>
                                    </div>
                                    <p className="text-sm text-gray-400 mt-1 ml-11 ">{movie.earnings}</p>
                                </div>
                            </div>
                            <div className="text-blue-500 text-lg">
                                < IoTicketSharp />

                            </div>
                        </li>
                    ))}
                </ul>
                <ul className="space-y-2">
                    {movies.slice(3, 6).map((movie, index) => (
                        <li
                            key={index}
                            className="flex justify-between items-center bg-gray-950 p-3 rounded"
                        >
                            <div className="flex items-center">
                                <span className="text-xl font-bold w-8">
                                    {movie.rank}</span>
                                <div className="ml-4">
                                    <div className=" flex space-x-2 flex-row">
                                        <button className=" mt-4 text-4xl text-blue-700"><CiBookmarkPlus /></button>
                                        <p className="text-lg mt-3">{movie.title}</p>
                                    </div>
                                    <p className="text-sm text-gray-400 mt-1 ml-11 ">{movie.earnings}</p>
                                </div>
                            </div>
                            <div className="text-blue-500 text-lg">
                                < IoTicketSharp />
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};