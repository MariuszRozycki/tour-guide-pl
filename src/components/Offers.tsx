import React, { useEffect, useState } from "react";
import axios from "axios";
import { OfferResponse } from "../types/offers";

const Offers: React.FC = () => {
  const [offers, setOffers] = useState<OfferResponse | null>(null);

  useEffect(() => {
    axios
      .get<OfferResponse>("/src/assets/offers.json")
      .then((response) => {
        setOffers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching offers:", error);
      });
  }, []);

  if (!offers) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {offers.map((offer, index) => (
        <div key={index}>
          <h2>{offer.title}</h2>
          <p>{offer.description}</p>
          <p>{offer.descAbbrev}</p>
          <p>{offer.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Offers;
