import { Banknote, ReceiptText, TrendingUp, Users } from "lucide-react";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useInView,
} from "framer-motion";
import { useEffect, useRef } from "react";

const AnimatedNumber = ({ value, suffix = "", className }) => {
  const ref = useRef(null);

  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const count = useMotionValue(0);

  const rounded = useTransform(count, (latest) => {
    const isDecimal = value % 1 !== 0;
    const formattedNum = isDecimal
      ? (Math.round(latest * 10) / 10).toFixed(1)
      : Math.round(latest);
    return `${formattedNum}${suffix}`;
  });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, {
        duration: 3,
        ease: "easeOutExpo",
      });
      return controls.stop;
    }
  }, [count, value, isInView]);

  return (
    <motion.span ref={ref} className={className}>
      {rounded}
    </motion.span>
  );
};

const statsData = [
  {
    id: 1,
    icon: TrendingUp,
    label: "حجم الاستثمارات",
    valueEGP: 104.9,
    suffixEGP: "B",
    valueUSD: 2.2,
    suffixUSD: "B USD",
  },
  {
    id: 2,
    icon: ReceiptText,
    label: "اجمالي الاصول",
    valueEGP: 113.6,
    suffixEGP: "B",
    valueUSD: 2.4,
    suffixUSD: "B USD",
  },
  {
    id: 3,
    icon: Banknote,
    label: "إجمالي الأقساط",
    valueEGP: 22.2,
    suffixEGP: "B",
    valueUSD: 466,
    suffixUSD: "M USD",
  },
  {
    id: 4,
    icon: Users,
    label: "التعويضات المسددة",
    valueEGP: 8.4,
    suffixEGP: "B",
    valueUSD: 176,
    suffixUSD: "M USD",
  },
];

const StatsGrid = () => {
  return (
    <section className="grid grid-cols-2 gap-5 sm:grid-cols-4 sm:px-10">
      {statsData.map(
        ({
          id,
          icon: Icon,
          label,
          valueEGP,
          suffixEGP,
          valueUSD,
          suffixUSD,
        }) => (
          <div className="col" key={id}>
            <figure className="bg-white hover:bg-[#102237] group transition-all duration-500 border border-gray-100 rounded-2xl p-5 flex flex-col gap-4 cursor-pointer">
              <div className="bg-gray-50 rounded-xl w-15 h-15 flex items-center justify-center">
                <Icon size={40} strokeWidth={1.5} className="text-gray-500" />
              </div>

              <div className="flex flex-col gap-1">
                <p className="text-sm text-gray-400 group-hover:text-white transition-colors duration-500">
                  {label}
                </p>
                <div className="flex items-baseline gap-2">
                  <AnimatedNumber
                    value={valueEGP}
                    suffix={suffixEGP}
                    className="text-2xl sm:text-4xl text-gray-900 group-hover:text-white transition-colors duration-500 pt-3 font-bold"
                  />
                  <span className="text-xs font-medium text-red-700 bg-red-50 px-2 py-0.5 rounded">
                    EGP
                  </span>
                </div>
                <AnimatedNumber
                  value={valueUSD}
                  suffix={suffixUSD}
                  className="text-xs text-gray-300 group-hover:text-white transition-colors duration-500"
                />
              </div>
            </figure>
          </div>
        ),
      )}
    </section>
  );
};

export default StatsGrid;
