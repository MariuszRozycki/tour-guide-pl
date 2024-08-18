import TripList from "./TripList";

const BussTrip = () => {
  return <TripList title="Wycieczki autobusowe" filterCondition={(offer) => offer.destinationType === "buss-trip"} />;
};

export default BussTrip;
