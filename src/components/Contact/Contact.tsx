import MainHeading from "../MainHeading/MainHeading";

const Contact = () => {
  return (
    <div>
      <div className="container">
        <MainHeading />
        <h2>Kontakt</h2>
        <div className="about-wrapper">
          <div className="img-wrapper">
            <img src="/pictures/TomekZ.webp" alt="Tomek Z. avatar" />
          </div>
          <ul className="about-text">
            <li>
              <p>Napisz do mnie!</p>
            </li>
            <li>
              <p>Z wyrazami szacunku,</p>
              <p>Tomasz Zdunek Właściciel Tour Guide</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
