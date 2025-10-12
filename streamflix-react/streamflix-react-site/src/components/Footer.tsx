const Footer = () => {
  return (
    <footer role="contentinfo">
      <div className="footer-content">
        <section aria-label="social-media">
          <div className="social-media-wrapper">
            <img src="./assets/sns/facebook-svgrepo-com (1).svg" alt="Facebook Icon" />
            <img src="./assets/sns/twitter-svgrepo-com.svg" alt="Twitter Icon" />
            <img src="./assets/sns/instagram-svgrepo-com (2).svg" alt="Instagram Icon" />
            <img src="./assets/sns/youtube-168-svgrepo-com.svg" alt="YouTube Icon" />
          </div>
        </section>
        <section aria-label="footer-navigation" className="footer-links">
          <div className="footer-links-wrapper">
            <div className="column1">
              <a href="#help" aria-label="aide">
                Aide
              </a>
              <a href="#privacy" aria-label="privacy">
                Confidentialité
              </a>
              <a href="#terms" aria-label="terms">
                Conditions d'utilisation
              </a>
            </div>
            <div className="column2">
              <a href="#contact" aria-label="contact">
                Contact
              </a>
              <a href="#jobs" aria-label="jobs">
                Jobs
              </a>
              <a href="#support" aria-label="support">
                Support
              </a>
            </div>
            <div className="column3">
              <a href="#mentions-legales" aria-label="mentions légales">
                Mentions légales
              </a>
              <a href="#streamflix-shop" aria-label="streamflix-shop">
                Streamflix Shop
              </a>
              <a href="#cookies-preferences" aria-label="cookies-preferences">
                Préférences des cookies
              </a>
            </div>
            <div className="column4">
              <a href="#cgu" aria-label="conditions d'utilisation">
                Conditions d'utilisation
              </a>
              <a href="#media-center" aria-label="media-center">
                Media Center
              </a>
              <a href="#company-info" aria-label="company-info">
                Informations sur l'entreprise
              </a>
            </div>
          </div>
        </section>
      </div>
      <div className="copyrights">
        <p>&copy; 2024 StreamFlix. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
