import { createContext, useContext, useState } from "react";
import { OfferService } from "../lib/offerService";

const OfferContext = createContext();

export const OfferProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const submitOffer = async (offerType, formData) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      let response;

      switch (offerType) {
        case "car":
          response = await OfferService.submitCarOffer(formData);
          break;
        case "fire":
          response = await OfferService.submitFireOffer(formData);
          break;
        case "engineer":
          response = await OfferService.submitEngineerOffer(formData);
          break;
        case "marine":
          response = await OfferService.submitMarineOffer(formData);
          break;
        case "accident":
          response = await OfferService.submitAccidentOffer(formData);
          break;
        default:
          throw new Error(`Invalid offer type: ${offerType}`);
      }

      setSuccess(true);
      return response;
    } catch (err) {
      const serverMessage =
        err.response?.data?.message || err.response?.data || err.message;

      console.error(`[${offerType}] err:`, err.response?.data || err);

      setError(
        typeof serverMessage === "object"
          ? JSON.stringify(serverMessage)
          : serverMessage,
      );
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return (
    <OfferContext.Provider value={{ submitOffer, loading, error, success }}>
      {children}
    </OfferContext.Provider>
  );
};

export const useOffer = () => useContext(OfferContext);
