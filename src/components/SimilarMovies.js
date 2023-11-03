import React from "react";
import { useState, useEffect } from "react";
import ScrollMovieCard from "./ScrollMovieCard";

const SimilarMovies = ({ movieId }) => {
  const [simMovies, setSimMovies] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=921ffd8a4b3025daed7f3998c1c654bf`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(movieId, data);
        setSimMovies(data.results);
      });
  }, [movieId]);

  const simMovieHtml = simMovies.map((obj, i) => {
    return <ScrollMovieCard movie={obj} Key={i} />;
  });

  return (
    <div>
      <h3 className="pt-5">Similar Movies</h3>
      {simMovieHtml && (
        <div className="container-fluid h-100 w-100 overflow-auto">
          <div className="row flex-nowrap">{simMovieHtml}</div>
        </div>
      )}
    </div>
  );
};
export default SimilarMovies;
