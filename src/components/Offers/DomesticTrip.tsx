import { useGetOffers } from "../../hooks/useGetOffers";
import { OfferResponse } from "../../types/offers";
import MainHeading from "../MainHeading/MainHeading";
import { conditionNotMeet } from "../../utils/conditionNotMeet";

const DomesticTrip = () => {
  const offers: OfferResponse = useGetOffers();

  if (!offers) {
    return <div>Loading...</div>;
  }

  const domesticOffers = offers.filter((offer) => offer.destinationType === "domestic");
  console.log(domesticOffers);
  const conditionNotExists = conditionNotMeet(domesticOffers);

  return (
    <div>
      <div className="container">
        <MainHeading />

        <h2>Wycieczki krajowe</h2>

        <div className="offers-list">
          {conditionNotExists}
          {domesticOffers.map((offer) => (
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

export default DomesticTrip;
