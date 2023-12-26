import React, { useRef, useState } from 'react'
import Header from './Header'
import { newtflix_background } from '../utils/constants'
import { checkValiData } from '../utils/validate';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { updateProfile } from 'firebase/auth';
import { useDispatch } from 'react-redux';

import {userIcon} from "../utils/constants"
import { addUser } from '../utils/userSlice';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isSignInForm , setIsSignInForm] = useState(true);
    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }
    const [ErrorMessage, setErrorMessage] = useState();
    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    
      
    const handleButtonClick = () => {
        //Validate the form data
        //now, either i can use state variables to get the email and password
        //or can use refernce of the input boxes
        const ErrorMessageResponse = checkValiData(email.current.value, password.current.value)
        setErrorMessage(ErrorMessageResponse)
        

        if(ErrorMessage) return;

        //sign-in/sign-up logic
        if(!isSignInForm){
            //sign-up logic

            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                updateProfile(user, {
                    displayName: name.current.value, photoURL: {userIcon}
                  }).then(() => {
                    // Profile updated!
                    // ...
                    const {uid, email, displayName, photoURL} = auth.currentUser;
                    dispatch(addUser({
                        uid:uid, 
                        email:email, 
                        displayName: displayName, 
                        photoURL: photoURL
                    }))
                  }).catch((error) => {
                    // An error occurred
                    // ...
                    setErrorMessage(error)
                  });
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode + " - " + errorMessage)
            });


        }else{
            //sign-in logic
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
              // Signed in 
              const user = userCredential.user;
              // ...
              dispatch(addUser({
                uid: user.uid,
                email: user.email,
                displayName: user.displayName,
                // Add other user properties as needed
              }));
              console.log(user)

            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;

              setErrorMessage(errorCode + " - " + errorMessage)
            });

        }
    }
  return (
    <div>

        <div className='absolute'>
            <Header/>
            <img src={newtflix_background} className='h-[100vh] w-[100vw]' alt='background'></img>
        </div>

        <form onSubmit={(e)=> e.preventDefault()} className='absolute rounded-lg text-white w-4/12 my-36 mx-auto right-0 left-0 bg-black p-12 bg-opacity-80'>
            <h1 className='text-3xl py-4 text-center font-bold '>{isSignInForm ? "Sign In" : "Sign Up"}</h1>

            {!isSignInForm && <input type="text" placeholder='Name' ref={name} className='rounded-lg bg-gray-700 p-4 my-4 w-full'/> }

            <input type="text" ref={email} placeholder='Email-adress' className='rounded-lg bg-gray-700 p-4 my-4 w-full'/>

            <input type="password" ref={password} placeholder='Password' className='rounded-lg bg-gray-700 p-4 my-4 w-full'/>

            <p className='text-red-600 font-bold font-xl'>{ErrorMessage}</p>

            <button className='p-4 my-4 bg-red-700 rounded-lg text-white w-full' onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>

            <p className='py-4 hover:cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix, Sign-up now" : "Already a user? Sign-in now"}</p>
        </form>
    </div>
  )
}

export default Login
