import React, { useState } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

const celebrities = [ //sample data in form of array of objects
  {
    name: "Bill Skarsgard",
    age: 34,
    imageUrl: "https://th.bing.com/th/id/OIP.mDBt5sS0BcBvfTerkfBGGgHaLH?rs=1&pid=ImgDetMain",
  },
  {
    name: "Ashley Johnson",
    age: 41,
    imageUrl: "https://th.bing.com/th/id/OIP.wz-oTQ6H2co2VRzYVWY_sAHaLI?rs=1&pid=ImgDetMain",
  },
  {
    name: "Anna Kendrick",
    age: 39,
    imageUrl: "https://image.tmdb.org/t/p/original/5ZYBQefB30uWObRzin8R0PYqenh.jpg",
  },
  {
    name: "Gillian Anderson",
    age: 56,
    imageUrl: "https://external-preview.redd.it/pEcPbrneeqaa8GqpbNmA1ZV3en-VEZot1KMGggGAsss.jpg?auto=webp&s=c02e94c66397132ad3c4e7396b16036fd6fe4dc8",
  },
  {
    name: "Rhona Mitra",
    age: 48,
    imageUrl: "https://www.hawtcelebs.com/wp-content/uploads/2015/01/rhona-mitra-at-instyle-and-warner-bros-golden-globes-party-in-beverly-hills_6.jpg",
  },
  {
    name: "Sam Elliott",
    age: 80,
    imageUrl: "https://th.bing.com/th/id/OIP.W1AxdlQynQAaon7U1jQNggHaLJ?rs=1&pid=ImgDetMain",
  },
  {
    name: "Erica Ash",
    age: 25,
    imageUrl: "https://m.media-amazon.com/images/M/MV5BMTYzMDc2MTI3Nl5BMl5BanBnXkFtZTcwMTcxNTI4Mw@@._V1_FMjpg_UX1000_.jpg",
  }, {
    name: "Sasha Jackson",
    age: 46,
    imageUrl: "https://image.tmdb.org/t/p/original/e1dVUW0ch27YdavOKI9F8XZwt1W.jpg",
  }, {
    name: "Dafne Keen",
    age: 27,
    imageUrl: "https://th.bing.com/th/id/OIP.V6Lrn2KSEBw2d1gLFIMSvAHaJQ?rs=1&pid=ImgDetMain",
  }, {
    name: "ryan reynolds",
    age: 46,
    imageUrl: "https://th.bing.com/th/id/OIP.M47Rqdhx3fLQzmdAMkYtiAHaFj?rs=1&pid=ImgDetMain",
  }, {
    name: "glen powell",
    age: 40,
    imageUrl: "https://th.bing.com/th/id/OIP.HICS1lBOk11y2ynk1h68_wHaLH?rs=1&pid=ImgDetMain",
  }, {
    name: "Henry Cavill",
    age: 41,
    imageUrl: "https://th.bing.com/th/id/OIP.2DzLtjVx5dRTrzFy3Q25DQHaK8?rs=1&pid=ImgDetMain",
  }, {
    name: "Ian Somerhalder",
    age: 43,
    imageUrl: "https://th.bing.com/th/id/OIP.J0GlMhPxVQnddZqkrS7tpwHaLH?rs=1&pid=ImgDetMain",
  }
];

export default function PopularCelebrities() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < celebrities.length - 6 ? prevIndex + 1 : prevIndex
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : prevIndex
    );
  };

  return (
    <div className="w-full max-w-7xl px-4 mx-20">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-white flex items-center text-2xl mt-8 mb-1 font-bold ">
          <span className="text-yellow-500  mr-2">|</span> Most popular Celebrities
          <FaChevronRight className="text-white text-xl mx-3 cursor-pointer" />

        </h2>
      </div>

      <div className="relative flex items-center">
        <FaChevronLeft
          className={`text-white text-2xl absolute left-0 z-10 cursor-pointer ${currentIndex === 0 ? "hidden" : "block"
            }`}
          onClick={prevSlide}
        />

        <div className="overflow-hidden w-full">
          <div
            className="flex"
            style={{
              transform: `translateX(-${currentIndex * (100 / 6)}%)`,
              transition: "transform 0.3s ease-in-out",
            }}
          >
            {celebrities.map((celebrity, index) => (
              <div
                key={index}
                className="w-1/6 px-2 my-5 flex flex-col items-center"
              >
                <div className=" w-48 h-48 mb-2">
                  <img
                    src={celebrity.imageUrl}
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
          </div>
        </div>

        <FaChevronRight
          className={`text-white text-2xl absolute right-0 z-10 cursor-pointer ${currentIndex === celebrities.length - 6 ? "hidden" : "block"
            }`}
          onClick={nextSlide}
        />
      </div>
    </div>
  );
};