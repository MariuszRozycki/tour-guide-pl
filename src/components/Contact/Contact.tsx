import MainHeading from "../MainHeading/MainHeading";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div>
      <div className="container">
        <MainHeading />
        <h2>Kontakt:</h2>
        <ul className="contact-details">
          <li>
            <a href="tel:+48601786363">
              <div className="contact-details-icon-wrapper">
                <img src="/icons/telephone-call.png" alt="Telephone icon" />
              </div>
              +48 601-786-363
            </a>
          </li>
          <li>
            <p>Szczegółowy program wycieczki zamów: </p>
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
            <p>albo</p>
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
        <div className="contact-form-wrapper">
          <h3>Napisz do mnie!</h3>

          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
