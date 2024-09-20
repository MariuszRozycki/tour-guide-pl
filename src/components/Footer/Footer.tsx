import { NavLink } from "react-router-dom";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <section className="footer-main-wrap">
            <div className="footer-contact-wrapper">
              <p className="footer-contact-header">Kontakt do Tomka:</p>
              <ul className="footer-contact">
                <li>
                  <a href="tel:+48601786363">
                    <div className="contact-details-icon-wrapper">
                      <img src="/icons/telephone-call.png" alt="Telephone icon" />
                    </div>
                    +48 601-786-363
                  </a>
                </li>
                <li>
                  <a href="mailto:info@tour-guide.pl">
                    <div className="contact-details-icon-wrapper email-icon">
                      <img src="/icons/email-icon.png" alt="Email icon" />
                    </div>
                    info@tour-guide.pl
                  </a>
                </li>
                <li>
                  <a href="mailto:tourguide@poczta.onet.pl">
                    <div className="contact-details-icon-wrapper email-icon">
                      <img src="/icons/email-icon.png" alt="Email icon" />
                    </div>
                    tourguide@poczta.onet.pl
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-nav-wrapper">
              <p className="footer-nav-header">Nawigacja:</p>
              <ul className="footer-nav">
                <li>
                  <NavLink to="/" className={({ isActive }) => (isActive ? "footer-active" : undefined)}>
                    Główna
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about" className={({ isActive }) => (isActive ? "footer-active" : undefined)}>
                    O mnie
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/offers" className={({ isActive }) => (isActive ? "footer-active" : undefined)}>
                    Oferty
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact" className={({ isActive }) => (isActive ? "footer-active" : undefined)}>
                    Kontakt
                  </NavLink>
                </li>
              </ul>
            </div>
          </section>
          <section className="footer-main-wrap">
            <div className="footer-contact-wrapper">
              <p className="footer-contact-header">Web Developer:</p>
              <ul className="footer-contact">
                <li>
                  <a href="tel:+4793928270">
                    <div className="contact-details-icon-wrapper">
                      <img src="/icons/telephone-call.png" alt="Telephone icon" />
                    </div>
                    +47 939 28 270
                  </a>
                </li>
                <li>
                  <a href="mailto:marius.front@gmail.com">
                    <div className="contact-details-icon-wrapper email-icon">
                      <img src="/icons/email-icon.png" alt="Email icon" />
                    </div>
                    marius.front@gmail.com
                  </a>
                </li>
                <li>
                  <a href="https://github.com/MariuszRozycki" target="_blank">
                    <div className="contact-details-icon-wrapper">
                      <FontAwesomeIcon icon={faGithub} />
                    </div>
                    GitHub Mariusz Rozycki
                  </a>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </footer>
    </>
  );
};

export default Footer;
