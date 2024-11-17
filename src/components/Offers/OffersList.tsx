import { useGetOffers } from "../../hooks/useGetOffers";
import { OfferResponse } from "../../types/offers";
import { conditionNotMeet } from "../../utils/conditionNotMeet";
import ClipLoader from "react-spinners/ClipLoader";
import { useNavigate } from "react-router-dom";

interface OffersListProps {
  title: string;
  description?: string;
  category: string;
  filterCondition: (offer: OfferResponse[number]) => boolean;
}

const OffersList = ({ title, description, category, filterCondition }: OffersListProps) => {
  const { offers, loading } = useGetOffers();
  const navigate = useNavigate();

  if (loading) {
    return (
      <div className='loader-container'>
        <ClipLoader size={50} color={"#123abc"} loading={loading} />
      </div>
    );
  }

  const filteredOffers = offers.filter(filterCondition);
  const conditionNotExists = conditionNotMeet(filteredOffers);

  const handleOfferClick = (offer: OfferResponse[number]) => {
    navigate(`/offers/${category}/${offer.id}`, { state: { offer } });
  };

  return (
    <div>
      <div className='container'>
        <h1>{title}</h1>
        <p className='description'>{description}</p>
        <div className='offers-list'>
          {conditionNotExists}
          {filteredOffers.map((offer) => (
            <div className='single-offer' onClick={() => handleOfferClick(offer)} key={offer.id}>
              <div className='offer-img-wrapper'>
                <img src={offer.imageMain} alt={offer.title} />
              </div>
              <div className='single-offer-details'>
                <h2>
                  {offer.title}
                  <span>{offer.days}</span>
                </h2>
                <div className='offers-list-price-wrapper'>
                  <p className='single-offer-price'>Cena: </p>
                  {offer.price45people !== 0 && <p className='single-offer-price'>{offer.price45people} PLN (min: 40 osób)</p>}
                  {offer.price40people !== 0 && <p className='single-offer-price'>{offer.price40people} PLN (min: 45 osób)</p>}
                </div>
              </div>
              <button className='single-offer-btn'>Szczegóły</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OffersList;
