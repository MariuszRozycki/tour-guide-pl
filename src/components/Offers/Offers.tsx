import { useGetOffers } from "../../hooks/useGetOffers";
import { OfferResponse } from "../../types/offers";
import MainHeading from "../MainHeading/MainHeading";

// import "./Offers.css";

const Offers = () => {
  const offers: OfferResponse = useGetOffers();

  if (!offers) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <MainHeading />
      <h2>Oferty dla Ciebie</h2>
      {offers.map((offer, index) => (
        <div key={index + Date()}>
          <h2>{offer.title}</h2>

          <div className="offer-img-wrapper">
            <img src={offer.imageMain} alt={`${offer.title}`} />
          </div>

          <p>{offer.description}</p>
          <p>{offer.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Offers;
