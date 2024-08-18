import TripList from "./TripList";

const PlaneTrip = () => <TripList title="Wycieczki samolotowe" filterCondition={(offer) => offer.typeOfTrip === "plane-trip"} />;

export default PlaneTrip;
