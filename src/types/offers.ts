export interface Offer {
  title: string;
  description: string;
  descAbbrev: string;
  imageMain: string;
  price: number;
}

export type OfferResponse = Offer[];
