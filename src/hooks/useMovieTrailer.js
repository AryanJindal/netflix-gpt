import { useEffect } from "react";
import { API_options } from "../utils/constants";
import { useDispatch} from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";

const useMovieTrailer = ({movieId}) => {
  
  const dispatch = useDispatch();
  const getMovieVideo = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_options
    );
    const json = await data.json();
    const filtered_data_trailer = json.results.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = filtered_data_trailer.length
      ? filtered_data_trailer[0]
      : json.results[0];
    dispatch(addTrailerVideo(trailer));
  };
  useEffect(() => {
    getMovieVideo();
  }, []);
};

export default useMovieTrailer;