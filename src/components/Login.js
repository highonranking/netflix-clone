import React, { useState, useRef } from 'react';
import Header from './Header';
import { checkValidateData } from '../utils/validate';
import { BANNER_URL } from '../utils/constants';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase'


const Login = () => {
    const [isSigninForm, setIsSigninForm] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    const email = useRef(null);
    const password = useRef(null);

    const toggleSignIn = () => {
        setIsSigninForm(!isSigninForm);
    }

    const handleButtonClick = () => {
        const message = checkValidateData(email.current.value, password.current.value);
        setErrorMessage(message);
        if(message) return;
        if(!isSigninForm){
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    console.log(user);
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
                    console.log(user);
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
        <div> 
            <Header/>
            <div className='absolute'>
                <img src={BANNER_URL} alt='banner'/>
            </div>
            <form onSubmit={(e)=> e.preventDefault()} className='absolute p-12 bg-black w-1/4 h-2/3 my-auto top-0 bottom-0 mx-auto right-0 left-0 bg-opacity-80 rounded-md text-white'>
                <h1 className='text-3xl font-bold py-4'>{isSigninForm ? "Sign In" : "Sign up"}</h1>
                {!isSigninForm && <input type='text' placeholder='Name' className='p-4 my-4 w-full bg-inherit border border-gray-700 rounded-md bg-opacity-70 hover:border-red-700'/>}
                <input ref={email} type='text' placeholder='Email Address' className='p-4 my-4 w-full bg-inherit border border-gray-700 rounded-md bg-opacity-70 hover:border-red-700'/>
                <div className="relative">
                   
                    <input ref={password} type={showPassword ? 'text' : 'password'} placeholder='Password' className='p-4 my-4 w-full bg-inherit border border-gray-700 rounded-md bg-opacity-70 hover:border-red-700'/>
                    <p className='text-md py-1 font-light text-red-600'>{errorMessage}</p>
                    <button className="absolute top-0 py-4 right-0 m-4 text-gray-400 font-light" onClick={togglePasswordVisibility}>
                        {showPassword ? "Hide" : "Show"}
                    </button>
                </div>
                <button onClick={handleButtonClick} className="my-6 px-4 py-2 hover:bg-red-800 bg-red-700 w-full rounded-md" type='submit'>{isSigninForm ? "Sign In" : "Sign Up"}</button>
                {isSigninForm ? <p onClick={toggleSignIn} className='text-md py-3 font-light text-gray-400'>New to Netflix? <span className='text-white cursor-pointer'>Sign up now.</span></p> :
                    <p onClick={toggleSignIn} className='text-md py-3 font-light text-gray-400 '>Existing user? <span className='text-white cursor-pointer'>Sign in now.</span></p>}
            </form>
        </div>
    )
}

export default Login;
