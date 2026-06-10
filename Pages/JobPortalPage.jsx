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
import { motion } from "framer-motion";
import { useRef } from "react";
import JobForm from "../Components/Forms/JobForm";

const JobPortalPage = () => {
  const cards = [
    {
      id: 1,
      title: "بيئة عمل عالمية",
      description: "نقدم بيئة عمل تدعم التنوع والابتكار",
      Icon: Globe,
    },
    {
      id: 2,
      title: "تطور مهني مستمر",
      description: "برامج تدريبية وتطويرية لكافة الموظفين",
      Icon: PhoneCall,
    },
    {
      id: 3,
      title: "استقرار ومزايا",
      description: "حزمة مزايا وحوافز تنافسية في السوق الكويتي",
      Icon: Mail,
    },
  ];

  const fileInputRef = useRef(null);

  const handleDivClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log("Selected file:", file.name);
    }
  };
  const Motion = motion;

  return (
    <div className="mt-20 sm:mt-35 px-5 sm:px-20">
      <div className="grid md:grid-cols-12">
        <Motion.aside
          initial={{ x: "15%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="col-span-5"
        >
          <p className="text-4xl font-bold mb-2">
            شاركنا النجاح في مصر للتأمين
          </p>
          <p className="text-lg text-gray-600 mt-5">
            نحن نبحث دائماً عن الكفاءات والمواهب التي تسعى للتميز والابتكار في
            مجال التأمين. انضم إلينا لتبدأ مسيرة مهنية واعدة في إحدى أعرق
            الشركات التأمينية بالمنطقة.
          </p>
          {/*  */}
          <div className="contact-info mt-10 flex flex-col gap-2">
            {cards.map((card) => (
              <div key={card.id} className="card flex items-center gap-3 py-5">
                <div className="bg-white shadow p-2 rounded-2xl">
                  <card.Icon size={35} className="text-red-500" />
                </div>
                <div className="text">
                  <h1 className="mb-1.5 text-xl font-bold">{card.title}</h1>
                  <p
                    className="text-gray-600 font-bold text-sm"
                    style={{ direction: "ltr" }}
                  >
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Motion.aside>
        <div className="sm:col-span-1"></div>
        <Motion.aside
          initial={{ x: "-15%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="col-span-6 mt-10 sm-mt-0"
        >
          <JobForm />
        </Motion.aside>
      </div>
    </div>
  );
};

export default JobPortalPage;
