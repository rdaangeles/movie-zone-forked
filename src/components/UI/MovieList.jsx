import { useSelector } from "react-redux";
import { getAllMovies } from "../../redux/slices/movie";
import MovieCard from "./MovieCard";

const MovieList = () => {
  const movies = useSelector(getAllMovies);
  return (
    <div className="flex flex-wrap justify-around items-center gap-5 py-8 content-wrapper">
      {movies.Response === "True" ? (
        movies.Search.map((movie) => (
          <MovieCard data={movie} key={movie.imdbID} />
        ))
      ) : (
        <h1></h1>
      )}
    </div>
  );
};

export default MovieList;
