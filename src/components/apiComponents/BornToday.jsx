import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

export default function BornToday() {
  const [celebrities, setCelebrities] = useState([]);
  const sliderRef = useRef(null);


  useEffect(() => {     //api rendering
    const options = {
      method: 'GET',
      url: 'https://imdb188.p.rapidapi.com/api/v1/getBornOn',
      params: { month: '01', day: '01' },
      headers: {
        'x-rapidapi-key': '08e0d4e2damshd83dab6fb46260cp162640jsnf1e690b6a871',
        'x-rapidapi-host': 'imdb188.p.rapidapi.com'
      }
    };

    axios.request(options)
      .then(response => {
        const fetchedCelebrities = response.data.data.list.map(celebrity => ({
          name: celebrity.nameText.text,
          image: celebrity.primaryImage.imageUrl,
        }));
        setCelebrities(fetchedCelebrities);
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
        <h2 className="text-white text-2xl font-bold mb-4">Born today</h2>
        <p className="text-gray-400 mb-6">People born on August 9</p>
        <div className="flex overflow-x-scroll space-x-4" ref={sliderRef}>
          {celebrities.map((celebrity, index) => (
            <div key={index} className="flex-shrink-0 w-36">
              <img
                src={celebrity.image}
                className="w-36 h-36 rounded-full object-cover"
              />
              <p className="text-white text-center mt-2">{celebrity.name}</p>
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
