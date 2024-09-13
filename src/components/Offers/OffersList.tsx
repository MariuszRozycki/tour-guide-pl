import { useState } from "react";
import { useGetOffers } from "../../hooks/useGetOffers";
import { OfferResponse } from "../../types/offers";
import MainHeading from "../MainHeading/MainHeading";
import { conditionNotMeet } from "../../utils/conditionNotMeet";
import OfferModal from "./OfferModal";
import ClipLoader from "react-spinners/ClipLoader";

interface OffersListProps {
  title: string;
  filterCondition: (offer: OfferResponse[number]) => boolean;
}

const OffersList = ({ title, filterCondition }: OffersListProps) => {
  const { offers, loading } = useGetOffers();
  const [selectedOffer, setSelectedOffer] = useState<OfferResponse[number] | null>(null);

  if (loading) {
    return (
      <div className="loader-container">
        <ClipLoader size={50} color={"#123abc"} loading={loading} />
      </div>
    );
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
            <div className="single-offer" onClick={() => setSelectedOffer(offer)} key={offer.id}>
              <h2>
                {offer.title}
                <br />
                {offer.days}
              </h2>
              <div className="offer-img-wrapper">
                <img src={offer.imageMain} alt={offer.title} />
              </div>
              <div className="offers-list-price-wrapper">
                {offer.price45people !== 0 && <p className="single-offer-price">Cena (45 osób): {offer.price45people} PLN</p>}
                {offer.price40people !== 0 && <p className="single-offer-price">Cena (40 osób): {offer.price40people} PLN</p>}
              </div>
              <button className="single-offer-btn">Szczegóły</button>
            </div>
          ))}
        </div>
      </div>

      <OfferModal isOpen={!!selectedOffer} onClose={() => setSelectedOffer(null)}>
        {selectedOffer && (
          <>
            <h2>
              {selectedOffer.title} <br />
              {selectedOffer.days}
            </h2>
            <h3>{selectedOffer.titleSub}</h3>
            <div className="offer-img-wrapper">
              <img src={selectedOffer.imageMain} alt={selectedOffer.title} />
            </div>
            <ul>
              {selectedOffer.description.map((desc, index) => (
                <li key={index}>{desc}</li>
              ))}
            </ul>
            {selectedOffer.price45people !== 0 && (
              <p className="modal-offer-price">Cena (45 osób): {selectedOffer.price45people} PLN</p>
            )}
            {selectedOffer.price40people !== 0 && (
              <p className="modal-offer-price">Cena (40 osób): {selectedOffer.price40people} PLN</p>
            )}
          </>
        )}
      </OfferModal>
    </div>
  );
};

export default OffersList;
