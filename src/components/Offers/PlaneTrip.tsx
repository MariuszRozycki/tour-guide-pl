import OffersList from "./OffersList";

const PlaneTrip = () => (
  <OffersList title="Wycieczki samolotowe" category="plane-trip" filterCondition={(offer) => offer.typeOfTrip === "plane-trip"} />
);

export default PlaneTrip;
