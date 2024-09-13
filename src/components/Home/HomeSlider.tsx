import Slider from "react-slick";
import { useGetOffers } from "../../hooks/useGetOffers";
import OfferModal from "../Offers/OfferModal";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { OfferResponse } from "../../types/offers";
import { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const HomeSlider = () => {
  const { offers, loading } = useGetOffers();
  const [selectedOffer, setSelectedOffer] = useState<OfferResponse[number] | null>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipe: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: false,
    pauseOnHover: true,
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
              <br />
              {offer.days}
            </h2>
            <div className="slider-img-wrapper">
              <img src={offer.imageMain} alt={`${offer.title}`} />
            </div>
            <p className="slider-offer-price">Cena od: {offer.price45people} PLN</p>
            <button className="slider-offer-details-btn" onClick={() => setSelectedOffer(offer)}>
              Szczegóły
            </button>
          </div>
        ))}
      </Slider>

      <OfferModal isOpen={!!selectedOffer} onClose={() => setSelectedOffer(null)}>
        {selectedOffer && (
          <>
            <h2>
              {selectedOffer.title}
              <br />
              {selectedOffer.days}
            </h2>
            <h3>{selectedOffer.titleSub}</h3>
            <div className="offer-img-wrapper">
              <img src={selectedOffer.imageMain} alt={selectedOffer.title} />
            </div>
            <ul>
              {selectedOffer.description.map((desc, index) => (
                <li key={index}>{desc}</li>
              ))}
            </ul>
            {selectedOffer.price45people !== 0 && (
              <p className="modal-offer-price">Cena (45 osób): {selectedOffer.price45people} PLN</p>
            )}
            {selectedOffer.price40people !== 0 && (
              <p className="modal-offer-price">Cena (40 osób): {selectedOffer.price40people} PLN</p>
            )}
          </>
        )}
      </OfferModal>
    </div>
  );
};

export default HomeSlider;
