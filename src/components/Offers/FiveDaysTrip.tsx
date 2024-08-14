import { useGetOffers } from "../../hooks/useGetOffers";
import { OfferResponse } from "../../types/offers";
import { conditionNotMeet } from "../../utils/conditionNotMeet";
import MainHeading from "../MainHeading/MainHeading";

const FiveDaysTrip = () => {
  const offers: OfferResponse = useGetOffers();

  if (!offers) {
    return <div>Loading...</div>;
  }

  const fiveDaysOffers = offers.filter((offer) => offer.lengthOfTrip === "five-days");
  console.log(fiveDaysOffers);
  const conditionNotExists = conditionNotMeet(fiveDaysOffers);

  return (
    <div>
      <div className="container">
        <MainHeading />

        <h2>Wycieczki pieciodniowe</h2>

        <div className="offers-list">
          {conditionNotExists}
          {fiveDaysOffers.map((offer) => (
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

export default FiveDaysTrip;
