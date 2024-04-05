import React, { useState, useEffect } from 'react';
import { ReactComponent as Logo } from "../assets/images/logo.svg";
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';



const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store)=>store.user);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const {uid, email, displayName, photoURL} = user;
          dispatch(addUser({uid:uid, email:email, displayName:displayName, photoURL: photoURL}));
          navigate("/browse")
         
          // ...
        } else {
          dispatch(removeUser());
          navigate("/")
        }
      });
}, [])


  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLogout = () => {
    signOut(auth).then(() => {
    }).catch((error) => {
    });
  };

  return (
    <div className='absolute top-0 left-0 right-0 bg-gradient-to-b from-black z-10 flex justify-between items-center py-4 px-6'>
      <Logo className='w-44' />
      {user &&  <div className="relative">
        <button className="flex items-center" onClick={toggleDropdown}>
          <img src={user?.photoURL||"https://occ-0-4409-3647.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABZD5V1r90jfejoixi1jJ1EkPvN6SDGZygT418_r3e6h5oFrh5YbwAZLnfyPB-dSX7j72qV7PYnW4vmb9hUwPQJR2AqfnUUk.png?r=805"} alt="Logout" className="h-6 w-6 mr-2" />
          <span className="text-white"></span>
        </button>
        {showDropdown && (
          <div className="absolute right-0 mt-2 bg-red-700 rounded-md shadow-lg w-auto">
            <button
              className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:rounded-md hover:bg-red-800"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        )}
      </div>
}
    </div>
  );
};

export default Header;
