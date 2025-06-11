const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About Me" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills & Expertise" },
  { href: "#contact", label: "Contact" },
];

const MainNav = () => (
  <header className="main-header sticky top-0 z-40 bg-dgrees-bg/80 backdrop-blur border-b border-dgrees-muted transition font-sans">
    <nav className="nav-list-container container mx-auto px-4 py-2 flex justify-center">
      <ul className="nav-list flex gap-6">
        {navLinks.map(link => (
          <li key={link.href}>
            <a href={link.href} className="text-dgrees-text font-medium hover:text-dgrees-primary transition">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  </header>
);

export default MainNav;
