import React, { useState, useContext } from 'react';
import { TiStarFullOutline } from "react-icons/ti";
import { FaPlay, FaChevronRight, FaChevronLeft } from "react-icons/fa6";
import { WatchlistContext } from './WatchlistContext';

export default function BookmarkedMovies() {
  const { watchlist } = useContext(WatchlistContext);  //props to this child component
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < watchlist.length - 6 ? prevIndex + 1 : prevIndex
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : prevIndex
    );
  };

  return (
    <div className="relative">
      <p className='text-yellow-400 text-4xl mt-6 mb-1 font-bold p-4 mx-20'>Your Watchlist</p>

      <div className="relative flex items-center mx-20">
        <FaChevronLeft
          className={`text-white text-2xl absolute left-0 z-10 cursor-pointer ${currentIndex === 0 ? "hidden" : "block"
            }`}
          onClick={prevSlide}
        />

        <div className="overflow-hidden w-full">
          <div
            className="flex"
            style={{
              transform: `translateX(-${currentIndex * (100 / 6)}%)`,
              transition: "transform 0.3s ease-in-out",
            }}
          >
            {watchlist.length > 0 ? (
              watchlist.map((movie, index) => (
                <div key={index} className="min-w-[14.66%] px-2">
                  <div className="bg-gray-900 text-white rounded-lg relative shadow-md">
                    <img
                      src={movie.image}
                      alt={movie.title}
                      className="w-full h-60 object-cover rounded-t-lg"
                    />

                    <div className="p-4">
                      <div className="flex items-center mb-2">
                        <span className="text-yellow-500 text-lg mr-1">
                          <TiStarFullOutline />
                        </span>
                        <span className="text-base text-gray-500 font-semibold">
                          {movie.rating}
                        </span>
                      </div>
                      <h3 className="text-md hover:underline font-bold mb-4">
                        {movie.title}
                      </h3>
                      <div className="space-y-2">
                        <button className="w-full bg-gray-800 font-bold hover:bg-gray-700 text-blue-600 py-2 rounded flex justify-center items-center text-sm">
                          Watch options
                        </button>
                        <button className="w-full py-1 bg-gray-900 font-semibold flex justify-center items-center rounded text-sm">
                          Trailer <span className='mx-2 mt-1'><FaPlay /></span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-white text-xl mx-20">No movies or TV shows in your watchlist.</p>
            )}
          </div>
        </div>

        <FaChevronRight
          className={`text-white text-2xl absolute right-0 z-10 cursor-pointer ${currentIndex === watchlist.length - 6 ? "hidden" : "block"
            }`}
          onClick={nextSlide}
        />
      </div>
    </div>
  );
}
