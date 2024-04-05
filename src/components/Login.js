import React, { useState, useRef } from 'react';
import Header from './Header';
import { checkValidateData } from '../utils/validate';
import { useNavigate } from 'react-router-dom';
import { BANNER_URL, PHOTO_URL } from '../utils/constants';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase'
import sound from '../assets/sounds/themesong.mp3'
import useSound from 'use-sound';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { AvatarGenerator } from 'random-avatar-generator';





const Login = () => {
    const [isSigninForm, setIsSigninForm] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    const dispatch = useDispatch();
    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);
    const [play] = useSound(sound);
    const navigate = useNavigate();
    const generator = new AvatarGenerator();

    const avatar = generator.generateRandomAvatar();




    const toggleSignIn = () => {
        setIsSigninForm(!isSigninForm);
    }

    const handleButtonClick = () => {
        const message = checkValidateData(email.current.value, password.current.value);
        setErrorMessage(message);
        if(message) {
        };
        if(!isSigninForm){
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current.value, photoURL: avatar
                      }).then(() => {
                        const {uid, email, displayName, photoURL} = auth.currentUser;
                        dispatch(addUser({uid:uid, email:email, displayName:displayName, photoURL: photoURL}));
                        play();

                      }).catch((error) => {
                       setErrorMessage(error.message);
                       
                      });
                      
                   
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "-" + errorMessage)
   
    
  });

        }
        else{
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    play();
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "-" + errorMessage)
                });

        }
    }

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    }

    return (
        <div className='relative'>
            <Header />
            <img src={BANNER_URL} alt='banner' className='w-full' />
            <form onSubmit={(e) => e.preventDefault()} className='absolute p-4 md:p-12 bg-black md:w-1/4 w-full min-h-2/3 my-auto top-1/2 transform -translate-y-1/2 mx-auto right-0 left-0 bg-opacity-80 rounded-md text-white' style={{ top: '50%', transform: 'translateY(-50%)' }}>
                <h1 className='text-2xl md:text-3xl font-bold py-2 md:py-4'>{isSigninForm ? "Sign In" : "Sign up"}</h1>
                {!isSigninForm && <input type='text' ref={name} placeholder='Name' className='p-3 my-2 md:my-4 w-full bg-inherit border border-gray-700 rounded-md bg-opacity-70 hover:border-red-700' />}
                <input ref={email} type='text' placeholder='Email Address' className='p-3 my-2 md:my-4 w-full bg-inherit border border-gray-700 rounded-md bg-opacity-70 hover:border-red-700' />
                <div className="relative">
                    <input ref={password} type={showPassword ? 'text' : 'password'} placeholder='Password' className='p-3 my-2 md:my-4 w-full bg-inherit border border-gray-700 rounded-md bg-opacity-70 hover:border-red-700' />
                    <p className='text-sm md:text-md py-1 font-light text-red-600'>{errorMessage}</p>
                    <button className="absolute top-0 py-3 md:py-4 right-0 m-2 md:m-4 text-gray-400 font-light" onClick={togglePasswordVisibility}>
                        {showPassword ? "Hide" : "Show"}
                    </button>
                </div>
                <button onClick={handleButtonClick} className="my-4 md:my-6 px-3 md:px-4 py-2 md:py-2.5 hover:bg-red-800 bg-red-700 w-full rounded-md" type='submit'>{isSigninForm ? "Sign In" : "Sign Up"}</button>
                {isSigninForm ? <p onClick={toggleSignIn} className='text-sm md:text-md py-2 md:py-3 font-light text-gray-400'>New to Netflix? <span className='text-white cursor-pointer'>Sign up now.</span></p> :
                    <p onClick={toggleSignIn} className='text-sm md:text-md py-2 md:py-3 font-light text-gray-400 '>Existing user? <span className='text-white cursor-pointer'>Sign in now.</span></p>}
            </form>
        </div>
    );
    
}

export default Login;
