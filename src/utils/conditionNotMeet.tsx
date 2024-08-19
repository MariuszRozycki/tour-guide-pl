import { OfferResponse } from "../types/offers";

export const conditionNotMeet = (param: OfferResponse) => {
  if (param.length === 0) {
    return <p className="offers-condition-not-meet">Nie ma takich wycieczek!</p>;
  }
};
