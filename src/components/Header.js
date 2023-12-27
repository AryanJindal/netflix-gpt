// import React from 'react';
// import { netflix_logo,userIcon } from '../utils/constants';
// import { auth } from '../utils/firebase';
// import { signOut,onAuthStateChanged } from 'firebase/auth';
// import { useNavigate } from 'react-router-dom';
// import { useSelector ,useDispatch} from 'react-redux';
// import { useEffect } from 'react';
// import { addUser, removeUser } from '../utils/userSlice';
// import { changeHeader } from '../utils/gptSlice';

// const Header = () => {
//   const navigate = useNavigate( );
//   const user = useSelector(store => store.user)
//   const gptSeachToken = useSelector(store => store.gpt);

//   const handleSignOut = ()=>{

//     signOut(auth).then(() => {
//       // Sign-out successful.
//       navigate("/")
//     }).catch((error) => {
//       // An error happened.
//       navigate("/error")
//     });
//   }
//   const dispatch = useDispatch();
//   useEffect(()=>{
//     //returns unsbscribe function
//       const unsbscribe =  onAuthStateChanged(auth, (user) => {
//           if (user) {
//               //signin/sign-up
//               const {uid, email, displayName} = user;

//               dispatch(addUser({uid:uid, email:email, displayName:displayName}))
//               navigate("/browse")

//           } else {
//               //sign-out
//               dispatch(removeUser());
//               navigate("/")
//           }
//       });
//       //unsubscribe when component unmount
//       return () => unsbscribe();
//   }, [])
  
//   const handleGPTsearchClick = () => {
//     //toggle GPT_seach
//     // gptSeachToken.header==="Homepage" ? navigate("/browse") : navigate("/search")
//     dispatch(changeHeader());
//   }
//   return (
//     <div className='fixed z-20 flex bg-black justify-between w-full  px-8 py-2 bg-gradient-to-b from-black to-transparent '>
//       <img className="w-40" src={netflix_logo} alt="logo" />
      
//       {
//         user && (<div className='flex p-2 items-center'>
//         <button className='py-2 px-3 mx-4 m-2 bg-purple-800 rounded-full text-white' onClick={handleGPTsearchClick} >{gptSeachToken.header}</button>
//         <img className = " rounded-md w-12 h-12" alt="user-icon" src={userIcon}/>
//         <p className='text-white font-bold ml-3 text-l'>{user.displayName}</p>
//         <button onClick={handleSignOut}className='mx-4  p-[8px] rounded-xl bg-red-500'>SignOut</button>
//       </div>)
//       }
//     </div>
//   );
// };

// export default Header;
import React from 'react';
import { netflix_logo, userIcon } from '../utils/constants';
import { auth } from '../utils/firebase';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { addUser, removeUser } from '../utils/userSlice';
import { changeHeader } from '../utils/gptSlice';

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const gptSeachToken = useSelector((store) => store.gpt);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate('/');
      })
      .catch((error) => {
        // An error happened.
        navigate('/error');
      });
  };

  const dispatch = useDispatch();

  useEffect(() => {
    //returns unsubscribe function
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        //signin/sign-up
        const { uid, email, displayName } = user;

        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate('/browse');
      } else {
        //sign-out
        dispatch(removeUser());
        navigate('/');
      }
    });
    //unsubscribe when component unmount
    return () => unsubscribe();
  }, []);

  const handleGPTsearchClick = () => {
    //toggle GPT_search
    // gptSeachToken.header==="Homepage" ? navigate("/browse") : navigate("/search")
    dispatch(changeHeader());
  };

  return (
    <div className='fixed z-20 flex flex-col lg:flex-row bg-black justify-between w-full px-8 py-2 bg-gradient-to-b from-black to-transparent'>
      <div className='flex items-center'>
        <img className='w-40' src={netflix_logo} alt='logo' />
      </div>

      {user && (
        <div className='flex flex-col lg:flex-row p-2 items-center'>
          <button
            className='py-2 px-3 mx-4 m-2 bg-purple-800 rounded-full text-white'
            onClick={handleGPTsearchClick}
          >
            {gptSeachToken.header}
          </button>
          <div className='flex items-center'>
            <img className='rounded-md w-12 h-12' alt='user-icon' src={userIcon} />
            <p className='text-white font-bold ml-3 text-l'>{user.displayName}</p>
          </div>
          <button onClick={handleSignOut} className='mx-4 p-[8px] rounded-xl bg-red-500'>
            SignOut
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
