import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"movies",
    initialState: {
        nowPlayingMovies: null,
        polularMovies: null,
        topRatedMovies:null,
        movieTrailer: null,
    },
    reducers: {
        addNowPlayingMovies: (state, action) =>{
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies: (state, action) =>{
            state.polularMovies = action.payload;
        },
        addTopRatedMovies: (state, action) =>{
            state.topRatedMovies = action.payload;
        },
        addMovieTrailer: (state, action) => {
            state.movieTrailer = action.payload
        }
    },
});

export const{addNowPlayingMovies,addMovieTrailer,addPopularMovies,addTopRatedMovies} = movieSlice.actions;
export default movieSlice.reducer;