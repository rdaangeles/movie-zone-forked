import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getMovies } from "../redux/slices/movie";

import MovieList from "../components/UI/MovieList";
import FeaturedMovie from "../components/UI/FeaturedMovie";

const Movies = () => {
  const dispatch = useDispatch();
  const movieTitle = "Star Wars";
  
  useEffect(() => {
    dispatch(getMovies(movieTitle));
  }, []);

  return (
    <div className="">
      <FeaturedMovie />
      <MovieList />
    </div>
  );
};

export default Movies;
