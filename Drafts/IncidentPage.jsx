import { CircleAlert, Car, Shield, ArrowLeft, ClipboardCheck } from "lucide-react";
import { motion } from "framer-motion";
import AccidentReportModal from "../../Components/Tools/AccidentReportModal";
import { useState } from "react";

const IncidentPage = () => {
  let Motion = motion;
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Motion.div
      initial={{ y: "-15%", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut", type: "keyframes" }}
      className="mt-25 sm:mt-35 px-5 sm:px-20"
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100 text-red-500 font-bold mb-6">
            <CircleAlert size={18} />
            <span>مركز خدمة المطالبات</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6 leading-tight">
            تسجيل مطالبة جديدة
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            نحن هنا لمساعدتك في أوقات الشدة. يرجى اختيار نوع التأمين الذي ترغب في تسجيل مطالبة بشأنه
            للبدء في الإجراءات.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="group relative bg-white p-10 rounded-[2.5rem] border-2 border-red-500/20 shadow-2xl shadow-red-500/20 transition-all duration-500">
            <div className="w-20 h-20 bg-red-600 rounded-3xl flex items-center justify-center text-white mb-8 shadow-xl shadow-gray-200 rotate-3 group-hover:rotate-0 transition-transform duration-500">
              <Car size={40} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">إخطار حادث سيارة</h2>
            <p className="text-gray-600 mb-10 text-lg leading-relaxed">
              لتسجيل حوادث السيارات (شامل أو ضد الغير) وإرفاق المستندات المطلوبة.
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-red-500/90 rounded-full px-8 py-7 bg-red-500 text-white font-bold text-lg w-full shadow-xl h-auto cursor-pointer"
            >
              ابدأ التسجيل الآن <ArrowLeft size={24} className="mr-2" />
            </button>
            <div className="absolute top-10 left-10 opacity-[0.03] pointer-events-none group-hover:scale-110 transition-transform duration-700">
              <Car size={150} />
            </div>
          </div>

          <div className="group relative bg-white p-10 rounded-[2.5rem] border-2 border-gray-900/20 shadow-2xl shadow-gray-900/20 transition-all duration-500">
            <div className="w-20 h-20 bg-gray-800 rounded-3xl flex items-center justify-center text-white mb-8 shadow-xl shadow-gray-200 rotate-3 group-hover:rotate-0 transition-transform duration-500">
              <Shield size={40} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">إخطار باقي أنواع التأمين</h2>
            <p className="text-gray-600 mb-10 text-lg leading-relaxed">
              لتسجيل مطالبات الحريق، الهندسي، البحري، والحوادث العامة الأخرى.
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-red-500/90 rounded-full px-8 py-7 bg-gray-900 text-white font-bold text-lg w-full shadow-xl h-auto cursor-pointer"
            >
              ابدأ التسجيل الآن <ArrowLeft size={24} className="mr-2" />
            </button>
            <div className="absolute top-10 left-10 opacity-[0.03] pointer-events-none group-hover:scale-110 transition-transform duration-700">
              <Shield size={150} />
            </div>
          </div>
        </div>

        <div className="mt-20 text-center">
          <div className="bg-white/50 backdrop-blur-md p-8 rounded-3xl border border-white inline-block shadow-lg">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex items-center gap-4 text-gray-900 font-bold">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-red-500">
                  <ClipboardCheck size={24} />
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500 font-medium ">متابعة مطالبة سابقة</p>
                  <p className="text-lg">هل لديك رقم مطالبة بالفعل؟</p>
                </div>
              </div>
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border bg-background rounded-full px-8 py-6 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white font-bold h-auto cursor-pointer">
                متابعة حالة المطالبة
              </button>
            </div>
          </div>
        </div>
      </div>
      <AccidentReportModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </Motion.div>
  );
};

export default IncidentPage;
