import OffersList from "./OffersList";

const CrossBorder = () => {
  return <OffersList title="Wycieczki transgraniczne" filterCondition={(offer) => offer.destinationType === "cross-border"} />;
};

export default CrossBorder;
