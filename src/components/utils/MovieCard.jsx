import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import styles from "./MovieCard.module.css";

const imgUrl = import.meta.env.VITE_IMG;

const MovieCard = ({ movie, ShowLink = true }) => {
  return (
    <div className={styles.cardMovie_container}>
      <img src={imgUrl + movie.poster_path} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>
        <FaStar /> {movie.vote_average}
      </p>
      {ShowLink && <Link to={`/movie/${movie.id}`}><button>Detalhes</button></Link>}
    </div>
  )
};

export default MovieCard