import OffersList from "./OffersList";

const TwoDaysTrip = () => {
  return (
    <OffersList title="Wycieczki dwudniowe" category="two-days" filterCondition={(offer) => offer.lengthOfTrip === "two-days"} />
  );
};

export default TwoDaysTrip;
