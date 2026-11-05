import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'HOME', path: '/' },
    { label: 'ABOUT', path: '/about' },
    { label: 'WORK', path: '/work' },
    { label: 'CONTACT', path: '/contact' },
  ];

  return (
    <header
      className="fixed left-0 right-0 top-0 z-50 bg-transparent py-3"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-center px-6 md:px-12">
        <nav aria-label="Main navigation" className="hidden items-center space-x-1 rounded-full border border-white/70 bg-white/80 px-3 py-1.5 shadow-[0_8px_30px_rgba(17,17,17,0.08)] backdrop-blur-xl lg:flex">
          {navItems.map((item) => (
            <React.Fragment key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `relative isolate rounded-full px-4 py-2 text-xs font-accent tracking-[0.16em] transition-colors duration-300 ${
                    isActive ? 'font-semibold text-[#D41514]' : 'text-[#111111]/75 hover:text-[#D41514]'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {isActive && (
                      <motion.span
                        layoutId="navbar-active-pill"
                        className="absolute inset-0 -z-10 rounded-full bg-[#FCE8E8]"
                        transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                      />
                    )}
                    {isActive && (
                      <motion.span
                        layoutId="navbar-tubelight"
                        className="absolute -top-[7px] left-[calc(50%-1rem)] h-1 w-8 rounded-full bg-[#D41514] shadow-[0_0_8px_2px_rgba(212,21,20,0.35)]"
                        transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                      />
                    )}
                    <span className="relative z-10">{item.label}</span>
                  </>
                )}
              </NavLink>
            </React.Fragment>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="absolute right-6 top-2 p-2 text-[#111111] transition-colors hover:text-[#D41514] focus:outline-none lg:hidden"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-[#FFFFFF]/98 border-b border-[#E8E8EA] px-6 py-6 flex flex-col space-y-3 backdrop-blur-xl shadow-xl animate-in slide-in-from-top-3 duration-250">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `text-left text-sm font-accent tracking-[0.2em] py-2 border-b border-[#E8E8EA] flex items-center justify-between ${
                  isActive ? 'text-[#D41514] font-bold' : 'text-[#111111] hover:text-[#D41514]'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span>{item.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-[#D41514]"></span>}
                </>
              )}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
};
