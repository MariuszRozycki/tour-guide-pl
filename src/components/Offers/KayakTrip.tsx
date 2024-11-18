import OffersList from "./OffersList";

const KayakTrip = () => (
  <OffersList title="Wycieczki kajakowe" category="kayak" filterCondition={(offer) => offer.typeOfTrip === "kayak"} />
);

export default KayakTrip;
