import { useParams, useLocation, Link } from "react-router-dom";
import { useState } from "react";
import { getAxiosID } from "../Api/getAxios";

export const MovieInfo = () => {
    const { movieId } = useParams();
    const location = useLocation();
    const backLinkHref = location.state.from 
    console.log(backLinkHref)
    
    const [filmId, setFilmId] = useState(getFilm);
    const [genre, setGenre] = useState([]);
    const [date, setDate] = useState('');

    async function getFilm() {
        try {
            const filmInfo = await getAxiosID(movieId)
            const genres = []
            filmInfo.data.genres.map(genre => genres.push(genre.name + ', '))

            if (!filmInfo.data) {
                throw new Error("Alarm!!!");
            }

            setFilmId(filmInfo.data)
            setGenre(genres)
            setDate(filmInfo.data.release_date.split('-')[0])
            console.log(filmInfo)
        } catch (error) {
            console.log(error)
        } 
    }
  return (
      <main>
          <Link to={backLinkHref}>Come Back</Link>
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
    </main>
  );
};