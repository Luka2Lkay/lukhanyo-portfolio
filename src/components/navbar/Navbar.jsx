import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [activeSection, setActiveSection] = useState("home");

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (currentScrollY) => {
    if (isOpen) return;

    setScrolled(currentScrollY > 20);

    const prevScrollY = scrollY.getPrevious() ?? 0;

    if (currentScrollY < 80) {
      setShowNavbar(true);
      return;
    }

    if (Math.abs(currentScrollY - prevScrollY) < 10) return;

    setShowNavbar(currentScrollY < prevScrollY);
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e) => {
        if (e.key === "Escape") setIsOpen(false);
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "unset";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      rootMargin: "-20% 0px -70% 0px",
    });

    navItems.forEach((item) => {
      const el = document.querySelector(item.href);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      animate={{ y: showNavbar || isOpen ? 0 : "-100%" }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${scrolled || isOpen
        ? "bg-slate-900/90 backdrop-blur-md shadow-lg border-b border-slate-800/60"
        : "bg-slate-900/40 backdrop-blur-sm"
        }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a
          href="#home"
          className="text-2xl font-bold text-white tracking-wide hover:opacity-90 transition-opacity"
        >
          Lukhanyo<span className="text-cyan-400">.</span>
        </a>

        <ul className="hidden md:flex items-center gap-7">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`relative text-sm font-medium transition-colors duration-200 group ${isActive ? "text-cyan-400" : "text-gray-300 hover:text-cyan-400"
                    }`}
                >
                  {item.name}
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] bg-cyan-400 transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-3 md:hidden">
          <button
            type="button"
            className="p-2 text-white hover:text-cyan-400 transition"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "calc(100dvh - 5rem)" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-slate-900/98 backdrop-blur-xl border-t border-slate-800 overflow-y-auto"
          >
            <ul className="flex flex-col items-center justify-center min-h-full py-12 gap-7 text-lg">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.slice(1);
                return (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`font-medium transition-colors duration-200 ${isActive ? "text-cyan-400 font-semibold" : "text-gray-200 hover:text-cyan-400"
                        }`}
                    >
                      {item.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Navbar;
