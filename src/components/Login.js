import React, { useState } from 'react'
import Header from './Header'
import { newtflix_background } from '../utils/constants'

const Login = () => {
    const [isSignInForm , setIsSignInForm] = useState(true);
    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }
  return (
    <div>

        <div className='absolute'>
            <Header/>
            <img src={newtflix_background} className='h-[100vh] w-[100vw]' alt='background'></img>
        </div>

        <form className='absolute rounded-lg text-white w-4/12 my-36 mx-auto right-0 left-0 bg-black p-12 bg-opacity-80'>
            <h1 className='text-3xl py-4 text-center font-bold '>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
            {!isSignInForm && <input type="text" placeholder='Name' className='rounded-lg bg-gray-700 p-4 my-4 w-full'/> }
            <input type="text" placeholder='Email-adress' className='rounded-lg bg-gray-700 p-4 my-4 w-full'/>
            <input type="password" placeholder='Password' className='rounded-lg bg-gray-700 p-4 my-4 w-full'/>
            <button className='p-4 my-4 bg-red-700 rounded-lg text-white w-full'>{isSignInForm ? "Sign In" : "Sign Up"}</button>
            <p className='py-4 hover:cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix, Sign-up now" : "Already a user? Sign-in now"}</p>
        </form>
    </div>
  )
}

export default Login
