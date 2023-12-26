import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const SecondaryContainer = () => {
  const movies =   useSelector(store => {return store.movies})
  return (
    <div className=' bg-black'>
      
      <div className='-mt-[15rem] relative z-10 '>
      <MovieList title = {"Recommended"} movies={movies.nowPlayingMovies} />
      <MovieList title = {"Trending"} movies={movies.nowPlayingMovies} />
      <MovieList title = {"Now playing"} movies={movies.nowPlayingMovies} />
      <MovieList title = {"Upcoming"} movies={movies.nowPlayingMovies} />
      </div>
    </div>
  )
}

export default SecondaryContainer
