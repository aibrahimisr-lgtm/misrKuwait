import React, { createContext, useContext, useState } from "react";
import { api } from "../lib/api";

const OtherAccidentContext = createContext();

export const useOtherAccident = () => useContext(OtherAccidentContext);

export const OtherAccidentProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const addOtherAccident = async (customFormData) => {
    setLoading(true);
    setError(null);

    try {
      const response = await api.post(
        "/KuwaitMIC/Accident/AddOtherAccident",
        customFormData,
      );

      return response.data;
    } catch (err) {
      let message = err.message;
      if (err.response?.data?.errors) {
        message = JSON.stringify(err.response.data.errors);
      } else if (err.response?.data?.message) {
        message = err.response.data.message;
      } else if (err.response?.data) {
        message =
          typeof err.response.data === "string"
            ? err.response.data
            : JSON.stringify(err.response.data);
      }

      setError(message);
      console.error("Submission failed:", message);
      throw new Error(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <OtherAccidentContext.Provider value={{ addOtherAccident, loading, error }}>
      {children}
    </OtherAccidentContext.Provider>
  );
};
