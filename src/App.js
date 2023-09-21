
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutView from './components/AboutView';
import {Routes, Route} from 'react-router-dom';
import { useState, useEffect } from 'react';
import SearchView from './components/SearchView';

// 921ffd8a4b3025daed7f3998c1c654bf API 

function App() {

const [searchResults, setSearchResults] = useState([])
const [searchText, setSearchText]  = useState('');


  return (
    <div>
      <Navbar searchText={searchText} setSearchText={setSearchText}/>
      <Routes>

        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<AboutView />} />
        <Route path="/search" element={<SearchView keyword={searchText} searchResults={searchResults} />} />
      
      </Routes>
    
      
    </div>
  )
}

export default App;
