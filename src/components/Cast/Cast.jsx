import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { MovieCredits } from 'services/api/Api';
// import nophoto from 'images/nophoto.jpg';

export default function Cast() {
  const [movieCast, setMovieCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovieCast = async () => {
      const movieCastInfo = await MovieCredits(movieId);
      setMovieCast(movieCastInfo.cast);
    };
    fetchMovieCast();
  }, [movieId]);

  const elements = movieCast.map(({ id, profile_path, name, character }) => (
    <li key={id}>
      <img
        src={`https://image.tmdb.org/t/p/w500${profile_path}`}
        alt={name}
        width="100"
      />
      <div>
        <p>{name}</p>
        <p>{character}</p>
      </div>
    </li>
  ));

  return movieCast.length === 0 ? (
    <div>Sorry, We don't have any information about actors for this movies</div>
  ) : (
    <ul>{elements}</ul>
  );
}

// <img
//   src={`https://image.tmdb.org/t/p/w500${profile_path}`}
//   alt={name}
//   width="100"
// />;

// function App() {
//   const [isLoading, setLoading] = React.useState(true);
//   const handleOnLoad = () => {
//     setLoading(false);
//   };

//   return (
//     <div>
//       {isLoading && <div>*Заглушка*</div>}
//       <img
//         alt="alt"
//         onLoad={handleOnLoad}
//         src="https://i.5sfer.com/post/postImage/thumb-8ipwnn.jpg"
//       />
//     </div>
//   );
// }
