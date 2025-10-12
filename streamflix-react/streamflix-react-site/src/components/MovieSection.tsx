import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import { getPopularMovies } from "../api/fetchFilm";
import { getUpcomingMovies } from "../api/getUpcomingFilms";

interface Movie {
  id: number;
  title: string;
  image: string;
  year: string;
  duration: string;
  rating: string;
  genres: string[];
}

interface MovieSectionProps {
  id: string;
  title: string;
  ariaLabel: string;
  movies: Movie[];
}

const MovieSection = ({ id, title, ariaLabel, movies }: MovieSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [moviesList, setMoviesList] = useState<Movie[]>(movies);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadMovies() {
      try {
        setLoading(true);
        const popularMovies = await getPopularMovies();
        setMoviesList(popularMovies);
        setError(null);
      } catch (err) {
        setError("Erreur lors du chargement des films.");
        console.error(err);
      } finally {
        setLoading(false);
      }
      }
      
      async function loadUpcomingMovies() {
          try {
              setLoading(true);
              const upcomingMovies = await getUpcomingMovies();
              setMoviesList(upcomingMovies);
                setError(null);
          } catch (err) {
                setError("Erreur lors du chargement des films à venir : " + err);
          }
          finally {
                setLoading(false);
          }
      }

      if (id === "trending-films") {
          loadMovies();
      } else if (id === "upcoming-films") {
          loadUpcomingMovies();
      } else {
          setMoviesList(movies);
          setLoading(false);
      }
  }, [id, movies]);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <section className={id} aria-label={ariaLabel}>
      <div className="section-toggle">
        <h4>{title}</h4>
        <button
          className="btn btn-outline-secondary btn-sm toggle-visibility-btn"
          type="button"
          aria-label={`Voir plus de films`}
          onClick={toggleVisibility}
        >
          {isVisible ? "Masquer" : "Afficher"}
        </button>
      </div>
      {loading ? (
        <div className="container text-center">
          <p>Chargement des films...</p>
        </div>
      ) : (
        <div
          className={`container text-center ${isVisible ? "show" : "hidden"}`}
        >
          <div className="row films-wrapper">
            {moviesList.map((movie) => (
              <MovieCard
                key={movie.id}
                id={movie.id}
                title={movie.title}
                image={movie.image}
                year={movie.year}
                duration={movie.duration}
                rating={movie.rating}
                genres={movie.genres}
                showAddButton={id === "trending-films" && movie.id === 1}
              />
            ))}
          </div>
        </div>
      )}
      {error && (
        <div className="container text-center">
          <p>{error}</p>
        </div>
      )}
    </section>
  );
};

export default MovieSection;
