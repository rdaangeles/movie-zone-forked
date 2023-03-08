import { LazyLoadImage } from "react-lazy-load-image-component";

import { Link } from "react-router-dom";
const MovieCard = ({ data }) => {
  return (
    <div className="movie-card">
      <Link to={`/movies/${data.imdbID}`}>
        <div className="card-wrapper">
          <div className="card-img ">
            <LazyLoadImage
              src={data.Poster}
              effect="blur"
              height="450px"
              width="100%"
            />
          </div>
          <div className="card-content max-w-xs mt-2">
            <h3 className="">{data.Title}</h3>
            <p>{data.Year}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
