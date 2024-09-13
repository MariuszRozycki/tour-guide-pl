import OffersList from "./OffersList";

const CrossBorder = () => {
  return <OffersList title="Wycieczki łączone" filterCondition={(offer) => offer.destinationType === "cross-border"} />;
};

export default CrossBorder;
