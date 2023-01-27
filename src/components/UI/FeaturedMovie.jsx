import { useEffect, useState } from "react";
import movieApi from "../../common/movieApi";
import FeaturedMovieBg from "../../assets/featured-movie.png";
import "../../stylesheets/featuredMovie/featuredMovie.scss";
import StarIcon from "@mui/icons-material/Star";
const FeaturedMovie = () => {
  const [featuredMovie, setFeaturedMovie] = useState({});

  useEffect(() => {
    const fetchFeaturedMovie = async () => {
      await movieApi
        .get(`?i=tt0926084&apikey=${process.env.REACT_APP_MOVIE_API_KEY}`)
        .then((res) => {
          setFeaturedMovie(res.data);
        });
    };

    fetchFeaturedMovie();
  }, []);
  return (
    <div
      className="featured-movie bg-img relative "
      style={{ backgroundImage: `url(${FeaturedMovieBg})` }}
    >
      <div className="content-wrapper absolute  flex items-center justify-center">
        <div className="content text-center lg:text-left lg:max-w-3xl px-5 lg:px-0">
          <h1 className="text-[1.5rem] md:text-4xl lg:text-5xl">
            {featuredMovie.Title}
          </h1>
          <p className="text-sm my-3">
            <span className="movie-detail">
              <StarIcon
                sx={{ fontSize: "1rem", fill: "yellow" }}
                className="mb-[.2rem]"
              />
              {featuredMovie.imdbRating}
            </span>
            |<span className="movie-detail">{featuredMovie.Year}</span> |
            <span className="movie-detail">{featuredMovie.Genre}</span> |{" "}
            <span className="movie-detail">{featuredMovie.Runtime}</span>
          </p>

          <p className="text-sm lg:text-[1rem]">{featuredMovie.Plot}</p>
        </div>
      </div>
    </div>
  );
};

export default FeaturedMovie;
