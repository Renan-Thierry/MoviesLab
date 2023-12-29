import { Link, useNavigate } from "react-router-dom";
import { BiCameraMovie, BiSearchAlt2 } from 'react-icons/bi';
import styles from './NavBar.module.css'
import { useState } from "react";

function Navbar() {
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return
    navigate(`/search?q=${search}`);
    setSearch("");
  }
  return (
    <>
      <div className={styles.navbar_container}>
        <nav className={styles.navbar}>
          <ul>
            <Link to="/">
              <BiCameraMovie /> <li>MoviesLab</li>
            </Link>
          </ul>
          <form className={styles.form_container} onSubmit={handleSubmit}>
            <input type="text" placeholder="Buscar Filmes" onChange={(e) => setSearch(e.target.value)} value={search} />
            <button type="submit"><BiSearchAlt2 /></button>
          </form>
        </nav>
      </div>
    </>
  )
}
export default Navbar;