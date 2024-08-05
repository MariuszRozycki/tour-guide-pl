export interface Offer {
  title: string;
  description: string;
  descAbbrev: string;
  price: number;
}

export type OfferResponse = Offer[];
