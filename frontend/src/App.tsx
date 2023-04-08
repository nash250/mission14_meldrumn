import React from 'react';
import './App.css';
import TopBanner from "./Home";
import MovieList from './Movies';
import Podcasts from './Podcasts';
import { Link, Route, Routes } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/podcast'>Podcast</Link>
        </li>
        <li>
          <Link to='/movies'>Movies</Link>
        </li>
      </ul>
      <Routes>
        <Route path='/' element={<TopBanner />} />   
        <Route path='/podcast' element={<Podcasts />} />
        <Route path='/movies' element={<MovieList />} />
      </Routes>
    </div>
  );
}

export default App;
