const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <h3>Tour Guide - Tomek Zdunek</h3>
          <ul className="footer-nav">
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
      </footer>
    </>
  );
};

export default Footer;
