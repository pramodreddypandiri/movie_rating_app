import React from 'react'
import { useSelector } from 'react-redux'
import { getAllMovies } from '../../features/movies/movieSlice'
import MovieCard from '../MovieCard/MovieCard'
import '../MovieListing/MovieListing.scss'
function MovieListing() {
  // get moovies from getAllMovies action
  const movies = useSelector(getAllMovies)
  let renderMovies = ""
  // render movies(MovieCards) based on response and store in renderMovies  variable
  renderMovies = movies.Response === "True" ? (
    movies.Search.map((movie, index) => (
      <MovieCard key={index} data={movie}/>
    ))
  ) : (<div className="movies-error"><h3>{movies.Error}</h3></div>)
  console.log(renderMovies);
  return (
    //show movie cards in movielisting component
    <div className='movie-wrapper'>
      <div className='movie-list'>
        <h2>Movies</h2>
        <div className='movie-container'>
          
          {renderMovies}
        </div>
      </div>

    </div>
  )
}

export default MovieListing