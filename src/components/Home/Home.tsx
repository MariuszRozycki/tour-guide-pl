import HomeAboutText from "./HomeAboutText";
import MainHeading from "../MainHeading/MainHeading";
import HomeSlider from "./HomeSlider";

const Home = () => {
  return (
    <div>
      <div className="container">
        <MainHeading />
        <section>
          <h2>Witaj na stronie głównej!</h2>
          <div className="about-wrapper clearfix">
            <div className="img-wrapper">
              <img src="/pictures/TomekZ.webp" alt="Tomek Z. avatar" />
            </div>
            <HomeAboutText />
          </div>
        </section>
        <section>
          <HomeSlider />
        </section>
      </div>
    </div>
  );
};

export default Home;
