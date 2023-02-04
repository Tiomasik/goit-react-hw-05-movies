import { useLocation, Link } from "react-router-dom";
import PropTypes from 'prop-types';

import { List } from "../ListFilms/ListFilms.styled";

const ListFilmsSearch = ({ arraySearch }) => {
      const location = useLocation();
  return (
    <List>{arraySearch.map((film) => (
      <li key={film.id}>
        <Link to={`${film.id}`} state={{ from: location }}>
          {film.poster_path && <img width={250} src={`https://image.tmdb.org/t/p/w500${film.poster_path}`} alt="" />}
          {!film.poster_path && <img width={250} src={"https://sitysun.ru/wp-content/uploads/oboi-vertikalnye-krasivye_74.jpg"} alt="" />}
        </Link>
      </li>
    ))}</List>   
  );
};

ListFilmsSearch.propTypes = {
  arraySearch:  PropTypes.arrayOf(
                PropTypes.shape({
                id: PropTypes.number.isRequired,
                title: PropTypes.string.isRequired,
  })),
}

export default ListFilmsSearch;