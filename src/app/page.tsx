import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Experience from "@/components/Experience";
import SkillsExpertise from "@/components/SkillsExpertise";
import Contact from "@/components/Contact";
import TerminalGame from "@/components/TerminalGame";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Hero />
        <AboutMe />
        <Experience />
        <SkillsExpertise />
        <TerminalGame />
        <Contact />
      </main>
    </div>
  );
}
