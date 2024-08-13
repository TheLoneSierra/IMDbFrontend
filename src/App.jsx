import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './components/pages/Signup';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import { WatchlistProvider } from './components/WatchlistContext';
import BookmarkedMovies from './components/Bookmarks';
function App() {
  return (
    <WatchlistProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/watchlist' element={<BookmarkedMovies />} />
        </Routes>
      </Router>
    </WatchlistProvider>
  );
}

export default App;
