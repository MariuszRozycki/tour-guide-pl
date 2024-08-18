import React, { useState } from "react";
import { useGetOffers } from "../../hooks/useGetOffers";
import { OfferResponse } from "../../types/offers";
import MainHeading from "../MainHeading/MainHeading";
import { conditionNotMeet } from "../../utils/conditionNotMeet";

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

  const closeModal = () => setSelectedOffer(null);

  const handleOutsideClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

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
              <p>Cena: {offer.price} PLN</p>
              <button className="single-offer-btn">Szczegóły</button>
            </div>
          ))}
        </div>
      </div>

      {selectedOffer && (
        <div className="modal-backdrop" onClick={handleOutsideClick}>
          <div className="modal-content">
            <button className="modal-close" onClick={closeModal}>
              &times;
            </button>
            <h2>{selectedOffer.title}</h2>
            <div className="offer-img-wrapper">
              <img src={selectedOffer.imageMain} alt={selectedOffer.title} />
            </div>
            <p>{selectedOffer.description}</p>
            <p>Cena: {selectedOffer.price} PLN</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default OffersList;
