import React from "react";
import { Car, ShieldAlert } from "lucide-react";
import { accidentConfigs } from "../../Config/incidentConfigs";

const TypeSelectionStep = ({ currentType, setType, error }) => {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex flex-col sm:flex-row justify-center w-full gap-10 py-4">
        <div className="flex flex-col items-center gap-3">
          <button
            type="button"
            onClick={() => setType("car_accident")}
            className={`flex flex-col items-center gap-4 p-8 rounded-2xl border-2 transition-all cursor-pointer ${
              currentType === "car_accident" ? "border-red-600 bg-red-50" : "border-gray-100"
            }`}
          >
            <Car size={48} className={currentType === "car_accident" ? "text-red-600" : "text-gray-400"} />
            <span className="font-bold text-lg text-gray-700">إخطار حادث سيارة</span>
          </button>
          <a
            href={accidentConfigs.car_accident.fields[0].pdfLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-blue-600 hover:text-blue-800 font-bold text-xs transition-all"
          >
            تحميل نموذج توضيحي (PDF)
          </a>
        </div>

        <div className="flex flex-col items-center gap-3">
          <button
            type="button"
            onClick={() => setType("other_accident")}
            className={`flex flex-col items-center gap-4 p-8 rounded-2xl border-2 transition-all cursor-pointer ${
              currentType === "other_accident" ? "border-red-600 bg-red-50" : "border-gray-100"
            }`}
          >
            <ShieldAlert size={48} className={currentType === "other_accident" ? "text-red-600" : "text-gray-400"} />
            <span className="font-bold text-lg text-gray-700">باقي أنواع التأمين</span>
          </button>
          <a
            href={accidentConfigs.other_accident.fields[0].pdfLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-blue-600 hover:text-blue-800 font-bold text-xs transition-all"
          >
            تحميل نموذج توضيحي (PDF)
          </a>
        </div>
      </div>
      {error && <p className="text-red-500 text-sm font-bold mt-2">{error}</p>}
    </div>
  );
};

export default TypeSelectionStep;