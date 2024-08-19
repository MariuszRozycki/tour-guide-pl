import OffersList from "./OffersList";

const ThreeDaysTrip = () => {
  return <OffersList title="Wycieczki trzydniowe" filterCondition={(offer) => offer.lengthOfTrip === "three-days"} />;
};

export default ThreeDaysTrip;
