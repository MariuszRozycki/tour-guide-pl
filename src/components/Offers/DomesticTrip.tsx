import TripList from "./TripList";

const DomesticTrip = () => <TripList title="Wycieczki krajowe" filterCondition={(offer) => offer.destinationType === "domestic"} />;

export default DomesticTrip;
