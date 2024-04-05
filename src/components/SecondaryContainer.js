import React from 'react'
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
    const movies = useSelector(store => store.movies);

  return (
    <div className=' bg-black'>
        <div className='relative z-10 -mt-32'>
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
        <MovieList title={"Polular Movies"} movies={movies.polularMovies}/>
        <MovieList title={"Top Rated Movies"} movies={movies.topRatedMovies}/>
        </div>
    </div>
  )
}

export default SecondaryContainer