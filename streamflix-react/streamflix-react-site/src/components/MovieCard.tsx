interface MovieCardProps {
  id: number;
  title: string;
  image: string;
  year: string;
  duration: string;
  rating: string;
  genres: string[];
  showAddButton?: boolean;
}

const MovieCard = ({
  title,
  image,
  year,
  duration,
  rating,
  genres = [], // Default to an empty array
  showAddButton = false,
}: MovieCardProps) => {
  const getGenreBadgeClass = (genre: string) => {
    switch (genre.toLowerCase()) {
      case "action":
        return "text-bg-danger";
      case "sci-fi":
        return "text-bg-info";
      case "drama":
        return "text-bg-light";
      case "crime":
        return "text-bg-secondary";
      case "dark":
        return "text-bg-dark";
      default:
        return "text-bg-warning";
    }
  };

  return (
    <div className="col">
      <div className="card" style={{ width: "fit-content" }}>
        <img
          src={image}
          className="card-img-top size-96"
          alt={`${title} Movie Poster`}
        />
        <div className="show-on-hover">
          <div className="hover-text">
            <h3>{title}</h3>
            <ul aria-label="film-details">
              <li aria-label="released-year">Année : {year}</li>
              <li aria-label="film-duration">Durée : {duration}</li>
              <li aria-label="film-rating">⭐ {rating}</li>
              <li aria-label="film-genres">
                {genres.map((genre, index) => (
                  <span
                    key={index}
                    className={`badge rounded-pill ${getGenreBadgeClass(
                      genre
                    )}`}
                  >
                    {genre}
                  </span>
                ))}
              </li>
            </ul>
            {showAddButton && (
              <button
                type="button"
                className="btn btn-secondary d-flex flex-row add-to-my-list"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                data-bs-custom-class="custom-tooltip"
                data-bs-title="Ajouter à ma liste"
              >
                +
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
