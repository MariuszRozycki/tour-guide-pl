import { OfferResponse } from "../types/offers";
import axios from "axios";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const useGetOffers = (): { offers: OfferResponse; loading: boolean } => {
  const [offers, setOffers] = useState<OfferResponse>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchOffers = async () => {
      try {
        const url = "/assets/offers.json";
        const response = await axios.get<OfferResponse>(url);

        const offersWithId = response.data.map((offer) => ({
          ...offer,
          id: uuidv4(),
        }));

        setOffers(offersWithId);
      } catch (error) {
        console.error("Error fetching offers:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOffers();
  }, []);

  return { offers, loading };
};
