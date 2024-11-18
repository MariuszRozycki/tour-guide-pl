import OffersList from "./OffersList";

const OneDayTrip = () => {
  const description: string = `
    Przedstawiam Państwu najpopularniejsze wycieczki jednodniowe przy założeniu, że mieszkasz na Mazowszu. 
    Są to pomysły, które wymagają więcej logistyki i pomocy pilockiej podczas realizacji (czasem sugerujemy przewodnika). 
    Wyjazd do Farmy Iluzji, Mandorii, Skansenu w Sierpcu czy Żelazowej Woli ogarniecie sobie sami, jak sądzę.
  `;

  return (
    <OffersList
      title='Wycieczki jednodniowe'
      description={description}
      category='one-day'
      filterCondition={(offer) => offer.lengthOfTrip === "one-day"}
    />
  );
};

export default OneDayTrip;
