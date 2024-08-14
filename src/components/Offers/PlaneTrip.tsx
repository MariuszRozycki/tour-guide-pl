import { useGetOffers } from "../../hooks/useGetOffers";
import { OfferResponse } from "../../types/offers";
import MainHeading from "../MainHeading/MainHeading";
import { conditionNotMeet } from "../../utils/conditionNotMeet";

const PlaneTrip = () => {
  const offers: OfferResponse = useGetOffers();

  if (!offers) {
    return <div>Loading...</div>;
  }

  const planeOffers = offers.filter((offer) => offer.typeOfTrip === "plane-trip");
  console.log(planeOffers);
  const conditionNotExists = conditionNotMeet(planeOffers);

  return (
    <div>
      <div className="container">
        <MainHeading />

        <h2>Wycieczki samolotowe</h2>

        <div className="offers-list">
          {conditionNotExists}
          {planeOffers.map((offer) => (
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

export default PlaneTrip;
