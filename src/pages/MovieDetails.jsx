import { useParams, useLocation } from "react-router-dom";
import { useState } from "react";
import { useMount } from 'react-use';

import { getAxiosID } from "../Api/getAxios";
import  Details  from "../components/Details/Details";

const MovieInfo = () => {
  const { movieId } = useParams();
  const location = useLocation();
  
  const [filmId, setFilmId] = useState('');
  const [genre, setGenre] = useState([]);
  const [date, setDate] = useState('');
  const [loc, setLoc] = useState('');
   
  useMount(() => {
    async function getFilm() {
      try {
        const filmInfo = await getAxiosID(movieId)
        const genres = []
        filmInfo.data.genres.map(genre => genres.push(' ' + genre.name))
        
        if (!filmInfo.data) {
          throw new Error("Sory, no result!")
        }
          
        setFilmId(filmInfo.data)
        setGenre(genres.toString().split('').slice(1).join(''))
        setDate(filmInfo.data.release_date.split('-')[0])
          
      } catch (error) {
        console.log(error);
      }
    }
    
    setLoc(location.state?.from ?? "/")
    getFilm()    
    })
    
  return (
    <Details filmId={filmId} loc={loc} date={date} genre={genre}></Details>
  );
};

export default MovieInfo;