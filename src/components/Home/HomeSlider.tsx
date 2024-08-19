import Slider from "react-slick";
import { useGetOffers } from "../../hooks/useGetOffers";
import OfferModal from "../Offers/OfferModal";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { OfferResponse } from "../../types/offers";
import { useState } from "react";

const HomeSlider = () => {
  const offers = useGetOffers();
  const [selectedOffer, setSelectedOffer] = useState<OfferResponse[number] | null>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipe: true,
    arrows: false,
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

  return (
    <div className="slider-container">
      <h2>Oferty dla Ciebie</h2>
      <Slider {...settings}>
        {offers.map((offer) => (
          <div key={offer.id} className="slider-item">
            <h2>{offer.title}</h2>
            <div className="slider-img-wrapper">
              <img src={offer.imageMain} alt={`${offer.title}`} />
            </div>
            <p className="slider-desc-abbrev">{offer.descAbbrev}</p>
            <p className="slider-offer-price">Cena: {offer.price} PLN</p>
            <button className="slider-offer-details-btn" onClick={() => setSelectedOffer(offer)}>
              Szczegóły
            </button>
          </div>
        ))}
      </Slider>

      <OfferModal isOpen={!!selectedOffer} onClose={() => setSelectedOffer(null)}>
        {selectedOffer && (
          <>
            <h2>{selectedOffer.title}</h2>
            <div className="offer-img-wrapper">
              <img src={selectedOffer.imageMain} alt={selectedOffer.title} />
            </div>
            <p>{selectedOffer.description}</p>
            <p>Cena: {selectedOffer.price} PLN</p>
          </>
        )}
      </OfferModal>
    </div>
  );
};

export default HomeSlider;
