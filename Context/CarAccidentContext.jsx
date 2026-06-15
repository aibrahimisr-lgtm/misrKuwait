import { createContext, useContext, useState } from "react";
import { api } from "../lib/api";

export const CarAccidentContext = createContext();

export function CarAccidentContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function addCarAccident(customFormData) {
    setLoading(true);
    setError(null);

    try {
      const response = await api.post(
        "/KuwaitMIC/Accident/AddCarAccident",
        customFormData,
      );

      return response.data;
    } catch (err) {
      let message = err.message;
      if (err.response?.data?.message) {
        message = err.response.data.message;
      } else if (err.response?.data) {
        message =
          typeof err.response.data === "string"
            ? err.response.data
            : JSON.stringify(err.response.data);
      }

      setError(message);
      throw new Error(message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <CarAccidentContext.Provider
      value={{
        loading,
        error,
        addCarAccident,
      }}
    >
      {children}
    </CarAccidentContext.Provider>
  );
}

export function useCarAccident() {
  return useContext(CarAccidentContext);
}
