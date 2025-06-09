"use client";
import { FaPython, FaJava, FaHtml5, FaCss3Alt, FaDatabase, FaLock, FaFigma, FaMicrosoft } from "react-icons/fa";
import { SiCplusplus, SiC, SiJavascript, SiMongodb, SiGit, SiLinux, SiCisco, SiWireshark, SiAdobecreativecloud } from "react-icons/si";
import { MdOutlineAnalytics } from "react-icons/md";

export default function SkillsExpertise() {
  return (
    <section id="skills" className="w-full max-w-2xl mx-auto py-12 bg-dgrees-bg text-dgrees-text rounded-xl shadow-lg dark:bg-white dark:text-black">
      <h2 className="text-3xl font-bold mb-4 text-dgrees-secondary dark:text-dgrees-primary">Skills &amp; Expertise</h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-6">
        <div className="flex flex-col items-center group">
          <FaPython className="text-4xl text-blue-400 group-hover:scale-110 transition dark:text-blue-700" title="Python" />
          <span className="mt-2 text-xs text-dgrees-muted dark:text-black/60">Python</span>
        </div>
        <div className="flex flex-col items-center group">
          <FaJava className="text-4xl text-orange-500 group-hover:scale-110 transition dark:text-orange-700" title="Java" />
          <span className="mt-2 text-xs text-dgrees-muted dark:text-black/60">Java</span>
        </div>
        <div className="flex flex-col items-center group">
          <SiC className="text-4xl text-blue-600 group-hover:scale-110 transition dark:text-blue-900" title="C" />
          <span className="mt-2 text-xs text-dgrees-muted dark:text-black/60">C</span>
        </div>
        <div className="flex flex-col items-center group">
          <SiCplusplus className="text-4xl text-blue-800 group-hover:scale-110 transition dark:text-blue-900" title="C++" />
          <span className="mt-2 text-xs text-dgrees-muted dark:text-black/60">C++</span>
        </div>
        {/* MATLAB icon not available in react-icons, so use text */}
        <div className="flex flex-col items-center group">
          <span className="text-4xl text-yellow-700 font-bold group-hover:scale-110 transition dark:text-yellow-900" title="MATLAB">M</span>
          <span className="mt-2 text-xs text-dgrees-muted dark:text-black/60">MATLAB</span>
        </div>
        <div className="flex flex-col items-center group">
          <FaHtml5 className="text-4xl text-orange-600 group-hover:scale-110 transition dark:text-orange-800" title="HTML5" />
          <span className="mt-2 text-xs text-dgrees-muted dark:text-black/60">HTML5</span>
        </div>
        <div className="flex flex-col items-center group">
          <FaCss3Alt className="text-4xl text-blue-500 group-hover:scale-110 transition dark:text-blue-700" title="CSS3" />
          <span className="mt-2 text-xs text-dgrees-muted dark:text-black/60">CSS3</span>
        </div>
        <div className="flex flex-col items-center group">
          <SiJavascript className="text-4xl text-yellow-400 group-hover:scale-110 transition dark:text-yellow-700" title="JavaScript" />
          <span className="mt-2 text-xs text-dgrees-muted dark:text-black/60">JavaScript</span>
        </div>
        <div className="flex flex-col items-center group">
          <FaDatabase className="text-4xl text-green-700 group-hover:scale-110 transition dark:text-green-900" title="SQL" />
          <span className="mt-2 text-xs text-dgrees-muted dark:text-black/60">SQL</span>
        </div>
        <div className="flex flex-col items-center group">
          <SiMongodb className="text-4xl text-green-500 group-hover:scale-110 transition dark:text-green-700" title="MongoDB" />
          <span className="mt-2 text-xs text-dgrees-muted dark:text-black/60">MongoDB</span>
        </div>
        <div className="flex flex-col items-center group">
          <FaLock className="text-4xl text-gray-600 group-hover:scale-110 transition dark:text-gray-800" title="Cybersecurity" />
          <span className="mt-2 text-xs text-dgrees-muted dark:text-black/60">Cybersecurity</span>
        </div>
        <div className="flex flex-col items-center group">
          <SiGit className="text-4xl text-orange-700 group-hover:scale-110 transition dark:text-orange-900" title="Git" />
          <span className="mt-2 text-xs text-dgrees-muted dark:text-black/60">Git</span>
        </div>
        <div className="flex flex-col items-center group">
          <SiLinux className="text-4xl text-black dark:text-gray-200 group-hover:scale-110 transition dark:text-black" title="Linux" />
          <span className="mt-2 text-xs text-dgrees-muted dark:text-black/60">Linux</span>
        </div>
        <div className="flex flex-col items-center group">
          <SiCisco className="text-4xl text-blue-500 group-hover:scale-110 transition dark:text-blue-700" title="Cisco Packet Tracer" />
          <span className="mt-2 text-xs text-dgrees-muted dark:text-black/60">Cisco Packet Tracer</span>
        </div>
        <div className="flex flex-col items-center group">
          <MdOutlineAnalytics className="text-4xl text-cyan-700 group-hover:scale-110 transition dark:text-cyan-900" title="Path Analyzer" />
          <span className="mt-2 text-xs text-dgrees-muted dark:text-black/60">Path Analyzer</span>
        </div>
        <div className="flex flex-col items-center group">
          <SiWireshark className="text-4xl text-blue-400 group-hover:scale-110 transition dark:text-blue-700" title="Wireshark" />
          <span className="mt-2 text-xs text-dgrees-muted dark:text-black/60">Wireshark</span>
        </div>
        {/* Nessus icon not available in react-icons, so use text */}
        <div className="flex flex-col items-center group">
          <span className="text-4xl text-green-700 font-bold group-hover:scale-110 transition dark:text-green-900" title="Nessus">N</span>
          <span className="mt-2 text-xs text-dgrees-muted dark:text-black/60">Nessus</span>
        </div>
        <div className="flex flex-col items-center group">
          <FaFigma className="text-4xl text-purple-500 group-hover:scale-110 transition dark:text-purple-700" title="Figma" />
          <span className="mt-2 text-xs text-dgrees-muted dark:text-black/60">Figma</span>
        </div>
        <div className="flex flex-col items-center group">
          <FaMicrosoft className="text-4xl text-blue-700 group-hover:scale-110 transition dark:text-blue-900" title="MS Office" />
          <span className="mt-2 text-xs text-dgrees-muted dark:text-black/60">MS Office</span>
        </div>
        <div className="flex flex-col items-center group">
          <SiAdobecreativecloud className="text-4xl text-red-600 group-hover:scale-110 transition dark:text-red-800" title="Adobe Suite" />
          <span className="mt-2 text-xs text-dgrees-muted dark:text-black/60">Adobe Suite</span>
        </div>
      </div>
    </section>
  );
}