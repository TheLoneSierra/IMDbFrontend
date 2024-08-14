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
      <nav className=" font-bold py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-x-6">
            <a><img className=" h-12 w-18 rounded-md" src="https://miro.medium.com/v2/resize:fit:1358/1*CbE0yIfYfPMomV0uNghjdA.jpeg"></img></a>
            <button onClick={toggleMenu} className="text-white flex items-center gap-x-1 text-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>Menu
            </button>
          </div>
          <div className="flex-grow mx-4 relative">
            <IoMdSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-800 text-lg" />
            <input
              type="text"
              placeholder="Search IMDb"
              className="w-full pl-4 py-2 rounded focus:outline-none ring-2 focus: ring-yellow-500"
            />
          </div>
          <div className="hidden md:flex space-x-8 text-base items-center">
            <a > <img className=" h-6 w-16" src=" https://th.bing.com/th/id/R.7e03971ec46fb3e139cd8fd6f14ff2c5?rik=Kn7HPadn7EgKFw&riu=http%3a%2f%2fwww.pompo.com%2fwp-content%2fuploads%2f2015%2f03%2fScreen-Shot-2015-03-23-at-10.47.40-PM.png&ehk=8rmJctqXlVmx7vtFOed34vUZStAlXXR0Vu0W1oXSYwo%3d&risl=&pid=ImgRaw&r=0"></img></a>

            <Link to="/watchlist" className="text-white flex items-center gap-x-1">
              <BsBookmarkPlusFill />Watchlist
            </Link>
            <button onClick={openModal} className="text-white">Sign In</button> {/* when clicked on signin btn then form modal will get open */}
            <button className="text-white flex items-center gap-x-1">
              En<IoMdArrowDropdown />
            </button>
          </div>
        </div>
        <SignInModal isOpen={isModalOpen} onClose={closeModal} />
      </nav>
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-100 text-white px-52 pt-7">
          <div className="flex justify-end">
            <button
              onClick={toggleMenu}
              className="text-yellow-500 text-4xl focus:outline-none"
            >
              ✕
            </button>                   {/* this modal is for when menu btn get clicked*/}
          </div>
          <div className="grid grid-cols-3 gap-8 mt-20">
            <div>
              <div className=" flex flex-row space-x-3">
                <span className=" text-yellow-500 text-2xl mt-1"><MdLocalMovies /></span>
                <h2 className="text-2xl font-bold mb-4"> Movies</h2>
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
            <div>
              <div className=" flex flex-row space-x-2">
                <span className=" text-yellow-500 text-2xl mt-1"><PiTelevisionSimpleBold /></span>
                <h2 className="text-2xl font-bold mb-4"> TV Shows</h2>
              </div>

              <ul>
                <li className="mb-2 hover:underline"><a href="#">What's on TV & Streaming</a></li>
                <li className="mb-2 hover:underline"><a href="#">Top 250 TV Shows</a></li>
                <li className="mb-2 hover:underline"><a href="#">Most Popular TV Shows</a></li>
                <li className="mb-2 hover:underline"><a href="#">Browse TV Shows by Genre</a></li>
                <li className="mb-2 hover:underline"><a href="#">TV News</a></li>
              </ul>
            </div>

            <div>
              <div className=" flex flex-row space-x-2">
                <span className=" text-yellow-500 text-2xl mt-1"><FaMedal />            </span>
                <h2 className="text-2xl font-bold mb-4">Awards & Events</h2>
              </div>
              <ul>
                <li className="mb-2 hover:underline"><a href="#">Oscars</a></li>
                <li className="mb-2 hover:underline "><a href="#">Emmys</a></li>
                <li className="mb-2 hover:underline"><a href="#">TIFF</a></li>
                <li className="mb-2 hover:underline"><a href="#">Festival Season</a></li>
                <li className="mb-2 hover:underline"><a href="#">STARMeter Awards</a></li>
                <li className="mb-2 hover:underline"><a href="#">Awards Central</a></li>
                <li className="mb-2 hover:underline"><a href="#">All Events</a></li>
              </ul>
            </div>

            <div>
              <div className=" flex flex-row space-x-2">
                <span className=" text-yellow-500 text-2xl mt-1"><MdPeopleAlt />            </span>
                <h2 className="text-2xl font-bold mb-4">Celebs</h2>
              </div>
              <ul>
                <li className="mb-2 hover:underline"><a href="#">Born today</a></li>
                <li className="mb-2 hover:underline"><a href="#">Celebrity news</a></li>
                <li className="mb-2 hover:underline"><a href="#">Most Popular Celebs</a></li>
              </ul>
            </div>

            <div>
              <div className=" flex flex-row space-x-2">
                <span className=" text-yellow-500 text-2xl mt-1"><MdPlayCircleOutline />            </span>

                <h2 className="text-2xl font-bold mb-4">Watch</h2>
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

            <div>
              <div className=" flex flex-row space-x-2">
                <span className=" text-yellow-500 text-2xl mt-1"><FaGlobeAmericas />            </span>
                <h2 className="text-2xl font-bold mb-4">Community</h2>
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