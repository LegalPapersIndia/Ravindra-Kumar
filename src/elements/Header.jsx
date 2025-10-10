import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../assets/logo.png'; // Ensure the logo path is correct

const Header = () => {
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Contacts', path: '/contact' },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 w-full z-50 bg-gradient-to-r from-teal-700/95 to-blue-600/95 backdrop-blur-md transition-all duration-500 ease-in-out shadow-lg hover:shadow-2xl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo/Brand (Left Section) */}
          <div className="flex items-center space-x-4">
            <Link to="/" onClick={closeMenu}>
              <img
                src={logo}
                alt="RAVINDRA KUMAR Logo"
                className="h-12 w-auto transition-all duration-300 ease-in-out hover:scale-110 hover:brightness-110 animate-pulse-slow"
              />
            </Link>
            <span className="hidden md:inline text-2xl font-serif font-extrabold text-white tracking-tight transition-transform duration-300 hover:scale-105">
              RAVINDRA KUMAR
            </span>
          </div>

          {/* Desktop Navigation (Center Section) */}
          <nav className="hidden md:flex space-x-12 items-center font-medium">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `relative group text-lg tracking-wide transition-all duration-300 ease-in-out 
                  ${
                    isActive
                      ? 'text-teal-300 font-semibold'
                      : 'text-white hover:text-teal-300'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.name}
                    <span
                      className={`absolute -bottom-1 left-0 h-0.5 bg-teal-300 transform transition-all duration-300 ease-in-out
                        ${isActive ? 'w-full scale-x-100' : 'w-0 group-hover:w-full group-hover:scale-x-100'}`}
                      aria-hidden="true"
                    ></span>
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Utility/Search Icon (Right Section) */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              className="p-2 rounded-full text-white transition-all duration-300 ease-in-out hover:text-teal-300 hover:bg-teal-600/20 hover:scale-110 focus:outline-none"
              aria-label="Search"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2 rounded-lg hover:bg-teal-600/20 transition-all duration-200 hover:scale-105 focus:outline-none"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-16 md:top-20 left-0 w-full bg-gradient-to-br from-teal-700/95 to-blue-600/95 backdrop-blur-md shadow-2xl border-t border-teal-300/50 transition-all duration-500 ease-in-out animate-slide-down">
          <div className="flex flex-col items-start py-4">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `text-white font-medium text-lg w-full px-6 py-3 transition-all duration-200 ease-in-out border-l-4
                  ${
                    isActive
                      ? 'text-teal-300 font-semibold bg-teal-800/30 border-teal-300'
                      : 'hover:bg-teal-800/30 border-transparent hover:border-teal-300 hover:translate-x-1'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;