import React from "react";
import MovieCard from "./MovieCard";
import { MoviesPosterPathUrl } from "../utils/constants";
import ShimmerComponent from "./ShimmerComponent";

const MovieList = ({ title, movies }) => {
  //   console.log(movies);
  return (
    <div className="p-6">
      <h1 className="text-3xl text-white pb-6 font-bold">{title}</h1>

      <div className="flex overflow-x-scroll ">
        <div className="flex">
          {movies &&
            movies.map((movie) => (
              <MovieCard
                key={movie.id}
                poster_path={movie.poster_path}
                overview={movie.overview}
                movieId={movie.id}
              />
            ))}
          {!movies && (
            <div className="flex " >
              <ShimmerComponent />
              <ShimmerComponent />
              <ShimmerComponent />
              <ShimmerComponent />
              <ShimmerComponent />
              <ShimmerComponent />
              <ShimmerComponent />
              <ShimmerComponent />
              <ShimmerComponent />
              <ShimmerComponent />
              <ShimmerComponent />
              <ShimmerComponent />
              <ShimmerComponent />
              <ShimmerComponent />
              <ShimmerComponent />
              <ShimmerComponent />
              <ShimmerComponent />
              <ShimmerComponent />
              <ShimmerComponent />
              <ShimmerComponent />
              <ShimmerComponent />
              <ShimmerComponent />
              <ShimmerComponent />
              <ShimmerComponent />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
export const Img_CDN = MoviesPosterPathUrl;
