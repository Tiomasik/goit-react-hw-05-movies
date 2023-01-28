import { useState, useEffect } from "react";
// import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { useMount } from 'react-use';


import { getSearchFilms } from "../Api/getAxios";
import Loader from '../components/Loader'

export const Movies = () => {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const filmName = searchParams.get("query") ?? '';

  const [query, setQuery] = useState('');
  const [searchFilms, setSearchFilms] = useState('');
  const [arraySearch, setArraySearch] = useState([]);
  const [isLoading, setIsLoadings] = useState(false);
  const [error, setError] = useState('');


  const handlChange = (evt) => {
    setQuery(evt.target.value)
    setError('')
  }

  const handlSubmit = (evt) => {
    evt.preventDefault()

    if (query.trim() === '') {
      toast.warn("Please, input something!")
      return
    }

    const nextParams = query !== "" ? { query } : {};
    setSearchParams(nextParams)
    setSearchFilms(query)
    setQuery('')
  }
  
  useMount(() => {
    async function getFilm() {
      try {
        const searchInfo = await getSearchFilms(filmName)
          
        if (searchInfo.data.results.length !== 0) {
          setArraySearch(searchInfo.data.results)
          setIsLoadings(false) 
          return 
        }
        setIsLoadings(false)
        throw new Error("Sory, no result!");
      } catch (error) {
        setIsLoadings(false)
        throw new Error("Sory, no result!");
      }
    }

    if (filmName) {
      setIsLoadings(true)
      getFilm()
    }
  })
    
  useEffect(() => {
    async function getFilm() {
      try {
        const searchInfo = await getSearchFilms(searchFilms)
        if (searchInfo.data.results.length !== 0) {
          setArraySearch(searchInfo.data.results)
          setIsLoadings(false)
          return 
        }
        setIsLoadings(false)
        setArraySearch([])
        throw new Error("Sory, no result!");
      } catch (error) {
        setIsLoadings(false)
        setError(error)
        setArraySearch([])
        throw new Error("Sory, no result!");
      }
    }

    if (searchFilms==='') {
      return
    }

    setIsLoadings(true)
    getFilm()      
  }, [searchFilms])

  return (
    <>
      <form onSubmit={handlSubmit}>
        <input
          className="SearchForm-input"
          type="text"
          value={query}
          onChange={handlChange}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">
            Search
        </button>
      </form>
      <ToastContainer autoClose={3000} />
      {isLoading && <Loader />}
      {error && <h2>{error.message}</h2>}
      <ul>
        {arraySearch.map((film) => (
          <li key={film.id}>
            <Link to={`${film.id}`} state={{ from: location }}>
              <p>{film.title}</p>
                </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

// Movies.propTypes = {
//     onSubmit: PropTypes.func.isRequired
// }
