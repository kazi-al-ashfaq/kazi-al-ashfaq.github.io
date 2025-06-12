"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const taglines = [
  "Academic Researcher",
  "University Level Educator",
  "IT Support & Systems Professional",
  "Cybersecurity Enthusiast",
  "Cybersecurity Emerging Specialist"
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (typing && displayed.length < taglines[index].length) {
      timeout = setTimeout(() => {
        setDisplayed(taglines[index].slice(0, displayed.length + 1));
      }, 60);
    } else if (typing && displayed.length === taglines[index].length) {
      timeout = setTimeout(() => setTyping(false), 1200);
    } else if (!typing) {
      timeout = setTimeout(() => {
        setDisplayed("");
        setTyping(true);
        setIndex((prev) => (prev + 1) % taglines.length);
      }, 700);
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, index]);

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center bg-dgrees-bg text-dgrees-text px-2"
      aria-labelledby="hero-heading"
    >
      <div className="w-full max-w-2xl flex flex-col items-center px-2 sm:px-0">
        <h1 id="hero-heading" className="text-3xl sm:text-4xl font-bold text-dgrees-text text-center leading-tight break-words w-full">
          Kazi Al Ashfaq
        </h1>
        <p className="mt-1 text-lg text-dgrees-muted min-h-[2.2rem] flex items-center justify-center w-full max-w-full overflow-x-auto sm:overflow-x-visible whitespace-pre-line break-words">
          <AnimatePresence mode="wait">
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="font-mono block w-full text-center break-words"
            >
              {displayed}
              <span className="border-r-2 border-dgrees-primary animate-pulse ml-1" />
            </motion.span>
          </AnimatePresence>
        </p>
        <div className="mt-3 flex flex-col sm:flex-row gap-2 w-full max-w-xs sm:max-w-none justify-center">
          <a href="#contact" className="px-4 py-1.5 rounded bg-dgrees-primary text-dgrees-bg font-semibold hover:bg-dgrees-secondary hover:text-dgrees-text transition text-center text-base w-full sm:w-auto">
            Let’s Work Together
          </a>
          <a href="/Kazi_Al_Ashfaq_Resume.pdf" className="px-4 py-1.5 rounded border-2 border-dgrees-primary text-dgrees-primary font-semibold hover:bg-dgrees-primary hover:text-dgrees-bg transition text-center text-base w-full sm:w-auto" download>
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}