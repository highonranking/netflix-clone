import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title, movies}) => {
    if(!movies) return;
    console.log(movies[0].poster_path);
  return (
    <div className='px-8'>
    <h1 className='text-3xl text-white py-8'>{title}</h1>
    <div className='flex overflow-x-auto'>
        {movies.map((movie, index) => (
            <div key={index} className='flex-shrink-0 mr-4 hover:transform hover:scale-110 transition duration-300 ease-in-out'>
                <MovieCard posterPath={movie.poster_path} />
            </div>
        ))}
    </div>
</div>



  )
}

export default MovieList