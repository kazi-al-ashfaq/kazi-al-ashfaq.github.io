"use client";
import { FaUserCircle } from "react-icons/fa";

export default function AboutMe() {
  return (
    <section
      id="about"
      className="w-full max-w-2xl mx-auto py-16 px-4 bg-dgrees-bg text-dgrees-text transition-colors rounded-xl shadow-lg dark:bg-white dark:text-black"
      aria-labelledby="about-heading"
    >
      <div className="flex items-center mb-6">
        <FaUserCircle className="text-4xl text-dgrees-secondary mr-3 dark:text-dgrees-primary" aria-hidden="true" />
        <h2 id="about-heading" className="text-3xl font-bold text-dgrees-secondary dark:text-dgrees-primary">
          About Me
        </h2>
      </div>
      <p className="text-lg leading-relaxed text-dgrees-muted dark:text-black/60">
        I am passionate about cybersecurity, have BSc in Computer Engineering and Science. Completed Masters of Information Technology with distinction.  Experience with IT help desk and cyber security. Highly organized, in-depth understanding and keen to take on new challenges. Looking for a position in a reputable organization in the field of  IT networking, cyber security etc. where I can apply my learning and demonstrate my strong interpersonal skills as well as an effective team player skills.
      </p>
    </section>
  );
}