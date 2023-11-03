
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Hero from "./Hero";
import SimilarMovies from "./SimilarMovies";

const MovieView = () => {
  const { id} = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=921ffd8a4b3025daed7f3998c1c654bf&language=en-US`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovieDetails(data);
        setIsLoading(false);
      });
      
      
  }, [id]);

  function renderMovieDetails () {
    if (isLoading) {
      return <Hero text="Loading..." />;
    }

    if (movieDetails) {
      const posterPath = `https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`;
      const backdropUrl = `https://image.tmdb.org/t/p/original/${movieDetails.backdrop_path}`;
     

      return (
        <div>
          <Hero text={movieDetails.original_title} backdrop={backdropUrl} />
          <div className="container my-5">
            <div className="row">
              <div className="col-md-3">
                <img
                  src={
                    movieDetails.poster_path != null
                      ? posterPath
                      : 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg'
                  }
                  alt={movieDetails.original_title}
                  className="img-fluid shadow rounded"
                />
              </div>
              <div className="col-md-9">
                <h2>{movieDetails.original_title}</h2>
                <p className="lead">{movieDetails.overview}</p>

                <div className="mb-3">
                  <strong>Release Date:</strong> {movieDetails.release_date}
                </div>
                <div className="mb-3">
                  <strong>Genres:</strong>{" "}
                  {movieDetails.genres &&
                    movieDetails.genres.map((genre) => genre.name).join(", ")}
                </div>
                <div className="mb-3">
                  <strong>Vote Average:</strong> {movieDetails.vote_average}
                </div>
                <div className="mb-3">
                  <strong>Vote Count:</strong> {movieDetails.vote_count}
                </div>
              </div>
            </div>
            <SimilarMovies movieId={id} />
          </div>
        </div>





      );
    }
  };

  return renderMovieDetails();
};

export default MovieView;
