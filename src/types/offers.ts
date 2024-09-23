export interface Offer {
  id: string;
  days: string;
  title: string;
  titleSub: string;
  description: string[];
  imageMain: string;
  price45people: number;
  price40people: number;
  typeOfTrip: string;
  lengthOfTrip: string;
  destinationType: string;
}

export type OfferResponse = Offer[];
