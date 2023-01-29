import { useLocation, Link } from "react-router-dom";
import PropTypes from 'prop-types';

const ListFilms = ({ films }) => {
  const location = useLocation();
  return (
    <ul>{films.map((film) => (
      <li key={film.id}>
        <Link to={`/movies/${film.id}`} state={{ from: location }}>
          <p>{film.title}</p>
        </Link>
      </li>
    ))} </ul>
  );
};

ListFilms.propTypes = {
  films:  PropTypes.arrayOf(
          PropTypes.shape({
          id: PropTypes.number.isRequired,
          title: PropTypes.string.isRequired,
  })),
}

export default ListFilms;