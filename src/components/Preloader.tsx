"use client";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [show, setShow] = useState(true);
  const [line1, setLine1] = useState("");
  const [line2, setLine2] = useState("");
  const [typing1, setTyping1] = useState(true);
  const [typing2, setTyping2] = useState(false);
  const name = "Kazi Al Ashfaq";
  const role = "> Cybersecurity Enthusiast | Educator";

  useEffect(() => {
    let i = 0;
    let j = 0;
    let timeout1: NodeJS.Timeout;
    let timeout2: NodeJS.Timeout;
    let fadeTimeout: NodeJS.Timeout;

    function typeLine1() {
      if (i <= name.length) {
        setLine1(name.slice(0, i));
        i++;
        timeout1 = setTimeout(typeLine1, 70);
      } else {
        setTyping1(false);
        setTyping2(true);
        timeout1 = setTimeout(typeLine2, 400);
      }
    }
    function typeLine2() {
      if (j <= role.length) {
        setLine2(role.slice(0, j));
        j++;
        timeout2 = setTimeout(typeLine2, 55);
      } else {
        setTyping2(false);
        fadeTimeout = setTimeout(() => setShow(false), 2500);
      }
    }
    typeLine1();
    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
      clearTimeout(fadeTimeout);
    };
  }, []);

  if (!show) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-start justify-start bg-[#1B1F27] text-[#00C0E0] transition-opacity duration-700 ${!typing1 && !typing2 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
      role="status"
      aria-live="polite"
      aria-label="Loading Kazi Al Ashfaq's portfolio"
    >
      <div className="flex flex-col items-start mt-20 ml-1 p-2 sm:mt-24 sm:ml-6 sm:p-4 w-full max-w-full overflow-x-auto" style={{fontFamily: 'Courier New, Courier, monospace', fontSize: 'clamp(1.05rem, 4vw, 1.3rem)', wordBreak: 'break-word'}}>
        <span className="terminal-line break-words break-all w-full max-w-full whitespace-pre-line">{line1}<span className="terminal-cursor">{typing1 ? '|' : ''}</span></span>
        <span className="terminal-line break-words break-all w-full max-w-full whitespace-pre-line">{line2}<span className="terminal-cursor">{typing2 ? '|' : ''}</span></span>
      </div>
      <style>{`
        .terminal-line { white-space: pre-line; line-height: 1.2; margin-bottom: 0.5em; letter-spacing: 0.01em; word-break: break-word; max-width: 100vw; overflow-wrap: break-word; }
        .terminal-cursor { display: inline-block; width: 1ch; color: #00C0E0; animation: blink 1s steps(1) infinite; font-weight: bold; }
        @keyframes blink { 0%, 50% { opacity: 1; } 51%, 100% { opacity: 0; } }
        @media (max-width: 600px) {
          .terminal-line { font-size: clamp(0.9rem, 5vw, 1.05rem); max-width: 100vw; }
          .terminal-line, .terminal-cursor { word-break: break-word; }
        }
        @media (prefers-reduced-motion: reduce) { .terminal-cursor { animation: none !important; } }
      `}</style>
    </div>
  );
}