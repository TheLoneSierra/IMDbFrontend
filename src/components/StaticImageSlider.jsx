import React from 'react';
import { FaRegCirclePlay } from "react-icons/fa6";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useState } from 'react';

const StaticImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [  //sample data in form of array of objects
    {
      img: 'https://image.tmdb.org/t/p/original/jIi99ZvvXCNwYxNmo7DEUb7I0xv.jpg',
      thumbnail: 'https://th.bing.com/th/id/OIP.z8AUXyiLCQuO1ijVzoM3MwHaLI?rs=1&pid=ImgDetMain',
      title: "What Joke Was Off Limits in 'Deadpool & Wolverine'?",
      subtitle: 'And How Did Filmmakers Sneak It in Anyway?',
      time: '5:24',
      likes: 540,
      dislikes: 10,
    },
    {
      img: 'https://th.bing.com/th/id/OIP.jgspiHlU0w1beoFwZKgS7gHaEK?rs=1&pid=ImgDetMain',
      thumbnail: 'https://graziamagazine.com/wp-content/uploads/2021/04/GettyImages-1310494108.jpg?resize=2832%2C4046?w=1075',
      title: "Megan Fox goes AI Android",
      subtitle: 'Watch the trailer',
      time: '3:20',
      likes: 720,
      dislikes: 30,
    },
    {
      img: 'https://th.bing.com/th?id=OIF.qOeyn3e7FKRT2KHnWY%2bstg&rs=1&pid=ImgDetMain',
      thumbnail: 'https://th.bing.com/th?id=OIF.zA7aqr%2btSoOIyKFuEMTdXQ&rs=1&pid=ImgDetMain',
      title: "Blink Twice",
      subtitle: 'Watch the trailer',
      time: '1:20',
      likes: 720,
      dislikes: 30,
    }, {
      img: 'https://th.bing.com/th/id/OIP.0DIoGVOsjK7T6XQTR1cCjwAAAA?rs=1&pid=ImgDetMain',
      thumbnail: 'https://th.bing.com/th/id/OIP.ESbHNIjkDFwbb2KnrzAEpAHaNK?w=540&h=960&rs=1&pid=ImgDetMain',
      title: "The making of KILL",
      subtitle: 'Watch now!',
      time: '1:58',
      likes: 670,
      dislikes: 80,
    }, {
      img: 'https://m.media-amazon.com/images/M/MV5BYmJiOGY3NGUtNjI5Yi00MzdhLWI5YjAtYjg4ZWM2NDM0OWY0XkEyXkFqcGdeQXVyODIyOTEyMzY@._V1_.jpg',
      thumbnail: 'https://th.bing.com/th/id/OIP.7eVaAknc62FwQadJkqcB1AAAAA?rs=1&pid=ImgDetMain',
      title: "Saoirse ronan in the outrun",
      subtitle: 'Watch the trailer',
      time: '4:20',
      likes: 600,
      dislikes: 130,
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };
  return (
    <div className="flex flex-col md:flex-row bg-black text-white p-4 my-5 mx-20">
      {/* Main Feature Section */}
      <div className="relative flex-1">
        <div className="relative">
          <div className="overflow-hidden">
            <div className="flex transition-transform duration-500" style={{ transform: `translateX(${-currentIndex * 100}%)` }}>
              {slides.map((slide, index) => (
                <div className="w-full flex-shrink-0 relative" key={index}>
                  <img
                    src={slide.img}
                    alt="Feature"
                    className="w-full h-[80%] object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end">
                    <div className="flex items-center">
                      <img src={slide.thumbnail} className="h-60 w-44 mx-6 mt-12" />
                      <div className="text-6xl text-white hover:text-yellow-400 mx-3 mt-20">
                        <FaRegCirclePlay />
                      </div>
                      <div className="flex flex-col space-y-2 mx-4 mt-20">
                        <p className="text-3xl font-semibold text-white">{slide.title}</p>
                        <p className="text-lg text-gray-300">{slide.subtitle}</p>
                        <div className="flex space-x-2 text-white">
                          <span>❤️ {slide.likes}</span>
                          <span>👎 {slide.dislikes}</span>
                        </div>
                      </div>
                      <span className="ml-32 mt-48 mr-4 text-lg mb-10 text-gray-400">{slide.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <button onClick={prevSlide} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full">
          <FaArrowLeft />
        </button>
        <button onClick={nextSlide} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full">
          <FaArrowRight />
        </button>
      </div>

      {/* Up Next Section */}
      <div className="max-w-md mx-auto ml-6">
        <h2 className="text-yellow-500 text-xl mb-1">Up next</h2>
        <div className="space-y-1">
          <div className="flex items-start space-x-4 p-2 bg-black rounded-md">
            <img src="https://th.bing.com/th/id/OIP.eX0rBKdV-nHNN1e8w2HWYQHaLH?w=124&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Thumbnail" className="w-20 h-[90%] object-cover rounded" />
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <button className="text-white text-2xl hover:text-yellow-400 bg-transparent border-none focus:outline-none">
                  <FaRegCirclePlay />
                </button>
                <span className="text-sm text-gray-400">2:01</span>
              </div>
              <h3 className="text-lg font-base">Megan Fox Goes AI Android</h3>
              <p className="text-gray-400">Watch the 'Subservience' Trailer</p>
              <div className="flex items-center space-x-2 mt-2 text-gray-400">
                <span className="flex items-center">
                  ❤️ 540
                </span>
                <span className="flex items-center">
                  👍206
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-start space-x-4 p-2 bg-black rounded-md">
            <img src="https://th.bing.com/th/id/OIP.qeTgeLDl6ZpMpEaGSff_9AHaJ9?w=139&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Thumbnail" className="w-20 h-[90%] object-cover rounded" />
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <button className="text-white hover:text-yellow-400 text-2xl bg-transparent border-none focus:outline-none">
                  <FaRegCirclePlay />
                </button>
                <span className="text-sm text-gray-400">3:10</span>
              </div>
              <h3 className="text-lg font-base">Most Popular Indian Movies of 2024 (So Far!)</h3>
              <p className="text-gray-400">A Look Back at the Year to Date</p>
              <div className="flex items-center space-x-2 mt-2 text-gray-400">
                <span className="flex items-center">
                  ❤️62
                </span>
                <span className="flex items-center">
                  👍24
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-start space-x-4 p-2 bg-black rounded-md">
            <img src="https://static.toiimg.com/photo/msid-102766388/102766388.jpg?56710" alt="Thumbnail" className="w-20 h-[90%] object-cover rounded" />
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <button className="text-white text-2xl hover:text-yellow-400 bg-transparent border-none focus:outline-none">
                  <FaRegCirclePlay />
                </button>
                <span className="text-sm text-gray-400">2:28</span>
              </div>
              <h3 className="text-lg font-base">The Making of 'Kill'</h3>
              <p className="text-gray-400">Watch Now!</p>
              <div className="flex items-center space-x-2 mt-2 text-gray-400">
                <span className="flex items-center">
                  ❤️ 46
                </span>
                <span className="flex items-center">
                  👍24
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default StaticImageSlider;
