import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MovieSection from "./components/MovieSection";
import Footer from "./components/Footer";
import { getPopularMovies, searchMovies } from "./api/fetchFilm";

export interface Movie {
  id: number;
  title: string;
  image: string;
  year: string;
  duration: string;
  rating: string; // Change to string to match MovieSection's expectation
  genres: string[];
}

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    async function loadMovies() {
      try {
        setLoading(true);
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
        setError(null);
      } catch (err) {
        console.error(err);
        setError("Impossible de charger les films");
      } finally {
        setLoading(false);
      }
    }

    loadMovies();
  }, []);

  useEffect(() => {
    if (searchQuery.trim() === "") {
      return;
    }

    const timeoutId = setTimeout(async () => {
      try {
        setLoading(true);
        const results = await searchMovies(searchQuery);
        setMovies(results);
        setError(null);
      } catch (err) {
        console.error(err);
        setError("Erreur lors de la recherche");
      } finally {
        setLoading(false);
      }
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [searchQuery]);

  const handleSearch = async (query: string) => {
    setSearchQuery(query);

    if (query.trim() === "") {
      try {
        setLoading(true);
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (err) {
        console.error(err);
        setError("Impossible de charger les films");
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="App">
      <Header onSearch={handleSearch} />
      <main id="main-content" role="main">
        <Hero />
        {loading && (
          <div className="text-center">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Chargement...</span>
            </div>
          </div>
        )}

        {error && <div className="alert alert-danger">{error}</div>}

        {!loading && !error && (
          <>
            {searchQuery ? (
              <section className="search-results">
                <h4>Résultats de recherche pour "{searchQuery}"</h4>
                {movies.length === 0 ? (
                  <div className="alert alert-warning">
                    Aucun résultat trouvé
                  </div>
                ) : (
                  <div className="container">
                    <div className="row films-wrapper gap-2">
                      {movies.map((movie) => (
                        <div key={movie.id} className="col">
                          <div className="card" style={{ width: "18rem" }}>
                            <img
                              src={movie.image}
                              className="card-img-top"
                              alt={`${movie.title} Movie Poster`}
                            />
                            <div className="show-on-hover">
                              <div className="hover-text">
                                <h3>{movie.title}</h3>
                                <ul aria-label="film-details">
                                  <li aria-label="released-year">
                                    Année : {movie.year}
                                  </li>
                                  <li aria-label="film-duration">
                                    Durée : {movie.duration}
                                  </li>
                                  <li aria-label="film-rating">
                                    ⭐ {movie.rating}
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </section>
            ) : (
              <>
                <MovieSection
                  id="trending-films"
                  title="Tendances actuelles"
                  ariaLabel="actual-trending-film"
                  movies={[]}
                />
                <MovieSection
                  id="upcoming-films"
                  title="Films à venir"
                  ariaLabel="actual-upcoming-film"
                  movies={[]}
                />
              </>
            )}
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
