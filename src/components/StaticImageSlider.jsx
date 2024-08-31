import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaRegCirclePlay } from "react-icons/fa6";

const StaticImageSlider = () => {

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
      img: 'https://th.bing.com/th/id/OIP.m9WmdloPZON9kmo1S6zzyAHaEK?rs=1&pid=ImgDetMain',
      thumbnail: 'https://th.bing.com/th/id/OIP.3eNDUvtiCA_V3nvH-S8DiQHaLH?rs=1&pid=ImgDetMain',
      title: "Sonic the Hedgehog 3",
      subtitle: 'Watch the trailer',
      time: '2:24',
      likes: 380,
      dislikes: 70,
    },
    {
      img: 'https://imgeng.jagran.com/images/2024/08/26/article/image/emily%20in%20paris%20season%204%20part%202%20trailer-1724696987037.jpg',
      thumbnail: 'https://www.designscene.net/wp-content/uploads/2024/08/Emily-in-Paris-5.jpg',
      title: "Emily in Paris heads to Rome",
      subtitle: 'Watch the Part 4 trailer',
      time: '2:18',
      likes: 270,
      dislikes: 45,
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
      img: 'https://images.mid-day.com/images/images/2023/nov/Producers-kept-b_e.jpg',
      thumbnail: 'https://th.bing.com/th/id/OIP.ESbHNIjkDFwbb2KnrzAEpAHaNK?w=540&h=960&rs=1&pid=ImgDetMain',
      title: "The making of KILL",
      subtitle: 'Watch now!',
      time: '1:58',
      likes: 670,
      dislikes: 80,
    }, 
    {
      img: 'https://m.media-amazon.com/images/M/MV5BYmJiOGY3NGUtNjI5Yi00MzdhLWI5YjAtYjg4ZWM2NDM0OWY0XkEyXkFqcGdeQXVyODIyOTEyMzY@._V1_.jpg',
      thumbnail: 'https://th.bing.com/th/id/OIP.7eVaAknc62FwQadJkqcB1AAAAA?rs=1&pid=ImgDetMain',
      title: "Saoirse ronan in the outrun",
      subtitle: 'Watch the trailer',
      time: '4:20',
      likes: 600,
      dislikes: 130,
    },
  ];

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  
  return (
    <div className="flex flex-col md:flex-row bg-black text-white p-4 my-5 mx-20">
      {/* Main Feature Section */}
      <div className="relative flex-1" style={{ width: '60%', height: '40%' }}>
        <div className="relative">
          <Slider {...settings}>
            {slides.map((slide, index) => (
              <div className="w-full flex-shrink-0 relative" key={index} style={{ width: '100%' }}>
                <img
                  src={slide.img}
                  alt="Feature"
                  className="w-full h-full object-cover"
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
          </Slider>
        </div>
      </div>

      {/* Up Next Section */}
      <div className="max-w-md mx-auto ml-6 md:ml-0 p-2 sm:p-4">
  <h2 className="text-yellow-500 text-xl mb-1 text-center sm:text-left">Up next</h2>
  <div className="space-y-2">
    <div className="flex flex-col sm:flex-row items-start space-y-2 sm:space-y-0 sm:space-x-4 p-2 bg-black rounded-md">
      <img
        src="https://th.bing.com/th/id/OIP.eX0rBKdV-nHNN1e8w2HWYQHaLH?w=124&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7"
        alt="Thumbnail"
        className="w-full sm:w-20 h-auto sm:h-[90%] object-cover rounded"
      />
      <div className="flex-1">
        <div className="flex items-center justify-center sm:justify-start space-x-2 mb-2">
          <button className="text-white text-2xl hover:text-yellow-400 bg-transparent border-none focus:outline-none">
            <FaRegCirclePlay />
          </button>
          <span className="text-sm text-gray-400">2:01</span>
        </div>
        <h3 className="text-lg font-base text-center sm:text-left">Megan Fox Goes AI Android</h3>
        <p className="text-gray-400 text-center sm:text-left">Watch the 'Subservience' Trailer</p>
        <div className="flex items-center justify-center sm:justify-start space-x-2 mt-2 text-gray-400">
          <span className="flex items-center">❤️ 540</span>
          <span className="flex items-center">👍 206</span>
        </div>
      </div>
    </div>

    <div className="flex flex-col sm:flex-row items-start space-y-2 sm:space-y-0 sm:space-x-4 p-2 bg-black rounded-md">
      <img
        src="https://upload.wikimedia.org/wikipedia/en/a/a1/Stree_2.jpg"
        alt="Thumbnail"
        className="w-full sm:w-20 h-auto sm:h-[90%] object-cover rounded"
      />
      <div className="flex-1">
        <div className="flex items-center justify-center sm:justify-start space-x-2 mb-2">
          <button className="text-white hover:text-yellow-400 text-2xl bg-transparent border-none focus:outline-none">
            <FaRegCirclePlay />
          </button>
          <span className="text-sm text-gray-400">3:10</span>
        </div>
        <h3 className="text-lg font-base text-center sm:text-left">Most Popular Indian Movies of 2024 (So Far!)</h3>
        <p className="text-gray-400 text-center sm:text-left">A Look Back at the Year to Date</p>
        <div className="flex items-center justify-center sm:justify-start space-x-2 mt-2 text-gray-400">
          <span className="flex items-center">❤️ 62</span>
          <span className="flex items-center">👍 24</span>
        </div>
      </div>
    </div>

    <div className="flex flex-col sm:flex-row items-start space-y-2 sm:space-y-0 sm:space-x-4 p-2 bg-black rounded-md">
      <img
        src="https://static.toiimg.com/photo/msid-102766388/102766388.jpg?56710"
        alt="Thumbnail"
        className="w-full sm:w-20 h-auto sm:h-[90%] object-cover rounded"
      />
      <div className="flex-1">
        <div className="flex items-center justify-center sm:justify-start space-x-2 mb-2">
          <button className="text-white text-2xl hover:text-yellow-400 bg-transparent border-none focus:outline-none">
            <FaRegCirclePlay />
          </button>
          <span className="text-sm text-gray-400">2:28</span>
        </div>
        <h3 className="text-lg font-base text-center sm:text-left">The Killer</h3>
        <p className="text-gray-400 text-center sm:text-left">Watch the trailer</p>
        <div className="flex items-center justify-center sm:justify-start space-x-2 mt-2 text-gray-400">
          <span className="flex items-center">❤️ 1k</span>
          <span className="flex items-center">👍 406</span>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  );
};

export default StaticImageSlider;
