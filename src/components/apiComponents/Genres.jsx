import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowForward } from "react-icons/io";
import axios from 'axios';
import { PulseLoader } from 'react-spinners';

export default function PopularInterests() {
  const [genres, setGenres] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    const fetchData = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 1000)); //simulating a delay of 1 second
        const response = await axios.get('https://imdbbackend.vercel.app/api/popular-genres');
        setGenres(response.data);
      } catch (error) {
        console.log('Error while fetching the data', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchData();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
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
    <div className="p-4 mx-20 mt-4">
      <div className="flex flex-row space-x-4">
        <h2 className="font-semibold text-3xl text-white ml-2 my-4">Popular Interests</h2>
        <span className="text-3xl font-semibold text-white mt-6">
          <IoIosArrowForward />
        </span>
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center">
          <PulseLoader color={"#ffffff"} loading={isLoading} size={10} />
        </div>
      ) : (
        <Slider {...settings}>
          {genres.map((genre) => (
            <div key={genre.id} className="px-2">
              <div className="bg-gray-950 overflow-hidden">
                <img className="h-40 w-full object-cover" src={genre.image} alt={genre.title} />
                <div className="p-1">
                  <h3 className="text-gray-200 text-left text-lg font-base">{genre.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
}
