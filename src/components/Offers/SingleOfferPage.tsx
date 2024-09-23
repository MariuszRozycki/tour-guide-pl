import { useState } from "react";
import { useLocation } from "react-router-dom";
import { OfferResponse } from "../../types/offers";
import ImageModal from "../../utils/ImgModal";

const SingleOfferPage = () => {
  const location = useLocation();
  const offer = location.state?.offer as OfferResponse[number] | null;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  if (!offer) {
    return <p>Ładowanie danych oferty lub brak danych...</p>;
  }

  return (
    <div className="single-offer-page-details">
      <h2>
        {offer.title}
        <br />
        <span>{offer.days}</span>
      </h2>
      {offer.titleSub && <h3>{offer.titleSub}</h3>}

      <div className="offer-img-wrapper" onClick={openModal}>
        <img src={offer.imageMain} alt={offer.title} />
      </div>

      <ul>
        {offer.description.map((desc, index) => (
          <li key={index}>{desc}</li>
        ))}
      </ul>
      <div className="offers-list-price-wrapper">
        <p className="single-offer-price">Cena:</p>
        {offer.price45people !== 0 && <p className="single-offer-price">{offer.price45people} PLN (45 osób)</p>}
        {offer.price40people !== 0 && <p className="single-offer-price">{offer.price40people} PLN (40 osób)</p>}
      </div>

      <ImageModal isOpen={isModalOpen} onClose={closeModal} imageSrc={offer.imageMain} altText={offer.title} />
    </div>
  );
};

export default SingleOfferPage;
