import TripList from "./TripList";

const ThreeDaysTrip = () => {
  return <TripList title="Wycieczki trzydniowe" filterCondition={(offer) => offer.destinationType === "three-days"} />;
};

export default ThreeDaysTrip;
