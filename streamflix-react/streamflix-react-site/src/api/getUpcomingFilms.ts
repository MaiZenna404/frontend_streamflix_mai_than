const API_KEY = "08a341931ab5f5dcee467baeb4a68c76";
const BASE_URL = "https://api.themoviedb.org/3";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";
import { getGenres } from "./fetchFilm";

// Fetch upcoming movies:

export async function getUpcomingMovies() {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=fr-FR&page=1`
    );
    const data = await response.json();
    const movies = await Promise.all(
      data.results.map(
        async (movie: {
          id: number;
          title: string;
          poster_path: string | null; // Allow null values
          release_date: string;
          vote_average: number;
          genre_ids: number[];
        }) => {
          const genreNames = await Promise.all(
            movie.genre_ids.map((id: number) => getGenres(id))
          );
          const imageUrl = movie.poster_path
            ? `${IMAGE_BASE_URL}${movie.poster_path}`
            : "https://via.placeholder.com/500x750?text=No+Image";
          console.log(
            "[getUpcomingMovies] Movie:",
            movie.title,
            "Poster:",
            imageUrl
          );
          return {
            id: movie.id,
            title: movie.title,
            image: imageUrl,
            year: movie.release_date
              ? new Date(movie.release_date).getFullYear().toString()
              : "N/A", // Handle missing release_date
            rating: movie.vote_average.toFixed(1),
            genres: genreNames.filter(
              (name: string | null) => name !== null
            ) as string[],
          };
        }
      )
    );
    console.log("[getUpcomingMovies] Final movies:", movies);
    return movies;
  } catch (error) {
    console.error("Error fetching upcoming movies:", error);
    throw error;
  }
}
