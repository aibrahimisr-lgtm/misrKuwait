import {
  Clock,
  Mail,
  MapPin,
  PhoneCall,
  User,
  Phone,
  ChevronDown,
  Upload,
  Globe,
} from "lucide-react";

import { useRef } from "react";

const JobForm = () => {
  const fileInputRef = useRef(null);

  const handleDivClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log("Selected file:", file.name);
    }
  };

  return (
    <div className="bg-secondary rounded-[3rem] p-10 md:p-14 shadow-2xl relative z-10 overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-red-50 opacity-20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>

      <div className="absolute top-0 right-0 w-64 h-64 bg-red-100 opacity-20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>

      <form className="space-y-8 relative z-10" style={{ opacity: 1 }}>
        <h3 className="text-xl sm:text-3xl font-black text-white">
          تقدم الآن للوظيفة
        </h3>

        {/* Name + Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-3">
            <label className="text-white/80 font-bold text-md sm:text-lg">
              الاسم بالكامل
            </label>
            <input
              className="flex w-full border px-3 py-2 rounded-2xl border-white/10 bg-white/5 focus:ring-red-100 h-14 text-lg text-white placeholder:text-white/20 focus:outline-none focus:ring-2"
              required
              placeholder="أدخل اسمك كما في البطاقة المدنية"
            />
          </div>

          <div className="space-y-3">
            <label className="text-white/80 font-bold text-md sm:text-lg">
              رقم الهاتف
            </label>
            <input
              className="flex w-full border px-3 py-2 rounded-2xl border-white/10 bg-white/5 focus:ring-red-100 h-14 text-lg text-white placeholder:text-white/20 focus:outline-none focus:ring-2"
              required
              placeholder="+965 XXXX XXXX"
              dir="ltr"
            />
          </div>
        </div>

        {/* Email */}
        <div className="space-y-3">
          <label className="text-white/80 font-bold text-md sm:text-lg">
            البريد الإلكتروني
          </label>
          <input
            type="email"
            className="flex w-full border px-3 py-2 rounded-2xl border-white/10 bg-white/5 focus:ring-red-100 h-14 text-lg text-white placeholder:text-white/20 focus:outline-none focus:ring-2"
            required
            placeholder="name@example.com"
            dir="ltr"
          />
        </div>

        {/* Job Selection */}
        <div className="space-y-3">
          <label className="text-white/80 font-bold text-md sm:text-lg">
            الوظيفة المستهدفة
          </label>
          <select className="option-select flex w-full appearance-none border px-3 py-2 rounded-2xl border-white/10 focus:ring-red-100 h-14 text-lg text-white focus:outline-none focus:ring-2">
            <option value="">اختر الوظيفة المناسبة</option>
            <option value="underwriting">مكتتب تأمين</option>
            <option value="claims">مسؤول مطالبات</option>
            <option value="sales">مندوب مبيعات تأمين</option>
            <option value="customer-service">خدمة عملاء</option>
            <option value="it">تكنولوجيا المعلومات</option>
            <option value="other">أخرى</option>
          </select>
        </div>

        {/* Experience */}
        <div className="space-y-3">
          <label className="text-white/80 font-bold text-md sm:text-lg">
            سنوات الخبرة
          </label>
          <input
            type="number"
            className="flex w-full border px-3 py-2 rounded-2xl border-white/10 bg-white/5 focus:ring-red-100 h-14 text-lg text-white placeholder:text-white/20 focus:outline-none focus:ring-2"
            placeholder="عدد سنوات الخبرة"
          />
        </div>

        {/* CV Upload */}
        <div className="space-y-3">
          <label className="text-white/80 font-bold text-md sm:text-lg">
            تحميل السيرة الذاتية (CV)
          </label>

          <div
            onClick={handleDivClick}
            className="border-2 border-dashed border-white/10 rounded-2xl p-4 sm:p-8 text-center bg-white/5 cursor-pointer"
          >
            <Upload size={32} className="mx-auto mb-2 text-white/60" />

            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              className="hidden"
              accept=".pdf"
            />

            <p className="text-sm font-bold text-white/60">رفع ملف PDF</p>
          </div>
        </div>

        {/* Submit Button */}
        <button
          className="bg-white text-primiary rounded-4xl w-full text-lg sm:text-2xl justify-center items-center font-bold py-3 px-8 sm:py-6 sm:px-10"
          type="submit"
        >
          إرسال الطلب الآن
        </button>
      </form>
    </div>
  );
};

export default JobForm;
