const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About Me" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills & Expertise" },
  { href: "#contact", label: "Contact" },
];

const MainNav = () => (
  <header className="main-header sticky top-0 z-40 bg-dgrees-bg/80 backdrop-blur border-b border-dgrees-muted transition font-sans">
    <nav className="w-full flex flex-wrap justify-center items-center gap-2 sm:gap-6 px-2 py-3 bg-dgrees-bg text-dgrees-text text-base sm:text-lg font-medium border-b border-dgrees-muted/20 overflow-x-auto whitespace-nowrap">
      {navLinks.map(link => (
        <a
          key={link.href}
          href={link.href}
          className="px-2 py-1 rounded hover:bg-dgrees-muted/10 focus:outline-none focus:ring-2 focus:ring-dgrees-primary transition"
        >
          {link.label}
        </a>
      ))}
    </nav>
  </header>
);

export default MainNav;
