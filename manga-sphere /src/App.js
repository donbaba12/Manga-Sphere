
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar'; 
import Home from './Home'; 
import AllMangas from './AllMangas';
import Trends from './Trends'; 
import Forum from './Forum'; 
import MyList from './MyList';
import { WatchlistProvider } from './WatchlistContext';
import MangaCard from './MangaCard';

function App() {
  return (
    <Router>
      <WatchlistProvider> {/* Move the provider here to wrap all routes */}
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/all-mangas" element={<AllMangas />} />
            <Route path="/trends" element={<Trends />} />
            <Route path="/forum" element={<Forum />} />
            <Route path="/my-list" element={<MyList />} />
          </Routes>
        </div>
      </WatchlistProvider>
    </Router>
  );
}

export default App;

