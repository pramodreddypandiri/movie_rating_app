import React, { useEffect } from 'react'
import MovieListing from '../MovieListing/MovieListing'

import { useDispatch } from 'react-redux'
import {fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice'
function Home() {
  const initialMovies = "Harry"
  const initialShows = "Friends"
  const dispatch = useDispatch();
  useEffect(() => {
     dispatch(fetchAsyncMovies(initialMovies))
     dispatch(fetchAsyncShows(initialShows))
  },[dispatch])
  return (
    <div>
      <div className='banner-img'></div>
      <MovieListing/>
    </div>
  )
}

export default Home