import { useGetOffers } from "../../hooks/useGetOffers";
import { OfferResponse } from "../../types/offers";
import { conditionNotMeet } from "../../utils/conditionNotMeet";
import MainHeading from "../MainHeading/MainHeading";

const ThreeDaysTrip = () => {
  const offers: OfferResponse = useGetOffers();

  if (!offers) {
    return <div>Loading...</div>;
  }

  const threeDaysOffers = offers.filter((offer) => offer.lengthOfTrip === "three-days");
  console.log(threeDaysOffers);
  const conditionNotExists = conditionNotMeet(threeDaysOffers);

  return (
    <div>
      <div className="container">
        <MainHeading />

        <h2>Wycieczki trzydniowe</h2>

        <div className="offers-list">
          {conditionNotExists}
          {threeDaysOffers.map((offer) => (
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

export default ThreeDaysTrip;
