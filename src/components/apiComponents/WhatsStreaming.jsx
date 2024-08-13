import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { CiShare1 } from "react-icons/ci";
import { IoPlay } from "react-icons/io5";


export default function WhatsStreaming() {
  const [streaming, setStreaming] = useState([]);
  const sliderRef = useRef(null);

  {/*  
  useEffect(() => {                //api call from rapidapi
    const options = {
      method: 'GET',
      url: 'https://imdb188.p.rapidapi.com/api/v1/getWhatsStreaming',
  params: {country: 'US'},
  headers: {
    'x-rapidapi-key':import.meta.env.VITE_RAPIDAPI_KEY,
    'x-rapidapi-host': 'imdb188.p.rapidapi.com'
  }
    };

    axios.request(options)
      .then(response => {
        const fetchedStreaming = response.data.data.flatMap(movie =>
          movie.edges.map(edge =>({
            title: edge.title.originalTitleText.text,
            image: edge.title.primaryImage.imageUrl,
            rating:edge.title.ratingsSummary.aggregateRating
          }))
        );
        setStreaming(fetchedStreaming);
      })
      .catch(error => {
        console.error(error);
      }); 
  }, []); 
 */}

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <div className="bg-black py-8 relative">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-yellow-500 text-3xl font-bold mb-4">Explore what's streaming</h2>
        <div className="flex overflow-x-scroll space-x-4" ref={sliderRef}>
          {streaming.map((movie, index) => (
            <div key={index} className="flex-shrink-0 w-36 bg-gray-800">
              <img
                src={movie.image}
                alt={movie.title}
                className="w-36 h-48 object-cover rounded-md"
              />
              <p className="text-gray-500 text-center my-1">{movie.rating} <span className="text-yellow-400"> ★</span></p>
              <h3 className="text-white hover:underline pl-2 text-lg text-start mt-2">{movie.title}</h3>
              <div className=" flex flex-col">
                <button className="  text-blue-600 py-1 px-1 space-x-2 m-3  rounded-md bg-gray-700 hover:bg-gray-600 align-middle text-sm font-medium flex flex-row justify-center items-center">Watch now <CiShare1 /></button>
                <button className="text-white font-medium justify-center items-center mb-3 text-sm flex flex-row space-x-2 ">Trailer <IoPlay /></button>
              </div>
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