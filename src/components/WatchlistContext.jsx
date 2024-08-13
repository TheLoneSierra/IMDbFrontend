import React, { createContext, useState } from "react";

export const WatchlistContext = createContext();  //for state management

export function WatchlistProvider ({ children }) {
  const [watchlist, setWatchlist] = useState([]);

  const addToWatchlist = (movie) => {
    // Check if the movie is already in the watchlist
    const isMovieInWatchlist = watchlist.some(
      (item) => item.title === movie.title
    );
    

    if (!isMovieInWatchlist) {  //if movie isnt there then set that movie to the watchlist
      setWatchlist([...watchlist, movie]);
    }
  };

  return (
    <WatchlistContext.Provider value={{ watchlist, addToWatchlist }}>
      {children}
    </WatchlistContext.Provider>
  );
};
