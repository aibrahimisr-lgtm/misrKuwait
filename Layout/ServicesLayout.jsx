import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { CheckCircle, X, CircleStar, HandFist, Gauge } from "lucide-react";
import QuoteRequestModal from "../Components/Modals/QuoteRequestModal";

const Motion = motion;

const fadeUp = {
  hidden: { y: 40, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const ServicesLayout = ({
  backgroundImage,
  title,
  subtitleLines = [],
  description,
  contactLink = "/contact",
  features = [],
  sectionTitle,
  sectionDescription,
  sections = [],
  carouselTitle,
  carouselData = [],
  children,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [width, setWidth] = useState(0);
  const carouselRef = useRef();

  const Benefits = [
    {
      icon: <CircleStar size={44} />,
      text: "خبرة طويلة في قطاع التأمين",
    },
    { icon: <Gauge size={44} />, text: "سرعة في إصدار الوثائق" },
    {
      icon: <HandFist size={44} />,
      text: "دعم احترافي عند المطالبات",
    },
    {
      icon: <CircleStar size={44} />,
      text: "حلول مرنة تناسب الأفراد",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0, x: "20%" },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        staggerChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  useEffect(() => {
    if (carouselRef.current) {
      setWidth(
        carouselRef.current.scrollWidth - carouselRef.current.offsetWidth,
      );
    }
  }, [carouselData]);

  return (
    <main className="space-y-20">
      {/* --- Hero Section --- */}
      <figure className="relative min-h-screen pt-35 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-xs w-full sm:w-2/5" />

        <Motion.div
          className="relative z-10 max-w-6xl px-10 text-white w-full sm:w-2/5"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-red-600 leading-tight">
            {title}
          </h1>
          <div className="text-2xl sm:text-3xl font-semibold mt-5">
            {subtitleLines.map((line, index) => (
              <p key={index} className={`${index === 1 ? "mt-1" : null}`}>
                {line}
              </p>
            ))}
          </div>
          <p className="mt-4 text-md">{description}</p>
          <div className="flex flex-col sm:flex-row justify-between w-fit items-center mt-10 gap-5">
            <Link
              to={contactLink}
              className="bg-red-600 rounded-4xl px-6 py-2 text-lg text-center w-full sm:w-auto"
            >
              تواصل معانا
            </Link>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-white/10 rounded-4xl px-6 py-2 text-lg cursor-pointer w-full sm:w-auto"
            >
              احصل علي التسعيرة الفوريه
            </button>
          </div>

          <div className="my-12 grid grid-cols-2 gap-3 w-fit content-end">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-white/5 p-2 px-4 rounded-lg border border-white/10"
              >
                <CheckCircle size={16} className="text-red-500 " />
                <span className="text-xs md:text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </Motion.div>

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
      </figure>

      <section className="px-6 sm:px-20 space-y-20">
        {/* --- Types of Documents Sections --- */}

        {sections.length > 0 && (
          <article className="relative">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={containerVariants}
              className="mb-10"
            >
              <motion.h3
                variants={itemVariants}
                className="text-xl sm:text-4xl font-bold pr-2 sm:pr-4 border-r-4 sm:border-r-8 border-red-600"
              >
                {sectionTitle}
              </motion.h3>

              <motion.p
                variants={itemVariants}
                className="mt-4 text-md sm:text-lg text-gray-500 max-w-xl leading-relaxed"
              >
                {sectionDescription}
              </motion.p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {sections.map((sec, idx) => (
                <Motion.div
                  layoutId={`card-${idx}`}
                  key={idx}
                  onClick={() => setSelectedId(idx)}
                  whileHover={{
                    y: -8,
                    transition: { duration: 0.2 },
                  }}
                  className="group bg-gray-50 rounded-3xl overflow-hidden border border-gray-100 shadow-sm cursor-pointer"
                >
                  <Motion.div className="overflow-hidden relative h-64">
                    <Motion.img
                      layoutId={`image-${idx}`}
                      src={sec.image}
                      alt={sec.title}
                      className="w-full h-full object-cover"
                    />
                    <Motion.h4
                      layoutId={`title-${idx}`}
                      className="backdrop-blur-3xl shadow-lg p-2 rounded-2xl text-center bg-gray-500/30 absolute bottom-4 right-5 text-xl font-semibold text-white"
                    >
                      {sec.title}
                    </Motion.h4>
                  </Motion.div>
                  <Motion.div className="p-8">
                    <p className="text-gray-600 line-clamp-2">
                      {sec.paragraph}
                    </p>
                  </Motion.div>
                </Motion.div>
              ))}
            </div>

            {/* Expanded Overlay */}
            <AnimatePresence>
              {selectedId !== null && (
                <div className="fixed inset-0 z-200 flex items-center justify-center p-4 sm:p-20">
                  <Motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setSelectedId(null)}
                    className="absolute inset-0 bg-black/40 backdrop-blur-md"
                  />
                  <Motion.div
                    layoutId={`card-${selectedId}`}
                    className="relative bg-white w-full max-w-4xl max-h-[90vh] rounded-3xl overflow-hidden shadow-2xl overflow-y-auto hide-scrollbar"
                  >
                    <div className="relative h-80 sm:h-96">
                      <Motion.img
                        layoutId={`image-${selectedId}`}
                        src={sections[selectedId].image}
                        className="w-full h-full object-cover"
                      />
                      <button
                        onClick={() => setSelectedId(null)}
                        className="absolute top-6 left-6 p-2 bg-black/20 hover:bg-black/40 backdrop-blur-md rounded-full text-white transition-colors"
                      >
                        <X size={24} />
                      </button>
                    </div>
                    <Motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="p-10 pt-5"
                    >
                      <Motion.h4
                        layoutId={`title-${selectedId}`}
                        className="text-xl md:text-3xl font-bold text-primary mb-5"
                      >
                        {sections[selectedId].title}
                      </Motion.h4>
                      <p className="text-lg md:text-xl text-gray-700 leading-loose">
                        {sections[selectedId].paragraph}
                      </p>
                    </Motion.div>
                  </Motion.div>
                </div>
              )}
            </AnimatePresence>
          </article>
        )}

        {/* --- Dynamic Carousel --- */}
        {carouselData.length > 0 && (
          <article className="overflow-hidden py-10 ">
            <motion.div
              ref={carouselRef}
              className="cursor-grab active:cursor-grabbing"
            >
              <motion.h3
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={itemVariants}
                className="text-xl sm:text-4xl font-bold pr-2 sm:pr-4 border-r-4 sm:border-r-8 border-red-600 mb-10"
              >
                {carouselTitle}
              </motion.h3>
              <motion.div
                drag="x"
                dragConstraints={{ left: 0, right: width }}
                dragElastic={0.1}
                className="flex gap-8 w-max mt-10"
              >
                {carouselData.map((card, idx) => (
                  <div
                    key={idx}
                    className="max-w-[320px] md:min-w-100 bg-white shadow-xl p-8 rounded-3xl border border-gray-50 shrink-0 overflow-hidden flex flex-col "
                  >
                    <h3 className="text-md sm:text-2xl font-bold mb-4 text-gray-900">
                      {card.title}
                    </h3>

                    <p className="text-xs sm:text-md text-gray-700 leading-relaxed mb-6 ">
                      {card.description}
                    </p>

                    <ul className="text-xs sm:text-lg space-y-2 mb-6">
                      {card.features?.map((feat, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-2 text-gray-600"
                        >
                          <span className={card.checkColor || "text-red-600"}>
                            {card.isCheck ? "✔" : "•"}
                          </span>
                          {feat}
                        </li>
                      ))}
                    </ul>

                    {card.note && (
                      <div className="items-end flex h-full">
                        <div
                          className={`${card.noteClass} border-r-4 p-4 rounded-l-lg text-sm w-full`}
                        >
                          {card.note}
                        </div>
                      </div>
                    )}

                    {card.gridItems && (
                      <div className="grid grid-cols-2 gap-3 mt-4 ">
                        {card.gridItems.map((item, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-2 bg-gray-50 p-2 rounded-xl border border-gray-100"
                          >
                            <div className="w-2 h-2 rounded-full bg-red-600"></div>
                            <span className="text-xs font-medium">{item}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </article>
        )}

        <div className="">{children}</div>

        {/* --- Why Us Section --- */}
        <article>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
            className="title"
          >
            <motion.h3
              variants={itemVariants}
              className="text-xl sm:text-4xl font-bold pr-2 sm:pr-4 border-r-4 sm:border-r-8 border-red-600"
            >
              لماذا مصر للتأمين –{" "}
              <span className="text-red-600">فرع الكويت؟</span>
            </motion.h3>
            <motion.p
              variants={itemVariants}
              className="text-gray-500 mt-4 text-md sm:text-xl font-light"
            >
              نحن نجمع بين العراقة والابتكار لنقدم لك أفضل تجربة تأمينية.
            </motion.p>
          </motion.div>
          <div className="w-full lg:w-4/5">
            <ul className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-10 sm:mt-16 text-center">
              {Benefits.map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ y: -10 }}
                  className="group flex flex-col items-center gap-6 p-8 rounded-3xl transition-all duration-300 hover:bg-white hover:shadow-2xl hover:shadow-red-100/50 border border-transparent hover:border-red-50"
                >
                  <div className="text-red-600 transition-transform duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(220,38,38,0.3)]">
                    {item.icon}
                  </div>
                  <div className="w-10 h-1 bg-gray-100 group-hover:w-16 group-hover:bg-red-600 transition-all duration-300 rounded-full" />
                  <p className="text-gray-700 font-medium text-sm sm:text-lg leading-relaxed group-hover:text-black">
                    {item.text}
                  </p>
                </motion.li>
              ))}
            </ul>
          </div>
        </article>
      </section>
    </main>
  );
};

export default ServicesLayout;
