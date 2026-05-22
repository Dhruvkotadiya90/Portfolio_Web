import { useEffect, useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("hero");

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

  const navItems = ["about", "projects", "skills", "contact"];

  return (
    <nav className="fixed top-0 left-0 w-full flex justify-center py-4 bg-black/30 backdrop-blur z-50">
      <div className="flex gap-6 text-white">
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
    </nav>
  );
}
