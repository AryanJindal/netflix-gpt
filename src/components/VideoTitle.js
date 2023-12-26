import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='pt-[25%] px-24 absolute bg-gradient-to-r from-black w-full aspect-video'>
      <h1 className='text-white text-6xl font-bold'>
        {title}
      </h1>
      <p className='py-6 text-lg text-white w-4/12'>
        {overview}
      </p>
      <div className=''>
        <button className='ml-2 bg-white text-black font-bold p-4 px-16 text-xl bg-opacity-50 rounded-md hover:opacity-80 '> ▶ Play</button>
        <button className='ml-2 bg-gray-100 text-black font-bold p-4 px-16 text-xl bg-opacity-50 rounded-md hover:opacity-50 '>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle