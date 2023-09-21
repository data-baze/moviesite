
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutView from './components/AboutView';
import {Routes, Route} from 'react-router-dom';
import { useState, useEffect } from 'react';
import SearchView from './components/SearchView';
import MovieView from './components/MovieView';

// 921ffd8a4b3025daed7f3998c1c654bf API 

function App() {

const [searchResults, setSearchResults] = useState([])
const [searchText, setSearchText]  = useState('');

// fetch(`https://api.themoviedb.org/3/search/movie?query=${searchText}&include_adult=false&language=en-US&page=1`)

useEffect(() => {
  if(searchText) {

    fetch(`https://api.themoviedb.org/3/search/movie?api_key=921ffd8a4b3025daed7f3998c1c654bf&query=${searchText}&include_adult=false&language=en-US&page=1`)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      setSearchResults(data.results)
    })
  }
  

}, [searchText])


  return (
    <div>
      <Navbar searchText={searchText} setSearchText={setSearchText}/>
      <Routes>

        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<AboutView />} />
        <Route path="/search" element={<SearchView 
        keyword={searchText} 
        searchResults={searchResults} />} />
        <Route path="/movies/:id" element={<MovieView />} />

      
      </Routes>
    
      
    </div>
  )
}

export default App;
