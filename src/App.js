import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutView from "./components/AboutView";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import SearchView from "./components/SearchView";
import MovieView from "./components/MovieView";
import Footer from "./components/Footer";
import ErrorPage from "./components/ErrorPage";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState("");

  const handleSearchClick = () => {
    if (searchText) {
      const apiKey = "921ffd8a4b3025daed7f3998c1c654bf";

      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchText}&include_adult=false&language=en-US&page=1`
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setSearchResults(data.results);
        });
    }
  };
  useEffect(() => {}, [searchText]);

  return (
    <div>
      <Navbar
        onSearchClick={handleSearchClick}
        searchText={searchText}
        setSearchText={setSearchText}
      />
      <Routes>
        <Route path="/moviesite" exact element={<Home />} />
        <Route path="/about" element={<AboutView />} />
        <Route
          path="/search"
          element={
            <SearchView keyword={searchText} searchResults={searchResults} />
          }
        />

        <Route path="/movies/:id" element={<MovieView />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
