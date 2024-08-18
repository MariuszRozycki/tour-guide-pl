import TripList from "./TripList";

const TwoDaysTrip = () => {
  return <TripList title="Wycieczki dwudniowe" filterCondition={(offer) => offer.typeOfTrip === "two-days"} />;
};

export default TwoDaysTrip;
