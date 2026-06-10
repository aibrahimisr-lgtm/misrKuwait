import { useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import logo from "../../assets/logo.png";

export default function Counter() {
  // 1. Create a single driver (0 to 1)
  const pulseDriver = useMotionValue(0);

  // 2. Map that driver to Opacity for both elements (from 0.3 to 1)
  const opacity = useTransform(pulseDriver, [0, 1], [0.3, 1]);

  // 3. Optional: Map it to Scale for a "breathing" effect
  const scale = useTransform(pulseDriver, [0, 1], [0.95, 1]);

  useEffect(() => {
    // 4. Animate the driver back and forth
    const controls = animate(pulseDriver, 1, {
      duration: 1,
      repeat: Infinity,
      repeatType: "reverse", // This creates the smooth "yo-yo" effect
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
