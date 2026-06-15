import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Globe,
  Clock,
  Landmark,
  ShieldCheck,
  Award,
  Users,
  Building2,
} from "lucide-react";
import BoardMembers from "./../../../Components/Section/BoardMembers";
import { useNavigate } from "react-router-dom";

const ContactItem = ({ icon, title, desc, isMono }) => (
  <div className="flex items-start gap-5">
    <div className="bg-red-50 p-3 rounded-lg text-red-700">{icon}</div>
    <div>
      <h4 className="font-bold text-gray-900 text-sm">{title}</h4>
      <p
        className={`text-gray-600 text-sm ${isMono ? "font-mono" : ""}`}
        style={isMono ? { direction: "ltr" } : {}}
      >
        {desc}
      </p>
    </div>
  </div>
);

const HeadOfficePage = () => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="max-w-6xl mx-auto px-4 mt-30 mb-20"
      dir="rtl"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div variants={itemVariants} className="mb-16">
        <div className="flex items-center gap-4 mb-2">
          <div className="h-1 w-20 bg-red-700" />
          <span className="text-red-700 font-bold tracking-widest uppercase text-sm">
            تأسست عام 1934
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl font-black mb-6 text-gray-900 leading-tight">
          شركة مصر للتأمين <br />
          <span className="text-red-700 text-3xl md:text-4xl">
            عراقة تمتد لأكثر من 90 عاماً
          </span>
        </h1>
        <p className="text-xl text-gray-600 max-w-4xl leading-relaxed">
          تُعد مصر للتأمين واحدة من أعرق شركات التأمين في المنطقة العربية. لعبت
          دوراً محورياً في دعم الاقتصاد الوطني وحماية مختلف القطاعات الاقتصادية
          منذ بدايات القرن الماضي.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-12 gap-8">
        <motion.div
          variants={itemVariants}
          className="lg:col-span-7 space-y-12"
        >
          <section className="space-y-4">
            <h2 className="text-2xl font-bold flex items-center gap-2 text-gray-800">
              <Clock className="text-red-700" size={28} /> نبذة عن المركز
              الرئيسي
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              سعت الشركة منذ بداياتها إلى توسيع نطاق نشاطها خارج الحدود المصرية،
              حيث مارست النشاط التأميني في عدد من الدول العربية مثل السودان
              وليبيا وسوريا. كما أنشأت في خمسينيات القرن الماضي توكيلات لها في
              دول الخليج العربي، مساهمةً في إدخال صناعة التأمين الحديثة للمنطقة.
            </p>
          </section>

          <div className="relative overflow-hidden rounded-3xl bg-secondary p-6 text-white shadow-2xl">
            <Landmark
              className="absolute -left-10 -bottom-10 text-white/10"
              size={240}
            />
            <h2 className="text-3xl font-bold mb-6 relative z-10">
              رسالتنا من المقر الرئيسي
            </h2>
            <BoardMembers />
          </div>

          <section className="grid sm:grid-cols-2 gap-4">
            <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100">
              <Award className="text-blue-700 mb-3" size={32} />
              <h3 className="font-bold text-lg mb-2">التصنيفات الدولية</h3>
              <ul className="text-sm text-blue-900 space-y-2 list-disc">
                <li>
                  تصنيف <strong>B++</strong> من مؤسسة AM Best.
                </li>
                <li>
                  تصنيف <strong>AAA (EGY)</strong> من مؤسسة Fitch.
                </li>
                <li> أعلى تصنيف تمنحه فيتش لكيان مصري.</li>
              </ul>
            </div>
            <div className="p-6 bg-red-50 rounded-2xl border border-red-100">
              <ShieldCheck className="text-red-700 mb-3" size={32} />
              <h3 className="font-bold text-lg mb-2">الجودة والريادة</h3>
              <ul className="text-sm text-red-900 space-y-2 list-disc">
                <li> أول شركة عالمياً تنال ISO 9001:2015.</li>
                <li> الرائدة في تأمينات البترول والطاقة.</li>
                <li> خبرة كبرى في تأمينات الطيران والفضاء.</li>
              </ul>
            </div>
          </section>
        </motion.div>

        <motion.div variants={itemVariants} className="lg:col-span-5">
          <div className="space-y-6 sticky top-24">
            <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-xl shadow-gray-100">
              <h3 className="text-2xl font-bold text-secondary mb-8 border-b pb-4">
                معلومات التواصل
              </h3>
              <div className="space-y-8">
                <ContactItem
                  icon={<MapPin />}
                  title="العنوان"
                  desc="44 شارع الدقي، الجيزة، القاهرة، مصر."
                />
                <ContactItem
                  icon={<Phone />}
                  title="الخط الساخن"
                  desc="+20 2 3336 2111"
                  isMono
                />
                <ContactItem
                  icon={<Mail />}
                  title="المراسلات"
                  desc="info@misrins.com"
                />
                <ContactItem
                  icon={<Clock />}
                  title="ساعات العمل"
                  desc="الأحد - الخميس (07:30 ص - 03:30 م)"
                />
              </div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="mt-10 p-5 bg-red-50 rounded-2xl border-2 border-dashed border-red-200 text-center cursor-pointer"
                onClick={() => navigate("/about/kuwait-branch")}
              >
                <Building2 className="mx-auto text-red-700 mb-2" />
                <p className="text-sm font-bold text-red-900">
                  لعملائنا في دولة الكويت
                </p>
                <p className="text-xs text-red-600 mt-1">
                  اضغط هنا للانتقال لبيانات الفرع الإقليمي
                </p>
              </motion.div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-2xl border border-gray-100 text-center">
                <Users className="mx-auto text-red-700 mb-2" />
                <span className="block text-xs text-gray-500">قوة بشرية</span>
                <span className="font-bold">كفاءات متخصصة</span>
              </div>
              <div className="bg-white p-4 rounded-2xl border border-gray-100 text-center">
                <Globe className="mx-auto text-red-700 mb-2" />
                <span className="block text-xs text-gray-500">الانتشار</span>
                <span className="font-bold">إقليمي ودولي</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HeadOfficePage;
