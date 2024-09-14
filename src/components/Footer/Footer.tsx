import { NavLink } from "react-router-dom";

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
        </div>
      </footer>
    </>
  );
};

export default Footer;
