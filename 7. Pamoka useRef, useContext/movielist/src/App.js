import React, { useState } from "react";
import "./App.css";
import FavoritesList from "./components/FavoritesList/FavoritesList";
import MovieList from "./components/MovieList/MovieList";

const movies = [
  { id: 1, title: "The Shawshank Redemption" },
  { id: 2, title: "Pulp Fiction" },
  { id: 3, title: "The Godfather" },
  { id: 4, title: "The Dark Knight" },
  { id: 5, title: "Forrest Gump" },
];

export const MoviesContext = React.createContext();

function App() {
  const [favoriteMovies, setFavoriteMovies] = useState([]);
  return (
    <div>
      <MoviesContext.Provider value={{ setFavoriteMovies, favoriteMovies, movies }}>
        <MovieList />
        <FavoritesList />
      </MoviesContext.Provider>
    </div>
  );
}

export default App;
