import OffersList from "./OffersList";

const CrossBorder = () => {
  return (
    <OffersList
      title="Wycieczki transgraniczne"
      category="cross-border"
      filterCondition={(offer) => offer.destinationType === "cross-border"}
    />
  );
};

export default CrossBorder;
