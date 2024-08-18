import TripList from "./TripList";

const OneDayTrip = () => {
  return <TripList title="Wycieczki jednodniowe" filterCondition={(offer) => offer.typeOfTrip === "one-day"} />;
};

export default OneDayTrip;
