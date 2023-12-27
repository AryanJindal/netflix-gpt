import { useEffect } from "react";
import { API_options } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayinMovies } from "../utils/movieSlice";
// import { useSearchParams } from "react-router-dom";

const useNowPlayingMovies = () => {
  const movies = useSelector((store) => store.movies.nowPlayingMovies);
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_options
    );
    const json = await data.json();

    console.log(json.results)
    dispatch(addNowPlayinMovies(json.results));
  };

  useEffect(() => {
    if (movies) return;
    getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
