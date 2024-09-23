import OffersList from "./OffersList";

const FourDaysTrip = () => (
  <OffersList title="Wycieczki czterodniowe" category="four-days" filterCondition={(offer) => offer.lengthOfTrip === "four-days"} />
);

export default FourDaysTrip;
