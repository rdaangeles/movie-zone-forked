import { useDispatch, useSelector } from "react-redux";
import { getAllMovies, getMovies } from "../../redux/slices/movie";
import { useState } from "react";

import MovieCard from "./MovieCard";
import SearchIcon from "@mui/icons-material/Search";
import Helmet from "./Helmet";

const MovieList = () => {
  const [searchMovies, setSearchMovies] = useState("");
  const movies = useSelector(getAllMovies);
  const dispatch = useDispatch();

  return (
    <Helmet title="Movie List">
      <div className="py-8 content-wrapper">
        <div className="search-wrapper mb-12 flex items-center gap-10 justify-center">
          <div className="search-content flex items-center">
            <input
              type="text"
              placeholder="Search here"
              value={searchMovies}
              onChange={(e) => {
                setSearchMovies(e.target.value);
              }}
            />
            <div
              className="cursor-pointer ml-2"
              onClick={() => {
                dispatch(getMovies(searchMovies));
                setSearchMovies("");
              }}
            >
              <SearchIcon sx={{ fontSize: "2rem", marginRight: ".4rem" }} />
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-around items-center gap-5 ">
          {/* Movie Cards */}

          {movies.Response === "True" ? (
            movies.Search.map((movie) => (
              <MovieCard data={movie} key={movie.imdbID} />
            ))
          ) : (
            <h1></h1>
          )}
        </div>
      </div>
    </Helmet>
  );
};

export default MovieList;
