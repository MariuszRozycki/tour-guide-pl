import OffersList from "./OffersList";

const AbroadTrip = () => (
  <OffersList title="Wycieczki zagraniczne" filterCondition={(offer) => offer.destinationType === "abroad"} />
);

export default AbroadTrip;
