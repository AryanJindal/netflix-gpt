import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_options } from "../utils/constants";
import {  addTopRatedMovies } from "../utils/movieSlice";

const useTopRatedMovies = () => {
  // Fetch Data from TMDB API and update store
  const dispatch = useDispatch();

  const Movies = useSelector((store) => store.movies.topRated);

  const getMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',
      API_options
    );
    const json = await data.json();
    dispatch(addTopRatedMovies(json.results));
    // console.log(json.results);
  };

  useEffect(() => {
    !Movies && getMovies();
  }, []);
};

export default useTopRatedMovies;