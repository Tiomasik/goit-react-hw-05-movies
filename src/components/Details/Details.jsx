import {  Outlet } from "react-router-dom";
import { Suspense } from "react";
import { AiFillCaretLeft } from "react-icons/ai";

import { Main, ButtonBack, FilmInfo, Title, Description, List, LinkBtn } from './Details.styled'

const Details = ({ filmId, loc, date, genre }) => {

  return (
    <Main>
      <ButtonBack to={loc}>
        <AiFillCaretLeft />
        <p>Come Back</p>
      </ButtonBack>
      {filmId && <FilmInfo>
        {filmId.poster_path && <img src={`https://image.tmdb.org/t/p/w500${filmId.poster_path}`} alt="" />}
        {!filmId.poster_path && <img src={"https://sitysun.ru/wp-content/uploads/oboi-vertikalnye-krasivye_74.jpg"} alt="" />}
        <div>
          <h2>{filmId.original_title} ({date})</h2>
          <Title>Overview</Title>
          <Description>{filmId.overview}</Description>
          {genre && <Title>Genres</Title>}
          <Description>{ genre }</Description>
        </div>
      </FilmInfo>}
      <div>
        <List>
          <li>
            <LinkBtn to='cast'>Cast</LinkBtn>
          </li>
          <li>
            <LinkBtn to="reviews">Reviews</LinkBtn>
          </li>
          <li>
            <LinkBtn to="trailer">Trailer</LinkBtn>
          </li>
        </List>
      </div>
      <Suspense >
        <Outlet/>
      </Suspense>
    </Main>
  );
};


export default Details;