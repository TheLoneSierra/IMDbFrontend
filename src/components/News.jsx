import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const News = () => {
  const news = [
    {
      id: 1,
      image: 'https://th.bing.com/th/id/OIP.s75gMhkitPgpWUXCKCuacgHaEK?rs=1&pid=ImgDetMain',
      title: 'The umbrella academy cast plays "who said that?',
      link: 'watch now'
    },
    {
      id: 2,
image:'https://i0.wp.com/pelikulamania.com/wp-content/uploads/2015/07/insideout-cast_director_seated.jpg?ssl=1',
      title: 'get emotional with Inside out 2 cast',
      link: 'watch now'
    },
    {
      id: 3,
image:'https://th.bing.com/th/id/OIP.NZW7nNgiNz8BbugyWW4t2gHaD5?rs=1&pid=ImgDetMain',
      title: '5 hit shows running in 2024',
      link: 'see our picks'
    },
    {
      id:4,
      image:'https://th.bing.com/th/id/OIP.W2WpEmwKVQBTcfJ4uqgQUQHaEK?w=640&h=360&rs=1&pid=ImgDetMain',
      title:'The 76th Emmys acting nominees in character',
      link:'See all the nominees'
    },
    {
      id:5,
      image:'https://images.augustman.com/wp-content/uploads/sites/6/2024/02/15141507/twisters-movie-2024.jpg',
      title:'Twisters stars test their 90s movies knowledge',
      link:'watch now'
    },
    {
      id:6,
image:'https://i.ytimg.com/vi/jlLWa-nUyfc/maxresdefault.jpg',
      title:'Emilys most iconic moment in paris',
      link:'watch the interview'
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
      <h2 className="text-yellow-500 font-base text-4xl mt-2 mb-5">Exclusive videos</h2>
      <h4 className=' text-white text-xl my-2'>IMDb Originals</h4>
      <p className=' text-gray-500 text-sm'>Celebrity interviews, trending entertainment stories, and expert analysis</p>
      <Slider {...settings}>
        {news.map(item => (
          <div key={item.id} className=" my-5 px-3">
            <div className="bg-black overflow-hidden">
              <img className="w-full h-60 object-cover" src={item.image} alt={item.title} />
              <div className="p-4">
                <h3 className="text-white font-base text-lg">{item.title}</h3>
                <a href="#" className="text-blue-400 hover:underline">{item.link}</a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default News;