import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { MovieReviews } from 'services/api/Api';

export default function Reviews() {
  const [movieReviews, setMovieReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovieReviews = async () => {
      const movieReviewInfo = await MovieReviews(movieId);
      setMovieReviews(movieReviewInfo.results);
    };
    fetchMovieReviews();
  }, [movieId]);

  console.log(movieReviews);

  const elements = movieReviews.map(({ id, author, content }) => (
    <li key={id}>
      <p>Author: {author}</p>
      <p>{content}</p>
    </li>
  ));

  return movieReviews.length === 0 ? (
    <div>
      Sorry, We don't have any information about reviews for this movies
    </div>
  ) : (
    <ul>{elements}</ul>
  );
}
