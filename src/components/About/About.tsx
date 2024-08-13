import MainHeading from "../MainHeading/MainHeading";
import AboutText from "./AboutText";

const About = () => {
  return (
    <div>
      <div className="container">
        <MainHeading />
        <h2>O mnie</h2>
        <div className="about-wrapper">
          <div className="img-wrapper">
            <img src="/pictures/TomekZ.webp" alt="Tomek Z. avatar" />
          </div>
          <AboutText />
        </div>
      </div>
    </div>
  );
};

export default About;
