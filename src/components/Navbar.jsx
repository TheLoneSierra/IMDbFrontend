import { BsBookmarkPlusFill } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdOutlineSegment } from "react-icons/md";
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

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <nav className="bg-black text-white font-bold py-4">
        <div className="container mx-auto flex justify-between items-center px-4 lg:px-0">
          <div className="flex items-center gap-x-4 lg:gap-x-6">
            <a>
              <img
                className="h-10 w-12 lg:h-12 lg:w-18 rounded-md"
                src="https://miro.medium.com/v2/resize:fit:1358/1*CbE0yIfYfPMomV0uNghjdA.jpeg"
                alt="Logo"
              />
            </a>
            <button
              onClick={toggleMenu}
              className="text-white flex items-center gap-x-1 text-lg lg:hidden"
            >
              <MdOutlineSegment className="h-6 w-6" />
              Menu
            </button>
          </div>
          <div className="flex-grow mx-2 lg:mx-4 relative">
            <IoMdSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-800 text-lg" />
            <input
              type="text"
              placeholder="Search IMDb"
              className="w-full pl-4 py-2 rounded focus:outline-none ring-2 focus:ring-yellow-500"
            />
          </div>
          <div className="hidden lg:flex space-x-4 lg:space-x-8 text-base items-center">
            <a>
              <img
                className="h-4 w-12 lg:h-6 lg:w-16"
                src="https://th.bing.com/th/id/R.7e03971ec46fb3e139cd8fd6f14ff2c5?rik=Kn7HPadn7EgKFw&riu=http%3a%2f%2fwww.pompo.com%2fwp-content%2fuploads%2f2015%2f03%2fScreen-Shot-2015-03-23-at-10.47.40-PM.png&ehk=8rmJctqXlVmx7vtFOed34vUZStAlXXR0Vu0W1oXSYwo%3d&risl=&pid=ImgRaw&r=0"
                alt="IMDb Logo"
              />
            </a>
            <Link to="/watchlist" className="text-white flex items-center gap-x-1">
              <BsBookmarkPlusFill />
              Watchlist
            </Link>
            <button onClick={openModal} className="text-white">
              Sign In
            </button>
            <button className="text-white flex items-center gap-x-1">
              En<IoMdArrowDropdown />
            </button>
          </div>
        </div>
        <SignInModal isOpen={isModalOpen} onClose={closeModal} />
      </nav>
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 text-white p-6 lg:p-10">
          <div className="flex justify-end">
            <button
              onClick={toggleMenu}
              className="text-yellow-500 text-3xl lg:text-4xl focus:outline-none"
            >
              ✕
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 lg:gap-8 mt-10 lg:mt-20">
            <div>
              <div className="flex flex-row space-x-2">
                <span className="text-yellow-500 text-xl lg:text-2xl mt-1">
                  <MdLocalMovies />
                </span>
                <h2 className="text-xl lg:text-2xl font-bold mb-4">Movies</h2>
              </div>
              <ul>
                <li className="mb-2 hover:underline">
                  <a href="#">Release Calendar</a>
                </li>
                <li className="mb-2 hover:underline">
                  <a href="#">Top 250 Movies</a>
                </li>
                <li className="mb-2 hover:underline">
                  <a href="#">Most Popular Movies</a>
                </li>
                <li className="mb-2 hover:underline">
                  <a href="#">Browse Movies by Genre</a>
                </li>
                <li className="mb-2 hover:underline">
                  <a href="#">Top Box Office</a>
                </li>
                <li className="mb-2 hover:underline">
                  <a href="#">Showtimes & Tickets</a>
                </li>
                <li className="mb-2 hover:underline">
                  <a href="#">Movie News</a>
                </li>
                <li className="mb-2 hover:underline">
                  <a href="#">India Movie Spotlight</a>
                </li>
              </ul>
            </div>

            <div>
              <div className="flex flex-row space-x-2">
                <span className="text-yellow-500 text-xl lg:text-2xl mt-1">
                  <PiTelevisionSimpleBold />
                </span>
                <h2 className="text-xl lg:text-2xl font-bold mb-4">TV Shows</h2>
              </div>
              <ul>
                <li className="mb-2 hover:underline">
                  <a href="#">What's on TV & Streaming</a>
                </li>
                <li className="mb-2 hover:underline">
                  <a href="#">Top 250 TV Shows</a>
                </li>
                <li className="mb-2 hover:underline">
                  <a href="#">Most Popular TV Shows</a>
                </li>
                <li className="mb-2 hover:underline">
                  <a href="#">Browse TV Shows by Genre</a>
                </li>
                <li className="mb-2 hover:underline">
                  <a href="#">TV News</a>
                </li>
              </ul>
            </div>

            <div>
              <div className="flex flex-row space-x-2">
                <span className="text-yellow-500 text-xl lg:text-2xl mt-1">
                  <FaMedal />
                </span>
                <h2 className="text-xl lg:text-2xl font-bold mb-4">
                  Awards & Events
                </h2>
              </div>
              <ul>
                <li className="mb-2 hover:underline">
                  <a href="#">Oscars</a>
                </li>
                <li className="mb-2 hover:underline">
                  <a href="#">Emmys</a>
                </li>
                <li className="mb-2 hover:underline">
                  <a href="#">TIFF</a>
                </li>
                <li className="mb-2 hover:underline">
                  <a href="#">Festival Season</a>
                </li>
                <li className="mb-2 hover:underline">
                  <a href="#">STARMeter Awards</a>
                </li>
                <li className="mb-2 hover:underline">
                  <a href="#">Awards Central</a>
                </li>
                <li className="mb-2 hover:underline">
                  <a href="#">All Events</a>
                </li>
              </ul>
            </div>

            <div>
              <div className="flex flex-row space-x-2">
                <span className="text-yellow-500 text-xl lg:text-2xl mt-1">
                  <MdPeopleAlt />
                </span>
                <h2 className="text-xl lg:text-2xl font-bold mb-4">Celebs</h2>
              </div>
              <ul>
                <li className="mb-2 hover:underline">
                  <a href="#">Born today</a>
                </li>
                <li className="mb-2 hover:underline">
                  <a href="#">Celebrity news</a>
                </li>
                <li className="mb-2 hover:underline">
                  <a href="#">Most Popular Celebs</a>
                </li>
              </ul>
            </div>

            <div>
              <div className="flex flex-row space-x-2">
                <span className="text-yellow-500 text-xl lg:text-2xl mt-1">
                  <FaGlobeAmericas />
                </span>
                <h2 className="text-xl lg:text-2xl font-bold mb-4">
                  Community
                </h2>
              </div>
              <ul>
                <li className="mb-2 hover:underline">
                  <a href="#">Help Center</a>
                </li>
                <li className="mb-2 hover:underline">
                  <a href="#">Contributor Zone</a>
                </li>
                <li className="mb-2 hover:underline">
                  <a href="#">Polls</a>
                </li>
              </ul>
            </div>

            <div>
              <div className="flex flex-row space-x-2">
                <span className="text-yellow-500 text-xl lg:text-2xl mt-1">
                  <MdPlayCircleOutline />
                </span>
                <h2 className="text-xl lg:text-2xl font-bold mb-4">Watch</h2>
              </div>
              <ul>
                <li className="mb-2 hover:underline">
                  <a href="#">What to Watch</a>
                </li>
                <li className="mb-2 hover:underline">
                  <a href="#">Latest Trailers</a>
                </li>
                <li className="mb-2 hover:underline">
                  <a href="#">IMDb Originals</a>
                </li>
                <li className="mb-2 hover:underline">
                  <a href="#">IMDb Picks</a>
                </li>
                <li className="mb-2 hover:underline">
                  <a href="#">IMDb Podcasts</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
