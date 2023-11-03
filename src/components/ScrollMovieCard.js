import { Link } from "react-router-dom";

const ScrollMovieCard = ({ movie }) => {
  const posterUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
  const detailUrl = `/movies/${movie.id}`;
  

  return (
    
    <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 col-xs-2 my-4">
        <div className="card card-block">
          <img
            src={
              movie.poster_path != null
                ? posterUrl
                : "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"
            }
            className="card-img-top rounded"
            alt={movie.original_title}
          />
        
          <div className="card-body">
            <h5 className="fw-semibold fs-5">{movie.original_title}</h5>
            <Link to={detailUrl} className="btn btn-primary">
              Show Details
            </Link>
          </div>
        </div>
        </div>
    
      
  );
};

export default ScrollMovieCard;
