"use client";
import { useEffect, useState } from "react";

export default function DarkModeToggle() {
  const [mounted, setMounted] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (typeof window !== "undefined") {
      const userTheme = localStorage.getItem("theme");
      const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const isDark = userTheme === "dark" || (!userTheme && systemPrefersDark);
      setDark(isDark);
      document.documentElement.classList[isDark ? 'add' : 'remove']("dark");
    }
  }, []);
  const toggle = () => {
    setDark((prev) => {
      const newDark = !prev;
      document.documentElement.classList[newDark ? 'add' : 'remove']("dark");
      localStorage.setItem("theme", newDark ? "dark" : "light");
      return newDark;
    });
  };
  if (!mounted) return null;
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <button
        aria-label="Toggle dark mode"
        onClick={toggle}
        className="fixed top-4 right-4 z-50 bg-gray-200 dark:bg-gray-800 rounded-full p-2 shadow hover:bg-gray-300 dark:hover:bg-gray-700 transition"
      >
        {dark ? (
          // Moon icon
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path
              d="M21 12.79A9 9 0 0111.21 3a7 7 0 108.58 9.79z"
              fill="currentColor"
              className="text-gray-700 dark:text-gray-200"
            />
          </svg>
        ) : (
          // Sun icon
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="5" fill="currentColor" className="text-yellow-400" />
            <g stroke="currentColor" strokeWidth="2">
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </g>
          </svg>
        )}
      </button>
    </div>
  );
}
