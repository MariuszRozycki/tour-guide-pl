import Slider from "react-slick";
import { useGetOffers } from "../../hooks/useGetOffers";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomeSlider = () => {
  const offers = useGetOffers();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipe: true,
    arrows: false,
    autoplay: true, // Automatyczne przewijanie slajdów
    autoplaySpeed: 3000, // Prędkość automatycznego przewijania (ms)
    fade: false, // Włącza tryb zanikania między slajdami
    pauseOnHover: true, // Wstrzymuje automatyczne przewijanie na hover
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <h2>Oferty dla Ciebie</h2>
      <Slider {...settings}>
        {offers.map((offer, index) => (
          <div key={index} className="slider-item">
            <h2>{offer.title}</h2>
            <div className="slider-img-wrapper">
              <img src={offer.imageMain} alt={`${offer.title}`} />
            </div>
            <p className="slider-desc-abbrev">{offer.descAbbrev}</p>
            <p className="slider-offer-price">Price: ${offer.price}</p>
            <button className="slider-offer-details-btn">Detale</button>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HomeSlider;
