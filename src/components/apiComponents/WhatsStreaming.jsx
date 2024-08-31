import React, { useState, useEffect, useContext} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import { CiShare1 } from "react-icons/ci";
import { TiStarFullOutline } from "react-icons/ti";
import { CiBookmarkPlus } from "react-icons/ci";
import { IoPlay } from "react-icons/io5";
import { WatchlistContext } from '../WatchlistContext';
import { AuthContext } from '../AuthContext';
import { PulseLoader } from 'react-spinners';



export default function MovieCard() {
  const [movies, setMovies] = useState([]);
  const { addToWatchlist } = useContext(WatchlistContext);
  const { token } = useContext(AuthContext);
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  
useEffect(() => {

  const fetchData = async () => {
    try {
      await new Promise(resolve => setTimeout(resolve, 1000)); //simulating a delay of 1 second
      const response = await axios.get('https://imdbbackend.vercel.app/api/exploring');
      setMovies(response.data);
    } catch (error) {
      console.log('Error while fetching the data', error);
    } finally {
      setIsLoading(false);
    }
  };
  fetchData();
  }, []);


const addMovieToWatchlist = (movie) => {
  const token = localStorage.getItem('token');

  if (!token) {
      setShowLoginPopup(true);
      return;
  } addToWatchlist(movie);
};

const closePopup = () => {
  setShowLoginPopup(false);
}

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 5,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: false,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]

};

  return (
<>
<div className="relative">


{showLoginPopup && (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
    <div className="bg-white p-4 rounded-lg flex flex-col items-center">
      <p className="text-lg font-semibold mb-4">Please log in to add to your watchlist.</p>
      <div className="flex justify-center w-full">
        <button onClick={closePopup} className="bg-black text-white px-4 py-2 rounded">Close</button>
      </div>
    </div>
  </div>
)}

<div className="flex flex-col p-4 mx-20 mt-5 mb-3">
        <div className="flex flex-row space-x-4">
          <h2 className="font-bold text-3xl text-yellow-500">Explore what's streaming</h2>
        </div>
      </div>
      {isLoading ? (
        <div className="flex justify-center items-center">
          <PulseLoader color={"#ffffff"} loading={isLoading} size={10} />
        </div>
      ) : (
      <Slider {...settings} className="mx-20">
        {movies.map((movie, index) => (
          <div key={index} className="p-2">
            <div className="bg-gray-900 text-white rounded-lg shadow-md">
              <div className="relative">
                <img
                  src={movie.image}
                  alt={movie.title}
                  className="w-full h-60 object-cover rounded-t-lg"
                />
                <button
                  className="absolute top-0 left-0 text-gray-950 bg-gray-700 text-5xl hover:text-white"
                  onClick={() => addMovieToWatchlist(movie)}
                >
                  <CiBookmarkPlus />
                </button>
              </div>
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
                  <button className="w-full hover:bg-blue-700 bg-blue-600 py-2 rounded flex justify-center items-center text-sm">
                    Watch now <span className='mx-2 mt-0'><CiShare1 /></span>
                  </button>
                  <button className="w-full py-1 bg-gray-900 font-semibold flex justify-center items-center rounded text-sm">
                    Trailer <span className='mx-2 mt-1'><IoPlay /></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
            )}

     </div>

       </>
  );
}
