import { BsGraphUp, BsWallet2, BsFillFileEarmarkTextFill, BsHourglassSplit } from 'react-icons/bs';
import styles from './Movie.module.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import MovieCard from '../utils/MovieCard';

const movieURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const getMovie = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setMovie(data);
  };
  const formatCurrency = (number) => {
    return number.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    })
  }
  useEffect(() => {
    const UrlFilme = `${movieURL}${id}?${apiKey}`
    getMovie(UrlFilme)
  }, [])

  return (
    <div className={styles.movie_page}>
      {movie && (
        <>
          <div className={styles.div1}>
            <MovieCard movie={movie} ShowLink={false} />
            <p>{movie.tagline}</p>
          </div>
          <section >
            <div className={styles.info}>
              <h3><BsWallet2 /> Orçamento:</h3>
              <p>{formatCurrency(movie.budget)} de dólares</p>
            </div>
            <div className={styles.info}>
              <h3><BsGraphUp /> Receita:</h3>
              <p>{formatCurrency(movie.revenue)} de dólares</p>
            </div>
            <div className={styles.info}>
              <h3><BsHourglassSplit /> Duração:</h3>
              <p>{movie.runtime} minutos</p>
            </div>
            <div className={styles.info}>
              <h3><BsFillFileEarmarkTextFill /> Descrição:</h3>
              <p>{movie.overview}</p>
            </div>
          </section>
        </>
      )}
    </div>
  )
}
export default Movie;