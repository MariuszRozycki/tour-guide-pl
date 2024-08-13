import { OfferResponse } from "../types/offers";
import axios from "axios";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const useGetOffers = (): OfferResponse => {
  const [offers, setOffers] = useState<OfferResponse>([]);

  useEffect(() => {
    axios
      .get<OfferResponse>("/src/assets/offers.json")
      .then((response) => {
        const offersWithId = response.data.map((offer) => ({
          ...offer,
          id: uuidv4(),
        }));

        console.log("response.data: ", offersWithId);
        setOffers(offersWithId);
      })
      .catch((error) => {
        console.error("Error fetching offers:", error);
      });
  }, []);

  return offers;
};
