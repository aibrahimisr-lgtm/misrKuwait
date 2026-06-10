import { Clock, Mail, MapPin, PhoneCall } from "lucide-react";
import { motion } from "framer-motion";
import ContactForm from "../Components/Forms/ContactForm";

const ContactPage = () => {
  const cards = [
    {
      id: 1,
      title: "مقر الكويت",
      description:
        "شارع السور , بجوار وزارة الإعلام منطقة القبلة , دولة الكويت",
      iconColor: "blue",
      Icon: MapPin,
    },

    {
      id: 2,
      title: "أرقام التواصل",
      description: "+965 2243 8260 / +965 2243 8261 / +965 2243 8262",
      iconColor: "green",
      Icon: PhoneCall,
    },

    {
      id: 3,
      title: "البريد الإلكتروني",
      description: "info@misrins-kw.com",
      iconColor: "red",
      Icon: Mail,
    },
    {
      id: 4,
      title: "ساعات العمل",
      description: "الأحد - الخميس: 7:30 صباحاً - 3:30 مساءً",
      iconColor: "orange",
      Icon: Clock,
    },
  ];

  const colorClasses = {
    blue: { bg: "bg-blue-100/60", text: "text-blue-500" },
    green: { bg: "bg-green-100/60", text: "text-green-500" },
    red: { bg: "bg-red-100/60", text: "text-red-500" },
    orange: { bg: "bg-orange-100/60", text: "text-orange-500" },
    default: { bg: "bg-gray-100/60", text: "text-gray-500" },
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
          <p className="text-4xl font-bold mb-2"> تواصل معنا الآن</p>
          <p className="text-lg text-gray-600 mt-5">
            نحن هنا للرد على استفساراتكم وتقديم الدعم اللازم. لا تتردد في
            التواصل معنا عبر قنوات الاتصال المتاحة أو زيارة فرعنا.
          </p>
          {/*  */}
          <div className="contact-info mt-10 flex flex-col gap-2">
            {cards.map((card) => (
              <div
                key={card.id}
                className="card flex items-center gap-3 bg-gray-100 rounded-2xl p-5"
              >
                <div
                  className={`${colorClasses[card.iconColor]?.bg || colorClasses.default.bg} p-2 rounded-2xl`}
                >
                  <card.Icon
                    size={35}
                    className={`${colorClasses[card.iconColor]?.text || colorClasses.default.text}`}
                  />
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
          <ContactForm />
        </Motion.aside>
      </div>
    </div>
  );
};

export default ContactPage;
