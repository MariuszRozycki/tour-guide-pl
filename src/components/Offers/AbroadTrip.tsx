import OffersList from "./OffersList";

const AbroadTrip = () => (
  <OffersList title="Wycieczki zagraniczne" category="abroad" filterCondition={(offer) => offer.destinationType === "abroad"} />
);

export default AbroadTrip;
