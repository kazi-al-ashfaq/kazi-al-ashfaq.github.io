import { FaPython, FaJava, FaHtml5, FaCss3Alt, FaDatabase, FaLock, FaFigma, FaMicrosoft } from "react-icons/fa";
import { SiCplusplus, SiC, SiGit, SiLinux, SiCisco, SiWireshark, SiAdobecreativecloud } from "react-icons/si";
import { MdOutlineAnalytics } from "react-icons/md";

export default function SkillsExpertise() {
  return (
    <section
      id="skills"
      className="w-full max-w-2xl mx-auto py-10 px-4 bg-dgrees-bg text-dgrees-text rounded-xl shadow-lg"
      aria-labelledby="skills-heading"
    >
      <h2 className="text-3xl font-bold mb-8 text-dgrees-secondary">Skills &amp; Expertise</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="flex flex-col items-center">
          <FaPython className="text-4xl text-blue-400 mb-2" title="Python" />
          <div className="w-full bg-dgrees-muted h-2 rounded-full mb-1">
            <div className="h-full bg-dgrees-primary rounded-full animate-bar" style={{ width: '85%' }} />
          </div>
          <span className="text-xs text-dgrees-muted">Python</span>
        </div>
        <div className="flex flex-col items-center">
          <FaJava className="text-4xl text-orange-500 mb-2" title="Java" />
          <div className="w-full bg-dgrees-muted h-2 rounded-full mb-1">
            <div className="h-full bg-dgrees-primary rounded-full animate-bar" style={{ width: '75%' }} />
          </div>
          <span className="text-xs text-dgrees-muted">Java</span>
        </div>
        <div className="flex flex-col items-center">
          <SiC className="text-4xl text-blue-600 mb-2" title="C" />
          <div className="w-full bg-dgrees-muted h-2 rounded-full mb-1">
            <div className="h-full bg-dgrees-secondary rounded-full animate-bar" style={{ width: '80%' }} />
          </div>
          <span className="text-xs text-dgrees-muted">C</span>
        </div>
        <div className="flex flex-col items-center">
          <SiCplusplus className="text-4xl text-blue-800 mb-2" title="C++" />
          <div className="w-full bg-dgrees-muted h-2 rounded-full mb-1">
            <div className="h-full bg-dgrees-secondary rounded-full animate-bar" style={{ width: '70%' }} />
          </div>
          <span className="text-xs text-dgrees-muted">C++</span>
        </div>
        <div className="flex flex-col items-center">
          <FaHtml5 className="text-4xl text-orange-600 mb-2" title="HTML5" />
          <div className="w-full bg-dgrees-muted h-2 rounded-full mb-1">
            <div className="h-full bg-dgrees-primary rounded-full animate-bar" style={{ width: '90%' }} />
          </div>
          <span className="text-xs text-dgrees-muted">HTML5</span>
        </div>
        <div className="flex flex-col items-center">
          <FaCss3Alt className="text-4xl text-blue-500 mb-2" title="CSS3" />
          <div className="w-full bg-dgrees-muted h-2 rounded-full mb-1">
            <div className="h-full bg-dgrees-primary rounded-full animate-bar" style={{ width: '80%' }} />
          </div>
          <span className="text-xs text-dgrees-muted">CSS3</span>
        </div>
        <div className="flex flex-col items-center">
          <FaDatabase className="text-4xl text-green-700 mb-2" title="SQL" />
          <div className="w-full bg-dgrees-muted h-2 rounded-full mb-1">
            <div className="h-full bg-dgrees-primary rounded-full animate-bar" style={{ width: '75%' }} />
          </div>
          <span className="text-xs text-dgrees-muted">SQL</span>
        </div>
        <div className="flex flex-col items-center">
          <FaLock className="text-4xl text-gray-600 mb-2" title="Cybersecurity" />
          <div className="w-full bg-dgrees-muted h-2 rounded-full mb-1">
            <div className="h-full bg-dgrees-primary rounded-full animate-bar" style={{ width: '80%' }} />
          </div>
          <span className="text-xs text-dgrees-muted">Cybersecurity</span>
        </div>
        <div className="flex flex-col items-center">
          <SiGit className="text-4xl text-orange-700 mb-2" title="Git" />
          <div className="w-full bg-dgrees-muted h-2 rounded-full mb-1">
            <div className="h-full bg-dgrees-primary rounded-full animate-bar" style={{ width: '90%' }} />
          </div>
          <span className="text-xs text-dgrees-muted">Git</span>
        </div>
        <div className="flex flex-col items-center">
          <SiLinux className="text-4xl text-black mb-2" title="Linux" />
          <div className="w-full bg-dgrees-muted h-2 rounded-full mb-1">
            <div className="h-full bg-dgrees-primary rounded-full animate-bar" style={{ width: '70%' }} />
          </div>
          <span className="text-xs text-dgrees-muted">Linux</span>
        </div>
        <div className="flex flex-col items-center">
          <SiCisco className="text-4xl text-blue-500 mb-2" title="Cisco Packet Tracer" />
          <div className="w-full bg-dgrees-muted h-2 rounded-full mb-1">
            <div className="h-full bg-dgrees-primary rounded-full animate-bar" style={{ width: '65%' }} />
          </div>
          <span className="text-xs text-dgrees-muted">Cisco Packet Tracer</span>
        </div>
        <div className="flex flex-col items-center">
          <MdOutlineAnalytics className="text-4xl text-cyan-700 mb-2" title="Path Analyzer" />
          <div className="w-full bg-dgrees-muted h-2 rounded-full mb-1">
            <div className="h-full bg-dgrees-primary rounded-full animate-bar" style={{ width: '60%' }} />
          </div>
          <span className="text-xs text-dgrees-muted">Path Analyzer</span>
        </div>
        <div className="flex flex-col items-center">
          <SiWireshark className="text-4xl text-blue-400 mb-2" title="Wireshark" />
          <div className="w-full bg-dgrees-muted h-2 rounded-full mb-1">
            <div className="h-full bg-dgrees-primary rounded-full animate-bar" style={{ width: '75%' }} />
          </div>
          <span className="text-xs text-dgrees-muted">Wireshark</span>
        </div>
        {/* Nessus icon not available in react-icons, so use text */}
        <div className="flex flex-col items-center">
          <span className="text-4xl text-green-700 font-bold group-hover:scale-110 transition" title="Nessus">N</span>
          <span className="mt-2 text-xs text-dgrees-muted">Nessus</span>
        </div>
        <div className="flex flex-col items-center">
          <FaFigma className="text-4xl text-purple-500 mb-2" title="Figma" />
          <div className="w-full bg-dgrees-muted h-2 rounded-full mb-1">
            <div className="h-full bg-dgrees-primary rounded-full animate-bar" style={{ width: '80%' }} />
          </div>
          <span className="text-xs text-dgrees-muted">Figma</span>
        </div>
        <div className="flex flex-col items-center">
          <FaMicrosoft className="text-4xl text-blue-700 mb-2" title="MS Office" />
          <div className="w-full bg-dgrees-muted h-2 rounded-full mb-1">
            <div className="h-full bg-dgrees-primary rounded-full animate-bar" style={{ width: '85%' }} />
          </div>
          <span className="text-xs text-dgrees-muted">MS Office</span>
        </div>
        <div className="flex flex-col items-center">
          <SiAdobecreativecloud className="text-4xl text-red-600 mb-2" title="Adobe Suite" />
          <div className="w-full bg-dgrees-muted h-2 rounded-full mb-1">
            <div className="h-full bg-dgrees-primary rounded-full animate-bar" style={{ width: '75%' }} />
          </div>
          <span className="text-xs text-dgrees-muted">Adobe Suite</span>
        </div>
      </div>
      <style>{`
        @keyframes bar {
          0% { width: 0; }
          100% { width: var(--bar-width, 100%); }
        }
        .animate-bar {
          animation: bar 1.2s cubic-bezier(.4,0,.2,1) 1;
        }
      `}</style>
    </section>
  );
}