import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = ['Home', 'Analytics', 'Workouts', 'Nutrition', 'Community', 'Profile'];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-purple-800 to-indigo-900 text-white p-4 shadow-lg fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-extrabold tracking-wide uppercase">
          GymTurn 
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-lg font-medium">
          {navItems.map(item => (
            <li key={item} className="hover:text-yellow-400 transition-colors duration-300 cursor-pointer">
              {item}
            </li>
          ))}
        </ul>

        {/* Mobile Burger Icon */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(prev => !prev)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col md:hidden mt-2 bg-indigo-800 rounded-b-xl overflow-hidden"
          >
            {navItems.map(item => (
              <li
                key={item}
                className="px-6 py-3 border-b border-indigo-700 hover:bg-purple-700 text-lg tracking-wide"
              >
                {item}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
