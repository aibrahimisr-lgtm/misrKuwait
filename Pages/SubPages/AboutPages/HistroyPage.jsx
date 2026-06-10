import { motion } from "framer-motion";
import {
  Landmark,
  Calendar,
  Award,
  Globe,
  ShieldCheck,
  Shield,
} from "lucide-react";

import { Flag } from "lucide-react";
import TalaatHarabImg from "../../../assets/Talaat Harab.png";
import BranchesImg from "../../../assets/Branches.png";
import KuwaitFlagImg from "../../../assets/kuwait-flag.png";
import MisrInsuranceHoldingImg from "../../../assets/MisrInsuranceHolding.png";
import TSFE from "../../../assets/TSFE.png";

const historyData = [
  {
    year: "1934",
    title: "التأسيس والبداية",
    description:
      "تأسست شركة مصر للتأمين على يد رائد الاقتصاد الوطني محمد طلعت حرب باشا، كأول شركة تأمين برأس مال مصري بنسبة 100%، لتكون أحد ركائز استقلال الاقتصاد المصري.",
    icon: <Landmark className="text-white" />,
    CardImg: TalaatHarabImg,
  },
  {
    year: "1950",
    title: "التوسع الإقليمي",
    description:
      "بدأت الشركة في مد نشاطها خارج الحدود المصرية، حيث افتتحت فروعاً في عدة دول عربية، مما عزز مكانتها كقائد لسوق التأمين في منطقة الشرق الأوسط.",
    icon: <Globe className="text-white" />,
    CardImg: BranchesImg,
  },
  {
    year: "1958",
    title: "افتتاح فرع الكويت",
    description:
      "توسيع النطاق الجغرافي للشركة بافتتاح فرع دولة الكويت، كخطوة استراتيجية لخدمة منطقة الخليج العربي، ليصبح اليوم واحدًا من أعرق وأقدم كيانات التأمين في السوق الكويتي.",
    icon: <Flag className="text-white" />,
    CardImg: KuwaitFlagImg,
  },
  {
    year: "2006",
    title: "تأسيس شركة مصر القابضة للتأمين",
    description:
      "صدور قرار بإعادة هيكلة قطاع التأمين وتأسيس شركة مصر القابضة للتأمين، لتصبح مصر للتأمين أكبر شركة تابعة متخصصة في تأمينات الممتلكات والمسئوليات.",
    icon: <ShieldCheck className="text-white" />,
    CardImg: MisrInsuranceHoldingImg,
  },
  {
    year: "2023",
    title: "الانضمام لصندوق مصر السيادي",
    description:
      "نقل ملكية الشركة إلى صندوق مصر السيادي، مما فتح آفاقاً جديدة للتطوير الرقمي والتوسع الاستثماري وفق أحدث المعايير الدولية.",
    icon: <Award className="text-white" />,
    CardImg: TSFE,
  },
];

const Motion = motion;

const HistoryPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen pt-25 overflow-hidden -mb-10">
      <section className="relative py-10 text-center px-5">
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-black mb-6">تاريخ مصر للتأمين</h1>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed">
            عقود من الثقة والأمان.. نستعرض معكم مسيرة بناء صرح تأميني بدأ بحلم
            طلعت حرب ليصبح رمزاً للاقتصاد الوطني.
          </p>
        </Motion.div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-10 relative overflow-hidden">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full  w-0.5 bg-gray-200 hidden md:block" />

        <div className="space-y-24">
          {historyData.map((item, index) => (
            <Motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? 80 : -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className={`relative flex flex-col md:flex-row items-center justify-between ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="group relative overflow-hidden w-full md:w-[45%] bg-white p-8 rounded-[2.5rem] shadow-xl shadow-gray-200/50 border border-gray-100 transition-colors duration-500">
                <img
                  src={item.CardImg}
                  alt={item.title}
                  className="absolute bottom-0 -left-10 w-40 opacity-15 group-hover:opacity-100 group-hover:z-30 group-hover:left-0 h-auto pointer-events-none z-0 transition-all duration-500"
                />

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-red-600 p-3 rounded-2xl shadow-lg shadow-red-200">
                      {item.icon}
                    </div>
                    <span className="text-3xl font-black text-red-600">
                      {item.year}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-black mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-red-600 rounded-full border-4 border-white shadow-md hidden md:block z-10"></div>

              <div className="hidden md:block w-[45%]"></div>
            </Motion.div>
          ))}
        </div>
      </section>

      <section className="bg-white py-20 border-t border-gray-100">
        <div className="max-w-4xl mx-auto text-center px-6">
          <Motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-[#102237] mb-6">
              مصر للتأمين اليوم
            </h2>
            <p className="text-lg text-gray-500 mb-8 leading-loose">
              تعد شركة مصر للتأمين اليوم أكبر كيان حكومي في سوق التأمين المصري،
              بحصة سوقية رائدة وقاعدة أصول تتجاوز المليارات. نحن لا نحمي فقط
              الممتلكات، بل نبني مستقبلاً آمناً للأجيال القادمة من خلال الابتكار
              المستمر والتحول الرقمي الشامل.
            </p>
            <div className="flex flex-wrap justify-center gap-10 mt-10">
              <div className="text-center">
                <p className="text-4xl font-black text-red-600">90+</p>
                <p className="text-gray-500 font-bold">عاماً من الخبرة</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-black text-red-600">100%</p>
                <p className="text-gray-500 font-bold">رأس مال مصري</p>
              </div>
              <div className="text-center flex flex-col items-center">
                <p className="text-4xl font-black text-red-600">1</p>
                <p className="text-gray-500 font-bold">الأولى في مصر</p>
              </div>
            </div>
          </Motion.div>
        </div>
      </section>
    </div>
  );
};

export default HistoryPage;
