import React from 'react';
import { netflix_logo,userIcon } from '../utils/constants';
import { auth } from '../utils/firebase';
import { signOut,onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useSelector ,useDispatch} from 'react-redux';
import { useEffect } from 'react';
import { addUser, removeUser } from '../utils/userSlice';

const Header = () => {
  const navigate = useNavigate( );
  const user = useSelector(store => store.user)

  const handleSignOut = ()=>{

    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/")
    }).catch((error) => {
      // An error happened.
      navigate("/error")
    });
  }
  const dispatch = useDispatch();
  useEffect(()=>{
    //returns unsbscribe function
      const unsbscribe =  onAuthStateChanged(auth, (user) => {
          if (user) {
              //signin/sign-up
              const {uid, email, displayName} = user;

              dispatch(addUser({uid:uid, email:email, displayName:displayName}))
              navigate("/browse")

          } else {
              //sign-out
              dispatch(removeUser());
              navigate("/")
          }
      });
      //unsubscribe when component unmount
      return () => unsbscribe();
  }, [])
  
  return (
    <div className='flex justify-between w-full absolute px-8 py-2 bg-gradient-to-b from-black to-transparent z-10'>
      <img className="w-40" src={netflix_logo} alt="logo" />
      
      {
        user && (<div className='flex p-2 items-center'>

        <img className = " rounded-md w-12 h-12" alt="user-icon" src={userIcon}/>
        <p className='text-white font-bold ml-3 text-l'>{user.displayName}</p>
        <button onClick={handleSignOut}className='mx-4  p-[8px] rounded-xl bg-red-500'>SignOut</button>
      </div>)
      }
    </div>
  );
};

export default Header;
