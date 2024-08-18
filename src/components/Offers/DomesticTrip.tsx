import OffersList from "./OffersList";

const DomesticTrip = () => (
  <OffersList title="Wycieczki krajowe" filterCondition={(offer) => offer.destinationType === "domestic"} />
);

export default DomesticTrip;
