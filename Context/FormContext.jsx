import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo,
} from "react";

const FormContext = createContext();

const initialForms = {
  quote: {
    step: 0,
    category: "",
    formData: {
      FullName: "",
      Phone: "",
      Email: "",
    },
    error: false,
    isSubmitting: false,
  },
};

export const FormProvider = ({ children }) => {
  const [forms, setForms] = useState(initialForms);

  const updateForm = useCallback((formKey, updates) => {
    setForms((prev) => ({
      ...prev,
      [formKey]: { ...prev[formKey], ...updates },
    }));
  }, []);

  const handleChange = useCallback((formKey, e) => {
    const { name, value, type, files } = e.target;
    const fieldValue = type === "file" ? files[0] : value;
    setForms((prev) => ({
      ...prev,
      [formKey]: {
        ...prev[formKey],
        error: false,
        formData: {
          ...prev[formKey].formData,
          [name]: fieldValue,
        },
      },
    }));
  }, []);

  const resetForm = useCallback((formKey) => {
    setForms((prev) => ({
      ...prev,
      [formKey]: initialForms[formKey],
    }));
  }, []);

  const value = useMemo(
    () => ({ forms, updateForm, handleChange, resetForm }),
    [forms, updateForm, handleChange, resetForm],
  );

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};

export const useFormContext = (formKey) => {
  const { forms, updateForm, handleChange, resetForm } =
    useContext(FormContext);
  if (!forms)
    throw new Error("useFormContext must be used inside FormProvider");

  const boundUpdateForm = useCallback(
    (updates) => updateForm(formKey, updates),
    [updateForm, formKey],
  );

  const boundHandleChange = useCallback(
    (e) => handleChange(formKey, e),
    [handleChange, formKey],
  );

  const boundResetForm = useCallback(
    () => resetForm(formKey),
    [resetForm, formKey],
  );

  return useMemo(
    () => ({
      form: forms[formKey],
      updateForm: boundUpdateForm,
      handleChange: boundHandleChange,
      resetForm: boundResetForm,
    }),
    [forms[formKey], boundUpdateForm, boundHandleChange, boundResetForm],
  );
};

export default FormProvider;
