import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "../pages/Home";
import Movie from "../pages/Movie";
import Search from "../pages/Search";

function Rotas() {
  return (
    <div>
      <Router>
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
            <Route path="movie/:id" element={<Movie />} />
            <Route path="search" element={<Search />} />
          </Route>
        </Routes>
      </Router>
    </div>
  )
}
export default Rotas;