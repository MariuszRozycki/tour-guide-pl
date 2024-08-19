import { useState } from "react";
import { useGetOffers } from "../../hooks/useGetOffers";
import { OfferResponse } from "../../types/offers";
import MainHeading from "../MainHeading/MainHeading";
import { conditionNotMeet } from "../../utils/conditionNotMeet";
import OfferModal from "./OfferModal";

interface OffersListProps {
  title: string;
  filterCondition: (offer: OfferResponse[number]) => boolean;
}

const OffersList = ({ title, filterCondition }: OffersListProps) => {
  const offers: OfferResponse = useGetOffers();
  const [selectedOffer, setSelectedOffer] = useState<OfferResponse[number] | null>(null);

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
            <div className="single-offer" onClick={() => setSelectedOffer(offer)} key={offer.title}>
              <h2>{offer.title}</h2>
              <div className="offer-img-wrapper">
                <img src={offer.imageMain} alt={offer.title} />
              </div>
              <p>{offer.descAbbrev}</p>
              <p className="single-offer-price">Cena: {offer.price} PLN</p>
              <button className="single-offer-btn">Szczegóły</button>
            </div>
          ))}
        </div>
      </div>

      <OfferModal isOpen={!!selectedOffer} onClose={() => setSelectedOffer(null)}>
        {selectedOffer && (
          <>
            <h2>{selectedOffer.title}</h2>
            <div className="offer-img-wrapper">
              <img src={selectedOffer.imageMain} alt={selectedOffer.title} />
            </div>
            <p>{selectedOffer.description}</p>
            <p className="modal-offer-price">Cena: {selectedOffer.price} PLN</p>
          </>
        )}
      </OfferModal>
    </div>
  );
};

export default OffersList;