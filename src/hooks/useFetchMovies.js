import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies,addPopularMovies,addTopRatedMovies } from "../utils/movieSlice";
import { options } from "../utils/constants";

const useFetchMovies = () =>{
    const dispatch = useDispatch();
    
    useEffect(()=>{
      getNowPlayingMovies();
    },[]);

    useEffect(()=>{
      getPopularMovies();
    },[]);

    useEffect(()=>{
      getTopRatedMovies();
    },[]);
    
    
    
    const getNowPlayingMovies = async () =>{
      const data = await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1", options);
      const json = await data.json();
      const {results} = json;
      dispatch(addNowPlayingMovies(results));
    }
    
    const getPopularMovies = async () =>{
      const data = await fetch("https://api.themoviedb.org/3/movie/popular?page=1", options);
      const json = await data.json();
      const {results} = json;
      dispatch(addPopularMovies(results));
    }

    const getTopRatedMovies = async () =>{
      const data = await fetch("https://api.themoviedb.org/3/movie/top_rated?page=1", options);
      const json = await data.json();
      const {results} = json;
      dispatch(addTopRatedMovies(results));
    }

}

export default useFetchMovies;
