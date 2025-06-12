"use client";
import React, { useState, useRef, useEffect, FormEvent, ChangeEvent } from "react";

const COMMANDS = {
  whoami: "Kazi Al Ashfaq — Cybersecurity Enthusiast & Educator.",
  "show skills": [
    "Python, Java, C, C++, HTML5, CSS3, SQL, Cybersecurity, Git, Linux, Cisco Packet Tracer, Path Analyzer, Wireshark, Nessus, Figma, MS Office, Adobe Suite."
  ],
  "unlock experience": [
    "Senior Lecturer (Cyber Security) — World University of Bangladesh (Sep 2023 – Present)",
    "Site Inspector — MRT Line 6 (Oct 2022 – May 2023)",
    "IT Support Specialist (Jan 2021)",
    "Cyber Security Analyst Intern (Nov 2020 – Dec 2020)",
    "Cybersecurity Intern (Sep 2020 – Nov 2020)",
    "Networking Intern (Jul 2020 – Sep 2020)",
    "Freelance Research Assistant (Jan 2020 – Jun 2020)",
    "Web Developer (Jul 2018 – Jan 2019)",
    "Front End Developer (Apr 2015 – Jan 2016)",
    "Trainer (Mar 2014 – Mar 2015)",
    "Freelance Web Developer (Mar 2013 – Dec 2013)"
  ],
  "ping goals": [
    "Pinging goals...",
    "Reply from 127.0.0.1: Passion for cybersecurity, continuous learning, and empowering others through education."
  ],
  "sudo hire kazi": [
    "Access granted. Download my resume:",
    '<a href="/Kazi_Al_Ashfaq_Resume.pdf" class="underline text-dgrees-primary" download>Download Resume (PDF)</a>'
  ],
  help: [
    "Available commands:",
    "whoami, show skills, unlock experience, ping goals, sudo hire kazi, help, clear"
  ],
  clear: []
};

const ERROR_RESPONSES = [
  "Access Denied: Command not recognized.",
  "System Error: Invalid input.",
  "Permission Denied.",
  "Unknown command. Type 'help' for a list of commands."
];

function getRandomError() {
  return ERROR_RESPONSES[Math.floor(Math.random() * ERROR_RESPONSES.length)];
}

export default function TerminalGame() {
  const [history, setHistory] = useState<{ cmd: string; out: string[] }[]>([]);
  const [input, setInput] = useState("");
  const [isFocusing, setIsFocusing] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const logRef = useRef<HTMLDivElement>(null);

  // Load history from localStorage on client only
  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("cyber_terminal_history");
      if (stored) setHistory(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("cyber_terminal_history", JSON.stringify(history));
    }
    if (logRef.current) {
      logRef.current.scrollTop = logRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (cmd: string) => {
    const command = cmd.trim().toLowerCase();
    if (command === "clear") {
      setHistory([]);
      return;
    }
    if (COMMANDS[command as keyof typeof COMMANDS]) {
      setHistory((h: { cmd: string; out: string[] }[]) => [
        ...h,
        { cmd, out: COMMANDS[command as keyof typeof COMMANDS] as string[] }
      ]);
    } else {
      setHistory((h: { cmd: string; out: string[] }[]) => [
        ...h,
        { cmd, out: [getRandomError()] }
      ]);
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim()) return;
    handleCommand(input);
    setInput("");
  };

  // Keyboard focus for accessibility
  useEffect(() => {
    if (isFocusing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isFocusing]);

  return (
    <section id="cyber-game" className="w-full max-w-2xl mx-auto my-12 py-8 px-4 rounded-xl shadow-lg bg-[#1B1F27] text-[#00C0E0] font-mono">
      <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-2 select-none">
        Hack This Terminal to Learn About Me
      </h2>
      <div
        ref={logRef}
        className="h-64 md:h-80 overflow-y-auto bg-[#181B22] rounded-lg p-4 mb-2 text-base md:text-lg border border-[#222]"
        style={{ fontFamily: 'Courier New, monospace' }}
        tabIndex={0}
        onClick={() => setIsFocusing(true)}
        aria-label="Terminal output"
      >
        {history.length === 0 && (
          <div className="text-dgrees-muted">Type <span className="text-dgrees-primary">help</span> to get started.</div>
        )}
        {history.map((entry: { cmd: string; out: string[] }, idx: number) => (
          <div key={idx} className="mb-2">
            <div className="flex"><span className="text-dgrees-primary">&gt;</span>&nbsp;{entry.cmd}</div>
            {Array.isArray(entry.out)
              ? entry.out.map((line: string, i: number) => (
                  <div key={i} dangerouslySetInnerHTML={{ __html: line }} />
                ))
              : <div>{entry.out}</div>}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="flex items-center gap-2 mt-2">
        <span className="text-dgrees-primary text-lg flex items-center">&gt;{!isFocusing && input.length === 0 && <span className="animate-blink ml-1">█</span>}</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setInput(e.target.value)}
          className="flex-1 bg-transparent border-none outline-none text-[#00C0E0] placeholder-dgrees-muted text-base md:text-lg animate-cursor"
          style={{ fontFamily: 'Courier New, monospace', caretColor: '#00C0E0' }}
          autoComplete="off"
          spellCheck={false}
          aria-label="Terminal command input"
          onFocus={() => setIsFocusing(true)}
          onBlur={() => setIsFocusing(false)}
        />
      </form>
      <style>{`
        .animate-blink {
          animation: blink 1s steps(1) infinite;
        }
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        .animate-cursor:focus {
          outline: none;
        }
      `}</style>
    </section>
  );
}
