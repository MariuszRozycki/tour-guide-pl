import { useGetOffers } from "../../hooks/useGetOffers";
import { OfferResponse } from "../../types/offers";
import { conditionNotMeet } from "../../utils/conditionNotMeet";
import MainHeading from "../MainHeading/MainHeading";

const KayakTrip = () => {
  const offers: OfferResponse = useGetOffers();

  if (!offers) {
    return <div>Loading...</div>;
  }

  const kayakOffers = offers.filter((offer) => offer.typeOfTrip === "kayak");
  console.log(kayakOffers);
  const conditionNotExists = conditionNotMeet(kayakOffers);

  return (
    <div>
      <div className="container">
        <MainHeading />

        <h2>Wycieczki kajakowe</h2>

        <div className="offers-list">
          {conditionNotExists}
          {kayakOffers.map((offer) => (
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

export default KayakTrip;
