import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'

const MainContainer = () => {
    const movies = useSelector((store)=> store.movies?.nowPlayingMovies)
    if(movies === null) return;


    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    const mainMovies = movies[getRandomInt(movies.length)];
    const {original_title, overview, id} = mainMovies;
  return (
    <div className=''>
      <VideoTitle title={original_title} overview={overview} movieId={id}/>
      <VideoBackground movieId={id}/>
    </div>
  )
}

export default MainContainer
