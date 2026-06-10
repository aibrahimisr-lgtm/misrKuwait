import { useState } from "react";
import { Car, Shield, HardHat, Flame, Anchor } from "lucide-react";

const insurance = [
  {
    id: "1",
    title: "تأمين سيارات",
    icon: Car,
    bgColor: "bg-blue-500/10",
    textColor: "text-blue-500",
  },
  {
    id: "2",
    title: "تأمين حريق",
    icon: Flame,
    bgColor: "bg-orange-200/40",
    textColor: "text-orange-500",
  },
  {
    id: "3",
    title: "تأمين هندسي",
    icon: HardHat,
    bgColor: "bg-yellow-500/10",
    textColor: "text-yellow-700",
  },
  {
    id: "4",
    title: "تأمين بحري",
    icon: Anchor,
    bgColor: "bg-sky-500/10",
    textColor: "text-sky-500",
  },
  {
    id: "5",
    title: "حوادث متنوعة",
    icon: Shield,
    bgColor: "bg-purple-500/10",
    textColor: "text-purple-500",
  },
];

const PricePlans = () => {
  const [step, setStep] = useState(0);
  const [selectedInsurance, setSelectedInsurance] = useState(null);

  const nextStep = () => {
    if (step < 2) setStep(step + 1);
  };

  const renderInsuranceStep = () => (
    <div className="flex justify-around items-center mt-10 gap-5">
      {insurance.map((e) => {
        const Icon = e.icon;
        const isSelected = selectedInsurance === e.id;
        return (
          <div
            key={e.id}
            onClick={() => setSelectedInsurance(e.id)}
            className={`flex flex-col gap-2 items-center justify-center border-2 rounded-2xl p-5 w-1/4 cursor-pointer transition-all duration-300 ${
              isSelected
                ? "border-red-600 bg-red-50"
                : "border-gray-200 bg-white"
            }`}
          >
            <div
              className={`${isSelected ? "bg-red-600 text-white" : `${e.bgColor} ${e.textColor}`} p-3 rounded-2xl transition-colors`}
            >
              <Icon size={24} />
            </div>
            <p
              className={`font-bold ${isSelected ? "text-red-600" : "text-gray-700"}`}
            >
              {e.title}
            </p>
          </div>
        );
      })}
    </div>
  );

  const stepsContent = [
    {
      title: "اختر نوع التأمين المطلوب",
      content: renderInsuranceStep(),
    },
    {
      title: "أدخل بياناتك الشخصية",
      content: (
        <p className="mt-5">هنا يمكن أن تضيف نموذج لإدخال البيانات الشخصية</p>
      ),
    },
    {
      title: "تأكيد المعلومات",
      content: <p className="mt-5">هنا يتم عرض ملخص المعلومات قبل الإرسال</p>,
    },
  ];

  return (
    <section className="bg-amber-50 p-15 mt-20">
      <div className="mx-15 flex flex-col justify-center items-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold">احصل على عرض سعر فوري</h1>
          <p className="mt-3 text-md text-gray-500">
            خطوات بسيطة لتأمين مستقبلك مع مصر للتأمين
          </p>
        </div>

        <div className="bg-white shadow mt-10 p-10 text-center w-full max-w-5xl rounded-2xl">
          {/* Stepper Header */}
          <div className="relative flex justify-between items-center w-full mb-20 mt-5">
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -translate-y-1/2 z-0"></div>
            {stepsContent.map((_, index) => (
              <div
                key={index}
                className={`relative z-10 rounded-full w-10 h-10 flex items-center justify-center font-bold transition-all duration-300 ${
                  step >= index
                    ? "bg-red-600 text-white"
                    : "bg-gray-100 text-gray-400"
                }`}
              >
                {index + 1}
              </div>
            ))}
          </div>

          <h1 className="text-2xl font-semibold">{stepsContent[step].title}</h1>
          {stepsContent[step].content}

          <button
            onClick={nextStep}
            disabled={step === 0 && !selectedInsurance}
            className={`px-15 py-3 mt-15 rounded-3xl text-white font-bold text-xl transition-all ${
              step === 0 && !selectedInsurance
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-red-600 cursor-pointer hover:bg-red-700 shadow-lg shadow-red-200"
            }`}
          >
            {step === stepsContent.length - 1 ? "إرسال" : "التالي"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default PricePlans;
