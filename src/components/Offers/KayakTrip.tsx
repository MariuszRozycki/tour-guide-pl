import OffersList from "./OffersList";

const KayakTrip = () => <OffersList title="Wycieczki kajakowe" filterCondition={(offer) => offer.typeOfTrip === "kayak"} />;

export default KayakTrip;
