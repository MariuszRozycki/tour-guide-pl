import OffersList from "./OffersList";

const WeekendTrip = () => (
  <OffersList title='Wycieczki weekendowe' category='weekend' filterCondition={(offer) => offer.lengthOfTrip === "weekend"} />
);

export default WeekendTrip;
