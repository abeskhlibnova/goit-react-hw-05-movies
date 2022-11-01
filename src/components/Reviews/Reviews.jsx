import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MovieReviews } from 'services/api/Api';
import {
  Button,
  StyledUl,
  StyledLi,
  Description,
  ErrorInfo,
} from './Reviews.styled';
import noInfo from 'images/noInfo.png';

export default function Reviews() {
  const [movieReviews, setMovieReviews] = useState([]);
  const { movieId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovieReviews = async () => {
      const movieReviewInfo = await MovieReviews(movieId);
      setMovieReviews(movieReviewInfo.results);
    };
    fetchMovieReviews();
  }, [movieId]);

  const elements = movieReviews.map(({ id, author, content }) => (
    <StyledLi key={id}>
      <Description>Author: {author}</Description>
      <Description>{content}</Description>
    </StyledLi>
  ));
  const goBack = () => navigate(-1);
  return (
    <>
      <Button type="button" onClick={goBack}>
        Close reviews
      </Button>
      {movieReviews.length === 0 ? (
        <ErrorInfo>
          <p>
            Sorry, We don't have any information about reviews for this movies
          </p>
          <img src={noInfo} alt="" width="150" />
        </ErrorInfo>
      ) : (
        <StyledUl>{elements}</StyledUl>
      )}
      ;
    </>
  );
}
