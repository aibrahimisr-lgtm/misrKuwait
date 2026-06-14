import { createContext, useContext, useState } from "react";
import { api } from "../lib/api"; 

export const CarAccidentContext = createContext();

export function CarAccidentContextProvider({ children }) {
  const [insuranceType, setInsuranceType] = useState(null);
  const [policyNumber, setPolicyNumber] = useState("");
  const [insuredName, setInsuredName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [accidentDate, setAccidentDate] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [plateNumber, setPlateNumber] = useState("");
  const [carBrand, setCarBrand] = useState("");
  const [carModel, setCarModel] = useState(null);
  const [hasSecondParty, setHasSecondParty] = useState(false);
  const [additionalDocuments, setAdditionalDocuments] = useState([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  function resetForm() {
    setInsuranceType(null);
    setPolicyNumber("");
    setInsuredName("");
    setPhoneNumber("");
    setEmail("");
    setAccidentDate("");
    setLocation("");
    setDescription("");
    setPlateNumber("");
    setCarBrand("");
    setCarModel(null);
    setHasSecondParty(false);
    setAdditionalDocuments([]);
    setError(null);
  }

  async function addCarAccident(customFormData = null) {
    setLoading(true);
    setError(null);

    try {
      const formData = customFormData || new FormData();

      if (!customFormData) {
        formData.append("InsuranceType", insuranceType || "");
        formData.append("PolicyNumber", policyNumber || "");
        formData.append("InsuredName", insuredName || "");
        formData.append("PhoneNumber", phoneNumber || "");
        formData.append("Email", email || "");
        formData.append("AccidentDate", accidentDate || "");
        formData.append("Location", location || "");
        formData.append("Description", description || "");
        formData.append("PlateNumber", plateNumber || "");
        formData.append("CarBrand", carBrand || "");
        formData.append("CarModel", carModel || "");
        formData.append("HasSecondParty", hasSecondParty);

        if (additionalDocuments && additionalDocuments.length > 0) {
          additionalDocuments.forEach((file) => {
            formData.append("AdditionalDocuments", file);
          });
        }
      }


      const response = await api.post(
        "/KuwaitMIC/Accident/AddCarAccident",
        formData,
      );

      resetForm();
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
      console.log(message);
      throw new Error(message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <CarAccidentContext.Provider
      value={{
        insuranceType,
        setInsuranceType,
        policyNumber,
        setPolicyNumber,
        insuredName,
        setInsuredName,
        phoneNumber,
        setPhoneNumber,
        email,
        setEmail,
        accidentDate,
        setAccidentDate,
        location,
        setLocation,
        description,
        setDescription,
        plateNumber,
        setPlateNumber,
        carBrand,
        setCarBrand,
        carModel,
        setCarModel,
        hasSecondParty,
        setHasSecondParty,
        additionalDocuments,
        setAdditionalDocuments,
        loading,
        error,
        addCarAccident,
        resetForm,
      }}
    >
      {children}
    </CarAccidentContext.Provider>
  );
}

export function useCarAccident() {
  return useContext(CarAccidentContext);
}
