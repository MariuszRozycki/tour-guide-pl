import { useGetOffers } from "../../hooks/useGetOffers";
import { OfferResponse } from "../../types/offers";
import MainHeading from "../MainHeading/MainHeading";
import { conditionNotMeet } from "../../utils/conditionNotMeet";

interface TripListProps {
  title: string;
  filterCondition: (offer: OfferResponse[number]) => boolean;
}

const TripList = ({ title, filterCondition }: TripListProps) => {
  const offers: OfferResponse = useGetOffers();

  if (!offers) {
    return <div>Loading...</div>;
  }

  const filteredOffers = offers.filter(filterCondition);
  const conditionNotExists = conditionNotMeet(filteredOffers);

  return (
    <div>
      <div className="container">
        <MainHeading />
        <h2>{title}</h2>
        <div className="offers-list">
          {conditionNotExists}
          {filteredOffers.map((offer) => (
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

export default TripList;
