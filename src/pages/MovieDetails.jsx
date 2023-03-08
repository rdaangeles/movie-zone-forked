import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  getMovieDetails,
  getSelectedMovieDetails,
  destroySelectedMovie,
} from "../redux/slices/movie";

import { LazyLoadImage } from "react-lazy-load-image-component";
import StarIcon from "@mui/icons-material/Star";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import "../stylesheets/movieDetails/movieDetails.scss";
const MovieDetails = () => {
  const navigateBack = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const selectedMovieDetail = useSelector(getSelectedMovieDetails);

  useEffect(() => {
    dispatch(getMovieDetails(id));

    return () => {
      dispatch(destroySelectedMovie());
    };
  }, [dispatch, id]);

  return (
    <div className="flex items-center justify-around lg:h-screen">
      {Object.keys(selectedMovieDetail).length === 0 ? (
        <h2>Loading...</h2>
      ) : (
        <div className="flex flex-col mt-[5rem] lg:mt-0">
          {/* Back button */}
          <div className="mb-3">
            <button
              onClick={() => navigateBack(-1)}
              className="flex items-center"
            >
              <ArrowBackIosNewIcon />
              <p className="text-sm">Back</p>
            </button>
          </div>

          {/* MOVIE DETAILS */}
          <div className="movie-details-container grid grid-cols-1 lg:grid-cols-3">
            {/* Left - Movie Details */}
            <div className="movie-detail order-2  flex items-center  lg:order-1 lg:col-span-2">
              <div className="content text-center lg:text-left max-w-[35rem] lg:max-w-none">
                <h1 className="text-[1.5rem] text-center md:text-4xl lg:text-left lg:text-5xl">
                  {selectedMovieDetail.Title}
                </h1>

                <p className="text-sm text-center lg:text-left my-3">
                  <span className="movie-detail-genre-rating">
                    <StarIcon
                      sx={{ fontSize: "1rem", fill: "yellow" }}
                      className="mb-[.2rem] mr-1"
                    />
                    {selectedMovieDetail.imdbRating}
                  </span>
                  |
                  <span className="movie-detail-genre-rating">
                    {selectedMovieDetail.Year}
                  </span>{" "}
                  |
                  <span className="movie-detail-genre-rating">
                    {selectedMovieDetail.Genre}
                  </span>{" "}
                  |{" "}
                  <span className="movie-detail-genre-rating">
                    {selectedMovieDetail.Runtime}
                  </span>
                </p>

                <p className="text-sm text-justify px-5 lg:pr-5 lg:pl-0 lg:text-[1rem]">
                  {selectedMovieDetail.Plot}
                </p>

                <p className="mt-5">
                  <span className="mr-1">Actors:</span>
                  {selectedMovieDetail.Actors}
                </p>

                <p>
                  <span className="mr-1">Awards:</span>
                  {selectedMovieDetail.Awards}
                </p>

                <p className="">
                  <span className="mr-1">Director:</span>
                  {selectedMovieDetail.Director}
                </p>

                <p className="">
                  <span className="mr-1">Writer:</span>
                  {selectedMovieDetail.Writer}
                </p>
              </div>
            </div>
            {/* Right - Poster */}
            <div className="movie-poster ">
              <div className="movie-detail-poster">
                <LazyLoadImage
                  src={selectedMovieDetail.Poster}
                  effect="blur"
                  height="450px"
                  width="100%"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
