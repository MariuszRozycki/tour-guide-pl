import OffersList from "./OffersList";

const FiveDaysTrip = () => (
  <OffersList title="Wycieczki pięciodniowe" filterCondition={(offer) => offer.lengthOfTrip === "five-days"} />
);

export default FiveDaysTrip;
