import React from "react";
import Navbar from "../Navbar";
import StaticImageSlider from "../StaticImageSlider";
import Footer from "../Footer";
import BornToday from "../apiComponents/BornToday";
import WeeklyTop10 from "../apiComponents/WeeklyTop10";
import TopBoxOffice from "../BoxOffice";
import PopularCelebrities from '../PopularCelebrities'
import Theater from "../Theater";
import Watchlist from '../Watchlist'
import TopPicks from "../TopPicks";
import FanFavorites from "../FanFavorites";
import WhatsStreaming from "../apiComponents/WhatsStreaming";
export default function Home() {

  return (
    <>
      <Navbar />
      <StaticImageSlider />
      <PopularCelebrities />
      <WeeklyTop10 />
      <Theater />
      <WhatsStreaming />
      <TopBoxOffice />
      <Watchlist />
      <TopPicks />
      <BornToday />
      <FanFavorites />
      <Footer />
    </>
  )
}