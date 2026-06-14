import { Upload } from "lucide-react";
import { useRef, useState } from "react";
import { useJob } from "../../Context/JobContext";

const JobForm = () => {
  const { submitJobApplication, loading, success, error } = useJob();
  const [position, setPosition] = useState("");
  const [otherPosition, setOtherPosition] = useState("");
  const [experience, setExperience] = useState("");

  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const [file, setFile] = useState(null);

  const fileInputRef = useRef(null);

  const handleDivClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = new FormData();

    payload.append("fullName", fullName);
    payload.append("email", email);
    payload.append("phone", phone);

    const finalPosition = position === "other" ? otherPosition : position;
    payload.append("position", finalPosition);

    const customMessage = experience ? `سنوات الخبرة: ${experience}` : "";
    payload.append("message", customMessage);

    if (file) {
      payload.append("cv", file);
    }

    try {
      await submitJobApplication(payload);
    } catch (err) {}
  };

  return (
    <div className="bg-secondary rounded-[3rem] p-10 md:p-14 shadow-2xl relative z-10 overflow-hidden">
      <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
        <h3 className="text-xl sm:text-3xl font-black text-white">
          تقدم الآن للوظيفة
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-3">
            <label className="text-white/80 font-bold">الاسم بالكامل</label>
            <input
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="flex w-full border px-3 py-2 rounded-2xl border-white/10 bg-white/5 h-14 text-lg text-white"
              placeholder="أدخل اسمك"
              required
            />
          </div>

          <div className="space-y-3">
            <label className="text-white/80 font-bold">رقم الهاتف</label>
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="flex w-full border px-3 py-2 rounded-2xl border-white/10 bg-white/5 h-14 text-lg text-white"
              placeholder="+965 XXXX XXXX"
              required
              dir="ltr"
            />
          </div>
        </div>
        <div className="space-y-3">
          <label className="text-white/80 font-bold">البريد الإلكتروني</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="flex w-full border px-3 py-2 rounded-2xl border-white/10 bg-white/5 h-14 text-lg text-white"
            placeholder="name@example.com"
            required
            dir="ltr"
          />
        </div>
        <div className="space-y-3">
          <label className="text-white/80 font-bold">الوظيفة المستهدفة</label>

          <select
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            className="option-select flex w-full appearance-none border px-3 py-2 rounded-2xl border-white/10 focus:ring-red-100 h-14 text-lg text-white focus:outline-none focus:ring-2"
          >
            <option value="">اختر الوظيفة المناسبة</option>
            <option value="specialist">اخصائي تأمين</option>
            <option value="claims">مسؤول مطالبات</option>
            <option value="sales">مندوب مبيعات تأمين</option>
            <option value="underwriting">مكتتب تأمين</option>
            <option value="customer-service">خدمة عملاء</option>
            <option value="it">تكنولوجيا المعلومات</option>
            <option value="other">أخرى</option>
          </select>

          {position === "other" && (
            <input
              value={otherPosition}
              onChange={(e) => setOtherPosition(e.target.value)}
              type="text"
              placeholder="اكتب الوظيفة الأخرى"
              className="flex w-full border px-3 py-2 rounded-2xl border-white/10 bg-white/5 h-14 text-lg text-white"
              required
            />
          )}
        </div>
        <div className="space-y-3">
          <label className="text-white/80 font-bold">سنوات الخبرة</label>

          <div className="flex gap-4">
            {[
              { label: "1-3", value: "1-3" },
              { label: "3-5", value: "3-5" },
              { label: "أكثر من 10 سنوات", value: "10+" },
            ].map((item) => (
              <button
                key={item.value}
                type="button"
                onClick={() => setExperience(item.value)}
                className={`flex-1 h-14 rounded-2xl text-lg font-bold border transition-all
                  ${
                    experience === item.value
                      ? "bg-white text-black border-white"
                      : "bg-white/5 text-white border-white/10 hover:bg-white/10"
                  }
                `}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
        <div className="space-y-3">
          <label className="text-white/80 font-bold">السيرة الذاتية (CV)</label>

          <div
            onClick={handleDivClick}
            className="border-2 border-dashed border-white/10 rounded-2xl p-6 text-center bg-white/5 cursor-pointer"
          >
            <Upload className="mx-auto mb-2 text-white/60" />

            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              className="hidden"
              accept=".pdf"
            />

            <p className="text-sm text-white/60">
              {file ? file.name : "رفع ملف PDF"}
            </p>
          </div>
        </div>
        <button
          type="submit"
          disabled={loading}
          className="bg-white text-black rounded-2xl w-full text-xl font-bold py-4 disabled:opacity-50"
        >
          {loading ? "جاري الإرسال..." : "إرسال الطلب الآن"}
        </button>
        {success && (
          <p className="text-green-400 font-bold">تم إرسال الطلب بنجاح ✅</p>
        )}

        {error && <p className="text-red-400 font-bold">{error}</p>}
      </form>
    </div>
  );
};

export default JobForm;
