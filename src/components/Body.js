import React,{useEffect} from 'react'
import Browse from './Browse'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './Login'
import introsound from "../assets/sounds/themesong.mp3"

const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path:"/",
            element: <Login/>
        },
        {
            path:"/browse",
            element:<Browse/>
        }
    ]);
    useEffect(() => {
        const audio = new Audio(introsound);
        audio.play();

        return () => {
            audio.pause();
        };
    }, []);
  return (
    <div>
       <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body