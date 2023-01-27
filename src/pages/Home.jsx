import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { getAxiosList } from "../Api/getAxios";
import { useMount } from 'react-use';


export const Home = () => {
    const location = useLocation();
    const [films, setFilms] = useState([]);

useMount(() => {
    async function getFilms() {
      try {
          const listFilm = await getAxiosList()
          if (!listFilm.data.results.length) {
            throw new Error("Alarm!!!");
        }
       setFilms(listFilm.data.results)
          
      } catch (error) {
        throw new Error("Sory, no result!");
      }
    }

    getFilms()
        
  })

  return (
    <main>
          {films.length && <ul>
              {films.map((film) => (
                  <li key={film.id}>
                      <Link to={`/movies/${film.id}`} state={{ from: location }}>
                          <p>{film.title}</p>
                      </Link>
                  </li>
              ))}
          </ul>}
          
    </main>
  );
};