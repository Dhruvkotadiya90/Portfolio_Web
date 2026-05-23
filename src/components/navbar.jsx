import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));
  }, []);

  const navItems = ["home", "about", "projects", "internships", "contact"];

  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-6 py-4 bg-black/30 backdrop-blur z-50 text-white">
      
      {/* Logo */}
      <h1 className="text-xl font-bold">Portfolio | Dhruv</h1>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-10">
        {navItems.map((item) => (
          <a
            key={item}
            href={`#${item}`}
            className={`capitalize transition ${
              active === item ? "text-sky-400" : "text-white"
            }`}
          >
            {item}
          </a>
        ))}
      </div>

      {/* Hamburger Icon */}
      <div
        className="md:hidden text-2xl cursor-pointer"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-16 left-0 w-full bg-black/90 backdrop-blur flex flex-col items-center gap-6 py-6 transition-all duration-300 md:hidden ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        {navItems.map((item) => (
          <a
            key={item}
            href={`#${item}`}
            onClick={() => setMenuOpen(false)}
            className={`capitalize text-lg ${
              active === item ? "text-sky-400" : "text-white"
            }`}
          >
            {item}
          </a>
        ))}
      </div>
    </nav>
  );
}