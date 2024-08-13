import MainHeading from "../MainHeading/MainHeading";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div>
      <div className="container">
        <MainHeading />
        <h2>Kontakt</h2>
        <div className="contact-wrapper">
          <h3>Napisz do mnie!</h3>

          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
