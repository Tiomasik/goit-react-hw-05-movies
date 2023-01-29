import { useLocation, Link } from "react-router-dom";
import PropTypes from 'prop-types';

const ListFilmsSearch = ({ arraySearch }) => {
      const location = useLocation();
  return (
    <ul>{arraySearch.map((film) => (
      <li key={film.id}>
        <Link to={`${film.id}`} state={{ from: location }}>
          <p>{film.title}</p>
        </Link>
      </li>
    ))}</ul>   
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