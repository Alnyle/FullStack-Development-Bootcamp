import React from 'react'
import { useState, useEffect } from 'react'
import searchIcon from './assets/search.svg'
import MovieCard from './components/MovieCard'
import './App.css'
// 33927756


// const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=33927756 '
const API_URL = 'http://www.omdbapi.com?apikey=33927756'
 
const App = () => {

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("")

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&S=${title}`);
    const data = await response.json();

    setMovies(data.Search)
  }

  useEffect(() => {
    searchMovies('Batman')
  }, []);
 
  return (
    <div className="app">
      <h1>Movie Wiki</h1>

      <div className="search">
        <input 
          type="search" 
          placeholder='Search for movies' 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} 
        />

        <img 
          src={searchIcon} 
          alt="search"
          onClick={() => searchMovies({searchTerm})} />
      </div>


        {
          movies?.length > 0  
          ? (
            <div className="container">
              {movies.map((movie) => (
                <MovieCard key={movie.imdbID} movie={movie}/>
              ))}
            </div>
          ) : (
              <div className='empty'>
                <h2>No movies Found</h2>
              </div>
          )
        }
    </div>
  )
}



export default App