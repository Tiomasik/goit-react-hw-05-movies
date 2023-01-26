import { useState, useEffect } from "react";
// import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useLocation, useSearchParams } from "react-router-dom";

import { getSearchFilms } from "../Api/getAxios";

export const Movies = () => {
    const location = useLocation();
    const [searchParams, setSearchParams] = useSearchParams();
    const filmName = searchParams.get("query") ?? '';

    const [valueInput, setValueInput] = useState('');
    const [searchFilms, setSearchFilms] = useState('');
    const [arraySearch, setArraySearch] = useState([]);

    const handlChange = (evt) => {
        const  query  = evt.target.value
        console.log(evt.target.value)
        const nextParams = query !== "" ? { query } : {};
        setSearchParams(nextParams)
        setValueInput(filmName)
  }

  const handlSubmit = (evt) => {
    evt.preventDefault()

    if (valueInput.trim() === '') {
      toast.warn("Please, input something!")
      return
    }

    setSearchFilms(valueInput)
    }
    
    useEffect(() => {

    async function getFilm() {
      try {
          const searchInfo = await getSearchFilms(searchFilms)
          if (searchInfo.data.length !== 0) {
              setArraySearch(searchInfo.data.results)
              console.log(searchInfo)
          return 
          }
        throw new Error("Sory, no result!");
      } catch (error) {
        // throw new Error("Sory, no result!");
      }
    }

    if (searchFilms==='') {
      return
    }

        getFilm()
        
  }, [searchFilms])

  return (
      <>
        <form className="SearchForm" onSubmit={handlSubmit}>
        <input
          className="SearchForm-input"
          type="text"
          value={filmName}
          onChange={handlChange}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit" className="SearchForm-button">
            Search
        </button>
    </form>
          <ToastContainer autoClose={3000} />
          {arraySearch.length !==0 && <ul>
              {arraySearch.map((film) => (
                  <li key={film.id}>
                      <Link to={`/movies/${film.id}`} state={{ from: location }}>
                          <p>{film.title}</p>
                      </Link>
                  </li>
              ))}
          </ul>}
      </>
    

  );
}

// Movies.propTypes = {
//     onSubmit: PropTypes.func.isRequired
// }
