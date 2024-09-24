import Slider from "react-slick";
import { useGetOffers } from "../../hooks/useGetOffers";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { OfferResponse } from "../../types/offers";
import ClipLoader from "react-spinners/ClipLoader";
import { useNavigate } from "react-router-dom";

const HomeSlider = () => {
  const { offers, loading } = useGetOffers();
  const navigate = useNavigate();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipe: true,
    swipeToSlide: true,
    touchThreshold: 15,
    waitForAnimate: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: false,
    pauseOnHover: true,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 400,
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
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleOfferClick = (offer: OfferResponse[number]) => {
    navigate(`/offers/${offer.typeOfTrip}/${offer.id}`, { state: { offer } });
  };

  if (loading) {
    return (
      <div className="loader-container">
        <ClipLoader size={50} color={"#123abc"} loading={loading} />
      </div>
    );
  }

  return (
    <div className="slider-container">
      <h2>Oferty dla Ciebie</h2>
      <Slider {...settings}>
        {offers.map((offer) => (
          <div key={offer.id} className="slider-item">
            <h2>
              {offer.title}
              <span>{offer.days}</span>
            </h2>

            <div className="slider-img-wrapper">
              <img src={offer.imageMain} alt={`${offer.title}`} />
            </div>
            <p className="slider-offer-price">Cena od:</p>
            <p className="slider-offer-price">{offer.price45people} PLN (45 osób)</p>
            <button className="slider-offer-details-btn" onClick={() => handleOfferClick(offer)}>
              Szczegóły
            </button>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HomeSlider;
