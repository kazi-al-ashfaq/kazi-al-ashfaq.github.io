"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-dgrees-bg text-dgrees-text transition-colors dark:bg-white dark:text-black">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-extrabold text-dgrees-text mb-4 dark:text-black"
      >
        Kazi Al Ashfaq
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="text-xl text-dgrees-secondary mb-8 dark:text-dgrees-primary"
      >
        Cybersecurity & IT professional solving real-world problems with secure, scalable solutions.
      </motion.p>
      <motion.a
        href="/Kazi_Al_Ashfaq_Resume.docx"
        download
        whileHover={{ scale: 1.08 }}
        className="px-8 py-3 bg-dgrees-primary text-dgrees-bg font-semibold rounded-lg shadow-lg transition hover:bg-dgrees-secondary hover:text-dgrees-text dark:bg-dgrees-secondary dark:text-black dark:hover:bg-dgrees-primary dark:hover:text-white"
      >
        Download Resume
      </motion.a>
    </section>
  );
}