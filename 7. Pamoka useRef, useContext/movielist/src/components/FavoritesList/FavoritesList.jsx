import React, { useContext } from "react";
import { MoviesContext } from "../../App";

export default function FavoritesList() {
  const { favoriteMovies, setFavoriteMovies } = useContext(MoviesContext);

  function removeHandler(movie) {
    setFavoriteMovies((prev) => {
      return prev.filter((mov) => mov.id !== movie.id);
    });
  }

  return (
    <div>
      <ul>
        {favoriteMovies.map((movie) => (
          <li key={movie.id}>
            {movie.title}
            <button onClick={() => removeHandler(movie)}>Remove from favorites</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
