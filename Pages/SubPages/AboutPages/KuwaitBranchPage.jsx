import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ExternalLink,
  Shield,
  Clock1,
} from "lucide-react";

const KuwaitBranchPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const Motion = motion;

  return (
    <Motion.div
      className="max-w-6xl mx-auto px-4 pt-30 text-right"
      dir="rtl"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <Motion.header
        variants={itemVariants}
        className="relative border-r-8 border-red-700 pr-6 mb-12"
      >
        <h1 className="text-4xl font-extrabold">مصر للتأمين - فرع الكويت</h1>
        <p className="text-xl text-gray-600 mt-2">
          نخدمكم في دولة الكويت منذ عقود من الثقة
        </p>
      </Motion.header>

      <div className="grid md:grid-cols-3 gap-8">
        <Motion.section
          variants={itemVariants}
          className="md:col-span-1 space-y-6"
        >
          <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
            <h2 className="text-2xl font-bold mb-6 text-secondary flex items-center gap-2">
              <Phone className="text-red-700" size={24} />
              اتصل بنا
            </h2>

            <div className="space-y-6">
              <div className="group">
                <p className="text-sm text-gray-500 mb-1">أرقام الفرع:</p>
                <p className="text-lg font-bold" style={{ direction: "ltr" }}>
                  +965 2243 8260 <br /> +965 2243 8261 <br /> +965 2243 8262
                </p>
              </div>

              <div className="group">
                <p className="text-sm text-gray-500 mb-1">البريد الإلكتروني</p>
                <p className="text-lg font-medium text-blue-800">
                  kuwait@misrins.com.eg
                </p>
              </div>
            </div>
          </div>

          <Motion.div
            whileHover={{ scale: 1.02 }}
            className="relative overflow-hidden rounded-2xl bg-secondary p-10 text-white shadow-2xl"
          >
            <Clock1
              className="absolute -left-10 -bottom-10 text-white/10"
              size={240}
            />
            <h3 className="font-bold mb-2 flex items-center gap-2">
              <Clock size={20} />
              أوقات العمل
            </h3>
            <p className="text-blue-100 text-sm leading-relaxed">
              من الأحد إلى الخميس
              <br />
              7:30 صباحاً حتى 3:30 مساءً
            </p>
          </Motion.div>
        </Motion.section>

        <Motion.section
          variants={itemVariants}
          className="md:col-span-2 space-y-6"
        >
          <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
            <h2 className="text-2xl font-bold mb-4 text-secondary flex items-center gap-2">
              <MapPin className="text-red-700" size={24} />
              موقع الفرع
            </h2>
            <p className="text-gray-700 mb-6 text-lg">
              الدور الثاني عشر - برج سما – شارع السور - بجوار وزارة الاعلام –
              القبله - الكويت
            </p>

            <div className="w-full h-80 bg-gray-200 rounded-xl overflow-hidden relative group">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3477.2937064632824!2d47.9682954!3d29.3616883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fcf84dbbfa686c3%3A0x1c9ddc7be71b4467!2sMisr%20Insurance!5e0!3m2!1sen!2seg!4v1775646557621!5m2!1sen!2seg"
                className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-500"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
              <div className="absolute inset-0 pointer-events-none border-4 border-transparent group-hover:border-blue-900/10 transition-all rounded-xl"></div>
            </div>
          </div>
        </Motion.section>
      </div>
    </Motion.div>
  );
};

export default KuwaitBranchPage;
