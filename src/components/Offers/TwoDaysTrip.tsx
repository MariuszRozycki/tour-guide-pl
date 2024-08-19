import OffersList from "./OffersList";

const TwoDaysTrip = () => {
  return <OffersList title="Wycieczki dwudniowe" filterCondition={(offer) => offer.lengthOfTrip === "two-days"} />;
};

export default TwoDaysTrip;
