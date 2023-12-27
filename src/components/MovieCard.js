
import React from 'react';
import { MoviesPosterPathUrl } from '../utils/constants';
import { useNavigate } from 'react-router-dom';
const MovieCard = ({ poster_path, original_title, overview,movieId }) => {
  const navigate = useNavigate();
  const handleClick = () =>{
    navigate("/video/" + movieId)
  }
  if(poster_path=== null) return;

  return (
    <div className='relative w-48 p-4 group overflow-y-hidden'>
      {/* Image container with overlay */}
      <div className='relative'>
        <img
          alt='Movie-Poster'
          src={MoviesPosterPathUrl + poster_path}
          className='w-full h-full object-cover'
        />
        {/* Overlay with opacity */}
        <div className='absolute inset-0 bg-black opacity-0 group-hover:opacity-80 transition-opacity'></div>
      </div>
      {/* Overview text */}
      <p className='absolute inset-0 text-white opacity-0 group-hover:opacity-100 transition-opacity' onClick={handleClick}>
        {overview}
      </p>
    </div>
  );
};

export default MovieCard;
