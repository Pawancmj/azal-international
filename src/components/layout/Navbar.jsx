import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useGlobalState } from "../context/GlobalStateContext";
import logo from "../../assets/azal-logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSectorsOpen, setIsSectorsOpen] = useState(false);
  const { darkMode, toggleDarkMode } = useGlobalState();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsSectorsOpen(false);
  }, [location]);

  const isActivePage = (path) => {
    return location.pathname === path;
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    {
      name: "Collections",
      path: "/collections",
      hasSubmenu: true,
      submenuKey: "collections",
    },
    { name: "Projects", path: "/projects" },
    { name: "Sectors", path: "/sectors", hasSubmenu: true, submenuKey: "sectors" },
    { name: "Customization", path: "/customization" },
    { name: "Contact", path: "/contact" },
  ];

  const sectorsSubmenu = [
    { name: "Hospitality", path: "/sectors/hospitality" },
    { name: "Residential", path: "/sectors/residential" },
    { name: "Commercial", path: "/sectors/commercial" },
    { name: "Exhibition", path: "/sectors/exhibition" },
    { name: "Retail", path: "/sectors/retail" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${isScrolled
        ? "bg-white dark:bg-slate-900 shadow-lg border-slate-200 dark:border-gold-500/10"
        : "bg-white dark:bg-slate-900 shadow-md border-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="Azal Logo"
              className="h-16 w-16 object-cover rounded-full border border-slate-200 dark:border-slate-800 dark:brightness-90"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <div key={link.path} className="relative group">
                <Link
                  to={link.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all animate-fade-in-up ${isActivePage(link.path)
                    ? "text-gold-600 bg-gold-50 dark:bg-gold-900/30 dark:text-gold-400 font-semibold"
                    : "text-gray-700 dark:text-gray-300 hover:text-gold-600 dark:hover:text-gold-400 hover:bg-gray-50 dark:hover:bg-gray-800"
                    }`}
                  onMouseEnter={() => {
                    if (link.submenuKey === "sectors") setIsSectorsOpen(true);
                  }}
                  onMouseLeave={() => {
                    if (link.submenuKey === "sectors") setIsSectorsOpen(false);
                  }}
                >
                  {link.name}
                </Link>

                {/* Sectors Mega Menu */}
                {link.submenuKey === "sectors" && (
                  <div
                    className={`absolute left-0 mt-1 w-48 bg-white dark:bg-slate-800 rounded-lg shadow-lg py-2 transition-all duration-200 ${isSectorsOpen
                      ? "opacity-100 visible"
                      : "opacity-0 invisible"
                      }`}
                    onMouseEnter={() => setIsSectorsOpen(true)}
                    onMouseLeave={() => setIsSectorsOpen(false)}
                  >
                    {sectorsSubmenu.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className="block px-4 py-2 text-sm text-gray-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 hover:text-gold-600 dark:hover:text-gold-400"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Dark Mode Toggle - Desktop */}
            <button
              onClick={toggleDarkMode}
              className="ml-4 p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus:outline-none"
              title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {darkMode ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 9H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
          </div>

          <div className="flex items-center space-x-2 lg:hidden">
            {/* Dark Mode Toggle - Mobile */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus:outline-none"
            >
              {darkMode ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 9H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-gold-600 dark:hover:text-gold-400 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${isMobileMenuOpen
          ? "max-h-screen opacity-100 border-t dark:border-gray-800"
          : "max-h-0 opacity-0"
          }`}
      >
        <div className="px-4 pt-2 pb-4 space-y-1 bg-white dark:bg-slate-950 border-t dark:border-slate-800">
          {navLinks.map((link) => (
            <div key={link.path}>
              <Link
                to={link.path}
                className={`block px-3 py-2 rounded-md text-base font-medium ${isActivePage(link.path)
                  ? "text-gold-600 bg-gold-50 dark:bg-gold-900/30 dark:text-gold-400 font-semibold"
                  : "text-gray-700 dark:text-gray-300 hover:text-gold-600 dark:hover:text-gold-400 hover:bg-gray-50 dark:hover:bg-gray-800"
                  }`}
                onClick={(e) => {
                  if (link.hasSubmenu && link.submenuKey === "sectors") {
                    e.preventDefault();
                    setIsSectorsOpen(!isSectorsOpen);
                  }
                }}
              >
                <div className="flex items-center justify-between">
                  <span>{link.name}</span>
                  {link.submenuKey === "sectors" && (
                    <svg
                      className={`w-5 h-5 transition-transform ${isSectorsOpen ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </div>
              </Link>

              {link.submenuKey === "sectors" && isSectorsOpen && (
                <div className="ml-4 mt-1 space-y-1">
                  {sectorsSubmenu.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="block px-3 py-2 rounded-md text-sm text-gray-600 dark:text-gray-400 hover:text-gold-600 dark:hover:text-gold-400 hover:bg-gray-50 dark:hover:bg-gray-800"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
