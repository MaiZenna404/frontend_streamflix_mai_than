export default function NavBar() {
  return (
    <header>
      <nav
        className="navbar flex items-center justify-between px-8 py-6 shadow-lg"
        style={{
          background: "linear-gradient(90deg, #141414 60%, #e50914 100%)",
        }}
      >
        <h1
          className="logo text-3xl font-bold text-red-600"
        >
          Streamflix
        </h1>
        <div className="links-wrapper flex gap-6 text-lg">
          <a
            className="hover:text-red-500 transition font-semibold text-white"
            href="/"
          >
            Accueil
          </a>
          <a
            className="hover:text-red-500 transition font-semibold text-white"
            href="/films"
          >
            Films
          </a>
          <a
            className="hover:text-red-500 transition font-semibold text-white"
            href="/series"
          >
            Séries
          </a>
          <a
            className="hover:text-red-500 transition font-semibold text-white"
            href="/ma-liste"
          >
            Ma Liste
          </a>
          <a
            className="hover:text-red-500 transition font-semibold text-white"
            href="/quiz"
          >
            Quiz
          </a>
        </div>
      </nav>
    </header>
  );
}
