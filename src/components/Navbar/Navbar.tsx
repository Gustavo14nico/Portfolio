import { useEffect, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const links = [
  { id: "home", label: "Início"},
  { id: "about", label: "Sobre mim" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projetos" },
  { id: "contact", label: "Contato" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.4,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#04060d]/70 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">

        <a
          href="#home"
          className="font-mono text-xl font-bold tracking-tight text-white"
        >
          <span className="text-cyan-300">&lt;</span>Bync Studios<span className="text-cyan-300"> /&gt;</span>
        </a>

        {/* Desktop */}
        <ul className="hidden items-center gap-8 md:flex">

          {links.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`relative transition duration-300 ${
                  activeSection === link.id
                    ? "text-cyan-300"
                    : "text-slate-300 hover:text-cyan-300"
                }`}
              >
                {link.label}

                <span
                  className={`absolute -bottom-2 left-0 h-[2px] bg-gradient-to-r from-cyan-300 to-violet-400 transition-all duration-300 ${
                    activeSection === link.id ? "w-full" : "w-0"
                  }`}
                />
              </a>
            </li>
          ))}

        </ul>

        {/* Mobile */}
        <button
          className="text-white md:hidden"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX size={32} /> : <HiMenu size={32} />}
        </button>
      </nav>

      {/* Menu Mobile */}
      <div
        className={`overflow-hidden bg-[#04060d]/95 transition-all duration-300 md:hidden ${
          menuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        {links.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            onClick={() => setMenuOpen(false)}
            className={`block px-6 py-4 transition ${
              activeSection === link.id
                ? "bg-white/5 text-cyan-300"
                : "text-slate-300 hover:bg-white/5 hover:text-cyan-300"
            }`}
          >
            {link.label}
          </a>
        ))}
      </div>
    </header>
  );
}