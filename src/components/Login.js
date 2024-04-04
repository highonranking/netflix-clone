import React, {useState} from 'react'
import Header from './Header'

const Login = () => {
    const [isSigninForm, setIsSigninForm] = useState(true);

    const toggleSignIn = () => {
        setIsSigninForm(!isSigninForm);
    }
  return (

    <div> 
        <Header/>
        <div className='absolute'>
            <img src='https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/fb548c0a-8582-43c5-9fba-cd98bf27452f/IN-en-20240326-popsignuptwoweeks-perspective_alpha_website_small.jpg' alt='banner'/>
        </div>
            <form className='absolute p-12 bg-black w-1/4 h-2/3 my-auto top-0 bottom-0 mx-auto right-0 left-0 bg-opacity-80 rounded-md text-white'>
                <h1 className='text-3xl font-bold py-4'>{isSigninForm?"Sign In":"Sign up"}</h1>
                {!isSigninForm&& <input type='text' placeholder='Name' className='p-4 my-4 w-full bg-inherit border border-gray-700 rounded-md bg-opacity-70 hover:border-red-700'/>}
                <input type='email' placeholder='Email Address' className='p-4 my-4 w-full bg-inherit border border-gray-700 rounded-md bg-opacity-70 hover:border-red-700'/>
                <input type='password' placeholder='Password' className='p-4 my-4 w-full bg-inherit border border-gray-700 rounded-md bg-opacity-70 hover:border-red-700'/>
                <button className="my-6 px-4 py-2 hover:bg-red-800 bg-red-700 w-full rounded-md" type='submit'>{isSigninForm?"Sign In":"Sign Up"}</button>
                {isSigninForm?<p onClick={toggleSignIn} className='text-md py-3 font-light text-gray-400'>New to Netflix? <span className='text-white cursor-pointer'>Sign up now.</span></p>:
                <p onClick={toggleSignIn} className='text-md py-3 font-light text-gray-400 '>Existing user? <span className='text-white cursor-pointer'>Sign in now.</span></p>}
            </form>
   </div>

  )
}

export default Login