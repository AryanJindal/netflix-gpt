import React from 'react'
import { MoviesPosterPathUrl } from '../utils/constants'

const MovieCard = ({poster_path, original_title}) => {
//   console.log(MoviesPosterPathUrl + poster_path)
    return (
    <div className='w-48 p-4'>
      <img alt='Movie-Poster' src={MoviesPosterPathUrl + poster_path} />
    </div>
  )
}

export default MovieCard
