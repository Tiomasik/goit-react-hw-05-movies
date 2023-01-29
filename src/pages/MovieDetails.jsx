import { useParams, useLocation, Outlet } from "react-router-dom";
import { useState, Suspense } from "react";
import { getAxiosID } from "../Api/getAxios";
import { useMount } from 'react-use';
import { AiFillCaretLeft } from "react-icons/ai";

// import Loader from '../components/Loader'
import { Main, ButtonBack, FilmInfo, Title, Description, List, LinkBtn } from './MovieDetails.styled'

const MovieInfo = () => {
    const { movieId } = useParams();
    const location = useLocation();
  
    const [filmId, setFilmId] = useState('');
    const [genre, setGenre] = useState([]);
    const [date, setDate] = useState('');
    const [loc, setLoc] = useState('');
    // const [isLoading, setIsLoadings] = useState(false);

  useMount(() => {
    async function getFilm() {
      try {
          const filmInfo = await getAxiosID(movieId)
          const genres = []
          filmInfo.data.genres.map(genre => genres.push(' ' + genre.name))
          if (!filmInfo.data) {
            // setIsLoadings(false)
            throw new Error("Sory, no result!")
        }
        // setIsLoadings(false)
          setFilmId(filmInfo.data)
          setGenre(genres.toString().split('').slice(1).join(''))
          setDate(filmInfo.data.release_date.split('-')[0])
          
      } catch (error) {
        // setIsLoadings(false)
        console.log(error);
      }
    }
    setLoc(location.state?.from ?? "/")
    // setIsLoadings(true)
    getFilm()    
    })
    
  return (
    <Main>
      <ButtonBack to={loc}>
        <AiFillCaretLeft />
        <p>Come Back</p>
      </ButtonBack>
      {/* {isLoading && <Loader/>} */}
      {filmId && <FilmInfo>
        <img width={250} src={`https://image.tmdb.org/t/p/w500${filmId.poster_path}`} alt=""/>
        <div>
          <h2>{filmId.original_title} ({date})</h2>
          <Title>Overview</Title>
          <Description>{filmId.overview}</Description>
          <Title>Genres</Title>
          <Description>{ genre }</Description>
        </div>
      </FilmInfo>}
      <div>
        <p>Additional information</p>
        <List>
          <li>
            <LinkBtn to='cast' filmid={movieId}>Cast</LinkBtn>
          </li>
          <li>
            <LinkBtn to="reviews" filmid={movieId}>Reviews</LinkBtn>
          </li>
        </List>
      </div>
      <Suspense >
        <Outlet/>
      </Suspense>
    </Main>
  );
};

export default MovieInfo;