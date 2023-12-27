import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_options } from "../utils/constants";
import {  addUpcomingMovies } from "../utils/movieSlice";

const useUpcomingMovies = () => {
  // Fetch Data from TMDB API and update store
  const dispatch = useDispatch();

  const Movies = useSelector((store) => store.movies.upcoming);

  const getMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', 
      API_options
    );
    const json = await data.json();
    dispatch(addUpcomingMovies(json.results));
    // console.log(json.results);
  };

  useEffect(() => {
    !Movies && getMovies();
  }, []);
};

export default useUpcomingMovies;