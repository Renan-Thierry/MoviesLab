import { useEffect, useState } from "react";
import MovieCard from "../utils/MovieCard";
import Navbar from "../utils/Navbar";
import styles from "./Home.module.css";

const movieURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
  const [topMovies, setTopMovies] = useState([]);

  const TopFIlmes = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setTopMovies(data.results);
  };
  useEffect(() => {
    const topRatedUrl = `${movieURL}top_rated?${apiKey}`

    TopFIlmes(topRatedUrl)
  }, [])
  return (
    <>
      <Navbar />
      <div className={styles.home_container}>
        <h1>Melhores Filmes</h1>
        <div className={styles.list_filmes}>
          {topMovies.length === 0 && <p>Carregando...</p>}
          {topMovies && topMovies.map((movie) =>
            <MovieCard key={movie.id} movie={movie} />
          )}
        </div>
      </div>
    </>
  )
}
export default Home;