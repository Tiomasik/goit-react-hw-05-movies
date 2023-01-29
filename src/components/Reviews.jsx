import { useParams } from "react-router-dom";
import { useState } from "react";
import { useMount } from 'react-use';

import { getAxiosReviews } from "../Api/getAxios";
import Loader from './Loader'
import { Avtor } from './Reviews.styled'

const Reviews = () => {
  const { movieId } = useParams();
  const [filmReviews, setFilmReviews] = useState([]);
  const [isLoading, setIsLoadings] = useState(false);
  const [error, setError] = useState('');

  useMount(() => {
    async function getFilm() {
      try {
        const searchReviews = await getAxiosReviews(movieId)
        
        if (searchReviews.data.results.length !== 0) {
          setFilmReviews(searchReviews.data.results)
          setIsLoadings(false)
          return 
        }

        setIsLoadings(false)
        setFilmReviews([])
        throw new Error("We don't have any reviews for this movie");
      } catch (error) {
        setIsLoadings(false)
        setError(error)
        setFilmReviews([])
        console.log(error);
      }
    }

    setIsLoadings(true)
    getFilm()      
  })
  return (
    <section>
      {isLoading && <Loader />}
      {error && <h2>{error.message}</h2>}
      {filmReviews.length !== 0 &&<ul>
        {filmReviews.map((review) => (
        <li key={review.id}>
          <Avtor>Autor: {review.author}</Avtor>
          <p>{review.content}</p>
        </li>
      ))}</ul>}
    </section>
  );
};

export default Reviews;