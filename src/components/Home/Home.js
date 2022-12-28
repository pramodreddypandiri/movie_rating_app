import React, { useEffect } from 'react'
import MovieListing from '../MovieListing/MovieListing'
import movieApi from '../../common/apis/movieApi'
import {myApiKey} from '../../common/apis/movieApiKey'
function Home() {
  useEffect(() => {
    const searchMovie = "Harry"
    const fetchMovies = async () => {
      const response = await movieApi.get(`?apikey=${myApiKey}&s=${searchMovie}&type=movie`).catch((err) =>{
        console.log("Error is: " , err);
      })
      console.log("The response from server: ", response);
    }
    fetchMovies();
  },[])
  return (
    <div>
      <div className='banner-img'></div>
      <MovieListing/>
    </div>
  )
}

export default Home