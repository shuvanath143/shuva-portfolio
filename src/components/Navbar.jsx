import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useActiveSection } from '../hooks/useActiveSection';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const activeSection = useActiveSection();

  const navItems = [
    { name: 'HOME', href: '#home' },
    { name: 'ABOUT', href: '#about' },
    { name: 'EDUCATION', href: '#education' },
    { name: 'WORK', href: '#work' },
    { name: 'CONTACT', href: '#contact' },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-center pt-0">
        <motion.div 
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-surface-dark/80 dark:bg-black/40 backdrop-blur-md border-b border-white/10 dark:border-white/5 nav-clip px-12 py-4 shadow-lg hidden md:block"
        >
          <ul className="flex space-x-12 text-sm font-medium tracking-wide">
            {navItems.map((item) => (
              <li key={item.name}>
                <button
                  onClick={() => scrollToSection(item.href)}
                  className={`hover:text-primary transition-colors ${
                    activeSection === item.href.slice(1) 
                      ? 'text-primary' 
                      : 'text-gray-300'
                  }`}
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="md:hidden absolute top-4 right-4 z-50"
        >
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-white bg-primary/20 rounded-lg backdrop-blur-sm border border-white/10"
          >
            <span className="material-icons-round">
              {isMobileMenuOpen ? 'close' : 'menu'}
            </span>
          </motion.button>
        </motion.div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-16 right-4 z-40 md:hidden"
          >
            <div className="glass-card rounded-xl p-6 border border-white/10 shadow-2xl">
              <ul className="space-y-4">
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <button
                      onClick={() => scrollToSection(item.href)}
                      className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
                        activeSection === item.href.slice(1)
                          ? 'text-primary bg-primary/10'
                          : 'text-gray-300 hover:text-primary hover:bg-white/5'
                      }`}
                    >
                      {item.name}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;