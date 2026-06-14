import { useState } from "react";
import { X } from "lucide-react";
import Logo from "../../assets/logo.png";
import img from "../../assets/9e72ae0d39b00ec28d4d9d137752c29f.jpg";
import { motion, AnimatePresence } from "framer-motion";
import QuoteRequestModal from "../Modals/QuoteRequestModal";
import ReactGA from "react-ga4";

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const Motion = motion;

  const handleButtonClick = () => {
    ReactGA.event({
      category: "User Interaction",
      action: "Clicked Contact Button",
      label: "Header Section",
      value: 1,
    });
  };

  const scrollToServices = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      const offset = 100;
      const elementPosition = servicesSection.offsetTop;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative h-full py-20 sm:py-0 sm:h-[calc(100vh-30px)] w-full">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${img})` }}
      />
      <div className="absolute inset-0 bg-linear-to-l from-black/90 to-transparent" />

      <div className="relative z-10 text-white sm:pt-40 px-10">
        <div className="flex flex-col">
          <div className="flex items-center gap-2 w-fit backdrop-blur-md bg-red-500/40 border border-white/20 text-white rounded-4xl px-6 py-3 shadow-lg">
            <img className="w-4" src={Logo} alt="" />
            <span>كيان تأميني عريق منذ 1934</span>
          </div>
          <div className="overflow-hidden">
            <Motion.p
              className="mt-5 text-4xl sm:text-7xl font-bold"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              transition={{ duration: 1 }}
            >
              نؤمن حاضرك...
            </Motion.p>
            <Motion.p
              className="ms-8 text-red-600 text-4xl sm:text-7xl font-bold"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              transition={{ duration: 1.5, delay: 0.4 }}
            >
              لنضمن مستقبلك
            </Motion.p>
          </div>
          <p className="text-md w-full sm:w-2/4 pt-2">
            مصر للتأمين - فرع الكويت، الخبرة الممتدة والريادة المستمرة في تقديم
            أفضل الحلول التأمينية.
          </p>
          <div className="flex items-end h-full gap-5 mt-10">
            <button
              onClick={() => {
                setIsModalOpen(true);
                handleButtonClick();
              }}
              className="bg-red-600 px-6 py-3 text-white rounded-3xl text-sm sm:text-xl font-bold cursor-pointer"
            >
              طلب عرض سعر
            </button>
            <button
              onClick={scrollToServices}
              className="bg-white px-6 py-3 text-black rounded-3xl text-sm sm:text-xl font-bold cursor-pointer"
            >
              استكشف خدماتنا
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
            <Motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <Motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative bg-white text-black w-full max-w-lg rounded-2xl shadow-2xl p-8 pt-5 overflow-y-auto"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-5 left-5 text-gray-400 hover:text-black cursor-pointer"
              >
                <X size={24} />
              </button>
              <QuoteRequestModal onClose={() => setIsModalOpen(false)} />
            </Motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HeroSection;
