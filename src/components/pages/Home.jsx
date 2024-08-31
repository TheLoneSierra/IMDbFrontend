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
import PopularInterests from '../apiComponents/Genres';
import { AuthProvider } from "../AuthContext";
import FeaturedToday from "../apiComponents/FeaturedToday";
import News from "../News";
export default function Home() {

  return (
    <>

      <Navbar />
      <StaticImageSlider />
      <FeaturedToday/>
      <PopularCelebrities />
      <AuthProvider> <WeeklyTop10 /></AuthProvider>
      <AuthProvider> <Theater /></AuthProvider>
      <AuthProvider><WhatsStreaming /></AuthProvider>
      <TopBoxOffice />
      <Watchlist />
      <AuthProvider> <TopPicks /></AuthProvider>
      <News/>
      <BornToday />
      <AuthProvider><FanFavorites /> </AuthProvider>
      <PopularInterests />
      <Footer />

    </>
  )
}