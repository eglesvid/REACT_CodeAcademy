import React, { useContext } from "react";
import { MoviesContext } from "../../App";

export default function MovieList() {
  const { favoriteMovies, setFavoriteMovies, movies } = useContext(MoviesContext);

  const addFavorite = (movie) => {
    // Patikrina, ar dar nebuvo pridetas sitas filmas filmas
    if (!favoriteMovies.find((m) => m.id === movie.id)) {
      setFavoriteMovies([...favoriteMovies, movie]);
    }
  };

  return (
    <div>
      <h2>Movie List</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            {movie.title}
            <button onClick={() => addFavorite(movie)}>Add to Favorites</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
