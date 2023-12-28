import React  from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import { useSelector } from 'react-redux'
import GPTseach from './GPTseach'
import usePopularMovies from '../hooks/usePopularMovies'
import useUpcomingMovies from '../hooks/useUpcomingMovies'
import useTopRatedMovies from '../hooks/useTopRatedMovies'
const Browse = () => {
  useNowPlayingMovies()
  usePopularMovies();
  useUpcomingMovies()
  useTopRatedMovies()
  
  const gptSeachToken = useSelector(store => store.gpt)

  return (
    <div className=''>
      <Header/>

      <div>
      {
        gptSeachToken.header === "Homepage" ? (<GPTseach/>) : (
          <>
          <MainContainer/>
          <SecondaryContainer/>
          </>
        )
      }
      </div>
    </div>
  )
}

export default Browse
