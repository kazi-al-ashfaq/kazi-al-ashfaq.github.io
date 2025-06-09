"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const barVariants = {
  initial: { width: 0 },
  animate: { width: "100%" },
};

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);
  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gray-950 text-white"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.7 } }}
        >
          <div className="w-64 h-2 bg-gray-800 rounded-full overflow-hidden mt-8 shadow-lg">
            <motion.div
              className="h-full bg-cyan-400"
              variants={barVariants}
              initial="initial"
              animate="animate"
              transition={{ duration: 1.2, ease: "easeInOut" }}
            />
          </div>
          <span className="mt-6 text-cyan-400 font-semibold tracking-widest text-lg">
            Loading my portfolio...
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}