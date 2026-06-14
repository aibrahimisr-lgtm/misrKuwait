import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const SuccessView = ({ handleClose }) => (
  <motion.div
    className="flex flex-col items-center justify-center text-center py-12 px-4 space-y-5"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
  >
    <div className="bg-green-50 p-4 rounded-full text-green-600 animate-bounce">
      <CheckCircle2 size={64} />
    </div>
    <h3 className="text-3xl font-extrabold text-slate-800">تم الارسال بنجاح</h3>
    <p className="text-gray-500 max-w-sm text-base leading-relaxed">
      تم تسجيل نموذج إخطار الحادث وإرساله إلى النظام المختص بنجاح. سنقوم بمراجعة
      الطلب والتواصل معك قريباً.
    </p>
    <button
      onClick={handleClose}
      className="mt-4 bg-slate-900 hover:bg-slate-800 text-white font-bold px-8 py-3 rounded-2xl shadow-md transition-all cursor-pointer active:scale-95"
    >
      إغلاق النافذة
    </button>
  </motion.div>
);

export default SuccessView;
