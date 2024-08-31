import { BsBookmarkPlusFill } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdSearch } from "react-icons/io";
import { useState, useContext } from "react";
import SignInModal from "./modal/SignInModal";
import { Link } from "react-router-dom";
import { MdLocalMovies } from "react-icons/md";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import { FaMedal } from "react-icons/fa";
import { FaGlobeAmericas } from "react-icons/fa";
import { MdPlayCircleOutline } from "react-icons/md";
import { MdPeopleAlt } from "react-icons/md";
import { WatchlistContext } from "./WatchlistContext";

export default function Navbar() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const watchlist = useContext(WatchlistContext);

  const openModal = () => setIsModalOpen(true);        //for signin Modal
  const closeModal = () => setIsModalOpen(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);


  return (
    <>
      <nav className="font-bold py-4">
  <div className="container mx-auto flex justify-between items-center">
    <div className="hidden sm:flex items-center gap-x-6">
      <a>
        <img className="h-12 w-18 rounded-md" src="https://miro.medium.com/v2/resize:fit:1358/1*CbE0yIfYfPMomV0uNghjdA.jpeg" alt="Logo"/>
      </a>
      <button onClick={toggleMenu} className="text-white flex items-center gap-x-1 text-lg">
        <RxHamburgerMenu />Menu
      </button>
    </div>
    <div className="flex-grow mx-4 relative">
      <IoMdSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-800 text-lg" />
      <input
        type="text"
        placeholder="Search IMDb"
        className="w-full pl-4 py-2 rounded focus:outline-none ring-2 focus:ring-yellow-500"
      />
    </div>
    <div className="flex space-x-8 text-base items-center">
      <Link to="/watchlist" className="text-white flex items-center gap-x-1">
        <BsBookmarkPlusFill />Watchlist
      </Link>
      <button onClick={openModal} className="text-white">Sign In</button>
    </div>
  </div>
  <SignInModal isOpen={isModalOpen} onClose={closeModal} />
</nav>


      {isMenuOpen && (
  <div className="fixed inset-0 z-50 bg-black bg-opacity-100 text-white px-4 sm:px-10 md:px-20 lg:px-40 xl:px-52 pt-7">
    <div className="flex justify-end">
      <button
        onClick={toggleMenu}
        className="text-yellow-500 text-3xl md:text-4xl focus:outline-none"
      >
        ✕
      </button> {/* Close button */}
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 mt-10 md:mt-20">
      {/* Movies Section */}
      <div>
        <div className="flex items-center space-x-2">
          <span className="text-yellow-500 text-xl md:text-2xl"><MdLocalMovies /></span>
          <h2 className="text-xl md:text-2xl font-bold mb-4">Movies</h2>
        </div>
        <ul>
          <li className="mb-2 hover:underline"><a href="#">Release Calendar</a></li>
          <li className="mb-2 hover:underline"><a href="#">Top 250 Movies</a></li>
          <li className="mb-2 hover:underline"><a href="#">Most Popular Movies</a></li>
          <li className="mb-2 hover:underline"><a href="#">Browse Movies by Genre</a></li>
          <li className="mb-2 hover:underline"><a href="#">Top Box Office</a></li>
          <li className="mb-2 hover:underline"><a href="#">Showtimes & Tickets</a></li>
          <li className="mb-2 hover:underline"><a href="#">Movie News</a></li>
          <li className="mb-2 hover:underline"><a href="#">India Movie Spotlight</a></li>
        </ul>
      </div>

      {/* TV Shows Section */}
      <div>
        <div className="flex items-center space-x-2">
          <span className="text-yellow-500 text-xl md:text-2xl"><PiTelevisionSimpleBold /></span>
          <h2 className="text-xl md:text-2xl font-bold mb-4">TV Shows</h2>
        </div>
        <ul>
          <li className="mb-2 hover:underline"><a href="#">What's on TV & Streaming</a></li>
          <li className="mb-2 hover:underline"><a href="#">Top 250 TV Shows</a></li>
          <li className="mb-2 hover:underline"><a href="#">Most Popular TV Shows</a></li>
          <li className="mb-2 hover:underline"><a href="#">Browse TV Shows by Genre</a></li>
          <li className="mb-2 hover:underline"><a href="#">TV News</a></li>
        </ul>
      </div>

      {/* Awards & Events Section */}
      <div>
        <div className="flex items-center space-x-2">
          <span className="text-yellow-500 text-xl md:text-2xl"><FaMedal /></span>
          <h2 className="text-xl md:text-2xl font-bold mb-4">Awards & Events</h2>
        </div>
        <ul>
          <li className="mb-2 hover:underline"><a href="#">Oscars</a></li>
          <li className="mb-2 hover:underline"><a href="#">Emmys</a></li>
          <li className="mb-2 hover:underline"><a href="#">TIFF</a></li>
          <li className="mb-2 hover:underline"><a href="#">Festival Season</a></li>
          <li className="mb-2 hover:underline"><a href="#">STARMeter Awards</a></li>
          <li className="mb-2 hover:underline"><a href="#">Awards Central</a></li>
          <li className="mb-2 hover:underline"><a href="#">All Events</a></li>
        </ul>
      </div>

      {/* Celebs Section */}
      <div>
        <div className="flex items-center space-x-2">
          <span className="text-yellow-500 text-xl md:text-2xl"><MdPeopleAlt /></span>
          <h2 className="text-xl md:text-2xl font-bold mb-4">Celebs</h2>
        </div>
        <ul>
          <li className="mb-2 hover:underline"><a href="#">Born today</a></li>
          <li className="mb-2 hover:underline"><a href="#">Celebrity news</a></li>
          <li className="mb-2 hover:underline"><a href="#">Most Popular Celebs</a></li>
        </ul>
      </div>

      {/* Watch Section */}
      <div>
        <div className="flex items-center space-x-2">
          <span className="text-yellow-500 text-xl md:text-2xl"><MdPlayCircleOutline /></span>
          <h2 className="text-xl md:text-2xl font-bold mb-4">Watch</h2>
        </div>
        <ul>
          <li className="mb-2 hover:underline"><a href="#">What to Watch</a></li>
          <li className="mb-2 hover:underline"><a href="#">Latest Trailers</a></li>
          <li className="mb-2 hover:underline"><a href="#">IMDb Originals</a></li>
          <li className="mb-2 hover:underline"><a href="#">IMDb Picks</a></li>
          <li className="mb-2 hover:underline"><a href="#">IMDb Spotlight</a></li>
          <li className="mb-2 hover:underline"><a href="#">IMDb Podcasts</a></li>
        </ul>
      </div>

      {/* Community Section */}
      <div>
        <div className="flex items-center space-x-2">
          <span className="text-yellow-500 text-xl md:text-2xl"><FaGlobeAmericas /></span>
          <h2 className="text-xl md:text-2xl font-bold mb-4">Community</h2>
        </div>
        <ul>
          <li className="mb-2 hover:underline"><a href="#">Help center</a></li>
          <li className="mb-2 hover:underline"><a href="#">Contributor zone</a></li>
          <li className="mb-2 hover:underline"><a href="#">Polls</a></li>
        </ul>
      </div>
    </div>
  </div>
)}

    </>
  );
}