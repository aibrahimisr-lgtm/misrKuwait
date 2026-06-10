import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, Send, Car, ShieldAlert, X } from "lucide-react";
import { accidentConfigs } from "../../Config/incidentConfigs";

const IncidentModal = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(0);
  const [accidentType, setAccidentType] = useState("");
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(false);

  const Motion = motion;
  const activeConfig = accidentType ? accidentConfigs[accidentType] : null;
  const fields = activeConfig ? activeConfig.fields : [];
  const totalSteps = 1 + fields.length / 4;

  const handleClose = () => {
    setStep(0);
    setAccidentType("");
    setFormData({});
    setError(false);
    onClose();
  };

  const handleChange = (e) => {
    setError(false);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const fieldGroups = [];
  for (let i = 0; i < fields.length; i += 4) {
    fieldGroups.push(fields.slice(i, i + 4));
  }

  const nextStep = () => {
    if (step === 0) {
      if (!accidentType) {
        setError(true);
        return;
      }
      setStep(1);
      return;
    }

    const currentGroup = fieldGroups[step - 1];
    const hasError = currentGroup.some(
      (field) =>
        !field.optional &&
        (!formData[field.name] || formData[field.name].trim() === ""),
    );

    if (hasError) {
      setError(true);
      return;
    }

    if (step < totalSteps - 1) {
      setStep((prev) => prev + 1);
    } else {
      console.log("Final Data with Tag:", { ...formData, tag: accidentType });
      handleClose();
    }
  };
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/60 z-60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          />

          <motion.div
            dir="rtl"
            className="fixed top-1/2 left-1/2 z-70 bg-white rounded-3xl shadow-2xl p-6 w-[95%] max-w-2xl overflow-y-auto "
            initial={{ opacity: 0, scale: 0.9, x: "-50%", y: "-45%" }}
            animate={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
            exit={{ opacity: 0, scale: 0.9, x: "-50%", y: "-45%" }}
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-slate-800">
                تسجيل إخطار حادث
              </h2>
              <button
                onClick={handleClose}
                className="text-gray-400 hover:text-red-600 transition-all cursor-pointer"
              >
                <X size={24} />
              </button>
            </div>

            {/* Step Info */}
            <div className="flex justify-between mb-4 px-2">
              <span className="text-xl font-bold text-red-600">
                {step === 0 ? "اختيار نوع الحادث" : activeConfig?.title}
              </span>
              <span className="text-sm text-gray-400 text-left">
                خطوة {step + 1} من {totalSteps}
              </span>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="min-h-62.5"
              >
                {/* STEP 0: TYPE SELECTION */}
                {step === 0 && (
                  <div className="flex flex-col sm:flex-row justify-center w-full gap-10 py-4">
                    <div className="flex flex-col items-center gap-3">
                      <button
                        onClick={() => setAccidentType("car_accident")}
                        className={`flex flex-col items-center gap-4 p-8 rounded-2xl border-2 transition-all cursor-pointer ${accidentType === "car_accident" ? "border-red-600 bg-red-50" : "border-gray-100"}`}
                      >
                        <Car
                          size={48}
                          className={
                            accidentType === "car_accident"
                              ? "text-red-600"
                              : "text-gray-400"
                          }
                        />
                        <span className="font-bold text-lg text-gray-700">
                          إخطار حادث سيارة
                        </span>
                      </button>
                      <a
                        href={accidentConfigs.car_accident.fields[0].pdfLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-blue-600 hover:text-blue-800 font-bold text-xs mb-1 transition-all"
                      >
                        تحميل نموذج توضيحي (PDF)
                      </a>
                    </div>
                    {/*  */}

                    <div className="flex flex-col items-center gap-3">
                      <button
                        onClick={() => setAccidentType("other_accident")}
                        className={`flex flex-col items-center gap-4 p-8 rounded-2xl border-2 transition-all cursor-pointer ${accidentType === "other_accident" ? "border-red-600 bg-red-50" : "border-gray-100"}`}
                      >
                        <ShieldAlert
                          size={48}
                          className={
                            accidentType === "other_accident"
                              ? "text-red-600"
                              : "text-gray-400"
                          }
                        />
                        <span className="font-bold text-lg text-gray-700">
                          باقي أنواع التأمين
                        </span>
                      </button>

                      <a
                        href={accidentConfigs.other_accident.fields[0].pdfLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-blue-600 hover:text-blue-800 font-bold text-xs mb-1 transition-all"
                      >
                        تحميل نموذج توضيحي (PDF)
                      </a>
                    </div>
                  </div>
                )}

                {/* STEPS 1+: DYNAMIC FIELDS */}
                {step > 0 && (
                  <div className="space-y-5 py-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {fieldGroups[step - 1].map((currentField) => (
                      <motion.div
                        key={currentField.name}
                        className="space-y-2"
                        animate={
                          error &&
                          !currentField.optional &&
                          (!formData[currentField.name] ||
                            formData[currentField.name].trim() === "")
                            ? { x: [-4, 4, -4, 4, 0] }
                            : {}
                        }
                      >
                        <div className="flex justify-between items-end">
                          <label className="block text-gray-700 text-xs font-bold ">
                            {currentField.label}
                            {currentField.type !== "pdf" &&
                              !currentField.optional && (
                                <span className="text-red-500"> *</span>
                              )}
                            {currentField.optional && (
                              <span className="text-gray-400 text-sm font-normal ms-2">
                                (اختياري)
                              </span>
                            )}
                          </label>
                        </div>
                        {currentField.type === "select" ? (
                          <select
                            name={currentField.name}
                            value={formData[currentField.name] || ""}
                            onChange={handleChange}
                            className={`w-full p-3 border rounded-2xl outline-none focus:ring-2 focus:ring-red-600 bg-white text-base ${
                              error &&
                              !currentField.optional &&
                              !formData[currentField.name]
                                ? "border-red-500 bg-red-50"
                                : "border-gray-200"
                            }`}
                          >
                            <option value="">اختر من القائمة...</option>
                            {currentField.options.map((opt, i) => (
                              <option key={i} value={opt}>
                                {opt}
                              </option>
                            ))}
                          </select>
                        ) : (
                          <input
                            type={currentField.type}
                            name={currentField.name}
                            value={formData[currentField.name] || ""}
                            onChange={handleChange}
                            className={`w-full p-3 border rounded-2xl outline-none focus:ring-2 focus:ring-red-600 text-base ${
                              error &&
                              !currentField.optional &&
                              (!formData[currentField.name] ||
                                formData[currentField.name].trim() === "")
                                ? "border-red-500 bg-red-50"
                                : "border-gray-200"
                            }`}
                          />
                        )}
                      </motion.div>
                    ))}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex gap-3 mt-8">
              <button
                onClick={nextStep}
                className={`flex-2 text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-2 transition-all active:scale-95 cursor-pointer ${step < totalSteps - 1 ? "bg-red-600 hover:bg-red-700 shadow-lg" : "bg-green-600 hover:bg-green-700 shadow-lg"}`}
              >
                {step < totalSteps - 1 ? (
                  <>
                    التالي <ChevronLeft size={20} />
                  </>
                ) : (
                  <>
                    إرسال البلاغ <Send size={20} />
                  </>
                )}
              </button>
              {step > 0 && (
                <button
                  onClick={() => {
                    setStep(step - 1);
                    setError(false);
                  }}
                  className="flex-1 px-6 py-4 border border-gray-300 rounded-2xl hover:bg-gray-50 transition-colors font-bold text-gray-600 cursor-pointer"
                >
                  السابق
                </button>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default IncidentModal;
