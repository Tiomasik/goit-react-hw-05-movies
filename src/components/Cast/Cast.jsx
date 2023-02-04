import { useParams } from "react-router-dom";
import { useState } from "react";
import { useMount } from 'react-use';

import { getAxiosActors } from "../../Api/getAxios";
import Loader from '../Loader/Loader'
import { List, Name, Character, ErrorMes } from './Cast.styled'

const Cast = () => {
  const { movieId } = useParams();
  const [filmActors, setFilmActors] = useState([]);
  const [isLoading, setIsLoadings] = useState(false);
  const [error, setError] = useState('');

  useMount(() => {
    async function getFilm() {
      try {
        const searchActors = await getAxiosActors(movieId)
        
        if (searchActors.data.cast.length !== 0) {
          setFilmActors(searchActors.data.cast)
          setIsLoadings(false)
          return 
         }
        setIsLoadings(false)
        setFilmActors([])
        throw new Error("Sory, no result :(");
      } catch (error) {
        setIsLoadings(false)
        setError(error)
        setFilmActors([])
        console.log(error);
      }
    }

    setIsLoadings(true)
    getFilm()      
  })
  return (
    <section>
      {isLoading && <Loader />}
      {error && <ErrorMes>{error.message}</ErrorMes>}
      {filmActors.length !== 0 && <List>
        {filmActors.map((actor) => (
        <li key={actor.id}>
          {actor.profile_path && <img width={100} src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`} alt="" />}
          {!actor.profile_path && <img width={100} src={"https://www.meme-arsenal.com/memes/fefac21eda463aa9a307c7cfdbea1bee.jpg"} alt="" />}
            <div>
              <Name>{actor.name}</Name>
              <Character>Character: {actor.character}</Character>
          </div>
        </li>
        ))}
      </List>}
    </section>
  );
};

export default Cast;


