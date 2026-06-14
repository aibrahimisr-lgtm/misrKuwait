import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, Send, X } from "lucide-react";

import {
  accidentConfigs,
  generateYupSchema,
} from "../../Config/incidentConfigs";

import { useCarAccident } from "../../Context/CarAccidentContext";
import { useOtherAccident } from "../../Context/OtherAccidentContext";

import InputField from "./InputField";
import TypeSelectionStep from "./TypeSelectionStep";
import SuccessView from "./SuccessView";

const insuranceTypeMapping = {
  "حوادث شخصية": 1,
  حريق: 2,
  هندسي: 3,
  بحري: 4,
  مسئوليات: 5,
};

const IncidentModal = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(0);
  const [accidentType, setAccidentType] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    addCarAccident,
    loading: carLoading,
    error: carError,
  } = useCarAccident();

  const {
    addOtherAccident,
    loading: otherLoading,
    error: otherError,
  } = useOtherAccident();

  const loading = carLoading || otherLoading;
  const apiError = carError || otherError;

  const activeConfig = accidentType ? accidentConfigs[accidentType] : null;
  const fields = activeConfig ? activeConfig.fields : [];

  const fieldGroups = [];
  for (let i = 0; i < fields.length; i += 4) {
    fieldGroups.push(fields.slice(i, i + 4));
  }
  const totalSteps = 1 + fieldGroups.length;

  const getCurrentValidationSchema = () => {
    if (step === 0) {
      return Yup.object().shape({
        accidentType: Yup.string().required(
          "يرجى اختيار نوع الحادث أولاً قبل الانتقال",
        ),
      });
    }

    const currentGroup = fieldGroups[step - 1] || [];
    return generateYupSchema(currentGroup);
  };

  const formik = useFormik({
    initialValues: {
      accidentType: "",
    },
    validationSchema: getCurrentValidationSchema(),
    enableReinitialize: true,
    onSubmit: async (values) => {
      await handleSubmitPayload(values);
    },
  });

  const handleTypeSelect = (type) => {
    setAccidentType(type);
    formik.setFieldValue("accidentType", type);
  };

  const handleClose = () => {
    setStep(0);
    setAccidentType("");
    setIsSuccess(false);
    formik.resetForm();
    onClose();
  };

  const nextStep = async () => {
    const errors = await formik.validateForm();

    const currentFieldNames =
      step === 0 ? ["accidentType"] : fieldGroups[step - 1].map((f) => f.name);

    const hasErrorsInCurrentStep = currentFieldNames.some(
      (name) => errors[name],
    );

    if (hasErrorsInCurrentStep) {
      currentFieldNames.forEach((name) =>
        formik.setFieldTouched(name, true, true),
      );
      return;
    }

    if (step < totalSteps - 1) {
      setStep((prev) => prev + 1);
    } else {
      formik.handleSubmit();
    }
  };

  const handleSubmitPayload = async (values) => {
    try {
      const dataPayload = new FormData();

      if (accidentType === "car_accident") {
        dataPayload.append("InsuranceType", "1");
        dataPayload.append("PolicyNumber", values.policyNumber || "");
        dataPayload.append("InsuredName", values.insuredName || "");
        dataPayload.append("PhoneNumber", values.phoneNumber || "");
        dataPayload.append("Email", values.email || "");
        dataPayload.append("PlateNumber", values.plateNumber || "");
        dataPayload.append("CarBrand", values.carBrand || "");
        dataPayload.append("CarModel", values.carModel || "");
        dataPayload.append("AccidentDate", values.accidentDate || "");
        dataPayload.append("Location", values.location || "");
        dataPayload.append("HasSecondParty", values.secondParty === "نعم");
        dataPayload.append("Description", values.description || "");

        if (values.additionalDocument)
          dataPayload.append("AdditionalDocuments", values.additionalDocument);
        if (values.report) dataPayload.append("Reports", values.report);
        if (values.images) dataPayload.append("Images", values.images);

        await addCarAccident(dataPayload);
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: "incident_submit",
          form_id: "incidentForm",
          accident_type: "car_accident",
        });
      } else {
        const typeId = insuranceTypeMapping[values.insuranceType] || 0;
        dataPayload.append("InsuranceType", typeId);
        dataPayload.append("PolicyNumber", values.policyNumber || "");
        dataPayload.append("InsuredName", values.nameOfinsured || "");
        dataPayload.append("PhoneNumber", values.phoneNumber || "");
        dataPayload.append("Email", values.email || "");
        dataPayload.append("AccidentDate", values.accidentDate || "");
        dataPayload.append("AccidentPlace", values.accidentPlace || "");
        dataPayload.append("Location", values.accidentPlace || "");
        dataPayload.append("TypeOfLoss", values.typeofLose || "");
        dataPayload.append("DamageDescription", values.damageDesc || "");
        dataPayload.append("Description", values.damageDesc || "");

        if (values.report) dataPayload.append("Reports", values.report);
        if (values.images) dataPayload.append("Images", values.images);
        if (values.additionalDocument)
          dataPayload.append("AdditionalDocuments", values.additionalDocument);

        await addOtherAccident(dataPayload);
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: "incident_submit",
          form_id: "incidentForm",
          accident_type: "other_accident",
        });
      }

      setIsSuccess(true);
    } catch (err) {
      console.error("Submission failed:", err);
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
            className="fixed top-1/2 left-1/2 z-70 bg-white rounded-3xl shadow-2xl p-6 w-[95%] max-w-2xl max-h-[90vh] overflow-y-auto"
            initial={{ opacity: 0, scale: 0.9, x: "-50%", y: "-45%" }}
            animate={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
            exit={{ opacity: 0, scale: 0.9, x: "-50%", y: "-45%" }}
          >
            {isSuccess ? (
              <SuccessView handleClose={handleClose} />
            ) : (
              <form id="incidentForm" onSubmit={(e) => e.preventDefault()}>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-slate-800">
                    تسجيل إخطار حادث
                  </h2>
                  <button
                    type="button"
                    onClick={handleClose}
                    className="text-gray-400 hover:text-red-600 transition-all cursor-pointer"
                  >
                    <X size={24} />
                  </button>
                </div>

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
                    {step === 0 && (
                      <TypeSelectionStep
                        currentType={accidentType}
                        setType={handleTypeSelect}
                        error={
                          formik.touched.accidentType &&
                          formik.errors.accidentType
                        }
                      />
                    )}

                    {step > 0 && (
                      <div className="space-y-5 py-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {fieldGroups[step - 1].map((currentField) => (
                          <InputField
                            key={currentField.name}
                            field={currentField}
                            formik={formik}
                          />
                        ))}
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>

                {apiError && (
                  <p className="text-red-600 font-bold text-center text-sm mt-2 bg-red-50 p-2 rounded-xl">
                    خطأ أثناء الإرسال: {apiError}
                  </p>
                )}

                <div className="flex gap-3 mt-8">
                  <button
                    type="button"
                    onClick={nextStep}
                    disabled={loading}
                    className={`flex-2 text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-2 transition-all active:scale-95 cursor-pointer disabled:opacity-50 ${
                      step < totalSteps - 1
                        ? "bg-red-600 hover:bg-red-700 shadow-lg"
                        : "bg-green-600 hover:bg-green-700 shadow-lg"
                    }`}
                  >
                    {loading ? (
                      "جاري الإرسال..."
                    ) : step < totalSteps - 1 ? (
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
                      type="button"
                      onClick={() => setStep(step - 1)}
                      disabled={loading}
                      className="flex-1 px-6 py-4 border border-gray-300 rounded-2xl hover:bg-gray-50 transition-colors font-bold text-gray-600 cursor-pointer disabled:opacity-50"
                    >
                      السابق
                    </button>
                  )}
                </div>
              </form>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default IncidentModal;
