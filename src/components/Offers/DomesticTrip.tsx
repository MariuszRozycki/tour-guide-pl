import OffersList from "./OffersList";

const DomesticTrip = () => (
  <OffersList title="Wycieczki krajowe" category="domestic" filterCondition={(offer) => offer.destinationType === "domestic"} />
);

export default DomesticTrip;
