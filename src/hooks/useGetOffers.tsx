import { OfferResponse } from "../types/offers";
import axios from "axios";
import { useEffect, useState } from "react";

export const useGetOffers = (): OfferResponse => {
  const [offers, setOffers] = useState<OfferResponse>([]);

  useEffect(() => {
    axios
      .get<OfferResponse>("/src/assets/offers.json")
      .then((response) => {
        console.log("response.data: ", response.data);

        setOffers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching offers:", error);
      });
  }, []);

  return offers;
};
