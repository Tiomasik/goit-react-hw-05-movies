import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { getAxiosList } from "../Api/getAxios";



export const Home = () => {
    const location = useLocation();
    const [films, setFilms] = useState(getFilms);

    async function getFilms() {
        try {
            const listFilm = await getAxiosList()

            if (!listFilm.data.results.length) {
                throw new Error("Alarm!!!");
            }
            setFilms(listFilm.data.results)

        } catch (error) {
            console.log(error)
        } 
    }

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