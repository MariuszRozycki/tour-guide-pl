import TripList from "./TripList";

const AbroadTrip = () => <TripList title="Wycieczki zagraniczne" filterCondition={(offer) => offer.destinationType === "abroad"} />;

export default AbroadTrip;
