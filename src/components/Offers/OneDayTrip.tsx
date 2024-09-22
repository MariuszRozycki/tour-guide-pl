import OffersList from "./OffersList";

const OneDayTrip = () => {
  return (
    <OffersList title="Wycieczki jednodniowe" category="one-day" filterCondition={(offer) => offer.lengthOfTrip === "one-day"} />
  );
};

export default OneDayTrip;
