import { AnimatePresence, motion } from "framer-motion";
import { Leaf, Menu, X } from "lucide-react"; // Make sure to install: npm install lucide-react
import { useEffect, useState } from "react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Details", href: "#details" },
  { name: "Poster", href: "#poster" },
  { name: "Demo", href: "#demo" },
  { name: "Team", href: "#team" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Scroll active state logic
  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((link) => link.href.substring(1));
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 200 && rect.bottom >= 200;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur-xl border-b border-white/5 shadow-lg"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* --- LOGO --- */}
          <a
            href="#home"
            className="flex items-center gap-2 text-eco-green font-bold text-2xl cursor-pointer hover:drop-shadow-[0_0_10px_rgba(16,185,129,0.5)] transition-all"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <Leaf className="w-8 h-8" />
            <span className="tracking-tight text-white">
              Eco-<span className="text-eco-green">Silo</span>
            </span>
          </a>

          {/* --- DESKTOP MENU (Hidden on Mobile) --- */}
          <div className="hidden md:flex items-center gap-1 bg-black/40 p-1.5 rounded-full border border-white/10 shadow-inner">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setActiveSection(link.href.substring(1))}
                  className={`relative px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 z-10 ${
                    isActive ? "text-white" : "text-gray-400 hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activePill"
                      className="absolute inset-0 bg-eco-green/20 border border-eco-green/30 rounded-full -z-10 shadow-[0_0_15px_rgba(16,185,129,0.2)]"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}
                  {link.name}
                </a>
              );
            })}
          </div>

          {/* --- DESKTOP ACTION BUTTON --- */}
          <div className="hidden md:block">
            <a
              href="#report"
              className="bg-linear-to-r from-eco-green to-teal-500 text-black px-6 py-2.5 rounded-full font-bold text-sm shadow-lg shadow-eco-green/20 hover:shadow-eco-green/40 hover:scale-105 transition-all duration-300 border border-white/20"
            >
              View Report
            </a>
          </div>

          {/* --- MOBILE HAMBURGER BUTTON (Visible only on Mobile) --- */}
          <button
            className="md:hidden text-gray-300 hover:text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </motion.nav>

      {/* --- MOBILE MENU DROPDOWN --- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-18 left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/10 z-40 md:hidden shadow-2xl"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => {
                    setActiveSection(link.href.substring(1));
                    setIsMobileMenuOpen(false);
                  }}
                  className={`text-lg font-medium py-3 border-b border-white/5 transition-colors ${
                    activeSection === link.href.substring(1)
                      ? "text-eco-green border-eco-green/30"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {link.name}
                </a>
              ))}

              <a
                href="#report"
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-linear-to-r from-eco-green to-teal-500 text-black text-center py-3.5 rounded-xl font-bold mt-4 shadow-lg shadow-eco-green/10"
              >
                View Report
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
