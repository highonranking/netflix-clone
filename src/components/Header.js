import React, { useState, useEffect } from 'react';
import { ReactComponent as Logo } from "../assets/images/logo.svg";
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { AVATAR_URL } from '../utils/constants';

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((store) => store.user);
    const [showDropdown, setShowDropdown] = useState(false);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName, photoURL } = user;
                dispatch(addUser({ uid, email, displayName, photoURL }));
                navigate("/browse");
            } else {
                dispatch(removeUser());
                navigate("/");
            }
        });

        return () => {
            unsubscribe();
        };
    }, []);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    const handleLogout = () => {
        signOut(auth)
            .then(() => {})
            .catch((error) => {});
    };

    return (
        <div className='fixed top-0 left-0 right-0 z-10 bg-gradient-to-b from-black px-4 py-3 md:px-6 md:py-4 flex justify-between items-center'>
            <Logo className='w-36 md:w-44' />
            {user && (
                <div className='relative'>
                    <button className='flex items-center' onClick={toggleDropdown}>
                        <img src={user?.photoURL || AVATAR_URL} alt='Profile' className='h-10 w-10 rounded-md mr-2' />
                        <span className='text-white'></span>
                    </button>
                    {showDropdown && (
                        <div className='absolute right-0 mt-2 bg-red-700 rounded-md shadow-lg'>
                            <button
                                className='block px-4 py-2 text-sm text-gray-300 hover:bg-red-800 rounded-md'
                                onClick={handleLogout}
                            >
                                Logout
                            </button>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default Header;
