import { useParams, useLocation, Link, Outlet } from "react-router-dom";
import { useState } from "react";
import { getAxiosID } from "../Api/getAxios";
import { useMount } from 'react-use';

import Loader from '../components/Loader'

export const MovieInfo = () => {
    const { movieId } = useParams();
    const location = useLocation();
    const backLinkHref = location.state.from 
    
    const [filmId, setFilmId] = useState('');
    const [genre, setGenre] = useState([]);
    const [date, setDate] = useState('');
    const [isLoading, setIsLoadings] = useState(false);

    useMount(() => {
    async function getFilm() {
      try {
          const filmInfo = await getAxiosID(movieId)
          const genres = []
          filmInfo.data.genres.map(genre => genres.push(genre.name + ', '))
          if (!filmInfo.data) {
            setIsLoadings(false)
            throw new Error("Sory, no result!")
        }
        setIsLoadings(false)
          setFilmId(filmInfo.data)
          setGenre(genres)
          setDate(filmInfo.data.release_date.split('-')[0])
          
      } catch (error) {
        setIsLoadings(false)
        throw new Error("Sory, no result!");
      }
    }

    setIsLoadings(true)
    getFilm()    
    })
    
  return (
      <main>
          <Link to={backLinkHref}>Come Back</Link>
          {isLoading && <Loader/>}
          {filmId && <div>
              <h2>
                {filmId.original_title} ({date})
              </h2>
              <p>Overview</p>
              <p>{filmId.overview}</p>
              <p>Genres</p>
              <p>{ genre }</p>
              <img src={`https://image.tmdb.org/t/p/w500${filmId.poster_path}`} alt="" loading="lazy" />
          </div>}
          <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </main>
  );
};