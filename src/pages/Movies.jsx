import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addMovies } from "../redux/slices/movie";

import movieApi from "../common/movieApi";
import MovieList from "../components/UI/MovieList";
import FeaturedMovie from "../components/UI/FeaturedMovie";

const Movies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMovies = async () => {
      await movieApi
        .get(`?s=harry&apikey=${process.env.REACT_APP_MOVIE_API_KEY}`)
        .then((res) => {
          dispatch(addMovies(res.data));
        });
    };

    fetchMovies();
  }, []);

  return (
    <div className="">
      <FeaturedMovie />
      <MovieList />
    </div>
  );
};

export default Movies;
