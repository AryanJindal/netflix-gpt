
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { API_options } from '../utils/constants';

const DefaultVideoPlayer = () => {
  const { id } = useParams();
  const [trailerId, setTrailerId] = useState(null);

  useEffect(() => {
    const fetchVideoData = async () => {
      try {
        const data = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
          API_options
        );
        const json = await data.json();
        const filtered_data_trailer = json.results.filter(
          (video) => video.type === 'Trailer'
        );
        const trailer = filtered_data_trailer.length
          ? filtered_data_trailer[0]
          : json.results[0];

        setTrailerId(trailer?.key);
      } catch (error) {
        console.error('Error fetching video data:', error);
      }
    };

    fetchVideoData();
  }, [id]);

  const link = `https://www.youtube-nocookie.com/embed/${trailerId}?si=xWXHrZa7u6LRlbAN&amp;controls=0&autoplay=1&mute=1`;

  return (
    <div className='h-screen w-screen overflow-hidden'>
      <iframe
        src={link}
        title='YouTube video player'
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        allowFullScreen
        className='h-full w-full'
      ></iframe>
    </div>
  );
};

export default DefaultVideoPlayer;
