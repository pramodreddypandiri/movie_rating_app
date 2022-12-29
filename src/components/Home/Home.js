import React, { useEffect } from 'react'
import MovieListing from '../MovieListing/MovieListing'
import movieApi from '../../common/apis/movieApi'
import {myApiKey} from '../../common/apis/movieApiKey'
import { useDispatch } from 'react-redux'
import { addMoives } from '../../features/movies/movieSlice'
function Home() {
  const searchMovie = "Harry"
  const dispatch = useDispatch();
  useEffect(() => {
    
    const fetchMovies = async () => {
      const response = await movieApi.get(`?apikey=${myApiKey}&s=${searchMovie}&type=movie`).catch((err) =>{
        console.log("Error is: " , err);
      })
      dispatch(addMoives(response.data))
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