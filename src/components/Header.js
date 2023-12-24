import React from 'react'
import { netflix_logo } from '../utils/constants'

const Header = () => {
  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from to-black z-10'>
      <img className="w-40" src = {netflix_logo} alt="logo"></img>
    </div>
  )
}

export default Header
