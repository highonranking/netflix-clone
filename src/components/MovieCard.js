import React from 'react'
import { IMG_BASE_URL } from '../utils/constants'

function MovieCard({posterPath}) {
  return (
    <div>
        <img src={IMG_BASE_URL+posterPath} alt='movie-img'/>
    </div>
  )
}

export default MovieCard