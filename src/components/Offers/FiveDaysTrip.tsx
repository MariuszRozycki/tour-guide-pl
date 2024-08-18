import TripList from "./TripList";

const FiveDaysTrip = () => (
  <TripList title="Wycieczki pięciodniowe" filterCondition={(offer) => offer.lengthOfTrip === "five-days"} />
);

export default FiveDaysTrip;
