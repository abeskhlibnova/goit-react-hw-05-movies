import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MovieCredits } from 'services/api/Api';
import {
  Button,
  StyledUl,
  StyledImg,
  StyledLi,
  Description,
  ErrorInfo,
} from './Cast.styled';
import noInfo from 'images/noInfo.png';

export default function Cast() {
  const [movieCast, setMovieCast] = useState([]);
  const { movieId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovieCast = async () => {
      const movieCastInfo = await MovieCredits(movieId);
      setMovieCast(movieCastInfo.cast);
    };
    fetchMovieCast();
  }, [movieId]);

  const elements = movieCast.map(({ id, profile_path, name, character }) => (
    <StyledLi key={id}>
      <StyledImg
        src={`https://image.tmdb.org/t/p/w500${profile_path}`}
        alt=""
        width="100"
      />
      <div>
        <Description>{name}</Description>
        <Description>{character}</Description>
      </div>
    </StyledLi>
  ));
  const goBack = () => navigate(-1);

  return (
    <>
      <Button type="button" onClick={goBack}>
        Close cast{' '}
      </Button>
      {movieCast.length === 0 ? (
        <ErrorInfo>
          <p>
            Sorry, We don't have any information about reviews for this movies
          </p>
          <img src={noInfo} alt="" width="150" />
        </ErrorInfo>
      ) : (
        <StyledUl>{elements}</StyledUl>
      )}
    </>
  );
}
