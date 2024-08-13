import React, { useContext, useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { TiStarFullOutline } from "react-icons/ti";
import { FaPlay } from "react-icons/fa6";
import { CiBookmarkPlus } from "react-icons/ci";
import { WatchlistContext } from './WatchlistContext';

export default function TopPicks() {
  const { addToWatchlist } = useContext(WatchlistContext);
  const [currentIndex, setCurrentIndex] = useState(0);

  const movies = [   //sample data in form of array of objects
    { title: 'Stranger Things', rating: '8.7', image: 'https://wallpaper.ofstrangerthings.us/wp-content/uploads/2022/09/Stranger-Things-Season-5-Poster-12.jpg' },
    { title: 'The 100', rating: '7.5', image: 'https://th.bing.com/th/id/OIP.1f3dpMbazEoHER1fAXQ_FwHaK9?rs=1&pid=ImgDetMain' },
    { title: 'the summer i turned p...', rating: '7.3', image: 'https://static1.colliderimages.com/wordpress/wp-content/uploads/2023/07/the-summer-i-turned-pretty-poster.jpg' },
    { title: 'jane the virgin', rating: '7.9', image: 'https://th.bing.com/th/id/OIP.JsusQKNDhKGx3HzlRlh_awHaK8?rs=1&pid=ImgDetMain' },
    { title: 'Legacies', rating: '7.2', image: 'https://th.bing.com/th/id/OIP.B35voUqtNGAvCTGIbgD_dQHaLH?rs=1&pid=ImgDetMain' },
    { title: 'Bridgerton', rating: '7.4', image: 'https://images6.fanpop.com/image/photos/43600000/-Bridgerton-Season-1-poster-bridgerton-netflix-series-43618655-1080-1350.jpg' },
    { title: 'Laila Majnu', rating: '8.0', image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ5MzM1NzMwMl5BMl5BanBnXkFtZTgwNjQ2MzI2NzE@._V1_UY1200_CR90,0,630,1200_AL_.jpg' },
    { title: 'NewGirl', rating: '7.2', image: 'https://m.media-amazon.com/images/M/MV5BYTNjZDY2ODEtZTk2Yy00MjAyLWJlNWQtODM2NzdmYmE0ODJjXkEyXkFqcGc@._V1_.jpg' },
    { title: 'Elite', rating: '8.5', image: 'https://th.bing.com/th/id/OIP.NFmShfRgkbkEyblBwephTgHaNJ?rs=1&pid=ImgDetMain' },
    { title: 'Kalki', rating: '7.6', image: 'https://i.pinimg.com/originals/2f/f4/f4/2ff4f4cecf6d5a1c0366edb1f9cd8fd0.jpg' },
    { title: 'Prison break', rating: '8.3', image: 'https://m.media-amazon.com/images/M/MV5BMTg3NTkwNzAxOF5BMl5BanBnXkFtZTcwMjM1NjI5MQ@@._V1_FMjpg_UX1000_.jpg' },
    { title: 'Friends', rating: '8.9', image: 'https://m.media-amazon.com/images/M/MV5BNDVkYjU0MzctMWRmZi00NTkxLTgwZWEtOWVhYjZlYjllYmU4XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_FMjpg_UX1000_.jpg' },
    { title: 'shadow and bone', rating: '7.5', image: 'https://th.bing.com/th/id/OIP.1KLldtgcQda-h5oJscJ_jwHaLG?rs=1&pid=ImgDetMain' },
    { title: 'Ulajh', rating: '8.1', image: 'https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/ulajh-et00359267-1720711513.jpg' },
    { title: 'The originals', rating: '9.6', image: 'https://th.bing.com/th/id/OIP.bSqAPHDbFu415oCgiho8qQHaK5?rs=1&pid=ImgDetMain' },
    { title: 'Borderlands', rating: '7.0', image: 'https://th.bing.com/th?id=OIF.hU%2fK0c1OQ%2fBEEsqiU1uGnw&rs=1&pid=ImgDetMain' },
    { title: '13 reasons why', rating: '7.7', image: 'https://th.bing.com/th/id/R.88025cec78b21a2842dc3018200b596c?rik=z5ku8KgvCiYSHw&riu=http%3a%2f%2fimages6.fanpop.com%2fimage%2fphotos%2f40500000%2f13-Reasons-Why-Poster-13-reasons-why-netflix-series-40517422-426-597.jpg&ehk=JYUnxu0rs%2fFZRci0KBUAWiLMTN%2bG98GqkgcW74puRPk%3d&risl=&pid=ImgRaw&r=0' },
    { title: 'House of the dragon', rating: '8.5', image: ' https://resizing.flixster.com/QrT-Krzry3Ikh6cH4u9bHCYH_6w=/ems.cHJkLWVtcy1hc3NldHMvdHZzZXJpZXMvNGZmZmJkN2YtZDA4YS00ZjkzLWE3OTMtNTgyNDE5NWM3YjhmLmpwZw==' }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < movies.length - 6 ? prevIndex + 1 : prevIndex
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : prevIndex
    );
  };

  const visibleMovies = movies.slice(currentIndex, currentIndex + 6);

  const addMovieToWatchlist = (movie) => {
    addToWatchlist(movie);
  };

  return (
    <div className="relative">
      <p className='text-yellow-400 text-4xl mt-6 mb-1 font-bold p-4 mx-20'>What to watch</p>

      <div className="flex flex-col p-4 mx-20 mt-1">
        <div className="flex flex-row space-x-4">
          <h2 className="font-semibold text-3xl text-white">Top picks</h2>
          <span className="text-3xl font-semibold mt-2 text-white">
            <IoIosArrowForward />
          </span>
        </div>

        <p className="text-lg my-1 text-gray-500">TV shows and movies just for you</p>
      </div>

      <div className="flex overflow-hidden justify-evenly space-x-4 p-4 mx-20">
        {visibleMovies.map((movie, index) => (
          <div key={index} className="min-w-[14.66%]">
            <div className="bg-gray-900 text-white rounded-lg relative shadow-md">
              <img
                src={movie.image}
                alt={movie.title}
                className="w-full h-60 object-cover rounded-t-lg"
              />
              <button
                onClick={() => addMovieToWatchlist(movie)}
                className="absolute top-0 left-0 text-gray-950 bg-gray-700 text-5xl hover:text-white"
              >
                <CiBookmarkPlus />
              </button>
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
        ))}
      </div>
      <div className="absolute top-2/4 left-0 transform -translate-y-1/2">
        <button
          onClick={prevSlide}
          className="p-1 bg-gray-800 text-white rounded-full shadow"
        >
          <IoIosArrowBack size={24} />
        </button>
      </div>

      <div className="absolute top-2/4 right-0 transform -translate-y-1/2">
        <button
          onClick={nextSlide}
          className="p-1 bg-gray-800 text-white rounded-full shadow"
        >
          <IoIosArrowForward size={24} />
        </button>
      </div>
    </div>
  );
}