const Hero = () => {
  return (
    <section className="hero-section" aria-labelledby="hero-title">
      <div className="hero-overlay">
        <div className="hero-content">
          <div className="hero-badge">StreamFlix Film</div>
          <h1 className="hero-title">Inception</h1>
          <div className="hero-info">
            <span className="year">2010</span>
            <span className="duration">2h 28min</span>
          </div>
          <p className="hero-description">
            Un voleur qui s'infiltre dans les rêves des autres pour voler leurs
            secrets découvre qu'il doit réaliser l'impossible : planter une idée
            plutôt que de la voler.
          </p>
          <div className="hero-actions">
            <button
              className="button-play"
              type="button"
              aria-controls="video-modal"
              aria-expanded="false"
              aria-label="Lire Inception"
            >
              <span className="play-icon">
                <img
                  src="/assets/icons/play-button-svgrepo-com.svg"
                  alt="Play Icon"
                />
              </span>
              Lecture
            </button>
            <button
              className="button-info"
              type="button"
              aria-controls="info-modal"
              aria-expanded="false"
              aria-label="Plus d'infos sur Inception"
            >
              <span className="info-icon">
                <img src="/assets/icons/Info.svg" alt="Info Icon" />
              </span>
              Plus d'infos
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
