import OffersList from "./OffersList";

const OneDayTrip = () => {
  return <OffersList title="Wycieczki jednodniowe" filterCondition={(offer) => offer.lengthOfTrip === "one-day"} />;
};

export default OneDayTrip;
