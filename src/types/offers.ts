export interface Offer {
  id: string;
  title: string;
  description: string;
  descAbbrev: string;
  additionallyDesc?: string;
  imageMain: string;
  price: number;
  typeOfTrip: string;
  lengthOfTrip: string;
  destinationType: string;
}

export type OfferResponse = Offer[];
