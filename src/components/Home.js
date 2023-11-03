import Hero from "./Hero";
import MovieList from "./MovieList";
import { useState, useEffect } from "react";

const Home = () => {
  const [homeMovies, setHomeMovies] = useState({});

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=921ffd8a4b3025daed7f3998c1c654bf&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setHomeMovies(data.results);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const randomIndex = Math.floor(Math.random() * homeMovies.length);
  const backdropPath = homeMovies[randomIndex]?.backdrop_path || "";
  const homeBackdropUrl = `https://image.tmdb.org/t/p/original${backdropPath}`;

  return (
    <div>
      <Hero
        text=" Welcome."
        text1="Millions of movies, TV shows and people to discover. Explore now."
        homeBackdropUrl={homeBackdropUrl}
      />
      <MovieList />
    </div>
  );
};

export default Home;
