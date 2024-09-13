import HomeAboutText from "./HomeAboutText";
import Hero from "./Hero";
import HomeSlider from "./HomeSlider";

const Home = () => {
  return (
    <div>
      <div className="container">
        <Hero />

        <section>
          <h2>Witaj na stronie głównej!</h2>
          <div className="about-wrapper clearfix">
            <div className="img-wrapper">
              <img src="/pictures/tomek-zdunek.jpg" alt="Tour Guide - Tomek Zdunek" />
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
