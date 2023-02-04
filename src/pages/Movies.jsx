import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useMount } from 'react-use';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { getSearchFilms } from "../Api/getAxios";
import Loader from '../components/Loader/Loader'
import ListFilmsSearch from '../components/ListFilmsSearch/ListFilmsSearch'
import Form from "components/Form/Form";

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const filmName = searchParams.get("query") ?? '';

  const [searchFilms, setSearchFilms] = useState('');
  const [arraySearch, setArraySearch] = useState([]);
  const [isLoading, setIsLoadings] = useState(false);

  const handlSubmit = (query) => {
    const nextParams = query !== "" ? { query } : {};
    setSearchParams(nextParams)
    setSearchFilms(query)
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
      } catch (error) {
        setIsLoadings(false)
        console.log(error);
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
        throw new Error(toast.error("Sory, no result!"));
      } catch (error) {
        setIsLoadings(false)
        setArraySearch([])
        console.log(error);
      }
    }

    if (searchFilms==='') {
      return
    }

    setIsLoadings(true)
    getFilm()      
  }, [searchFilms])

  return (
    <main>
      <Form onSubmit={handlSubmit}></Form>
      <ToastContainer autoClose={3000} />
      {isLoading && <Loader />}
      <ListFilmsSearch arraySearch={arraySearch}></ListFilmsSearch>
    </main>
  );
}

export default Movies;
