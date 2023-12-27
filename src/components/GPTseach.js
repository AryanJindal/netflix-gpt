import React, { useRef } from "react";
import { newtflix_background } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import MovieList from "./MovieList";
import GeminiCaller from "../utils/useGeminiCaller";
import { API_options } from "../utils/constants";
import { updateTextByGpt, updateMovies } from "../utils/gptSlice";

const GPTSearch = () => {
  const moviesFromGpt = useSelector((store) => store.gpt);
  const text = useRef();
  const dispatch = useDispatch();

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_options
    );
    const json = await data.json();

    return json.results;
  };

  const handleSubmitBeaviour = async (event) => {
    event.preventDefault();
    console.log(text.current.value);
    const generativeResults = await GeminiCaller(text.current.value);
    console.log(generativeResults);
    // console.log("AabraKaDaabra")

    const moviesArray = generativeResults.split(",");
    console.log(moviesArray);
    dispatch(updateTextByGpt(moviesArray));

    const promiseArray = moviesArray.map((movie) => searchMovieTMDB(movie));
    const tmdbResults = await Promise.all(promiseArray);
    console.log(tmdbResults);
    dispatch(updateMovies(tmdbResults));
  };

  return (
    <div className="w-full">
      <div
        className="fixed inset-0 w-full h-full z-[-1]"
        style={{
          backgroundImage: `url(${newtflix_background})`,
          backgroundSize: "cover",
        }}
      />
      <div className="w-full fixed mx-auto mt-[15vh]">
        <form
          className="bg-black opacity-90 flex justify-center items-center"
          onSubmit={handleSubmitBeaviour}
        >
          <input
            className="border-4 m-3 p-3 rounded-lg w-[50%]"
            ref={text}
            placeholder="What would you like to view today?"
          ></input>
          <button className="m-4 p-2 bg-red-500 opacity-85">Search</button>
        </form>

        <div className="bg-black opacity-80">
          {moviesFromGpt.textByGpt !== null &&
            moviesFromGpt.movies &&
            moviesFromGpt.movies.map((movie, i) => (
              <MovieList
                key={i}
                title={moviesFromGpt.textByGpt[i]}
                movies={movie}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default GPTSearch;
