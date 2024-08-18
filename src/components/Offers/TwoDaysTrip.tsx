import { useGetOffers } from "../../hooks/useGetOffers";
import { OfferResponse } from "../../types/offers";
import MainHeading from "../MainHeading/MainHeading";
import { conditionNotMeet } from "../../utils/conditionNotMeet";

const TwoDaysTrip = () => {
  const offers: OfferResponse = useGetOffers();

  if (!offers) {
    return <div>Loading...</div>;
  }

  const twoDaysOffers = offers.filter((offer) => offer.lengthOfTrip === "two-days");
  console.log(twoDaysOffers);
  const conditionNotExists = conditionNotMeet(twoDaysOffers);

  return (
    <div>
      <div className="container">
        <MainHeading />

        <h2>Wycieczki dwudniowe</h2>
        {conditionNotExists}
        <div className="offers-list">
          {twoDaysOffers.map((offer) => (
            <div key={offer.title}>
              <h2>{offer.title}</h2>

              <div className="offer-img-wrapper">
                <img src={offer.imageMain} alt={offer.title} />
              </div>

              <p>{offer.description}</p>
              <p>Cena: {offer.price} PLN</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TwoDaysTrip;
