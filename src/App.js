import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./header/Header.js";
import Home from "./pages/home/Home";
import MovieList from "./movieList/MovieList";
// import Movie from './pages/movieDetail/Movie';
import MoviesDet from "./pages/MoviesDet/MoviesDet";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route index element={<Home />}></Route>
          {/* <Route path='movie/:id' element={<Movie/>}></Route> */}
          <Route path="movie/:id" element={<MoviesDet />}></Route>
          <Route path="movies/:type" element={<MovieList />}></Route>
          <Route path="/*" element={<h1>Error page</h1>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
