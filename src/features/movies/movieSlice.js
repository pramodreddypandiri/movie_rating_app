import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from '../../common/apis/movieApi'
import {myApiKey} from '../../common/apis/movieApiKey'

// asynchrnous action creator (using middleware thunk)
export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies',  async (searchTerm) => {
    
    const response = await movieApi.get(`?apikey=${myApiKey}&s=${searchTerm}&type=movie`)
      return response.data;

})

export const fetchAsyncShows = createAsyncThunk('movies/fetchAsyncShows',  async (searchTerm) => {
    const searchShows = "Friends"
    const response = await movieApi.get(`?apikey=${myApiKey}&s=${searchTerm}&type=series`)
      return response.data;

})
export const fetchAsyncMovieOrShowDetail = createAsyncThunk('movies/fetchAsyncMovieOrShowDetail',  async (id) => {
    //const searchShows = "Friends"
    const response = await movieApi.get(`?apikey=${myApiKey}&i=${id}&plot-full`)
      return response.data;

})
const initialState = {
    movies: {},
    shows: {},
    selectedMovieOrShow: {},
    
}

const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        removeSelectedMovieOrShow: (state) => {
            state.selectedMovieOrShow = {}
        }
    },
    extraReducers: {
        [fetchAsyncMovies.pending]: () => {
            //console.log("Pending");
            
        },
        [fetchAsyncMovies.fulfilled]: (state, {payload}) => {
            //console.log("fetched successfully")
            return {...state, movies: payload}
        },
        [fetchAsyncMovies.rejected]: () => {
            //console.log("rejected")
            
        },
        [fetchAsyncShows.fulfilled]: (state, {payload}) => {
            //console.log("fecthed successfully")
            return {...state, shows:payload}
            
        },
        [fetchAsyncMovieOrShowDetail.fulfilled]: (state, {payload}) => {
            //console.log("fecthed successfully")
            return {...state, selectedMovieOrShow:payload}
            
        },

    }
})

export const {removeSelectedMovieOrShow} = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies
export const getAllShows = (state) => state.movies.shows
export const getMovieOrShowDetail = (state) => state.movies.selectedMovieOrShow
export default movieSlice.reducer;
