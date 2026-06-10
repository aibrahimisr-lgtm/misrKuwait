import { motion, AnimatePresence } from "framer-motion";

const Motion = motion;

const QuoteModal = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <Motion.div
            className="fixed inset-0 bg-black/50 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <Motion.div
            className="fixed top-1/2 left-1/2 z-50 translate-y-10 bg-white rounded-2xl shadow-xl p-8 w-[90%] max-w-md"
            initial={{ opacity: 0, scale: 0.8, x: "-50%", y: "-50%" }}
            animate={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
            exit={{ opacity: 0, scale: 0.8, x: "-50%", y: "-50%" }}
          >
            <h2 className="text-2xl font-bold mb-4 text-black">احصل علي التسعيرة الفورية</h2>

            <form className="space-y-4">
              <input type="text" placeholder="الاسم" className="w-full border p-3 rounded-lg" />

              <input
                type="text"
                placeholder="رقم الهاتف"
                className="w-full border p-3 rounded-lg"
              />

              <textarea
                placeholder="اكتب التفاصيل"
                className="w-full border p-3 rounded-lg resize-none"
              />

              <button className="w-full bg-red-600 text-white py-3 rounded-lg cursor-pointer">
                ارسال
              </button>
            </form>
          </Motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default QuoteModal;
