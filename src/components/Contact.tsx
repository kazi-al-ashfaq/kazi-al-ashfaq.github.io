"use client";
import { useRef, useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [year, setYear] = useState<number | null>(null);

  // Simple sanitization for user input
  function sanitize(input: string) {
    return input.replace(/[<>]/g, "");
  }

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setSent(false);
    setError(false);
    setLoading(true);
    if (!form.current) return;
    const formData = new FormData(form.current);
    const name = sanitize(formData.get("user_name") as string);
    const email = sanitize(formData.get("user_email") as string);
    const message = sanitize(formData.get("message") as string);
    if (!name || !email || !message) {
      setError(true);
      setLoading(false);
      return;
    }
    try {
      await emailjs.send(
        "service_2hkm9lu",
        "template_d7whynt",
        {
          user_name: name,
          user_email: email,
          message: message,
        },
        "4JfsUnAYT4AWKlLdn"
      );
      setSent(true);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <section
      id="contact"
      className="w-full max-w-2xl mx-auto py-10 px-4 bg-dgrees-bg text-dgrees-text rounded-xl shadow-lg"
      aria-labelledby="contact-heading"
    >
      <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-dgrees-secondary tracking-tight text-center">Contact</h2>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col gap-4 bg-dgrees-bg p-6 rounded-xl shadow-md border border-dgrees-muted/20"
        aria-label="Contact form"
        autoComplete="off"
      >
        <label htmlFor="user_name" className="sr-only">Name</label>
        <input
          id="user_name"
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
          minLength={2}
          maxLength={50}
          className="p-3 rounded-lg border border-dgrees-muted bg-dgrees-bg text-dgrees-text placeholder-dgrees-muted focus:border-dgrees-primary focus:ring-2 focus:ring-dgrees-secondary outline-none transition text-base md:text-lg"
        />
        <label htmlFor="user_email" className="sr-only">Email</label>
        <input
          id="user_email"
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
          minLength={5}
          maxLength={100}
          pattern="^[^@\s]+@[^@\s]+\.[^@\s]+$"
          className="p-3 rounded-lg border border-dgrees-muted bg-dgrees-bg text-dgrees-text placeholder-dgrees-muted focus:border-dgrees-primary focus:ring-2 focus:ring-dgrees-secondary outline-none transition text-base md:text-lg"
        />
        <label htmlFor="message" className="sr-only">Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Your Message"
          required
          minLength={5}
          maxLength={1000}
          rows={5}
          className="p-3 rounded-lg border border-dgrees-muted bg-dgrees-bg text-dgrees-text placeholder-dgrees-muted focus:border-dgrees-primary focus:ring-2 focus:ring-dgrees-secondary outline-none transition resize-none text-base md:text-lg"
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-dgrees-primary text-dgrees-bg font-semibold py-3 px-6 rounded-lg hover:bg-dgrees-secondary hover:text-dgrees-text focus:ring-2 focus:ring-dgrees-secondary focus:outline-none transition text-lg shadow-md disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
        {sent && <p className="text-green-500 font-medium text-center">Message sent successfully!</p>}
        {error && <p className="text-red-500 font-medium text-center">Failed to send message. Please try again.</p>}
      </form>
      {/* Email Me Directly Block */}
      <div className="flex justify-center mt-10">
        <div className="bg-dgrees-bg border border-dgrees-muted rounded-xl shadow-md px-6 py-5 w-full max-w-md text-center">
          <h3 className="text-xl font-semibold mb-2 text-dgrees-primary">Email Me Directly</h3>
          <p className="text-dgrees-muted mb-2">Prefer email? You can also reach me at</p>
          <a
            href="mailto:kazialashfaq@gmail.com"
            className="text-dgrees-primary underline hover:text-dgrees-secondary transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-dgrees-primary font-mono text-base md:text-lg font-medium"
            aria-label="Email kazialashfaq@gmail.com"
          >
            kazialashfaq@gmail.com
          </a>
          <div className="mt-2 text-xs text-dgrees-muted select-all">
            kazialashfaq [at] gmail [dot] com
          </div>
        </div>
      </div>
      {/* End Email Me Directly Block */}
      <footer className="mt-10 text-center text-xs text-dgrees-muted tracking-wide select-none">
        &copy; {year ?? ''} Kazi Al Ashfaq
      </footer>
    </section>
  );
}