import OffersList from "./OffersList";

const PlaneTrip = () => <OffersList title="Wycieczki samolotowe" filterCondition={(offer) => offer.typeOfTrip === "plane-trip"} />;

export default PlaneTrip;
