import OffersList from "./OffersList";

const FourDaysTrip = () => (
  <OffersList title="Wycieczki pięciodniowe" filterCondition={(offer) => offer.lengthOfTrip === "four-days"} />
);

export default FourDaysTrip;
