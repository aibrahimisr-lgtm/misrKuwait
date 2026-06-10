import { Send } from "lucide-react";

const ContactForm = () => {
  return (
    <div className="bg-secondary rounded-[3rem] p-10 md:p-14 shadow-2xl relative z-10 overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-red-50 opacity-20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>

      <div className="absolute top-0 right-0 w-64 h-64 bg-red-100 opacity-20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>

      <form className="space-y-8 relative z-10" style={{ opacity: 1 }}>
        <h3 className="text-xl sm:text-3xl font-black text-white">
          أرسل لنا رسالة
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-3">
            <label className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-white/80 font-bold text-md sm:text-lg">
              الاسم بالكامل
            </label>
            <input
              className="flex w-full border px-3 py-2 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm rounded-2xl border-white/10 bg-white/5 focus:ring-primary h-14 text-lg text-white placeholder:text-white/20"
              name="name"
              required
              placeholder="أدخل اسمك"
            />
          </div>

          <div className="space-y-3">
            <label className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-md sm:text-lg text-white/80 font-bold">
              رقم الهاتف
            </label>
            <input
              className="flex w-full border px-3 py-2 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm rounded-2xl border-white/10 bg-white/5 focus:ring-primary h-14 text-lg text-white placeholder:text-white/20"
              name="phone"
              required
              placeholder="+965 XXXX XXXX"
              dir="ltr"
            />
          </div>
        </div>

        <div className="space-y-3">
          <label className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-md sm:text-lg text-white/80 font-bold">
            الموضوع
          </label>
          <input
            className="flex w-full border px-3 py-2 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm rounded-2xl border-white/10 bg-white/5 focus:ring-primary h-14 text-lg text-white placeholder:text-white/20"
            name="subject"
            required
            placeholder="عن ماذا تود الاستفسار؟"
          />
        </div>

        <div className="space-y-3">
          <label className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-md sm:text-lg text-white/80 font-bold">
            الرسالة
          </label>
          <textarea
            className="flex w-full border ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 rounded-2xl border-white/10 bg-white/5 focus:ring-primary min-h-37.5 text-lg text-white placeholder:text-white/20 p-6 resize-none"
            name="message"
            required
            placeholder="اكتب تفاصيل استفسارك هنا..."
          ></textarea>
        </div>

        <button
          className="bg-white text-primiary rounded-4xl w-full text-lg sm:text-2xl justify-center items-center font-bold py-3 px-8 sm:py-6 sm:px-10"
          type="submit"
        >
          إرسال الرسالة الآن
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
