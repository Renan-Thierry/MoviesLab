import { useSearchParams } from "react-router-dom";
import Navbar from "../utils/Navbar";
import MovieCard from "../utils/MovieCard";
import { useState, useEffect } from "react";
import styles from "./Home.module.css";


const searchURL = import.meta.env.VITE_SEARCH;
const apiKEY = import.meta.env.VITE_API_KEY;

const Search = () => {
  const [SearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const query = SearchParams.get("q");

  const getSearchMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setMovies(data.results);
  };
  useEffect(() => {
    const searchWithQueryUrl = `${searchURL}?${apiKEY}&query=${query}`;

    getSearchMovies(searchWithQueryUrl)
  }, [query])

  return (
    <>
      <Navbar />
      <div className={styles.home_container}>
        <h1>Resultados para: <span className={styles.result_filme}>{query}</span></h1>
        <div className={styles.list_filmes}>
          {movies.length === 0 && <h1>Filme não encontrado...</h1>}
          {movies && movies.map((movie) =>
            <MovieCard key={movie.id} movie={movie} />
          )}
        </div>
      </div>
    </>
  )
}
export default Search;