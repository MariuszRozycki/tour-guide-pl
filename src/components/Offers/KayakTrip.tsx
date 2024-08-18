import TripList from "./TripList";

const KayakTrip = () => <TripList title="Wycieczki kajakowe" filterCondition={(offer) => offer.typeOfTrip === "kayak"} />;

export default KayakTrip;
