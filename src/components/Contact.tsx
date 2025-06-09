"use client";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(false);
    setError(false);
    if (!form.current) return;
    emailjs
      .sendForm(
        "your_service_id",
        "your_template_id",
        form.current,
        "your_user_id"
      )
      .then(
        () => setSent(true),
        () => setError(true)
      );
  };

  return (
    <section id="contact" className="w-full max-w-2xl mx-auto py-12 bg-dgrees-bg text-dgrees-text dark:bg-white dark:text-black rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold mb-4 text-dgrees-secondary dark:text-dgrees-primary">Contact</h2>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col gap-4 bg-dgrees-bg p-6 rounded-lg shadow dark:bg-white"
      >
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
          className="p-2 rounded border border-dgrees-muted bg-dgrees-bg text-dgrees-text placeholder-dgrees-muted focus:border-dgrees-primary focus:ring-2 focus:ring-dgrees-secondary dark:bg-white dark:text-black dark:placeholder-dgrees-muted dark:border-dgrees-muted"
        />
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
          className="p-2 rounded border border-dgrees-muted bg-dgrees-bg text-dgrees-text placeholder-dgrees-muted focus:border-dgrees-primary focus:ring-2 focus:ring-dgrees-secondary dark:bg-white dark:text-black dark:placeholder-dgrees-muted dark:border-dgrees-muted"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          className="p-2 rounded border border-dgrees-muted bg-dgrees-bg text-dgrees-text placeholder-dgrees-muted focus:border-dgrees-primary focus:ring-2 focus:ring-dgrees-secondary dark:bg-white dark:text-black dark:placeholder-dgrees-muted dark:border-dgrees-muted"
        />
        <button
          type="submit"
          className="bg-dgrees-primary text-dgrees-bg font-semibold py-2 px-4 rounded hover:bg-dgrees-secondary hover:text-dgrees-text transition dark:bg-dgrees-secondary dark:text-black dark:hover:bg-dgrees-primary dark:hover:text-white"
        >
          Send Message
        </button>
        {sent && <p className="text-green-600 dark:text-green-700">Message sent successfully!</p>}
        {error && <p className="text-red-600 dark:text-red-700">Failed to send message. Please try again.</p>}
      </form>
      <div className="flex gap-6 mt-6 justify-center">
        <a
          href="https://linkedin.com/in/your-linkedin"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-2xl text-dgrees-secondary hover:text-dgrees-primary transition dark:text-dgrees-primary dark:hover:text-dgrees-secondary"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/your-github"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-2xl text-dgrees-muted hover:text-dgrees-primary transition dark:text-black dark:hover:text-dgrees-secondary"
        >
          <FaGithub />
        </a>
      </div>
      <footer className="mt-8 text-center text-xs text-dgrees-muted dark:text-black">
        &copy; {new Date().getFullYear()} Kazi Al Ashfaq
      </footer>
    </section>
  );
}