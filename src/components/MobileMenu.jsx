import { useEffect } from "react";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  // prevent background scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [menuOpen]);

  const links = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    {href : "#services", label: "Services"},
    { href: "#projects", label: "Projects" },
    { href: "#certificates", label: "Certificates" },
    { href: "#resume", label: "Resume" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <div
      className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.9)] z-40 flex flex-col items-center justify-center
      transition-all duration-300 ease-in-out
      ${menuOpen ? "h-screen opacity-100 pointer-events-auto" : "h-0 opacity-0 pointer-events-none"}
    `}
    >
      {/* Close button */}
      <button
        onClick={() => setMenuOpen(false)}
        style={{ transitionDelay: menuOpen ? "200ms" : "0ms" }} // thoda delay se aaye
        className={`absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer transform transition-all duration-500
          ${menuOpen ? "opacity-100 rotate-0" : "opacity-0 rotate-90"}
        `}
        aria-label="Close Menu"
      >
        &times;
      </button>

      {/* Links with stagger animation */}
      <nav role="navigation" className="flex flex-col items-center">
        {links.map((link, i) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            style={{ transitionDelay: `${i * 100}ms` }} // stagger effect
            className={`text-2xl font-semibold text-white my-4 transform transition-all duration-500
              ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
            `}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </div>
  );
};
