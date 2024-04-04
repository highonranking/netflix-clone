import React from 'react'
import { ReactComponent as Logo } from "../assets/images/logo.svg";


const Header = () => {
  return (
    <div className='absolute  m-10  bg-gradient-to-b from-black z-10'>
         <Logo className='w-44'/>
    </div>
   
  )
}

export default Header