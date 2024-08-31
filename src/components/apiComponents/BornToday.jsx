import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import { FaChevronRight} from "react-icons/fa";
import { PulseLoader } from 'react-spinners';


export default function BornToday() {
  const [celebrities, setCelebrities] = useState([]);
  const [isLoading, setIsLoading] = useState(true);



  useEffect(() => {

    const fetchData = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 1000)); //simulating a delay of 1 second
        const response = await axios.get('https://imdb-backend-two.vercel.app/api/born-today');
        setCelebrities(response.data);
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
    slidesToShow: 6,
    slidesToScroll: 3,

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
    <div className="w-full max-w-7xl px-4 mx-20">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-white flex items-center text-2xl mt-8 mb-1 font-bold ">
          <span className="text-yellow-500  mr-2">|</span> Born today
          <FaChevronRight className="text-white text-xl mx-3 cursor-pointer" />

        </h2>
      </div>
      {isLoading ? (
        <div className="flex justify-center items-center">
          <PulseLoader color={"#ffffff"} loading={isLoading} size={10} />
        </div>
      ) : (
      <Slider {...settings}>
        {celebrities.map((celebrity, index) => (
          <div
            key={index}
            className="w-1/6 px-2 my-5 flex flex-col items-center"
          >
            <div className=" w-48 h-48 mb-2">
              <img
                src={celebrity.image}
                alt={celebrity.name}
                className="rounded-full w-full h-full object-cover"
              />
            </div>
            <h3 className="text-white text-center text-base">
              {celebrity.name}
            </h3>
            <p className="text-gray-400 text-center text-sm">
              {celebrity.age}
            </p>
          </div>
        ))}
      </Slider>
      )}
    </div>
  )
}
