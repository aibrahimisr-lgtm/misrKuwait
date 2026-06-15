import { useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import logo from "../../assets/logo.png";

export default function Counter() {
  const pulseDriver = useMotionValue(0);
  const opacity = useTransform(pulseDriver, [0, 1], [0.3, 1]);
  const scale = useTransform(pulseDriver, [0, 1], [0.95, 1]);

  useEffect(() => {
    const controls = animate(pulseDriver, 1, {
      duration: 1,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    });

    return () => controls.stop();
  }, [pulseDriver]);

  return (
    <div className="flex flex-col gap-5 items-center justify-center h-screen bg-white">
      <motion.img
        src={logo}
        alt="مصر للتامين"
        style={{ opacity, scale }}
        className=""
      />

      <motion.h1
        style={{ opacity }}
        className="text-4xl text-primary font-bold"
      >
        مصر للتأمين
      </motion.h1>
    </div>
  );
}
