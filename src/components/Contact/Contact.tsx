import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ContactForm from "./ContactForm";
import { faEnvelope, faMobileAlt } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <h1>Kontakt:</h1>
        <div className="contact-details-wrapper">
          <div className="img-wrapper">
            <img src="/pictures/contact-us.jpg" alt="Contact us" />
          </div>
          <ul className="contact-details">
            <li>
              <a href="tel:+48601786363">
                <div className="contact-details-icon-wrapper">
                  <FontAwesomeIcon icon={faMobileAlt} />
                </div>
                +48 601-786-363
              </a>
            </li>
            <li>
              <a href="mailto:info@tour-guide.pl">
                <div className="contact-details-icon-wrapper email-icon">
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
                info@tour-guide.pl
              </a>
            </li>
            <li>
              <a href="mailto:tourguide@poczta.onet.pl">
                <div className="contact-details-icon-wrapper email-icon">
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
                tourguide@poczta.onet.pl
              </a>
            </li>
          </ul>
        </div>
        <div className="contact-form-wrapper">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
