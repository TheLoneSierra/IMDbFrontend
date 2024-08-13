import React, { useState, useContext } from 'react';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { TiStarFullOutline } from "react-icons/ti";
import { IoTicket } from "react-icons/io5";
import { FaPlay } from "react-icons/fa6";
import { CiBookmarkPlus } from "react-icons/ci";
import { WatchlistContext } from './WatchlistContext';

export default function Theater() {
  const { addToWatchlist } = useContext(WatchlistContext);
  const [currentIndex, setCurrentIndex] = useState(0);


  const movies = [   //array of objects for data
    { title: 'Deadpool & Wolverine', rating: '8.1', image: 'https://th.bing.com/th?id=OIF.wjCRHn%2frvOQoPIVycT8%2bbw&rs=1&pid=ImgDetMain' },
    { title: 'Ghuspaithiya', rating: '9.6', image: 'https://images.filmibeat.com/img/popcorn/movie_posters/ghuspaithiya-20240725161412-23068.jpg' },
    { title: 'Gharat Ganpati', rating: '9.3', image: 'https://rangmarathi.com/wp-content/uploads/2024/05/Gharat-Ganpati-Movie.jpg' },
    { title: 'Auron Mein Kahan..', rating: '5.4', image: 'https://movierulz.my/uploads/Auron-Mein-Kahan-Dum-Tha-min.jpg?1' },
    { title: 'Ulahj', rating: '8.1', image: 'https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/ulajh-et00359267-1720711513.jpg' },
    { title: 'Bad Newz', rating: '6.0', image: 'https://th.bing.com/th/id/OIP.gkgWKTjVBN37pRmMMAb6vAHaJO?rs=1&pid=ImgDetMain' },
    { title: 'Kalki', rating: '7.6', image: 'https://i.pinimg.com/originals/2f/f4/f4/2ff4f4cecf6d5a1c0366edb1f9cd8fd0.jpg' },
    { title: 'It Ends with us', rating: '8.5', image: 'https://th.bing.com/th/id/OIF.E2s40GyK205pS4Ch9Rt4bg?rs=1&pid=ImgDetMain' },
    { title: 'Trap', rating: '7.0', image: '    https://thelatinoslant.com/wp-content/uploads/2024/08/trap-2024.jpg' },
    { title: 'Borderlands', rating: '7.0', image: 'https://th.bing.com/th?id=OIF.hU%2fK0c1OQ%2fBEEsqiU1uGnw&rs=1&pid=ImgDetMain' },
    { title: 'Munjya', rating: '7.6', image: 'https://m.media-amazon.com/images/M/MV5BYTNjZDY2ODEtZTk2Yy00MjAyLWJlNWQtODM2NzdmYmE0ODJjXkEyXkFqcGc@._V1_.jpg' },
    { title: 'Laila Majnu', rating: '8.0', image: 'https://m.media-amazon.com/images/M/MV5BZDU3ZGFhMTktZGUzNC00ZmFmLTk3ZWEtYmJhODc0YjBmMmNkXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SY1000_CR0,0,692,1000_AL_.jpg' },
  ];



  const visibleMovies = movies.slice(currentIndex, currentIndex + 6);


  const addMovieToWatchlist = (movie) => {
    addToWatchlist(movie);
  };

  const handleNext = () => {
    if (currentIndex + 6 < movies.length) {
      setCurrentIndex(currentIndex + 6);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 6);
    }
  };


  return (
    <div className="relative">
      <p className='text-yellow-400 text-4xl my-4 font-bold p-4 mx-20'>Explore movies & TV shows</p>
      <div className="flex flex-col p-4 mx-20">
        <div className="flex flex-row space-x-4">
          <h2 className="font-semibold text-3xl text-white">In theaters</h2>
          <span className="text-3xl font-semibold mt-2 text-white"><IoIosArrowForward /></span>
        </div>
        <p className="text-lg my-1 text-gray-500">Showtimes near you</p>
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
              <button className="absolute top-0 left-0 text-gray-950 bg-gray-700 text-5xl hover:text-white">
                <CiBookmarkPlus onClick={() => addMovieToWatchlist(movie)} />
              </button>
              <div className="p-4">
                <div className="flex items-center mb-2">
                  <span className="text-yellow-500 text-lg mr-1"><TiStarFullOutline /></span>
                  <span className="text-base text-gray-500 font-semibold">{movie.rating}</span>
                </div>
                <h3 className="text-md hover:underline font-bold mb-4">{movie.title}</h3>
                <div className="space-y-2">
                  <button className="w-full hover:bg-blue-700 bg-blue-600 py-2 rounded flex justify-center items-center text-sm">
                    Showtimes <span className='mx-2 mt-0'><IoTicket /></span>
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

      {currentIndex > 0 && (
        <button
          onClick={handlePrev}
          className="absolute top-1/2 bg-black text-white p-2 rounded-full"
        >
          <IoIosArrowBack />
        </button>
      )}

      {currentIndex + 6 < movies.length && (
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 bg-black text-white p-2 rounded-full"
        >
          <IoIosArrowForward />
        </button>
      )}
    </div>
  );
}
