import React from 'react';
import { netflix_logo } from '../utils/constants';
import { userIcon } from '../utils/constants';
import { auth } from '../utils/firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';



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
  return (
    <div className='flex justify-between w-full absolute px-8 py-2 bg-gradient-to-b from-black to-transparent z-10'>
      <img className="w-40" src={netflix_logo} alt="logo" />
      
      {
        user && (<div className='flex p-2 items-center'>
        <img className = " rounded-md w-12 h-12" alt="user-icon" src={userIcon}/>
        <button onClick={handleSignOut}className='m-4  p-[12px] rounded-xl bg-red-500'>SignOut</button>
      </div>)
      }
    </div>
  );
};

export default Header;
