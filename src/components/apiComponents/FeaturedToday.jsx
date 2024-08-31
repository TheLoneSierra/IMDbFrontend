import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FeaturedToday = () => {
  const movies = [
    {
      id: 1,
      image: 'https://stat4.bollywoodhungama.in/wp-content/uploads/2023/01/Pathaan-Trailer.jpeg',
      title: 'Indian Stars With August Birthdays',
      link: 'See the list'
    },
    {
      id: 2,
      image: 'https://th.bing.com/th/id/R.9aaa119c716c2cc304f6fd9244c6204e?rik=C59S%2f9DXxozJ%2bw&riu=http%3a%2f%2fi.huffpost.com%2fgen%2f1537772%2fthumbs%2fo-CELEBRITY-HEALTH-2013-facebook.jpg&ehk=R%2b2aZVyl0EFveaRnJpHmXv4TCnhBIF0VAT7Q14hxWCc%3d&risl=&pid=ImgRaw&r=0',
      title: 'Red Carpets of the Week',
      link: 'See the gallery'
    },
    {
      id: 3,
      image: 'https://m.media-amazon.com/images/M/MV5BYzI5MGZkMTYtNDJmOC00NDJhLWFiYjctNDczNTIxYzE1ZjJmXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_FMjpg_UX1280_.jpg',
      title: 'Hollywood Power Couple',
      link: 'See the gallery'
    },
    {
      id:4,
      image:'https://th.bing.com/th/id/OIP.W2WpEmwKVQBTcfJ4uqgQUQHaEK?w=640&h=360&rs=1&pid=ImgDetMain',
      title:'The 76th Emmys acting nominees in character',
      link:'See all the nominees'
    },
    {
      id:5,
      image:'https://w0.peakpx.com/wallpaper/299/1011/HD-wallpaper-jurassic-park.jpg',
      title:'Theatrical releases you can stream or rent',
      link:'See the list'
    },
    {
      id:6,
image:'https://m.media-amazon.com/images/M/MV5BZDNjMzA0YmYtM2EzOS00MDQyLTk4MzYtYjE3MmVkMTI2YjgzXkEyXkFqcGdeQXVyMTYyNjg2MzUz._V1_.jpg',
      title:'The IMDb portrait studio 2024',
      link:'See the gallery'
    }
  ];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
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
    <div className="bg-black text-white mt-4 mx-20 p-4">
      <h2 className="text-yellow-500 font-base text-4xl mt-2 mb-5">Featured today</h2>
      <Slider {...settings}>
        {movies.map(movie => (
          <div key={movie.id} className="px-4">
            <div className="bg-black overflow-hidden">
              <img className="w-full h-60 object-cover" src={movie.image} alt={movie.title} />
              <div className="p-4">
                <h3 className="text-white font-base text-lg">{movie.title}</h3>
                <a href="#" className="text-blue-400 hover:underline">{movie.link}</a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default FeaturedToday;
