import { createContext, useContext, useState } from "react";
import { api } from "../lib/api";

const JobContext = createContext();

export const JobProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const submitJobApplication = async (formData) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await api.post("/KuwaitMIC/Contact/job", formData);

      console.log("res:", response.data);
      setSuccess(true);

      return response.data;
    } catch (err) {
      const serverMessage =
        err.response?.data?.message || err.response?.data || err.message;
      console.error("err:", err.response?.data || err);

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
    <JobContext.Provider
      value={{
        submitJobApplication,
        loading,
        error,
        success,
      }}
    >
      {children}
    </JobContext.Provider>
  );
};

export const useJob = () => useContext(JobContext);
