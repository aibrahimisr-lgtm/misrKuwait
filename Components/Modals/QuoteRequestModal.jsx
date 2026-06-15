import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { insuranceConfigs } from "../../Config/formConfig.js";
import { useFormContext } from "../../Context/FormContext.jsx";
import { useOffer } from "../../Context/OfferContext";

const QuoteRequestModal = ({ onClose }) => {
  const { form, updateForm, handleChange, resetForm } = useFormContext("quote");
  const { step, category, formData } = form;
  const { submitOffer, loading, error: apiError } = useOffer();

  const [validationError, setValidationError] = useState("");

  const FIELDS_PER_STEP = 2;
  const dynamicFields = category ? insuranceConfigs[category].fields : [];
  const totalSteps = 2 + Math.ceil(dynamicFields.length / FIELDS_PER_STEP);

  useEffect(() => {
    return () => resetForm();
  }, [resetForm]);

  const handleClose = () => {
    resetForm();
    if (onClose) onClose();
  };

  const handleLocalChange = (e) => {
    const { name, value, type, files } = e.target;

    if (name === "Phone") {
      const onlyNums = value.replace(/[^0-9]/g, "");
      handleChange({ target: { name, value: onlyNums, type, files } });
      return;
    }

    handleChange(e);
  };

  const nextStep = async () => {
    setValidationError("");

    if (step === 0) {
      if (!formData.FullName || !formData.Phone || !formData.Email) {
        setValidationError("يرجى تعبئة جميع الحقول المطلوبة");
        return;
      }

      if (formData.Phone.length < 8) {
        setValidationError(
          "رقم الهاتف غير صحيح (يجب أن يحتوي على 8 أرقام على الأقل)",
        );
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.Email)) {
        setValidationError("يرجى إدخال بريد إلكتروني صحيح");
        return;
      }
    }

    if (step === 1 && !category) {
      setValidationError("يرجى اختيار نوع التأمين للمتابعة");
      return;
    }

    if (step >= 2) {
      const startIndex = (step - 2) * FIELDS_PER_STEP;
      const currentStepFields = dynamicFields.slice(
        startIndex,
        startIndex + FIELDS_PER_STEP,
      );

      if (currentStepFields.some((field) => !formData[field.name])) {
        setValidationError("يرجى تعبئة جميع الحقول في هذه الصفحة");
        return;
      }
    }

    if (step < totalSteps - 1) {
      updateForm({ step: step + 1 });
    } else {
      try {
        await submitOffer(category, formData);
        handleClose();
      } catch {}
    }
  };

  const prevStep = () => {
    setValidationError("");
    updateForm({ step: step - 1 });
  };

  return (
    <div className="w-full max-w-2xl mx-auto text-right">
      <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden my-8">
        <div
          className="bg-red-600 h-full transition-all duration-500 ease-out"
          style={{ width: `${((step + 1) / totalSteps) * 100}%` }}
        />
      </div>

      {apiError && (
        <div className="mb-4 p-4 bg-red-100 text-red-700 rounded-2xl text-center border border-red-300">
          حدث خطأ أثناء الإرسال: {apiError}
        </div>
      )}

      {validationError && (
        <div className="mb-4 p-3 bg-yellow-50 text-yellow-700 rounded-2xl text-center border border-yellow-200">
          {validationError}
        </div>
      )}

      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
        >
          {step === 0 && (
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                البيانات الشخصية
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {[
                  {
                    label: "الاسم الكامل",
                    name: "FullName",
                    type: "text",
                    autoComplete: "name",
                  },
                  {
                    label: "رقم الهاتف",
                    name: "Phone",
                    type: "tel",
                    autoComplete: "tel",
                  },
                  {
                    label: "البريد الالكتروني",
                    name: "Email",
                    type: "email",
                    autoComplete: "email",
                  },
                ].map((field) => (
                  <div key={field.name}>
                    <label
                      htmlFor={field.name}
                      className="block text-gray-700 mb-2 font-medium"
                    >
                      {field.label}
                    </label>
                    <input
                      id={field.name}
                      type={field.type}
                      name={field.name}
                      autoComplete={field.autoComplete}
                      value={formData[field.name] || ""}
                      onChange={handleLocalChange}
                      className="w-full p-4 border rounded-2xl border-gray-200 focus:border-red-600 outline-none"
                      dir={field.name !== "FullName" ? "ltr" : "rtl"}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {step === 1 && (
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                اختر نوع التأمين
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {Object.keys(insuranceConfigs).map((key) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => {
                      setValidationError("");
                      updateForm({ category: key });
                    }}
                    className={`p-4 text-center rounded-2xl border-2 font-bold transition-colors ${
                      category === key
                        ? "border-red-600 bg-red-50 text-red-700"
                        : "border-gray-100 hover:border-gray-300"
                    }`}
                  >
                    {insuranceConfigs[key].title}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step >= 2 && (
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-red-600">
                {insuranceConfigs[category].title}
              </h3>
              <div className="grid grid-cols-1 gap-6">
                {dynamicFields
                  .slice(
                    (step - 2) * FIELDS_PER_STEP,
                    (step - 2) * FIELDS_PER_STEP + FIELDS_PER_STEP,
                  )
                  .map((field) => (
                    <div key={field.name}>
                      <label
                        htmlFor={field.name}
                        className="block text-gray-700 mb-2 font-bold"
                      >
                        {field.label}
                      </label>
                      {field.type === "select" ? (
                        <select
                          id={field.name}
                          name={field.name}
                          autoComplete={field.autoComplete || "off"}
                          value={formData[field.name] || ""}
                          onChange={handleLocalChange}
                          className="w-full p-4 border rounded-2xl border-gray-200 focus:border-red-600 outline-none"
                        >
                          <option value="">اختر...</option>
                          {field.options.map((opt) => {
                            const isObject =
                              typeof opt === "object" && opt !== null;
                            const optVal = isObject ? opt.value : opt;
                            const optLabel = isObject ? opt.label : opt;
                            return (
                              <option key={optVal} value={optVal}>
                                {optLabel}
                              </option>
                            );
                          })}
                        </select>
                      ) : field.type === "file" ? (
                        <input
                          id={field.name}
                          type="file"
                          name={field.name}
                          onChange={handleLocalChange}
                          className="w-full p-4 border rounded-2xl border-gray-200"
                        />
                      ) : (
                        <input
                          id={field.name}
                          type={field.type}
                          name={field.name}
                          autoComplete={field.autoComplete || "off"}
                          value={formData[field.name] || ""}
                          onChange={handleLocalChange}
                          className="w-full p-4 border rounded-2xl border-gray-200 focus:border-red-600 outline-none"
                        />
                      )}
                    </div>
                  ))}
              </div>
            </div>
          )}

          <div className="flex gap-3 mt-8">
            <button
              onClick={nextStep}
              disabled={loading}
              className="flex-1 text-white font-bold py-4 px-8 rounded-2xl bg-red-600 disabled:opacity-60 transition-opacity"
            >
              {loading
                ? "جاري الإرسال..."
                : step < totalSteps - 1
                  ? "التالي"
                  : "إرسال"}
            </button>
            {step > 0 && !loading && (
              <button
                onClick={prevStep}
                className="flex-1 px-6 py-4 border border-gray-300 rounded-2xl font-bold hover:bg-gray-50 transition-colors"
              >
                السابق
              </button>
            )}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default QuoteRequestModal;
