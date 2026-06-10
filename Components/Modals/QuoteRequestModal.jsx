import React, { useEffect } from "react"; // Added useEffect
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, Send } from "lucide-react";
import { insuranceConfigs } from "../../Config/formConfigs.js";
import { useFormContext } from "../../Context/FormContext.jsx";

const QuoteRequestModal = ({ onClose }) => {
  const { form, updateForm, handleChange, resetForm } = useFormContext("quote");
  const { step, category, formData, error } = form;
  const FIELDS_PER_STEP = 2;
  const dynamicFields = category ? insuranceConfigs[category].fields : [];
  const totalSteps = 2 + Math.ceil(dynamicFields.length / FIELDS_PER_STEP);

  useEffect(() => {
    return () => resetForm();
  }, []);

  const handleClose = () => {
    resetForm();
    if (onClose) onClose();
  };

  const nextStep = () => {
    // STEP 0 VALIDATION
    if (step === 0) {
      if (!formData.userName || !formData.userPhone || !formData.userEmail) {
        updateForm({ error: true });
        return;
      }
    }

    // STEP 1 VALIDATION
    if (step === 1 && !category) {
      updateForm({ error: true });
      return;
    }

    // DYNAMIC VALIDATION
    if (step >= 2) {
      const startIndex = (step - 2) * FIELDS_PER_STEP;
      const currentStepFields = dynamicFields.slice(
        startIndex,
        startIndex + FIELDS_PER_STEP,
      );
      const hasEmptyField = currentStepFields.some(
        (field) => !formData[field.name],
      );

      if (hasEmptyField) {
        updateForm({ error: true });
        return;
      }
    }

    if (step < totalSteps - 1) {
      updateForm({ step: step + 1, error: false });
    } else {
      console.log("Final Data Submission:", formData);
      handleClose();
    }
  };

  const prevStep = () => {
    updateForm({ step: step - 1, error: false });
  };

  return (
    <div className="w-full max-w-2xl mx-auto text-right">
      <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden my-8">
        <div
          className="bg-red-600 h-full transition-all duration-500 ease-out"
          style={{ width: `${((step + 1) / totalSteps) * 100}%` }}
        />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
        >
          {/* STEP 0 */}
          {step === 0 && (
            <div className="space-y-4">
              <div className="flex">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  البيانات الشخصية
                </h3>
              </div>
              <div className="grid grid-cols-1 gap-4">
                {[
                  {
                    label: "الاسم الكامل",
                    name: "userName",
                    placeholder: "أدخل اسمك الثلاثي",
                    type: "text",
                  },
                  {
                    label: "رقم الهاتف",
                    name: "userPhone",
                    placeholder: "965xxxxxxx",
                    type: "tel",
                  },
                  {
                    label: "البريد الالكتروني",
                    name: "userEmail",
                    placeholder: "example@example.com",
                    type: "email",
                  },
                ].map((field) => (
                  <motion.div
                    key={field.name}
                    animate={
                      error && !formData[field.name]
                        ? { x: [-4, 4, -4, 4, 0] }
                        : {}
                    }
                  >
                    <label className="block text-gray-700 mb-2 font-medium">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      name={field.name}
                      value={formData[field.name] || ""}
                      onChange={handleChange}
                      className={`w-full p-4 border rounded-2xl outline-none transition-all ${
                        error && !formData[field.name]
                          ? "border-red-500 bg-red-50"
                          : "border-gray-200 focus:border-red-600"
                      }`}
                      placeholder={field.placeholder}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* STEP 1 */}
          {step === 1 && (
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                اختر نوع التأمين
              </h3>
              <motion.div
                animate={error && !category ? { x: [-4, 4, -4, 4, 0] } : {}}
                className="grid grid-cols-1 md:grid-cols-2 gap-3"
              >
                {Object.keys(insuranceConfigs).map((key) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => {
                      // 3. FIXED: Use updateForm instead of setCategory/setError
                      updateForm({ category: key, error: false });
                    }}
                    className={`p-4 text-center rounded-2xl border-2 transition-all font-bold ${
                      category === key
                        ? "border-red-600 bg-red-50 text-red-700"
                        : error && !category
                          ? "border-red-200 animate-pulse"
                          : "border-gray-100 hover:border-red-200"
                    }`}
                  >
                    {insuranceConfigs[key].title}
                  </button>
                ))}
              </motion.div>
            </div>
          )}

          {/* DYNAMIC STEPS (Step 2+) */}
          {step >= 2 && (
            <div className="space-y-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-red-600">
                  {insuranceConfigs[category].title}
                </h3>
                <span className="text-sm text-gray-400">
                  صفحة {step - 1} من {totalSteps - 2}
                </span>
              </div>
              <div className="grid grid-cols-1 gap-6">
                {(() => {
                  const startIndex = (step - 2) * FIELDS_PER_STEP;
                  const currentStepFields = dynamicFields.slice(
                    startIndex,
                    startIndex + FIELDS_PER_STEP,
                  );

                  return currentStepFields.map((field) => {
                    const hasValue = !!formData[field.name];
                    return (
                      <motion.div
                        key={field.name}
                        animate={
                          error && !hasValue ? { x: [-4, 4, -4, 4, 0] } : {}
                        }
                      >
                        <label className="block text-gray-700 mb-2 font-bold text-md">
                          {field.label}
                        </label>
                        {field.type === "select" ? (
                          <select
                            name={field.name}
                            value={formData[field.name] || ""}
                            onChange={handleChange}
                            className={`w-full p-4 border rounded-2xl outline-none bg-white transition-all ${
                              error && !hasValue
                                ? "border-red-500 bg-red-50"
                                : "border-gray-200 focus:border-red-600"
                            }`}
                          >
                            <option value="">اختر...</option>
                            {field.options.map((opt, i) => (
                              <option key={i} value={opt}>
                                {opt}
                              </option>
                            ))}
                          </select>
                        ) : (
                          <input
                            type={field.type}
                            name={field.name}
                            {...(field.type !== "file" && {
                              value: formData[field.name] || "",
                            })}
                            onChange={handleChange}
                            placeholder="مطلوب..."
                            className={`w-full p-4 border rounded-2xl outline-none transition-all ${
                              error && !hasValue
                                ? "border-red-500 bg-red-50"
                                : "border-gray-200 focus:border-red-600"
                            }`}
                          />
                        )}
                      </motion.div>
                    );
                  });
                })()}
              </div>
            </div>
          )}

          {/* BUTTONS */}
          <div className="flex gap-3 mt-8">
            <button
              onClick={nextStep}
              className={`flex-2 text-white font-bold py-4 rounded-2xl transition-all active:scale-95 flex items-center justify-center gap-2 shadow-lg ${
                step < totalSteps - 1
                  ? "bg-red-600 hover:bg-red-700 shadow-red-100"
                  : "bg-green-600 hover:bg-green-700 shadow-green-100"
              }`}
            >
              {step < totalSteps - 1 ? (
                <>
                  التالي <ChevronLeft size={20} />
                </>
              ) : (
                <>
                  إرسال الطلب <Send size={20} />
                </>
              )}
            </button>

            {step > 0 && (
              <button
                onClick={prevStep}
                className="flex-1 px-6 py-4 border border-gray-300 rounded-2xl hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 font-bold text-gray-600"
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
