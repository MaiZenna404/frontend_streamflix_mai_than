import { useState } from "react";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

interface HeaderProps {
  onSearch: (query: string) => void;
}

const Header = ({ onSearch }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearchChange = (term: string) => {
    setSearchQuery(term);
    onSearch(term);
  };

  return (
    <header role="banner">
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            StreamFlix
          </a>
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleMenu}
            aria-controls="navbarSupportedContent"
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse ms-auto ${
              isMenuOpen ? "show" : ""
            }`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-auto flex">
              <li className="nav-item">
                <Link
                  className="nav-link active text-red"
                  aria-current="page"
                  to="/"
                >
                  Accueil
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/films">
                  Films
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/series">
                  Séries
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/ma-liste">
                  Ma Liste
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/quiz">
                  Quiz
                </Link>
              </li>
            </ul>
            <SearchBar
              searchTerm={searchQuery}
              onSearchChange={handleSearchChange}
            />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
