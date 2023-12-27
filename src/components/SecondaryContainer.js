import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const SecondaryContainer = () => {
  const movies =   useSelector(store => {return store.movies})
  return (
    <div className=' bg-black'>
      
      <div className='-mt-[15rem] relative z-10 '>
      <MovieList title = {"Now Playing"} movies={movies.nowPlayingMovies} />
      <MovieList title = {"Top Rated Movies"} movies={movies.topRated} />
      <MovieList title = {"Popular"} movies={movies.popularMovies} />
      <MovieList title = {"Upcoming"} movies={movies.upcoming} />
      </div>
    </div>
  )
}

export default SecondaryContainer
