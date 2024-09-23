import HomeAboutText from "./HomeAboutText";
import Hero from "./Hero";
import HomeSlider from "./HomeSlider";

const Home = () => {
  return (
    <section className="home">
      <div className="container">
        <Hero />

        <article>
          <h2>Witaj na stronie głównej!</h2>
          <div className="home-content-wrapper">
            <div className="img-wrapper">
              <img src="/pictures/tomek-zdunek.jpg" alt="Tour Guide - Tomek Zdunek" />
            </div>
            <HomeAboutText />
          </div>
        </article>
        <section aria-label="Slider">
          <HomeSlider />
        </section>
      </div>
    </section>
  );
};

export default Home;
