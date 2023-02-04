import { useState } from "react";
import { useMount } from 'react-use';

import { getAxiosList } from "../Api/getAxios";
import  ListFilms  from "../components/ListFilms/ListFilms";

const Home = () => {
  const [films, setFilms] = useState([]);

  useMount(() => {
    async function getFilms() {
      try {
        const listFilm = await getAxiosList()
        
        if (!listFilm.data.results.length) {
          throw new Error("Sory, try later");
        }
        console.log(listFilm.data.results)
        setFilms(listFilm.data.results)
          
      } catch (error) {
        console.log(error);
      }
    }

    getFilms()    
  })

  return (
    <main>
      {films.length && <ListFilms films={films}></ListFilms>}
    </main>
  );
};

export default Home;