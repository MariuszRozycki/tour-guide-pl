export interface Offer {
  id: string; // Zostawiamy id jako string
  days: string;
  title: string; // Główny tytuł oferty
  titleSub: string; // Podtytuł oferty
  description: string[]; // Zmienione na tablicę z wieloma elementami
  imageMain: string; // Adres URL do obrazka
  price45people: number; // Cena dla grupy 45 osób
  price40people: number; // Cena dla grupy 40 osób
  typeOfTrip: string; // Typ wycieczki
  lengthOfTrip: string; // Długość wycieczki
  destinationType: string; // Typ destynacji (np. krajowa/zagraniczna)
}

export type OfferResponse = Offer[];
