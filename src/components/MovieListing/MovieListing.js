import React from 'react'
import { useSelector } from 'react-redux'
import { getAllMovies, getAllShows } from '../../features/movies/movieSlice'
import MovieCard from '../MovieCard/MovieCard'
import '../MovieListing/MovieListing.scss'
import Slider from 'react-slick'
import { settings } from '../../common/settings'
function MovieListing() {
  
  // get moovies from getAllMovies action
  const movies = useSelector(getAllMovies)
  const shows = useSelector(getAllShows)
  let renderMovies = ""
  let renderShows = ""
  // render movies(MovieCards) based on response and store in renderMovies  variable
  renderMovies = movies.Response === "True" ? (
    movies.Search.map((movie, index) => (
      <MovieCard key={index} data={movie}/>
    ))
  ) : (<div className="movies-error"><h3>{movies.Error}</h3></div>)
  //make show cards
  renderShows = shows.Response === "True" ? (
    shows.Search.map((show, index) => (
      <MovieCard key={index} data={show}/>
    ))
  ) : (<div className="movies-error"><h3>{movies.Error}</h3></div>)
  return (
    //show movie cards in movielisting component
    <div className='movie-wrapper'>
      <div className='movie-list'>
        <h2>Movies</h2>
        <div className='movie-container'>
          <Slider {...settings} >{renderMovies}</Slider>
        </div>
        <div className='show-list'>
          <h2>Shows</h2>
          <div className='show-container'>
            <Slider {...settings}>{renderShows}</Slider></div>
        </div>
      </div>

    </div>
  )
}

export default MovieListing