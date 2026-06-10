import { useState } from "react";
import img from "../../assets/CarInsurance_shield.png";
import AccidentReportModal from "../Modals/IncidentModal";

const RegisterSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative w-full px-5 py-16 sm:px-12 lg:px-20 bg-linear-to-bl from-red-600 via-red-400 to-red-200 -mb-10 overflow-hidden">
      <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-sm p-8 sm:p-12">
        <div className="flex flex-col-reverse sm:flex-row items-center gap-10 sm:gap-16">
          {/* TEXT */}
          <aside className="flex flex-col items-start text-right w-full">
            <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold leading-snug">
              هل تعرضت لحادث؟
              <br />
              <span className="text-red-600 text-lg sm:text-2xl font-semibold">
                نحن معك في كل خطوة
              </span>
            </h2>

            <p className="mt-5 text-sm sm:text-lg text-gray-500 max-w-xl leading-relaxed">
              بإمكانك الآن تسجيل إخطار الحادث إلكترونياً بكل سهولة وسرعة، وسيقوم
              فريق المطالبات لدينا بمتابعة طلبك فوراً.
            </p>

            <button
              onClick={() => setIsModalOpen(true)}
              className="mt-8 px-6 py-3 sm:px-8 sm:py-4 bg-red-600 text-white 
              rounded-full shadow-md hover:shadow-xl hover:scale-105 
              transition-all duration-300"
            >
              تسجيل إخطار حادث
            </button>

            <AccidentReportModal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
            />
          </aside>

          {/* IMAGE */}
          <aside className="w-full flex justify-center">
            <img
              src={img}
              alt="Accident support"
              className="w-64 sm:w-80 object-contain rounded-full"
            />
          </aside>
        </div>
      </div>
    </section>
  );
};

export default RegisterSection;
