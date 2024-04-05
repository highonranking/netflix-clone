import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='pt-[35%] px-20 absolute  text-white bg-gradient-to-r from-black w-screen aspect-video'>
        <h1 className='text-5xl font-bold'>{title}</h1>
        <p className='py-6 text-lg w-1/2'> {overview}</p>
        <div className="gap-6 flex ">
            <button className='bg-red-700 rounded-md hover:bg-red-900 hover:opacity-90  px-12 text-xl text-white  py-4'>▶️ Play</button>
            <button className='bg-white  rounded-md border-red-800 border px-12 text-xl text-red-700  py-4'> More info</button>
        </div>
    </div>
  )
}

export default VideoTitle