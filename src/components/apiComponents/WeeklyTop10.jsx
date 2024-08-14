import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { CiShare1 } from "react-icons/ci";
import { IoPlay } from "react-icons/io5";


export default function MovieCard() {
  const [movies, setMovies] = useState([]);
  const sliderRef = useRef(null);


  useEffect(() => {            // api call from rapidapi
    const options = {
      method: 'GET',
      url: 'https://imdb188.p.rapidapi.com/api/v1/getWeekTop10',
  headers: {
    'x-rapidapi-key': '08e0d4e2damshd83dab6fb46260cp162640jsnf1e690b6a871',
    'x-rapidapi-host': 'imdb188.p.rapidapi.com'
      }
    };

    axios.request(options)
      .then(response => {
        const fetchedMovies = response.data.data.map(movie => ({
          title: movie.originalTitleText.text,
          image: movie.primaryImage.imageUrl,
          rating: movie.ratingsSummary.aggregateRating
        }));
        setMovies(fetchedMovies);
      })
      .catch(error => {
        console.error(error);
      });
  }, []); 


  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <div className="bg-black py-8 relative">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-white text-2xl font-bold mb-4">Top 10 on IMDb this week</h2>
        <div className="flex overflow-x-scroll space-x-4" ref={sliderRef}>
          {movies.map((movie, index) => (
            <div key={index} className="flex-shrink-0 w-36 bg-gray-800">
              <img
                src={movie.image}
                alt={movie.title}
                className="w-36 h-48 object-cover rounded-md"
              />
              <p className="text-gray-500 text-center">{movie.rating} <span className="text-yellow-400"> ★</span></p>
              <h3 className="text-white hover:underline text-center font-medium text-base mt-2">{movie.title}</h3>
              <button className=" text-blue-600 bg-gray-700 hover:bg-gray-600 text-center text-sm font-medium">Watch now <CiShare1 /></button>
              <button className=" text-white font-medium text-center text-sm">Trailer <IoPlay /></button>
            </div>
          ))}
        </div>
        <button
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
          onClick={scrollLeft}
        >
          {"<"}
        </button>
        <button
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
          onClick={scrollRight}
        >
          {">"}
        </button>
      </div>
    </div>
  );
}
