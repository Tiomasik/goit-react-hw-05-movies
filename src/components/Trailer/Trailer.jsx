import { useParams } from "react-router-dom";
import { useState } from "react";
import { useMount } from 'react-use';

import { getAxiosVideo } from "../../Api/getAxios";
import Loader from '../Loader/Loader'
import { Player, ErrorMes } from "./Trailer.styled";

const Trailer = () => {
  const { movieId } = useParams();
  const [filmVideo, setFilmVideo] = useState({});
  const [isLoading, setIsLoadings] = useState(false);
  const [error, setError] = useState('');

  useMount(() => {
    async function getFilm() {
      try {
        const searchVideos = await getAxiosVideo(movieId)
          const trailer = searchVideos.data.results.find(video => 
            video.type === 'Trailer'
          )
          
        if (trailer) {
          setFilmVideo(trailer)
          setIsLoadings(false)
          return 
        }
          
        setIsLoadings(false)
        setFilmVideo({})
        throw new Error("Sory, trailer isn't found :(");
      } catch (error) {
        setIsLoadings(false)
        setError(error)
        setFilmVideo({})
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
          {!error &&<Player>
              <iframe
                  width="640"
                  height="360"
                  src={`https://www.youtube.com/embed/${filmVideo.key}`}
                  title={filmVideo.name}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen></iframe>
          </Player>}
    </section>
  );
};

export default Trailer;