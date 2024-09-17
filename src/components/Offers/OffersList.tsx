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
              <div className="offer-img-wrapper">
                <img src={offer.imageMain} alt={offer.title} />
              </div>
              <div className="single-offer-details">
                <h2>
                  {offer.title}
                  {/* <span>{offer.days}</span> */}
                </h2>
                <div className="offers-list-price-wrapper">
                  <p className="single-offer-price">Cena: </p>
                  {offer.price45people !== 0 && <p className="single-offer-price">{offer.price45people} PLN (min: 40 osób)</p>}
                  {offer.price40people !== 0 && <p className="single-offer-price">{offer.price40people} PLN (min: 45 osób)</p>}
                </div>
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

            {selectedOffer.titleSub && (
              <h3 style={{ display: selectedOffer.titleSub ? "block" : "none" }}>{selectedOffer.titleSub}</h3>
            )}
            <div className="pic-desc-wrap">
              <div className="offer-img-wrapper">
                <img src={selectedOffer.imageMain} alt={selectedOffer.title} />
              </div>
              <ul>
                {selectedOffer.description.map((desc, index) => (
                  <li key={index}>{desc}</li>
                ))}
              </ul>
            </div>
            <div className="modal-offer-price-wrapper">
              {selectedOffer.price45people !== 0 && (
                <p className="modal-offer-price">Cena (45 osób): {selectedOffer.price45people} PLN</p>
              )}
              {selectedOffer.price40people !== 0 && (
                <p className="modal-offer-price">Cena (40 osób): {selectedOffer.price40people} PLN</p>
              )}
            </div>
          </>
        )}
      </OfferModal>
    </div>
  );
};

export default OffersList;
