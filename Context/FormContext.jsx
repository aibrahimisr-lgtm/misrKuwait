import { createContext, useContext, useState } from "react";

const FormContext = createContext();

const initialForms = {
  quote: {
    step: 0,
    category: "",
    formData: {
      userName: "",
      userPhone: "",
      userEmail: "",
    },
    error: false,
    isSubmitting: false,
  },
  accident: {
    step: 0,
    accidentType: "",
    formData: {},
    error: false,
    isSubmitting: false,
  },
};

export const FormProvider = ({ children }) => {
  const [forms, setForms] = useState(initialForms);

  const updateForm = (formKey, updates) => {
    setForms((prev) => ({
      ...prev,
      [formKey]: {
        ...prev[formKey],
        ...updates,
      },
    }));
  };

  const handleChange = (formKey, e) => {
    const { name, value } = e.target;

    setForms((prev) => ({
      ...prev,
      [formKey]: {
        ...prev[formKey],
        error: false,
        formData: {
          ...prev[formKey].formData,
          [name]: value,
        },
      },
    }));
  };

  // NEW: Function to handle the Axios API call
  const submitForm = async (formKey, endpoint) => {
    // Set loading state to true
    updateForm(formKey, { isSubmitting: true, error: false });

    try {
      // The context already holds exactly what the backend needs in formData
      const payload = forms[formKey].formData;

      // Example endpoint: /KuwaitMIC/Accident/CreateCarAccident
      const response = await axios.post(endpoint, payload);

      console.log(`${formKey} submitted successfully:`, response.data);

      // Optionally reset the form or move to a "Success" step here
      // updateForm(formKey, { step: forms[formKey].step + 1 });

      return response.data;
    } catch (error) {
      console.error(`Error submitting ${formKey}:`, error);
      updateForm(formKey, { error: true });
      throw error;
    } finally {
      // Turn off loading state regardless of success or failure
      updateForm(formKey, { isSubmitting: false });
    }
  };

  const resetForm = (formKey) => {
    setForms((prev) => ({
      ...prev,
      [formKey]: initialForms[formKey],
    }));
  };

  return (
    <FormContext.Provider
      value={{
        forms,
        updateForm,
        handleChange,
        resetForm,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = (formKey) => {
  const context = useContext(FormContext);

  if (!context) {
    throw new Error("useFormContext must be used inside FormProvider");
  }

  return {
    form: context.forms[formKey],
    updateForm: (updates) => context.updateForm(formKey, updates),
    handleChange: (e) => context.handleChange(formKey, e),
    resetForm: () => context.resetForm(formKey),
  };
};
