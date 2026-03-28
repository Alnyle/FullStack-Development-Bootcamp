import React from 'react'
import Search from './components/search'
import { useState, useEffect } from 'react'
import Spinner from './components/Spinner';
import MovieCard from './components/MovieCard';
import { useDebounce } from 'react-use';

const API_BASE_URL = 'https://api.themoviedb.org/3'

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const API_OPTION = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    authorization: `Bearer ${API_KEY}`
  }
}


const App = () => {

  // state for typing on search
  const [searchTerm, setSearchTerm] = useState('');
  // state to trach errors
  const [errorMessage, setErrorMessage] = useState('');
  // state for leaded movies from the api
  const [movieList, setMovieList] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('')

  // Debounc the search term to prevent making too many API requests
  // by waiting for the use to stop typing for 500ms
  useDebounce(() => setDebouncedSearchTerm(searchTerm), 500, [searchTerm])

  const fetchMovies = async (query = '') => {


    setIsLoading(true)
    setErrorMessage('')

    try {

      const endpoint = query 
        ? `${API_BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
        : `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`

      // fetching the movies data
      const response = await fetch(endpoint, API_OPTION)


      // throw an error if the response failed
      if (!response.ok) {
        throw new Error('Failed to fetch movies')
      }

      // if response is ok parse the response
      const data = await response.json()

      if(data.Response === 'False') {
        setErrorMessage(data.Error  || 'Failed to fetch movies');
        setMovieList([]);
        return;
      }


      setMovieList(data.results || [])
      console.log(data.Response)
    } catch (error) {
      console.log(`Error fetching movies: ${error}`)
      setErrorMessage('Error fetching movies. Please try again later.')
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchMovies(debouncedSearchTerm)
  }, [debouncedSearchTerm])

  return (
    <main>
      <div className='pattern'/>
      <div className="wrapper">
        <header>
          <img src="./hero.png" alt="Hero Banner" />
          <h1>Find <span className='text-gradient'>Movies</span> you Enjoy Without the Hassle</h1>
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
        </header>

        <div className="all-movies">
          <h2 className='mt-[40px]'>All Movies</h2>

          {isLoading ? (
            <Spinner/>
          ) : errorMessage ? (
            <p className="text-red-500">{errorMessage}</p>
          ) : 
          (
            <ul>
              {movieList.map(movie => (
                <MovieCard key={movie.id}  movie={movie}/>
              ))}
            </ul>
          )}
        </div>
      </div>
    </main>
  )
}

export default App