import { OfferResponse } from "../types/offers";

export const conditionNotMeet = (param: OfferResponse) => {
  if (param.length === 0) {
    return <div>Nie ma takich wycieczek!</div>;
  }
};
