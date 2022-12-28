import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import MovieDetail from './components/MovieDetails/MovieDetail'
import PageNotFound from './components/PageNotFound/PageNotFound'
import './App.scss';
import movieApi from './common/apis/movieApi';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <div className='container'>
            <Routes>
              <Route path='/' exact element={<Home/>}/>
              <Route path='/movie/:imdbID' exact element={<MovieDetail/>}/>
              <Route element={<PageNotFound/>}/>
            </Routes>
        </div>
        <Footer/>
      </Router>
      
      
    </div>
  );
}

export default App;
