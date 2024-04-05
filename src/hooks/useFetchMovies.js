import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { options } from "../utils/constants";

const useFetchMovies = () =>{
    const [movies, setMovies] = useState([]);
    const dispatch = useDispatch();
    
    useEffect(()=>{
      getNowPlayingMovies();
    },[]);
    
    const getNowPlayingMovies = async () =>{
      const data = await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1", options);
      const json = await data.json();
      const {results} = json;
      dispatch(addNowPlayingMovies(results));
      setMovies(results);
    }
    
    return movies;
}

export default useFetchMovies;
