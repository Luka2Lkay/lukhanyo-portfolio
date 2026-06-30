import { useEffect, useState } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setScrolled(window.screenY > 20);

      if (currentScrollY < 80) {
        setShowNavbar(true);
        lastScrollY = currentScrollY;
        return;
      }

      if (Math.abs(currentScrollY - lastScrollY) < 10) return;

      if (currentScrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      animate={{
        y: showNavbar ? 0 : "-100%",
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
      className={`fixed top-0 left-0 w-full z-50 ${
        scrolled ? "bg-slate-900/80 backdrop-blur-md shadow-lg" : "bg-slate-900"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#home" className="text-2xl font-bold text-white tracking-wide">
          Lukhanyo<span className="text-cyan-400">.</span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                className="relative text-gray-300 hover:text-cyan-400 transition-colors group"
              >
                {item.name}

                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}

          <button className="text-gray-300 hover:text-yellow-400 transition">
            <Moon size={20} />
          </button>
        </ul>

        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-slate-900 h-screen "
          >
            <ul className="flex flex-col items-center justify-center h-full gap-8 text-xl">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-white hover:text-cyan-400 transition"
                  >
                    {item.name}
                  </a>
                </li>
              ))}

              <button className="text-white hover:text-yellow-400">
                <Sun size={20} />
              </button>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Navbar;
