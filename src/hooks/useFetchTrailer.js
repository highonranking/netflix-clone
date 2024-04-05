import React, { useEffect } from 'react'
import { options } from '../utils/constants';
import {useSelector, useDispatch } from 'react-redux';
import { addMovieTrailer } from '../utils/movieSlice';


const useFetchTrailer = ({movieId}) => {
    const dispatch = useDispatch();
    const video = useSelector((store)=>store.movies.movieTrailer);

    useEffect(()=>{
        getMovieVideos();
    },[]);

    const getMovieVideos = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos`, options);
        const {results} = await data.json();
        const videoDatas = results.filter((video)=>(
            video.type==='Trailer'
        ))
        dispatch(addMovieTrailer(videoDatas[0]));

    }
    const key = video?.key;
    return key;

}

export default useFetchTrailer;