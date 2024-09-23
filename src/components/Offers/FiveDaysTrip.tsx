import OffersList from "./OffersList";

const FiveDaysTrip = () => (
  <OffersList title="Wycieczki pięciodniowe" category="five-days" filterCondition={(offer) => offer.lengthOfTrip === "five-days"} />
);

export default FiveDaysTrip;
