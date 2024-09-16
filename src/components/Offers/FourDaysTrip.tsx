import OffersList from "./OffersList";

const FourDaysTrip = () => (
  <OffersList title="Wycieczki czterodniowe" filterCondition={(offer) => offer.lengthOfTrip === "four-days"} />
);

export default FourDaysTrip;
