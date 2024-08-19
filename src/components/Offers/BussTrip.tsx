import OffersList from "./OffersList";

const BussTrip = () => {
  return <OffersList title="Wycieczki autobusowe" filterCondition={(offer) => offer.typeOfTrip === "buss-trip"} />;
};

export default BussTrip;
